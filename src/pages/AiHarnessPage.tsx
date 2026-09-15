/**
 * AiHarnessPage.tsx
 * Assembles the /free-stuff/ai-harness landing page route.
 * Section order: LeadGenHeader -> AiHarnessHero -> AiHarnessForm -> MinimalFooter.
 */

import React from "react";
import { LeadGenHeader, MinimalFooter } from "../components/layout";
import { AiHarnessHero, AiHarnessForm } from "../components/sections";
import { freeStuffFooter } from "../lib/freeStuffContent";

const AiHarnessPage: React.FC = () => {
  return (
    <div className="text-on-surface selection:bg-secondary-fixed">
      <LeadGenHeader />

      <main className="pt-24">
        <AiHarnessHero />
        <AiHarnessForm />
      </main>

      <MinimalFooter {...freeStuffFooter} />
    </div>
  );
};

export default AiHarnessPage;
