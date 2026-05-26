/**
 * content.ts
 * Single source of truth for ALL text content on the portfolio.
 * No hardcoded strings in component files — import from here.
 * Update this file to change any copy without touching component logic.
 */

// --- Navigation ---
export const nav = {
  name: "Malik Stewart",
  links: [
    { label: "Work", href: "#work" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Hire Me", href: "mailto:malik@moreclientsco.com" },
};

// --- Hero Section ---
export const hero = {
  label: "AVAILABLE FOR OPPORTUNITIES",
  name: "Malik Stewart",
  title: "Systems Builder & AI Automation Specialist",
  bio: "I build systems that solve real business problems — and I communicate them clearly enough that the people who need them actually use them.",
  cta1: { label: "View Work", href: "#work" },
  cta2: { label: "Get In Touch", href: "#contact" },
  // TODO: replace with real photo
  photo: "https://placehold.co/480x600/e8e7ef/444652?text=Photo+Coming+Soon",
  badge: "CS & Business Graduate · Charleston Southern University",
};

// --- Ticker Banner ---
export const ticker = {
  items: [
    "Systems Thinking",
    "AI Automation",
    "Growth Infrastructure",
    "Operational Execution",
    "Cross-functional Communication",
    "Problem Solving",
    "Analytics",
    "Build. Deploy. Deliver.",
  ],
};

// --- Capabilities Section ---
export const capabilities = {
  label: "CAPABILITIES",
  tagline: "Technical precision meets human-centered design.",
  items: [
    {
      icon: "hub",
      title: "AI Automation & Pipelines",
      description:
        "Building end-to-end AI agent workflows using Claude API, Google Maps API, and orchestration tools. From research pipelines to lead generation systems to automated growth infrastructure.",
    },
    {
      icon: "bolt",
      title: "Growth Systems & Infrastructure",
      description:
        "Designing and building the operational backbone of growing businesses — lead capture, CRM architecture, automated follow-ups, referral systems, and client acquisition pipelines.",
    },
    {
      icon: "visibility",
      title: "Analytics & Decision Systems",
      description:
        "Translating raw data into actionable business intelligence. ROI modeling, performance dashboards, and decision-support tools that help operators move faster with more confidence.",
    },
  ],
};

// --- Projects Section ---
export interface Project {
  category: string;
  title: string;
  description: string;
  // TODO: replace each placeholder src with a real screenshot
  image: string;
}

export const projects = {
  label: "SELECTED WORK",
  heading: "Recent Systems & Automations",
  items: [
    {
      category: "AI AUTOMATION + GROWTH SYSTEMS",
      title: "MoreClientsCo Growth Pipeline",
      description:
        "A fully automated growth system for a local service business agency — AI research agents, lead generation pipeline, Supabase CRM, and automated follow-up sequences.",
      // TODO: replace with real screenshot
      image: "https://placehold.co/480x480/eeedf5/444652?text=MoreClientsCo",
    },
    {
      category: "INTERNAL SYSTEMS",
      title: "Service Business Prospecting Assistant",
      description:
        "Python + Google Maps API pipeline that identifies, scores, and organizes local service business leads automatically. Writes structured data to Google Sheets with real-time deduplication.",
      // TODO: replace with real screenshot
      image: "https://placehold.co/480x480/eeedf5/444652?text=Prospecting+Tool",
    },
    {
      category: "PRODUCT · AI",
      title: "FirstMove",
      description:
        "A behavior-change product system built on Next.js and Supabase that turns social confidence into a low-friction daily habit loop using streak logic and Claude API.",
      // TODO: replace with real screenshot
      image: "https://placehold.co/480x480/eeedf5/444652?text=FirstMove",
    },
    {
      category: "AUTOMATION · AI",
      title: "Job Automation Tool",
      description:
        "Workflow automation system for organizing job search pipelines — uses AI to parse job descriptions, extract requirements, and match against candidate profile.",
      // TODO: replace with real screenshot
      image: "https://placehold.co/480x480/eeedf5/444652?text=Job+Automation",
    },
    {
      category: "CLIENT SYSTEMS",
      title: "Home Chef Jerry",
      description:
        "A client-facing growth system for a personal chef service — lead capture, service positioning, inquiry workflow, and CRM foundation.",
      // TODO: replace with real screenshot
      image: "https://placehold.co/480x480/eeedf5/444652?text=Home+Chef+Jerry",
    },
    {
      category: "ANALYTICS",
      title: "Movie Analytics Project",
      description:
        "Decision-support analytics project exploring film performance signals, budget ROI, and market pattern interpretation using Python, Pandas, and SQL.",
      // TODO: replace with real screenshot
      image: "https://placehold.co/480x480/eeedf5/444652?text=Movie+Analytics",
    },
  ] satisfies Project[],
};

// --- Principles Section ---
export const principles = {
  label: "THE OPERATING PHILOSOPHY",
  heading: "Four principles that guide every build.",
  subtext:
    "Systems are only as good as the adoption they receive. I prioritize the human element as much as the technical infrastructure.",
  items: [
    {
      number: "01",
      title: "Start With The Operating Problem",
      body: "Find the repeated friction: missed follow-ups, manual steps, weak visibility, unclear ownership, or inconsistent decisions.",
    },
    {
      number: "02",
      title: "Turn Workflow Into Structure",
      body: "Create a data model, repeatable process, or lightweight tool that makes the next action obvious.",
    },
    {
      number: "03",
      title: "Automate After The Logic Is Clear",
      body: "Automation works best when the rules, exceptions, and handoff points are understood first.",
    },
    {
      number: "04",
      title: "Use Analytics To Improve Judgment",
      body: "Dashboards and models should help someone decide, prioritize, or explain tradeoffs — not just display data.",
    },
  ],
};

// --- Experience Section ---
export interface ExperienceItem {
  title: string;
  company: string;
  dates: string;
  description: string;
  isLast?: boolean;
}

export const experience = {
  label: "EXPERIENCE",
  heading: "A career built on operational excellence.",
  items: [
    {
      title: "Founder",
      company: "MoreClientsCo",
      dates: "2026 — PRESENT",
      description:
        "Building a growth systems agency for local service businesses. Custom websites, AI research pipelines, Supabase CRM, automated follow-ups, and referral systems that help service businesses get more clients without doing more work.",
    },
    {
      title: "Security Professional",
      company: "IBS Security → The Peninsula New York",
      dates: "CURRENT",
      description:
        "Contract security professional placed at The Peninsula New York — a five-star luxury property. High-touch operations, professional discretion, and real-time problem solving in a high-stakes environment.",
    },
    {
      title: "Founder",
      company: "Vintek (Discontinued)",
      dates: "2022",
      description:
        "Founded and operated an online retail business selling custom mechanical keyboards. Handled product design, logistics, photography, marketing, and Shopify management solo.",
      isLast: true,
    },
  ] satisfies ExperienceItem[],
};

// --- Contact Section ---
export const contact = {
  label: "PROJECT INQUIRIES & OPPORTUNITIES",
  heading: "Let's build something that actually works.",
  body: "I'm open to full-time roles, contracts, and collaborations where systems thinking and AI automation create real business impact.",
  email: "malik@moreclientsco.com",
  links: [
    { label: "LINKEDIN", href: "https://linkedin.com/in/malikstewart" },
    { label: "GITHUB", href: "https://github.com/malik526" },
  ],
};

// --- Footer ---
export const footer = {
  name: "Malik Stewart",
  tagline: "Built with purpose.",
  copyright: "© 2026 Malik Stewart",
  links: [
    { label: "LinkedIn", href: "https://linkedin.com/in/malikstewart" },
    { label: "GitHub", href: "https://github.com/malik526" },
    { label: "MoreClientsCo", href: "https://moreclientsco.com" },
  ],
};
