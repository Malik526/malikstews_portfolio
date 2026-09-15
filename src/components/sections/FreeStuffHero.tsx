/**
 * FreeStuffHero.tsx
 * Intro section for the /free-stuff library page.
 * Props: none — content sourced from freeStuffContent.ts.
 */

import React from "react";
import { freeStuffHero } from "../../lib/freeStuffContent";

const FreeStuffHero: React.FC = () => {
  return (
    <section className="px-margin-desktop py-16">
      <div className="max-w-max-width mx-auto max-w-2xl">
        <p className="font-label-mono text-label-mono text-secondary tracking-widest mb-4">
          {freeStuffHero.label}
        </p>
        <h1 className="font-headline-lg text-headline-lg text-primary mb-4">{freeStuffHero.headline}</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">{freeStuffHero.subtext}</p>
      </div>
    </section>
  );
};

export default FreeStuffHero;
