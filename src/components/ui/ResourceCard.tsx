/**
 * ResourceCard.tsx
 * Card for a single free resource on the /free-stuff library page.
 * Props: name, description, href (resource landing page), ctaLabel.
 */

import React from "react";
import { Link } from "react-router-dom";

interface ResourceCardProps {
  name: string;
  description: string;
  href: string;
  ctaLabel?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ name, description, href, ctaLabel = "Get it" }) => {
  return (
    <div className="bg-surface-container-low border border-outline-variant rounded-lg p-8 flex flex-col gap-4">
      <h3 className="font-headline-md text-headline-md text-primary">{name}</h3>
      <p className="font-body-md text-body-md text-on-surface-variant flex-1">{description}</p>
      <Link
        to={href}
        className="inline-flex items-center gap-2 font-body-md text-body-md text-primary hover:opacity-80 transition-opacity"
      >
        {ctaLabel}
        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </Link>
    </div>
  );
};

export default ResourceCard;
