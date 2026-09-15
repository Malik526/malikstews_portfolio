/**
 * MinimalFooter.tsx
 * Shared minimal footer for standalone pages that sit outside the main
 * portfolio flow (e.g. /lead-gen, /free-stuff). Not the full portfolio footer.
 * Props: brand, links (label + href), copyright — content sourced per-page.
 */

import React from "react";

interface FooterLink {
  label: string;
  href: string;
}

interface MinimalFooterProps {
  brand: string;
  links: FooterLink[];
  copyright: string;
}

const MinimalFooter: React.FC<MinimalFooterProps> = ({ brand, links, copyright }) => {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-10 max-w-max-width mx-auto gap-4">
        <span className="font-headline-md text-headline-md text-primary">{brand}</span>
        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary underline decoration-secondary decoration-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant">{copyright}</p>
      </div>
    </footer>
  );
};

export default MinimalFooter;
