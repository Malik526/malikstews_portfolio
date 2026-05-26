/**
 * Footer.tsx
 * Site footer with brand name, tagline, copyright, and external links.
 * Content sourced from content.ts.
 * Note: mt-0 replaces the original mt-40 per reduced-spacing spec.
 */

import React from "react";
import { footer } from "../../lib/content";

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container-low">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop py-12 max-w-max-width mx-auto gap-6">

        {/* --- Brand --- */}
        <div>
          <span className="font-display-hero text-headline-md text-primary block">
            {footer.name}
          </span>
          <span className="font-body-md text-on-surface-variant">{footer.tagline}</span>
        </div>

        {/* --- Copyright --- */}
        <p className="font-body-md text-on-surface-variant">
          {footer.copyright}
        </p>

        {/* --- Links --- */}
        <div className="flex gap-6">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-all underline decoration-secondary decoration-2 font-body-md"
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
