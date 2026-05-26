/**
 * Approach.tsx
 * Two-column principles section: intro text left, numbered list right.
 * Spacing: py-16 (reduced from py-32 per spec).
 */

import React from "react";
import { principles } from "../../lib/content";

const Approach: React.FC = () => {
  return (
    <section className="max-w-max-width mx-auto px-margin-desktop py-16">
      <div className="grid lg:grid-cols-2 gap-16">

        {/* --- Left: intro --- */}
        <div>
          <h3 className="font-label-mono text-label-mono text-secondary mb-3">
            {principles.label}
          </h3>
          <p className="font-display-hero text-headline-lg text-primary mb-5">
            {principles.heading}
          </p>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            {principles.subtext}
          </p>
        </div>

        {/* --- Right: numbered principles --- */}
        <div className="space-y-8">
          {principles.items.map((item) => (
            <div key={item.number} className="flex gap-6">
              <span className="font-display-hero text-headline-lg text-outline-variant shrink-0">
                {item.number}
              </span>
              <div>
                <h6 className="font-headline-md text-secondary mb-1">{item.title}</h6>
                <p className="font-body-md text-on-surface-variant">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Approach;
