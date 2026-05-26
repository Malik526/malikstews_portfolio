/**
 * ExperienceEntry.tsx
 * Renders a single experience row in the Experience/Resume section.
 * Props: title, company, dates, description, isLast (suppresses bottom border on final entry)
 */

import React from "react";
import type { ExperienceItem } from "../../lib/content";

const ExperienceEntry: React.FC<ExperienceItem> = ({
  title,
  company,
  dates,
  description,
  isLast = false,
}) => {
  return (
    <div className={`${isLast ? "" : "border-b border-outline-variant pb-8"}`}>
      {/* --- Title + dates row --- */}
      <div className="flex flex-col md:flex-row justify-between mb-3">
        <h6 className="font-headline-md text-primary">{title}</h6>
        <span className="font-label-mono text-on-surface-variant uppercase">
          {dates}
        </span>
      </div>

      {/* --- Company --- */}
      <p className="font-body-md text-secondary mb-3">{company}</p>

      {/* --- Description --- */}
      <p className="font-body-md text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ExperienceEntry;
