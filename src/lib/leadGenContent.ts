/**
 * leadGenContent.ts
 * Single source of truth for all text content on the /lead-gen waitlist page.
 * No hardcoded strings in section components — import from here.
 * Tally form URL: paste your Tally embed URL into tallyUrl below before deploying.
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
  valueProps: [
    {
      step: "01",
      text: "Enter a ZIP code, radius, and business category",
    },
    {
      step: "02",
      text: "Get 25 high-intent leads — no website, recent reviews, contact info included",
    },
    {
      step: "03",
      text: "Target any Google Business category and toggle the no-website filter",
    },
  ],
  proof: "Already used to generate cold call sequences for 50+ local service businesses",
  cta: { label: "Join the Waitlist", href: "#waitlist" },
};

// --- How It Works ---
export const howItWorks = {
  label: "HOW IT WORKS",
  headline: "Three inputs. Twenty-five leads. Ninety seconds.",
  steps: [
    {
      number: "01",
      title: "Input",
      description:
        "Enter a ZIP code, set a search radius (5–10 miles), choose a business category, and toggle the no-website filter.",
    },
    {
      number: "02",
      title: "Process",
      description:
        "The tool scans Google Business listings and extracts structured data — no manual lookup required.",
    },
    {
      number: "03",
      title: "Output",
      description:
        "An interactive results table showing business name, rating, review count, service area, phone number, and website status.",
    },
  ],
};

// --- Free vs Paid comparison ---
export const pricingComparison = {
  label: "PRICING",
  headline: "Start free. Scale when you're ready.",
  subtext: "Paid tier is coming soon — join the waitlist to lock in early access pricing.",
  features: [
    { label: "Results per search", free: "25", paid: "Unlimited" },
    { label: "Categories", free: "All", paid: "All" },
    { label: "CSV export", free: "No", paid: "Yes" },
    { label: "Saved searches", free: "No", paid: "Yes" },
    { label: "Full download", free: "On-page only", paid: "Full export" },
  ],
};

// --- Social proof / credibility ---
export const socialProof = {
  label: "WHO BUILT THIS",
  headline: "Built by an operator, not a developer.",
  bio: "Malik Stewart runs MoreClientsCo, a growth agency that builds lead generation systems for local service businesses. This tool was built out of direct client work — not a side project idea.",
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
  // TODO: Paste your Tally embed URL here before deploying
  tallyUrl: "INSERT_TALLY_EMBED_URL_HERE",
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
