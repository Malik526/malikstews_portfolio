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
  bullets,
  links,
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

      {/* --- Description / resume bullets --- */}
      {description && (
        <p className="font-body-md text-on-surface-variant leading-relaxed">
          {description}
        </p>
      )}

      {bullets && bullets.length > 0 && (
        <ul className="list-disc space-y-3 pl-5 font-body-md text-on-surface-variant">
          {bullets.map((bullet) => (
            <li key={bullet} className="leading-relaxed">
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {links && links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body-md text-body-md text-primary underline decoration-secondary decoration-2 transition-colors hover:text-secondary"
            >
              {link.label}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceEntry;
