/**
 * App.tsx
 * Root application component with client-side routing.
 * Routes: "/" → PortfolioPage, "/lead-gen" → LeadGenPage.
 */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import LeadGenPage from "./pages/LeadGenPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/lead-gen" element={<LeadGenPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
