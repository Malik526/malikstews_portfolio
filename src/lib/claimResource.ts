/**
 * claimResource.ts
 * Submits a name/email/resourceId claim to the Google Apps Script Web App,
 * which upserts one subscriber row per normalized email in the connected
 * Google Sheet (see free-stuff/google-apps-script/). Sent with a
 * text/plain content type so the browser treats it as a CORS-simple
 * request — Apps Script Web Apps do not implement doOptions, so a
 * preflighted request (e.g. application/json) would fail.
 *
 * Apps Script Web Apps redirect every request to a one-time
 * script.googleusercontent.com content URL; that second hop is
 * observably flaky in production — intermittently 404ing, or taking well
 * over 10s, even though the underlying doPost() and Sheet write likely
 * still succeeded. A transport-level failure (bad HTTP status, network
 * error, unparseable body) is retried once, since retrying is safe: the
 * Apps Script side dedupes by normalized email, so a retried submission
 * never creates a duplicate row. A well-formed {ok:false} business
 * rejection from Apps Script (e.g. invalid email) is NOT retried — that's
 * a real rejection, not a transient infra failure.
 */

export interface ClaimResourceInput {
  name: string;
  email: string;
  resourceId: string;
}

export interface ClaimResourceResult {
  ok: boolean;
  status?: "created" | "existing";
  error?: string;
}

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;
const MAX_ATTEMPTS = 2;
const RETRY_DELAY_MS = 1200;

async function attemptClaim(input: ClaimResourceInput): Promise<ClaimResourceResult> {
  const response = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error(`Apps Script request failed with HTTP ${response.status}`);
  }

  let payload: ClaimResourceResult;
  try {
    payload = (await response.json()) as ClaimResourceResult;
  } catch (parseErr) {
    throw new Error(`Apps Script response could not be parsed as JSON: ${(parseErr as Error).message}`);
  }

  console.debug("claimResource: Apps Script payload", payload);
  return payload;
}

export async function claimResource(input: ClaimResourceInput): Promise<ClaimResourceResult> {
  if (!APPS_SCRIPT_URL) {
    throw new Error("VITE_APPS_SCRIPT_URL is not configured.");
  }

  let lastError: unknown;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      return await attemptClaim(input);
    } catch (err) {
      lastError = err;
      console.warn(`claimResource: attempt ${attempt}/${MAX_ATTEMPTS} failed (transport-level, not a claim rejection)`, err);
      if (attempt < MAX_ATTEMPTS) {
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
      }
    }
  }

  throw lastError;
}
