/**
 * FreePaidTable.tsx
 * Compact pricing summary for free vs paid tiers on the /lead-gen page.
 * Props: none — content sourced from leadGenContent.ts.
 */

import React from "react";
import { pricingComparison } from "../../lib/leadGenContent";

const FreePaidTable: React.FC = () => {
  return (
    <section className="py-12 px-margin-desktop max-w-max-width mx-auto">

      {/* --- Single-line pricing summary --- */}
      <p className="font-label-mono text-label-mono text-secondary tracking-widest mb-3">
        {pricingComparison.label}
      </p>
      <p className="font-body-lg text-body-lg text-on-surface max-w-3xl">
        {pricingComparison.summary}
      </p>

    </section>
  );
};

export default FreePaidTable;
