/**
 * AiHarnessHero.tsx
 * Intro section for the /free-stuff/ai-harness page — headline plus the
 * "Includes" bullet list of what's in the package.
 * Props: none — content sourced from aiHarnessContent.ts.
 */

import React from "react";
import { aiHarnessHero } from "../../lib/aiHarnessContent";

const AiHarnessHero: React.FC = () => {
  return (
    <section className="px-margin-desktop pt-12 pb-8">
      <div className="max-w-max-width mx-auto max-w-2xl">
        <p className="font-label-mono text-label-mono text-secondary tracking-widest mb-4">
          {aiHarnessHero.label}
        </p>
        <h1 className="font-headline-lg text-headline-lg text-primary mb-4">{aiHarnessHero.headline}</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">{aiHarnessHero.subtext}</p>
        <ul className="flex flex-col gap-2">
          {aiHarnessHero.includes.map((item) => (
            <li key={item} className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
              <span className="material-symbols-outlined text-[18px] text-secondary">check</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AiHarnessHero;
