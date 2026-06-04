/**
 * ColdCalling.tsx
 * Editorial sales experience section placed between capabilities and selected work.
 * Props: accepts optional ColdCallingProps.content for reusable rendering; defaults to portfolio content.
 * Depends on Tailwind design tokens and local portfolio content.
 */

import React from "react";
import { coldCalling } from "../../lib/content";

type ColdCallingContent = typeof coldCalling;

export interface ColdCallingProps {
  content?: ColdCallingContent;
}

// Renders outbound sales stats, activity details, and a future video placeholder.
const ColdCalling: React.FC<ColdCallingProps> = ({ content = coldCalling }) => {
  return (
    <section className="bg-background py-16 lg:py-20" id="sales-outreach">
      <div className="max-w-max-width mx-auto px-margin-desktop">

        {/* --- Section header --- */}
        <div className="mb-10 max-w-4xl">
          <h3 className="font-label-mono text-label-mono text-[#c8972a] mb-3">
            {content.label}
          </h3>
          <div className="h-px w-24 bg-gradient-to-r from-[#c8972a] to-transparent mb-5" />
          <p className="font-display-hero text-headline-lg text-primary mb-5">
            {content.headline}
          </p>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            {content.subheadline}
          </p>
        </div>

        {/* --- Stats row --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-surface-variant mb-12">
          {content.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`py-6 ${index % 2 === 1 ? "pl-6" : "pr-6"} lg:px-8 lg:first:pl-0 lg:last:pr-0 lg:border-l lg:border-surface-variant lg:first:border-l-0`}
            >
              <p className="font-headline-md text-primary mb-2">{stat.number}</p>
              <p className="font-label-mono text-label-mono text-[#c8972a]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* --- Activities --- */}
        <div className="grid gap-x-16 gap-y-8 lg:grid-cols-2 mb-12">
          {content.activities.map((activity) => (
            <article key={activity.title} className="border-l border-[#c8972a] pl-5">
              <h4 className="font-headline-md text-primary mb-2">{activity.title}</h4>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {activity.description}
              </p>
            </article>
          ))}
        </div>

        {/* --- Video placeholder --- */}
        <div className="flex min-h-[360px] flex-col items-center justify-center bg-primary px-6 py-16 text-center text-on-primary">
          {/* TODO: Replace with video embed */}
          <div className="mb-6 flex h-16 w-16 items-center justify-center border border-white/50">
            <svg
              aria-hidden="true"
              className="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="font-label-mono text-label-mono text-[#c8972a] mb-3">
            {content.videoPlaceholder.label}
          </p>
          <p className="font-display-hero text-headline-md mb-2">
            {content.videoPlaceholder.text}
          </p>
          <p className="font-body-md text-inverse-on-surface">
            {content.videoPlaceholder.note}
          </p>
        </div>

      </div>
    </section>
  );
};

export default ColdCalling;
