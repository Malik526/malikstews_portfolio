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
  videoSrc?: string;
  videoFit?: "cover" | "contain";
  embed?: {
    type: "loom";
    src: string;
    title: string;
  };
  visual?: {
    title: string;
    items: string[];
  };
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
    category: "Python + Applied AI + GTM Systems",
    problem:
      "Researching local businesses manually before outreach or website development was slow, inconsistent, and difficult to scale.",
    solution:
      "Built an automated research pipeline that transforms public business data, customer reviews, and enrichment inputs into structured briefs for GTM execution.",
    tech: "Python · Claude API · Google Places API · Google Sheets API · JSON Workflows",
    outcome:
      "Turns raw business data into sales-ready and website-ready research briefs while reducing manual discovery and preparation time.",
    videoSrc: "/videos/featured/moreclientsco/demo.mp4",
  },
  {
    slug: "firstmove",
    title: "FirstMove",
    category: "Full-Stack Product",
    problem:
      "Most people know social confidence improves through practice, but struggle to stay consistent long enough to build momentum.",
    solution:
      "Built and deployed a full-stack behavior-change application with daily missions, repeatable tasks, XP, levels, streaks, commitment goals, and persistent user progress.",
    tech: "React/Next.js · TypeScript · Node.js · Supabase/Postgres · Supabase Auth · OAuth · RLS",
    outcome:
      "Owned V1 from architecture through frontend, backend integrations, database design, debugging, deployment, and product iteration.",
    videoSrc: "/videos/featured/firstmove/demo.mp4",
    videoFit: "contain",
    links: [{ label: "firstmove.dev", href: "https://firstmove.dev" }],
  },
  {
    slug: "ai-agent-development-harness",
    title: "AI Agent Development Harness",
    category: "Agentic Engineering / Developer Infrastructure",
    problem:
      "AI coding agents behave inconsistently across tools and projects, and without enforced rules they can skip verification, commit unreviewed changes, or touch protected branches.",
    solution:
      "Built a version-controlled harness of shared engineering policies that Claude Code and Codex both load through thin adapters, plus Autobuild, an optional controller that runs one approved brief through an implementer agent and an independent reviewer agent in an isolated Git worktree.",
    tech: "Python · Claude Code · Codex CLI · Git Worktrees · Bubblewrap Sandboxing · JSON Schema · YAML · pytest",
    outcome:
      "Verified live with both Claude Code and Codex as implementer and reviewer: runs either pass sandboxed validation and independent review before a checkpoint commit on their own run branch, or stop safely with work preserved, and never merge or push.",
    visual: {
      title: "Harness Layers",
      items: [
        "Shared policies loaded by Claude Code and Codex through thin adapters",
        "Commit guards, instruction audit, and manual completion checks",
        "Implementer and independent reviewer agents in an isolated worktree",
        "Controller-run sandboxed validation with no merge, push, or deploy",
      ],
    },
  },
  {
    slug: "w2-pipeline",
    title: "W2 Pipeline",
    category: "Python + Document Automation",
    problem:
      "Tax-preparation firms re-key client W-2 data by hand, a slow process where a single silent extraction error can flow into downstream tax workflows.",
    solution:
      "Built a W-2 processing pipeline that extracts each PDF or image into a typed record with OCR and a deterministic parser, checks it against 16 evidence-based validation rules, and routes anything uncertain to a mandatory human review step before JSON/CSV export.",
    tech: "Python · PaddleOCR · Tesseract · Pydantic · PyMuPDF · FastAPI · Next.js · TypeScript · pytest",
    outcome:
      "Reached 99.6% extraction accuracy and a 0.33% unsafe-acceptance rate with no false reviews on a 600-document synthetic benchmark at about 1.2-1.35s per document, run through single-document and batch CLIs or a local demo UI.",
    visual: {
      title: "Pipeline Stages",
      items: [
        "OCR extraction into a typed, canonical W-2 record",
        "16-rule evidence-based validation",
        "Mandatory human review for uncertain documents",
        "Deterministic JSON/CSV export after finalization",
      ],
    },
    links: [{ label: "GitHub repository", href: "https://github.com/Malik526/w2_pipeline" }],
  },
  {
    slug: "prospecting-tool",
    title: "Service Business Prospecting Assistant",
    category: "Python + Google APIs",
    problem:
      "Finding qualified local business leads manually requires significant searching, filtering, enrichment, and organization.",
    solution:
      "Built a Python prospecting system that automated qualification and lead scoring across 4,000+ businesses by ingesting public business data, applying weighted scoring, scraping websites, and organizing qualified prospects through the Google Sheets API.",
    tech: "Python · Claude API · Google Places API · Google Maps API · Google Sheets API · Website Scraping",
    outcome:
      "Automated collection, enrichment, deduplication, and AI-assisted research so prospecting workflows could be prioritized and worked systematically.",
    embed: {
      type: "loom",
      src: "https://www.loom.com/embed/40680343cb774aaca0a9ada5e9989503",
      title: "Service Business Prospecting Assistant Loom demo",
    },
    links: [
      { label: "Try the Lead Generator (free tier)", href: "/lead-gen" },
    ],
  },
  {
    slug: "chef-gerry-catering",
    title: "Chef Gerry Catering",
    category: "Client GTM Systems",
    problem:
      "A catering business needed practical acquisition infrastructure across web presence, inquiries, follow-up, and local visibility.",
    solution:
      "Built the company's website, inquiry workflows, lead tracking, Google Business presence, and automated email follow-up through Resend.",
    tech: "Website Development · Lead Capture · Resend · Google Business Profile · Search Analytics · Outreach Workflows",
    outcome:
      "Connected technical implementation with venue partnership prospecting, direct outreach, referral-channel development, and follow-up operations.",
    visual: {
      title: "Acquisition Infrastructure",
      items: [
        "Website and inquiry flow",
        "Lead tracking and follow-up",
        "Google Business presence",
        "Referral and venue outreach support",
      ],
    },
    links: [{ label: "chefgerrycatering.com", href: "https://chefgerrycatering.com" }],
  },
] satisfies FeaturedProjectData[];
