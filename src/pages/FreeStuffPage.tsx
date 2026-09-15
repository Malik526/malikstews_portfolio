/**
 * FreeStuffPage.tsx
 * Assembles the /free-stuff resource library route.
 * Section order: LeadGenHeader -> FreeStuffHero -> FreeStuffResources -> MinimalFooter.
 * Reuses LeadGenHeader since its content (brand + back-to-portfolio link) applies unchanged here.
 */

import React from "react";
import { LeadGenHeader, MinimalFooter } from "../components/layout";
import { FreeStuffHero, FreeStuffResources } from "../components/sections";
import { freeStuffFooter } from "../lib/freeStuffContent";

const FreeStuffPage: React.FC = () => {
  return (
    <div className="text-on-surface selection:bg-secondary-fixed">
      <LeadGenHeader />

      <main className="pt-24">
        <FreeStuffHero />
        <FreeStuffResources />
      </main>

      <MinimalFooter {...freeStuffFooter} />
    </div>
  );
};

export default FreeStuffPage;
