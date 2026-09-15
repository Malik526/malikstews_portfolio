/**
 * LeadGenHeader.tsx
 * Minimal header shared by standalone pages outside the main portfolio flow
 * (/lead-gen, /free-stuff, and individual /free-stuff/* resource pages).
 * Shows brand name (always links to portfolio home) and a back arrow link
 * whose label/destination is caller-specified so each page can point back
 * to its actual parent (e.g. a resource page points back to /free-stuff,
 * not straight to the portfolio home) instead of every page hard-coding
 * "back to portfolio" behavior.
 * Props: backLabel/backHref (optional — default to leadGenContent's values).
 */

import React from "react";
import { Link } from "react-router-dom";
import { leadGenHeader } from "../../lib/leadGenContent";

interface LeadGenHeaderProps {
  backLabel?: string;
  backHref?: string;
}

const LeadGenHeader: React.FC<LeadGenHeaderProps> = ({
  backLabel = leadGenHeader.backLabel,
  backHref = leadGenHeader.backHref,
}) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-5 max-w-max-width mx-auto">

        {/* --- Brand name --- */}
        <Link to="/" className="font-headline-lg text-headline-md text-primary hover:opacity-80 transition-opacity">
          {leadGenHeader.brand}
        </Link>

        {/* --- Back link --- */}
        <Link
          to={backHref}
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-body-md"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          {backLabel}
        </Link>

      </div>
    </nav>
  );
};

export default LeadGenHeader;
