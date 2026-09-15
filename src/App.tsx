/**
 * App.tsx
 * Root application component with client-side routing.
 * Routes: "/" → PortfolioPage, "/lead-gen" → LeadGenPage,
 * "/free-stuff" → FreeStuffPage, "/free-stuff/ai-harness" → AiHarnessPage.
 */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import LeadGenPage from "./pages/LeadGenPage";
import FreeStuffPage from "./pages/FreeStuffPage";
import AiHarnessPage from "./pages/AiHarnessPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/lead-gen" element={<LeadGenPage />} />
        <Route path="/free-stuff" element={<FreeStuffPage />} />
        <Route path="/free-stuff/ai-harness" element={<AiHarnessPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
