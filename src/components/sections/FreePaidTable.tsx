/**
 * FreePaidTable.tsx
 * Feature comparison table for free vs paid tiers on the /lead-gen page.
 * Uses a semantic HTML table — not a card grid.
 * Props: none — content sourced from leadGenContent.ts.
 */

import React from "react";
import { pricingComparison } from "../../lib/leadGenContent";

// Renders a check mark for available features, dash for unavailable
const FeatureCell: React.FC<{ value: string }> = ({ value }) => {
  const isNo = value === "No";
  return (
    <span className={isNo ? "text-on-surface-variant" : "text-on-surface font-medium"}>
      {value}
    </span>
  );
};

const FreePaidTable: React.FC = () => {
  return (
    <section className="py-24 px-margin-desktop max-w-max-width mx-auto">

      {/* --- Section label + headline --- */}
      <p className="font-label-mono text-label-mono text-secondary tracking-widest mb-4">
        {pricingComparison.label}
      </p>
      <h2 className="font-headline-lg text-headline-lg text-primary mb-3 max-w-xl">
        {pricingComparison.headline}
      </h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-12 max-w-lg">
        {pricingComparison.subtext}
      </p>

      {/* --- Comparison table --- */}
      <div className="overflow-x-auto">
        <table className="w-full max-w-2xl border-collapse">
          <thead>
            <tr className="border-b-2 border-primary">
              <th className="text-left py-4 pr-8 font-body-md text-body-md text-on-surface-variant w-1/2">
                Feature
              </th>
              <th className="text-left py-4 pr-8 font-headline-md text-headline-md text-primary">
                Free
              </th>
              <th className="text-left py-4 font-headline-md text-headline-md text-secondary">
                Paid
                <span className="ml-3 inline-block px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[11px] font-label-mono tracking-wider rounded align-middle">
                  COMING SOON
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {pricingComparison.features.map((row) => (
              <tr key={row.label} className="border-b border-outline-variant last:border-b-0">
                <td className="py-4 pr-8 font-body-md text-body-md text-on-surface">
                  {row.label}
                </td>
                <td className="py-4 pr-8 font-body-md text-body-md">
                  <FeatureCell value={row.free} />
                </td>
                <td className="py-4 font-body-md text-body-md">
                  <FeatureCell value={row.paid} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section>
  );
};

export default FreePaidTable;
