/**
 * HowItWorks.tsx
 * Three-step process section for the /lead-gen page.
 * Each step uses large typographic numbers as visual anchors — not icon cards.
 * Props: none — content sourced from leadGenContent.ts.
 * Layout: three columns on desktop, stacked on mobile. Connected by subtle top border rule.
 */

import React from "react";
import { howItWorks } from "../../lib/leadGenContent";

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-surface-container-low py-24 px-margin-desktop">
      <div className="max-w-max-width mx-auto">

        {/* --- Section label + headline --- */}
        <p className="font-label-mono text-label-mono text-secondary tracking-widest mb-4">
          {howItWorks.label}
        </p>
        <h2 className="font-headline-lg text-headline-lg text-primary mb-16 max-w-xl">
          {howItWorks.headline}
        </h2>

        {/* --- Steps: 3-column editorial grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {howItWorks.steps.map((step, i) => (
            <div
              key={step.number}
              className={`py-8 pr-0 md:pr-12 ${i < howItWorks.steps.length - 1 ? "border-b md:border-b-0 md:border-r border-outline-variant" : ""} ${i > 0 ? "md:pl-12" : ""}`}
            >
              {/* Large step number as typographic element */}
              <span className="font-display-hero text-[5rem] leading-none text-outline-variant select-none block mb-4">
                {step.number}
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">
                {step.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
