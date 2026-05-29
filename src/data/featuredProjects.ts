/**
 * Featured project metadata lives here so video projects can be managed
 * through data instead of hardcoded JSX.
 *
 * Video files should be placed in:
 * public/videos/featured/{project-slug}/
 *
 * Optional phone frame assets should be placed in:
 * public/images/frames/
 */

export interface FeaturedProjectData {
  slug: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  tech: string;
  outcome: string;
  videoSrc: string;
  frame?: {
    type: "phone";
    src: string;
    alt: string;
  };
  links?: {
    label: string;
    href: string;
  }[];
}

export const featuredProjects = [
  {
    slug: "moreclientsco",
    title: "MoreClientsCo Research Pipeline",
    category: "AI Automation + Growth Systems",
    problem:
      "Researching local businesses manually before outreach or website development is slow, inconsistent, and difficult to scale.",
    solution:
      "Built an AI-assisted research pipeline that transforms Google Maps business data and customer reviews into structured business briefs.",
    tech: "Python · Claude API · Google Places API · JSON Workflows",
    outcome:
      "Transforms raw business data into sales-ready and website-ready research briefs, dramatically reducing manual discovery and preparation time.",
    videoSrc: "/videos/featured/moreclientsco/demo.mp4",
  },
  {
    slug: "prospecting-tool",
    title: "Service Business Prospecting Assistant",
    category: "Internal Systems",
    problem:
      "Finding qualified local business leads manually requires significant searching, filtering, and organization.",
    solution:
      "Built a prospecting engine that discovers local service businesses, scores opportunities, removes duplicates, and organizes prospects into a structured outreach workflow.",
    tech: "Python · Google Places API · Google Sheets API",
    outcome:
      "Turns local market research into prioritized outreach lists that can be worked systematically and tracked through a lightweight CRM process.",
    videoSrc: "/videos/featured/prospecting-tool/demo.mp4",
  },
  {
    slug: "firstmove",
    title: "FirstMove",
    category: "Product + AI",
    problem:
      "Most people know social confidence improves through practice, but struggle to stay consistent long enough to build momentum.",
    solution:
      "Built a behavior-change application that turns social confidence into a daily training system using social reps, streaks, XP progression, reflection loops, and real-world connection tracking.",
    tech: "Next.js · Supabase · Claude API",
    outcome:
      "Creates a structured habit loop that rewards consistency, tracks progress, and encourages gradual real-world exposure over time.",
    videoSrc: "/videos/featured/firstmove/demo.mp4",
    frame: {
      type: "phone",
      src: "/images/frames/iphone-frame.png",
      alt: "iPhone frame for FirstMove demo video",
    },
  },
] satisfies FeaturedProjectData[];
