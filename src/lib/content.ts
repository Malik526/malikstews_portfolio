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
    { label: "Experience", href: "#experience" },
    { label: "Tools", href: "/lead-gen" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Contact", href: "mailto:malik23stewart23@gmail.com" },
};

// --- Hero Section ---
export const hero = {
  label: "FULL-STACK ENGINEER | GTM SYSTEMS | APPLIED AI & AUTOMATION",
  name: "Malik Stewart",
  title: "Full-stack engineer building products, automation, and AI-powered systems.",
  bio: "I build full-stack products, GTM systems, automation, and applied AI workflows - from frontend experiences and APIs to databases, integrations, and agentic development systems.",
  cta1: { label: "View Projects", href: "#work" },
  cta2: { label: "LinkedIn", href: "https://www.linkedin.com/in/malik-stewart-abb2a1121/" },
  // TODO: replace with real photo
  photo: "https://placehold.co/480x600/e8e7ef/444652?text=Photo+Coming+Soon",
  badge: "Applied Computing, Business Concentration · Charleston Southern University",
};

// --- Ticker Banner ---
export const ticker = {
  items: [
    "Full-Stack Engineering",
    "Applied AI",
    "GTM Systems",
    "Python Automation",
    "React + Next.js",
    "FastAPI + AWS Lambda",
    "Supabase + PostgreSQL",
    "Build. Deploy. Deliver.",
  ],
};

// --- Capabilities Section ---
export const capabilities = {
  label: "TECHNICAL SUMMARY",
  tagline: "Engineering systems that connect product, automation, data, and real customer workflows.",
  items: [
    {
      icon: "code",
      title: "Full-Stack Product Engineering",
      description:
        "Building deployed applications with React, Next.js, TypeScript, Node.js, Supabase/Postgres, authentication, relational schemas, API integrations, and production debugging.",
    },
    {
      icon: "bolt",
      title: "GTM Systems & Automation",
      description:
        "Designing prospecting, enrichment, scoring, CRM, lead capture, follow-up, and reporting workflows that turn messy business data into usable operating systems.",
    },
    {
      icon: "hub",
      title: "Applied AI & Agentic Engineering",
      description:
        "Pairing AI-assisted reasoning with deterministic scripts, tests, builds, linting, type checks, and validation so recurring workflows become faster and more reliable.",
    },
  ],
};

