/**
 * claimResource.ts
 * Submits a name/email/resourceId claim to the Google Apps Script Web App,
 * which upserts one subscriber row per normalized email in the connected
 * Google Sheet (see free-stuff/google-apps-script/). Sent with a
 * text/plain content type so the browser treats it as a CORS-simple
 * request — Apps Script Web Apps do not implement doOptions, so a
 * preflighted request (e.g. application/json) would fail.
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

export async function claimResource(input: ClaimResourceInput): Promise<ClaimResourceResult> {
  if (!APPS_SCRIPT_URL) {
    throw new Error("VITE_APPS_SCRIPT_URL is not configured.");
  }

  const response = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error(`Apps Script request failed with status ${response.status}`);
  }

  return (await response.json()) as ClaimResourceResult;
}
