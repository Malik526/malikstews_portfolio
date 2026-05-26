/**
 * OperationalExperience.tsx
 * Experience / resume section in a 12-column grid: heading left, entries right.
 * Uses ExperienceEntry UI component for each role.
 * Spacing: py-16 (reduced from py-32 per spec).
 */

import React from "react";
import { experience } from "../../lib/content";
import ExperienceEntry from "../ui/ExperienceEntry";

const OperationalExperience: React.FC = () => {
  return (
    <section className="bg-surface-container-low py-16">
      <div className="max-w-max-width mx-auto px-margin-desktop">
        <div className="grid lg:grid-cols-12 gap-12">

          {/* --- Left: section heading --- */}
          <div className="lg:col-span-4">
            <h3 className="font-label-mono text-label-mono text-secondary mb-3">
              {experience.label}
            </h3>
            <p className="font-display-hero text-headline-lg text-primary">
              {experience.heading}
            </p>
          </div>

          {/* --- Right: experience entries --- */}
          <div className="lg:col-span-8 space-y-8">
            {experience.items.map((item) => (
              <ExperienceEntry key={item.title + item.company} {...item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default OperationalExperience;
