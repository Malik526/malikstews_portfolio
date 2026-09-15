/**
 * freeStuffContent.ts
 * Single source of truth for all text content on the /free-stuff library page.
 */

export const freeStuffMeta = {
  title: "Free Stuff | Malik Stewart",
  description: "Tools, systems, and resources I actually use while building software and working with AI agents.",
};

// Shared "back" nav target for every individual /free-stuff/* resource page —
// their parent is the resource library, not the portfolio home. Pass this to
// LeadGenHeader's backLabel/backHref props so a new resource page never has
// to hard-code portfolio-home back navigation.
export const freeStuffParentNav = {
  backLabel: "Back to Free Stuff",
  backHref: "/free-stuff",
};

export const freeStuffHero = {
  label: "FREE STUFF",
  headline: "Tools, systems, and resources I actually use.",
  subtext: "Things I built for my own workflow, cleaned up enough to share.",
};

export const freeStuffFooter = {
  brand: "Malik Stewart",
  links: [{ label: "malikstewart.com", href: "/" }],
  copyright: `© ${new Date().getFullYear()} Malik Stewart. All rights reserved.`,
};
