/**
 * Header.tsx
 * Fixed top navigation bar with blur backdrop.
 * Contains: brand name, nav links, CTA button, and mobile hamburger placeholder.
 * Content sourced from content.ts — no hardcoded strings.
 */

import React from "react";
import { nav } from "../../lib/content";
import Button from "../ui/Button";

// Scrolls smoothly to the given anchor id
const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-margin-desktop py-5 max-w-max-width mx-auto">

        {/* --- Brand name --- */}
        <span className="font-display-hero text-headline-md text-primary">
          {nav.name}
        </span>

        {/* --- Desktop nav links + CTA --- */}
        <div className="hidden md:flex items-center gap-8">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-body-md"
            >
              {link.label}
            </a>
          ))}
          <Button label={nav.cta.label} href={nav.cta.href} variant="primary" className="px-6 py-2" />
        </div>

        {/* --- Mobile hamburger (visual only — no drawer needed for single-page) --- */}
        <button className="md:hidden text-primary" aria-label="Open menu">
          <span className="material-symbols-outlined">menu</span>
        </button>

      </div>
    </nav>
  );
};

export default Header;