// --- Cold Calling & Sales Experience Section ---
export const coldCalling = {
  label: "CUSTOMER & GTM EXPERIENCE",
  headline: "Technical work meets the real market.",
  subheadline:
    "The engineering work is grounded in live customer acquisition: discovery, objection handling, demo delivery, follow-up, and pipeline ownership.",
  stats: [
    {
      number: "100+",
      label: "Outbound Calls",
    },
    {
      number: "150+",
      label: "Campaign Emails",
    },
    {
      number: "6",
      label: "Qualified Meetings",
    },
    {
      number: "2",
      label: "Paying Clients",
    },
  ],
  activities: [
    {
      title: "Discovery & Outreach",
      description:
        "Ran outbound calls and campaign emails to local service businesses, reaching owners, qualifying pain points, and validating whether the systems solved real acquisition problems.",
    },
    {
      title: "Objection Handling",
      description:
        "Handled pricing concerns, existing vendor relationships, and timing hesitation with ROI math, business outcomes, and concrete demos instead of abstract claims.",
    },
    {
      title: "Demo Building & Delivery",
      description:
        "Built and delivered custom demo experiences for prospects so technical value could be evaluated through working examples.",
    },
    {
      title: "Follow-Up Systems",
      description:
        "Created structured follow-up across phone, email, text, and pipeline tracking so customer-facing work was measurable and repeatable.",
    },
    {
      title: "CRM & Pipeline Management",
      description:
        "Maintained Google Sheets-based CRM workflows with scoring, deduplication, status labels, and follow-up dates to prioritize outreach.",
    },
    {
      title: "ROI Pitch Framework",
      description:
        "Translated technical features into business terms by showing how websites, follow-up, and acquisition systems connect to revenue opportunities.",
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
  label: "SELECTED ENGINEERING WORK",
  heading: "Engineering Projects & Systems",
  items: [
    {
      category: "PYTHON + APPLIED AI + GTM SYSTEMS",
      title: "MoreClientsCo Growth Pipeline",
      description:
        "Python, API, data, and automation systems for local service business acquisition, with AI-assisted research and structured outputs for GTM execution.",
      // TODO: replace with real screenshot
      image: "https://placehold.co/480x480/eeedf5/444652?text=MoreClientsCo",
    },
    {
      category: "PYTHON + GOOGLE APIS",
      title: "Service Business Prospecting Assistant",
      description:
        "Python prospecting system that ingests public business data, scores leads, scrapes websites, deduplicates records, and organizes prospects through Google Sheets.",
      // TODO: replace with real screenshot
      image: "https://placehold.co/480x480/eeedf5/444652?text=Prospecting+Tool",
    },
    {
      category: "FULL-STACK PRODUCT",
      title: "FirstMove",
      description:
        "Deployed full-stack product using React/Next.js, TypeScript, Supabase/Postgres, authentication, persistent progress, and AI-assisted engineering workflows.",
      // TODO: replace with real screenshot
      image: "https://placehold.co/480x480/eeedf5/444652?text=FirstMove",
    },
    {
      category: "AGENTIC ENGINEERING",
      title: "AI Agent Development Harness",
      description:
        "Reusable Skills, project instructions, persistent memory, deterministic scripts, and verification workflows for recurring AI-agent development work.",
      // TODO: replace with real screenshot
      image: "https://placehold.co/480x480/eeedf5/444652?text=Agent+Harness",
    },
    {
      category: "CLIENT GTM SYSTEMS",
      title: "Chef Gerry Catering",
      description:
        "Client acquisition infrastructure for a catering business, including website, inquiry workflows, lead tracking, Google Business presence, and Resend follow-up automation.",
      // TODO: replace with real screenshot
      image: "https://placehold.co/480x480/eeedf5/444652?text=Chef+Gerry",
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

// --- Experience Section ---
export interface ExperienceItem {
  title: string;
  company: string;
  dates: string;
  description?: string;
  bullets?: string[];
  links?: { label: string; href: string }[];
  isLast?: boolean;
}

export const experience = {
  label: "EXPERIENCE",
  heading: "Engineering work tied to deployed products and business outcomes.",
  items: [
    {
      title: "Founding Engineer",
      company: "MoreClientsCo",
      dates: "MAY 2026 - PRESENT",
      bullets: [
        "Automated qualification and lead scoring for 4,000+ businesses by building a Python prospecting system that ingests public business data, applies weighted scoring, and organizes qualified prospects through the Google Sheets API and website scraping.",
        "Saved 20+ hours of manual prospecting and 8+ hours of research by engineering automated collection, enrichment, deduplication, and an AI research pipeline using Claude and Google Places APIs.",
        "Built a SaaS layer around the prospecting system using FastAPI endpoints deployed through AWS Lambda and a frontend application exposing prospecting, enrichment, and scoring workflows.",
        "Validated the system through real-world GTM execution across 100+ outbound calls, 150+ campaign emails, 6 qualified meetings, and 2 paying clients worth $2,500 total.",
      ],
    },
    {
      title: "Founder / Full-Stack Engineer",
      company: "FirstMove",
      dates: "AUG 2025 - PRESENT",
      bullets: [
        "Built and deployed a full-stack application using React/Next.js, TypeScript, Node.js, Supabase/Postgres, and AI-assisted engineering workflows.",
        "Designed daily missions, repeatable tasks, XP, levels, streaks, commitment goals, and persistent user progress.",
        "Implemented authentication and backend architecture using relational schemas, Supabase Auth, OAuth, user-linked records, and Row Level Security.",
        "Owned V1 from architecture through frontend, backend integrations, database design, debugging, deployment, and product iteration.",
      ],
      links: [{ label: "firstmove.dev", href: "https://firstmove.dev" }],
    },
    {
      title: "Go-to-Market Consultant | Growth Systems",
      company: "Chef Gerry Catering | Freelance",
      dates: "MAY 2026 - PRESENT",
      description:
        "Built the company's digital acquisition infrastructure by developing its website, inquiry workflows, lead tracking, Google Business presence, and automated email follow-up through Resend. Supported venue partnership prospecting, direct outreach, referral-channel development, follow-up, and website/search analytics.",
      links: [{ label: "chefgerrycatering.com", href: "https://chefgerrycatering.com" }],
    },
    {
      title: "Hospitality Officer",
      company: "The Peninsula New York & Faena New York (via IPS Security)",
      dates: "APR 2022 - JUL 2026",
      description:
        "Operated in five-star luxury environments serving executives, public figures, and international clientele.",
      isLast: true,
    },
  ] satisfies ExperienceItem[],
};

// --- Technical Profile Section ---
export const technicalProfile = {
  label: "SKILLS & EDUCATION",
  heading: "Current technical stack and academic background.",
  skillGroups: [
    {
      title: "Languages",
      items: ["Python", "TypeScript", "JavaScript", "SQL"],
    },
    {
      title: "Frontend & Product",
      items: ["React", "Next.js", "Tailwind CSS", "VS Code"],
    },
    {
      title: "Backend & Data",
      items: ["Node.js", "FastAPI", "Supabase", "PostgreSQL", "AWS Lambda", "REST APIs"],
    },
    {
      title: "APIs & Operations",
      items: ["Claude API", "Google Places API", "Google Maps API", "Google Sheets API", "Resend", "Git / GitHub", "Netlify"],
    },
  ],
  education: {
    degree: "Bachelor of Arts - Applied Computing, Business Concentration",
    school: "Charleston Southern University",
    date: "May 2025",
  },
};

// --- Contact Section ---
export const contact = {
  label: "PROJECT INQUIRIES & OPPORTUNITIES",
  heading: "Let's build useful systems.",
  body: "I'm open to full-time engineering roles, technical projects, and collaborations where products, automation, and applied AI create measurable business impact.",
  email: "malik23stewart23@gmail.com",
  links: [
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/malik-stewart-abb2a1121/" },
    { label: "GITHUB", href: "https://github.com/malik526" },
  ],
};

// --- Footer ---
export const footer = {
  name: "Malik Stewart",
  tagline: "Full-Stack Engineer | GTM Systems | Applied AI & Automation",
  copyright: "© 2026 Malik Stewart",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/malik-stewart-abb2a1121/" },
    { label: "GitHub", href: "https://github.com/malik526" },
    { label: "Email", href: "mailto:malik23stewart23@gmail.com" },
  ],
};
