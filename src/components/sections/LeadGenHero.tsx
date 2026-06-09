/**
 * LeadGenHero.tsx
 * Hero section for the /lead-gen page.
 * Displays label, headline, subheadline, and a waitlist CTA.
 * Props: none — content sourced from leadGenContent.ts.
 * Layout: asymmetric — headline left-anchored with the form immediately after this section.
 */

import React from "react";
import { leadGenHero } from "../../lib/leadGenContent";
import Button from "../ui/Button";

const LeadGenHero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 px-margin-desktop max-w-max-width mx-auto">

      {/* --- Label --- */}
      <p className="font-label-mono text-label-mono text-secondary tracking-widest mb-6">
        {leadGenHero.label}
      </p>

      {/* --- Headline + subheadline (left-anchored, max-width for readability) --- */}
      <div className="max-w-3xl mb-10">
        <h1 className="font-display-hero text-display-hero-mobile md:text-[3rem] lg:text-[3.5rem] leading-[1.15] text-primary mb-5">
          {leadGenHero.headline}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          {leadGenHero.subheadline}
        </p>
      </div>

      {/* --- CTA --- */}
      <div className="flex items-start">
        <Button label={leadGenHero.cta.label} href={leadGenHero.cta.href} variant="primary" />
      </div>

    </section>
  );
};

export default LeadGenHero;
