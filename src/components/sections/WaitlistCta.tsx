/**
 * WaitlistCta.tsx
 * Waitlist signup section with embedded Tally form for the /lead-gen page.
 * The Tally iframe URL is sourced from leadGenContent.ts.
 * First-build behavior: static success message only (no backend on first iteration).
 * Props: none — content sourced from leadGenContent.ts.
 * Note: id="waitlist" allows the hero CTA button to anchor-scroll here.
 */

import React from "react";
import { waitlistCta } from "../../lib/leadGenContent";

const WaitlistCta: React.FC = () => {
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

          {/* --- Tally embed --- */}
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
