/**
 * Header.tsx
 * Fixed top navigation bar with blur backdrop.
 * Contains: brand name, nav links, CTA button, and a mobile menu toggle that
 * opens a dropdown panel with the same links (desktop nav stays hidden below md).
 * Content sourced from content.ts — no hardcoded strings.
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../../lib/content";
import Button from "../ui/Button";

// Scrolls smoothly to the given anchor id
const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const navLinkClass =
  "text-on-surface-variant hover:text-secondary transition-colors duration-300 font-body-md";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderLink = (link: (typeof nav.links)[number], onNavigate: () => void, className: string) =>
    link.href.startsWith("#") ? (
      // Hash links: smooth-scroll within the single-page portfolio
      <a
        key={link.label}
        href={link.href}
        onClick={(e) => {
          e.preventDefault();
          scrollTo(link.href);
          onNavigate();
        }}
        className={className}
      >
        {link.label}
      </a>
    ) : (
      // Path links (e.g. /free-stuff): use react-router client-side navigation
      <Link key={link.label} to={link.href} onClick={onNavigate} className={className}>
        {link.label}
      </Link>
    );

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md md:h-auto md:flex-none ${
        isMenuOpen ? "h-dvh flex flex-col" : ""
      }`}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-5 max-w-max-width mx-auto w-full">

        {/* --- Brand name --- */}
        <span className="font-display-hero text-headline-md text-primary">
          {nav.name}
        </span>

        {/* --- Desktop nav links + CTA --- */}
        <div className="hidden md:flex items-center gap-8">
          {nav.links.map((link) => renderLink(link, () => {}, navLinkClass))}
          <Button label={nav.cta.label} href={nav.cta.href} variant="primary" className="px-6 py-2" />
        </div>

        {/* --- Mobile menu toggle --- */}
        <button
          type="button"
          className="md:hidden text-primary"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="material-symbols-outlined">{isMenuOpen ? "close" : "menu"}</span>
        </button>

      </div>

      {/* --- Mobile menu panel --- */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden flex flex-col gap-1 px-margin-mobile pb-6 border-t border-outline-variant bg-surface flex-1 overflow-y-auto"
        >
          {nav.links.map((link) =>
            renderLink(link, () => setIsMenuOpen(false), `${navLinkClass} py-3`)
          )}
          <Button
            label={nav.cta.label}
            href={nav.cta.href}
            variant="primary"
            className="mt-2 justify-center"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      )}
    </nav>
  );
};

export default Header;
