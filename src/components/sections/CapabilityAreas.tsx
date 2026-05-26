/**
 * CapabilityAreas.tsx
 * Three-column capabilities grid on a warm off-white background.
 * Each item has a Material Symbol icon, bold title, and description.
 * Spacing: py-16 lg:py-20 (reduced from py-32 lg:py-40 per spec).
 */

import React from "react";
import { capabilities } from "../../lib/content";

const CapabilityAreas: React.FC = () => {
  return (
    <section className="bg-[#f0ede8] py-16 lg:py-20" id="capabilities">
      <div className="max-w-max-width mx-auto px-margin-desktop">

        {/* --- Section header --- */}
        <div className="mb-10">
          <h3 className="font-label-mono text-label-mono text-secondary mb-3">
            {capabilities.label}
          </h3>
          <div className="editorial-line w-24 mb-5" />
          <p className="font-display-hero text-headline-lg max-w-2xl text-primary">
            {capabilities.tagline}
          </p>
        </div>

        {/* --- Three capability cards --- */}
        <div className="grid md:grid-cols-3 gap-10">
          {capabilities.items.map((item) => (
            <div key={item.title} className="space-y-4">
              <span className="material-symbols-outlined text-4xl text-primary">
                {item.icon}
              </span>
              <h4 className="font-headline-md text-secondary">{item.title}</h4>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CapabilityAreas;
