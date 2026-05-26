/**
 * Ticker.tsx
 * Horizontally scrolling marquee banner in navy background with gold star separators.
 * Items duplicated for seamless infinite loop — animation defined in globals.css.
 * Spacing: mb-20 (reduced from mb-40 per spec).
 */

import React from "react";
import { ticker } from "../../lib/content";

const Ticker: React.FC = () => {
  return (
    <div className="bg-primary py-5 overflow-hidden mb-20">
      {/* ticker-animation class drives the CSS keyframe from globals.css */}
      <div className="ticker-animation flex items-center whitespace-nowrap">

        {/* First set of items */}
        <TickerItems />

        {/* Duplicate for seamless infinite scroll */}
        <TickerItems />

      </div>
    </div>
  );
};

// Renders one full set of ticker items with star separators
const TickerItems: React.FC = () => (
  <div className="flex items-center gap-12 px-6">
    {ticker.items.map((item, i) => (
      <React.Fragment key={i}>
        <span className="font-display-hero text-headline-md italic text-primary-fixed">
          {item}
        </span>
        <span className="material-symbols-outlined text-secondary">star</span>
      </React.Fragment>
    ))}
  </div>
);

export default Ticker;
