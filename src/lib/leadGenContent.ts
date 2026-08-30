/**
 * leadGenContent.ts
 * Single source of truth for all text content on the /lead-gen waitlist page.
 * No hardcoded strings in section components — import from here.
 * Tally form URL is used by WaitlistCta.tsx for the embedded signup form.
 */

// --- Page meta ---
export const leadGenMeta = {
  title: "Find Service Businesses with No Website | Lead Gen Tool",
  description:
    "The lead generation tool used by agency owners and BDRs to build cold call lists at scale.",
};

// --- Header ---
export const leadGenHeader = {
  brand: "Malik Stewart",
  backLabel: "Back to portfolio",
  backHref: "/",
};

// --- Hero ---
export const leadGenHero = {
  label: "LEAD GENERATION TOOL — WAITLIST",
  headline: "Find Service Businesses with No Website in 90 Seconds",
  subheadline:
    "The lead generation tool used by agency owners and BDRs to build cold call lists at scale.",
  cta: { label: "Join the Waitlist", href: "#waitlist" },
};

// --- Free vs Paid comparison ---
export const pricingComparison = {
  label: "PRICING",
  summary: "Free: 25 results, on-page. Paid (coming soon): Unlimited + CSV export.",
};

// --- Social proof / credibility ---
export const socialProof = {
  label: "WHO BUILT THIS",
  headline: "Built by a full-stack engineer and GTM operator.",
  bio: "Malik Stewart builds full-stack products, GTM systems, automation, and applied AI workflows. This tool was built out of direct client work - not a side project idea.",
  stats: [
    { value: "50+", label: "Business sequences generated" },
    { value: "2", label: "Waitlist signups from first outreach" },
    { value: "90s", label: "Average time to generate a list" },
  ],
  caseStudy: {
    label: "See a real example: Tosi Electric case study",
    href: "/#work",
  },
  moreclientsco: {
    label: "MoreClientsCo",
    href: "https://moreclientsco.com",
  },
};

// --- Waitlist CTA ---
export const waitlistCta = {
  label: "JOIN THE WAITLIST",
  headline: "Be first to access.",
  subtext: "Early access rolling out soon. Name and email only — no spam.",
  tallyUrl: "https://tally.so/r/ZjeKdz",
  successMessage: "Check your inbox. You are on the list.",
};

// --- Footer ---
export const leadGenFooter = {
  brand: "Malik Stewart",
  links: [
    { label: "malikstewart.com", href: "/" },
    { label: "MoreClientsCo", href: "https://moreclientsco.com" },
  ],
  copyright: `© ${new Date().getFullYear()} Malik Stewart. All rights reserved.`,
};
