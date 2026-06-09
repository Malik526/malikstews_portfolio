/**
 * LeadGenPage.tsx
 * Assembles all sections for the /lead-gen waitlist page.
 * Section order: Header -> Hero -> WaitlistCta -> FreePaidTable -> SocialProof -> Footer.
 * Uses LeadGenHeader and a minimal inline footer to keep branding consistent with malikstewart.com.
 */

import React from "react";
import { LeadGenHeader } from "../components/layout";
import {
  LeadGenHero,
  FreePaidTable,
  SocialProof,
  WaitlistCta,
} from "../components/sections";
import { leadGenFooter } from "../lib/leadGenContent";

// Minimal footer — not the full portfolio footer
const LeadGenFooter: React.FC = () => (
  <footer className="bg-surface-container-low border-t border-outline-variant">
    <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop py-10 max-w-max-width mx-auto gap-4">
      <span className="font-headline-md text-headline-md text-primary">
        {leadGenFooter.brand}
      </span>
      <div className="flex gap-6">
        {leadGenFooter.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary underline decoration-secondary decoration-2 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant">
        {leadGenFooter.copyright}
      </p>
    </div>
  </footer>
);

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

      <LeadGenFooter />

    </div>
  );
};

export default LeadGenPage;
