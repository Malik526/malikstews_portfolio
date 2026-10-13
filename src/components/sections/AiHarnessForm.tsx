/**
 * AiHarnessForm.tsx
 * Name + email capture for the AI Harness resource. On submission, claims the
 * resource via claimResource() (Google Apps Script Web App -> Google Sheet).
 * Only once that claim is confirmed does it show the success state with the
 * GitHub repository CTA (resource.accessUrl) — no file is downloaded; the
 * repository is the canonical distribution. A failed or unconfirmed claim
 * keeps the entered values and shows a retryable error instead.
 * A duplicate email is treated as success, not an error.
 * Props: none — content sourced from aiHarnessContent.ts.
 */

import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui";
import { aiHarnessForm } from "../../lib/aiHarnessContent";
import { getResource } from "../../lib/resources";
import { claimResource } from "../../lib/claimResource";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const resource = getResource("ai-harness");

type Status = "idle" | "submitting" | "success" | "error";

const AiHarnessForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [wasExisting, setWasExisting] = useState(false);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  // Move focus to the success heading so screen readers announce the swap
  // from form to access state.
  useEffect(() => {
    if (status === "success") {
      successHeadingRef.current?.focus();
    }
  }, [status]);

  // --- Handlers ---
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // The submit button only looks disabled while in flight; Enter in a field
    // can still submit, so guard against a duplicate request here.
    if (status === "submitting") {
      return;
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      setFieldError(aiHarnessForm.invalidNameError);
      return;
    }
    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setFieldError(aiHarnessForm.invalidEmailError);
      return;
    }

    setFieldError(null);
    setStatus("submitting");

    try {
      const result = await claimResource({ name: trimmedName, email: trimmedEmail, resourceId: resource.id });

      if (!result.ok) {
        // CLAIM FAILURE: Apps Script itself rejected the submission (e.g.
        // invalid email/resource) — a real rejection, not a transport issue.
        console.error("AI Harness claim rejected by Apps Script (CLAIM FAILURE):", result.error);
        setStatus("error");
        return;
      }

      // CLAIM SUCCESS — the Sheet write is confirmed, so the GitHub access
      // CTA can be revealed.
      setWasExisting(result.status === "existing");
      setStatus("success");
    } catch (err) {
      // Both claimResource attempts failed at the transport level (network
      // error, bad HTTP status, unparseable response) — we genuinely don't
      // know whether Apps Script's doPost() ran or the Sheet updated.
      console.error("AI Harness claim could not be confirmed (transport failure, not a rejection):", err);
      setStatus("error");
    }
  };

  // --- Render: success state ---
  if (status === "success") {
    return (
      <section className="px-margin-mobile md:px-margin-desktop py-8">
        <div className="max-w-max-width mx-auto">
          <div className="max-w-2xl bg-surface-container-low border border-outline-variant rounded-lg p-6 md:p-8">
            <h2
              ref={successHeadingRef}
              tabIndex={-1}
              className="font-headline-md text-headline-md text-primary mb-2 focus:outline-none"
            >
              {wasExisting ? aiHarnessForm.successHeadlineExisting : aiHarnessForm.successHeadlineNew}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-2">{aiHarnessForm.successBody}</p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">{aiHarnessForm.autobuildNote}</p>
            <Button
              label={aiHarnessForm.githubCtaLabel}
              href={resource.accessUrl}
              icon="arrow_outward"
              className="w-full md:w-auto justify-center text-center"
            />
          </div>
        </div>
      </section>
    );
  }

  // --- Render: form ---
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-8">
      <div className="max-w-max-width mx-auto">
        <form onSubmit={handleSubmit} className="max-w-2xl flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-body-md text-body-md text-on-surface">
              {aiHarnessForm.nameLabel}
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoComplete="name"
              className="font-body-md text-body-md px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:border-primary"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-body-md text-body-md text-on-surface">
              {aiHarnessForm.emailLabel}
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              className="font-body-md text-body-md px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:border-primary"
            />
          </div>

          {fieldError && (
            <p role="alert" className="font-body-md text-body-md text-error">
              {fieldError}
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="font-body-md text-body-md text-error">
              {aiHarnessForm.genericError}
            </p>
          )}

          <Button
            label={status === "submitting" ? aiHarnessForm.submittingLabel : aiHarnessForm.submitLabel}
            onClick={() => {}}
            className={status === "submitting" ? "pointer-events-none opacity-70" : ""}
          />
        </form>
      </div>
    </section>
  );
};

export default AiHarnessForm;
