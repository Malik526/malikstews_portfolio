/**
 * LeadGenHeader.tsx
 * Minimal header for the /lead-gen page.
 * Shows brand name (links to portfolio home) and a back arrow link.
 * Props: none — content sourced from leadGenContent.ts.
 */

import React from "react";
import { Link } from "react-router-dom";
import { leadGenHeader } from "../../lib/leadGenContent";

const LeadGenHeader: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant">
      <div className="flex justify-between items-center px-margin-desktop py-5 max-w-max-width mx-auto">

        {/* --- Brand name --- */}
        <Link to="/" className="font-headline-lg text-headline-md text-primary hover:opacity-80 transition-opacity">
          {leadGenHeader.brand}
        </Link>

        {/* --- Back link --- */}
        <Link
          to={leadGenHeader.backHref}
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-body-md"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          {leadGenHeader.backLabel}
        </Link>

      </div>
    </nav>
  );
};

export default LeadGenHeader;
