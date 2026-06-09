/**
 * WaitlistCta.tsx
 * Waitlist signup section with embedded Tally form for the /lead-gen page.
 * The Tally iframe URL is sourced from leadGenContent.ts — paste your embed URL there.
 * First-build behavior: static success message only (no backend on first iteration).
 * Props: none — content sourced from leadGenContent.ts.
 * Note: id="waitlist" allows the hero CTA button to anchor-scroll here.
 */

import React from "react";
import { waitlistCta } from "../../lib/leadGenContent";

const WaitlistCta: React.FC = () => {
  const isTallyReady = waitlistCta.tallyUrl !== "INSERT_TALLY_EMBED_URL_HERE";

  return (
    <section
      id="waitlist"
      className="bg-surface-container-low py-24 px-margin-desktop"
    >
      <div className="max-w-max-width mx-auto">
        <div className="max-w-2xl">

          {/* --- Label --- */}
          <p className="font-label-mono text-label-mono text-secondary tracking-widest mb-4">
            {waitlistCta.label}
          </p>

          {/* --- Headline + subtext --- */}
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            {waitlistCta.headline}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
            {waitlistCta.subtext}
          </p>

          {/* --- Tally embed or placeholder --- */}
          {isTallyReady ? (
            <iframe
              src={waitlistCta.tallyUrl}
              width="100%"
              height="280"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Lead Gen Waitlist Signup"
              className="rounded-lg"
            />
          ) : (
            // TODO: Replace INSERT_TALLY_EMBED_URL_HERE in leadGenContent.ts with your Tally form URL
            <div className="border-2 border-dashed border-outline-variant rounded-lg p-10 text-center">
              <p className="font-label-mono text-label-mono text-on-surface-variant tracking-wider mb-2">
                TALLY FORM PLACEHOLDER
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Paste your Tally embed URL into{" "}
                <code className="bg-surface-container px-1 rounded text-sm">
                  src/lib/leadGenContent.ts → waitlistCta.tallyUrl
                </code>{" "}
                to activate this form.
              </p>
            </div>
          )}

          {/* --- Static success line (first-build frontend only) --- */}
          <p className="font-body-md text-body-md text-secondary mt-6">
            {waitlistCta.successMessage}
          </p>

        </div>
      </div>
    </section>
  );
};

export default WaitlistCta;
