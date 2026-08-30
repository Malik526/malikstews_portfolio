/**
 * PortfolioPage.tsx
 * Assembles the main portfolio sections in order.
 * Extracted from App.tsx to support multi-route setup with react-router-dom.
 */

import React from "react";
import { Header, Footer } from "../components/layout";
import {
  Hero,
  Ticker,
  CapabilityAreas,
  ColdCalling,
  FeaturedProjects,
  OperationalExperience,
  TechnicalProfile,
  ContactCta,
} from "../components/sections";

const PortfolioPage: React.FC = () => {
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
        <OperationalExperience />
        <ColdCalling />
        <TechnicalProfile />
        <ContactCta />
      </main>

      {/* --- Footer --- */}
      <Footer />

    </div>
  );
};

export default PortfolioPage;
