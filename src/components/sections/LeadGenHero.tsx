/**
 * LeadGenHero.tsx
 * Hero section for the /lead-gen page.
 * Displays label, headline, subheadline, three value-prop rows, a proof stat, and a waitlist CTA.
 * Props: none — content sourced from leadGenContent.ts.
 * Layout: asymmetric — headline left-anchored, value props as numbered stacked rows with left border accent.
 */

import React from "react";
import { leadGenHero } from "../../lib/leadGenContent";
import Button from "../ui/Button";

const LeadGenHero: React.FC = () => {
  return (
    <section className="py-24 px-margin-desktop max-w-max-width mx-auto">

      {/* --- Label --- */}
      <p className="font-label-mono text-label-mono text-secondary tracking-widest mb-6">
        {leadGenHero.label}
      </p>

      {/* --- Headline + subheadline (left-anchored, max-width for readability) --- */}
      <div className="max-w-3xl mb-12">
        <h1 className="font-display-hero text-display-hero-mobile md:text-[3rem] lg:text-[3.5rem] leading-[1.15] text-primary mb-5">
          {leadGenHero.headline}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          {leadGenHero.subheadline}
        </p>
      </div>

      {/* --- Value props as numbered stacked rows (not card grid) --- */}
      <div className="flex flex-col gap-0 mb-12 border-l-2 border-secondary-container pl-8 max-w-2xl">
        {leadGenHero.valueProps.map((prop) => (
          <div key={prop.step} className="py-5 border-b border-outline-variant last:border-b-0">
            <span className="font-label-mono text-label-mono text-secondary block mb-1">
              {prop.step}
            </span>
            <p className="font-body-lg text-body-lg text-on-surface">
              {prop.text}
            </p>
          </div>
        ))}
      </div>

      {/* --- CTA + proof stat row --- */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <Button label={leadGenHero.cta.label} href={leadGenHero.cta.href} variant="primary" />
        <p className="font-body-md text-body-md text-on-surface-variant">
          {leadGenHero.proof}
        </p>
      </div>

    </section>
  );
};

export default LeadGenHero;
