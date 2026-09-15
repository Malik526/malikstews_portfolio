/**
 * LeadGenPage.tsx
 * Assembles all sections for the /lead-gen waitlist page.
 * Section order: Header -> Hero -> WaitlistCta -> FreePaidTable -> SocialProof -> Footer.
 * Uses LeadGenHeader and a minimal inline footer to keep branding consistent with malikstewart.com.
 */

import React from "react";
import { LeadGenHeader, MinimalFooter } from "../components/layout";
import {
  LeadGenHero,
  FreePaidTable,
  SocialProof,
  WaitlistCta,
} from "../components/sections";
import { leadGenFooter } from "../lib/leadGenContent";

const LeadGenPage: React.FC = () => {
  return (
    <div className="text-on-surface selection:bg-secondary-fixed">

      {/* --- Fixed top navigation --- */}
      <LeadGenHeader />

      {/* --- Page content (pt-24 accounts for fixed header) --- */}
      <main className="pt-24">
        <LeadGenHero />
        <WaitlistCta />
        <FreePaidTable />
        <SocialProof />
      </main>

      <MinimalFooter {...leadGenFooter} />

    </div>
  );
};

export default LeadGenPage;
