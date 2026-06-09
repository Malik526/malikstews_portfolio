/**
 * SocialProof.tsx
 * Credibility and builder bio section for the /lead-gen page.
 * Displays builder bio, three stat rows, and a case study link.
 * Props: none — content sourced from leadGenContent.ts.
 * Layout: asymmetric two-column on desktop — bio left, stats right.
 */

import React from "react";
import { socialProof } from "../../lib/leadGenContent";

const SocialProof: React.FC = () => {
  return (
    <section className="bg-primary py-24 px-margin-desktop">
      <div className="max-w-max-width mx-auto">

        {/* --- Section label --- */}
        <p className="font-label-mono text-label-mono text-secondary-container tracking-widest mb-4">
          {socialProof.label}
        </p>

        {/* --- Two-column layout: bio left, stats right --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* --- Left: bio + links --- */}
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-primary mb-6">
              {socialProof.headline}
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/80 mb-8 max-w-md">
              {socialProof.bio}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={socialProof.caseStudy.href}
                className="font-body-md text-body-md text-secondary-container hover:text-on-primary underline decoration-secondary-container decoration-2 transition-colors"
              >
                {socialProof.caseStudy.label}
              </a>
              <a
                href={socialProof.moreclientsco.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-md text-body-md text-secondary-container hover:text-on-primary underline decoration-secondary-container decoration-2 transition-colors"
              >
                {socialProof.moreclientsco.label}
              </a>
            </div>
          </div>

          {/* --- Right: three stats as stacked rows --- */}
          <div className="flex flex-col gap-0 border-l border-on-primary/20 pl-12">
            {socialProof.stats.map((stat) => (
              <div key={stat.label} className="py-6 border-b border-on-primary/10 last:border-b-0">
                <span className="font-display-hero text-[3.5rem] leading-none text-secondary-container block mb-1">
                  {stat.value}
                </span>
                <span className="font-body-md text-body-md text-on-primary/70">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default SocialProof;
