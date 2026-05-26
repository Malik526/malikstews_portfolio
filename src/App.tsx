/**
 * App.tsx
 * Root single-page application component.
 * Renders all sections in order: Header → page sections → Footer.
 * No router needed — this is a single-page portfolio with anchor scroll navigation.
 */

import React from "react";
import { Header, Footer } from "./components/layout";
import {
  Hero,
  Ticker,
  CapabilityAreas,
  FeaturedProjects,
  Approach,
  OperationalExperience,
  ContactCta,
} from "./components/sections";

const App: React.FC = () => {
  return (
    <div className="text-on-surface selection:bg-secondary-fixed">

      {/* --- Fixed top navigation --- */}
      <Header />

      {/* --- Page content below nav (pt-28 accounts for fixed header height) --- */}
      <main className="pt-28">
        <Hero />
        <Ticker />
        <CapabilityAreas />
        <FeaturedProjects />
        <Approach />
        <OperationalExperience />
        <ContactCta />
      </main>

      {/* --- Footer (no top margin per spec) --- */}
      <Footer />

    </div>
  );
};

export default App;
