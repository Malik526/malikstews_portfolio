/**
 * TechnicalProfile.tsx
 * Compact skills and education section for the portfolio resume layer.
 */

import React from "react";
import { technicalProfile } from "../../lib/content";

const TechnicalProfile: React.FC = () => {
  return (
    <section className="bg-white py-16" id="skills">
      <div className="max-w-max-width mx-auto px-margin-desktop">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="font-label-mono text-label-mono text-secondary mb-3">
              {technicalProfile.label}
            </h3>
            <p className="font-display-hero text-headline-lg text-primary">
              {technicalProfile.heading}
            </p>
          </div>

          <div className="space-y-10 lg:col-span-8">
            <div className="grid gap-6 md:grid-cols-2">
              {technicalProfile.skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="border-t border-outline-variant pt-5"
                >
                  <h4 className="mb-4 font-headline-md text-primary">
                    {group.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-surface-container px-3 py-2 font-label-mono text-label-mono text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <article className="border-t border-outline-variant pt-6">
              <h4 className="mb-2 font-headline-md text-primary">
                {technicalProfile.education.degree}
              </h4>
              <p className="font-body-md text-secondary">
                {technicalProfile.education.school}
              </p>
              <p className="font-label-mono text-label-mono uppercase text-on-surface-variant">
                {technicalProfile.education.date}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProfile;
