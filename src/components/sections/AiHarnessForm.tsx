/**
 * AiHarnessForm.tsx
 * Name + email capture for the AI Harness resource. On successful submission,
 * claims the resource via claimResource() (Google Apps Script Web App),
 * triggers an immediate download, and shows a success state with a manual
 * "Download again" fallback that always works regardless of the auto-download.
 * A duplicate email is treated as success, not an error.
 * Props: none — content sourced from aiHarnessContent.ts.
 */

import React, { useState } from "react";
import { Button } from "../ui";
import { aiHarnessForm } from "../../lib/aiHarnessContent";
import { getResource } from "../../lib/resources";
import { claimResource } from "../../lib/claimResource";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const resource = getResource("ai-harness");

type Status = "idle" | "submitting" | "success" | "error";

function triggerDownload(path: string, filename: string) {
  const link = document.createElement("a");
  link.href = path;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const AiHarnessForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [wasExisting, setWasExisting] = useState(false);

  // --- Handlers ---
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

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
        console.error("claimResource returned a failure:", result.error);
        setStatus("error");
        return;
      }

      setWasExisting(result.status === "existing");
      setStatus("success");
      triggerDownload(resource.downloadPath, resource.downloadFilename);
    } catch (err) {
      console.error("claimResource request failed:", err);
      setStatus("error");
    }
  };

  const handleDownloadAgain = () => {
    triggerDownload(resource.downloadPath, resource.downloadFilename);
  };

  // --- Render: success state ---
  if (status === "success") {
    return (
      <section className="px-margin-mobile md:px-margin-desktop py-8">
        <div className="max-w-max-width mx-auto">
          <div className="max-w-2xl bg-surface-container-low border border-outline-variant rounded-lg p-8">
            <h2 className="font-headline-md text-headline-md text-primary mb-2">
              {wasExisting ? aiHarnessForm.successHeadlineExisting : aiHarnessForm.successHeadlineNew}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">{aiHarnessForm.successBody}</p>
            <Button label={aiHarnessForm.downloadAgainLabel} onClick={handleDownloadAgain} variant="outline" />
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

          {fieldError && <p className="font-body-md text-body-md text-error">{fieldError}</p>}
          {status === "error" && <p className="font-body-md text-body-md text-error">{aiHarnessForm.genericError}</p>}

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
