export type ProjectCategory =
  | "Internal Systems & Products"
  | "Client & Operational Systems"
  | "Analytics & Decision Systems";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  status: string;
  featured?: boolean;
  summary: string;
  overview: string;
  audience: string;
  problem: string[];
  systems: string[];
  tools: string[];
  outcomes: string[];
  takeaways: string[];
};

export const categories: Array<{
  title: ProjectCategory;
  description: string;
  signals: string[];
}> = [
  {
    title: "Internal Systems & Products",
    description:
      "Products, automations, and internal tools built to solve recurring workflow, behavior, or business problems.",
    signals: ["Product thinking", "Automation", "Tooling", "Workflow design"],
  },
  {
    title: "Client & Operational Systems",
    description:
      "Client-facing systems and operational infrastructure built around lead capture, workflow improvement, and business growth.",
    signals: ["Lead capture", "CRM thinking", "Operational consulting", "Acquisition systems"],
  },
  {
    title: "Analytics & Decision Systems",
    description:
      "Analytics, modeling, and decision-support projects focused on business reasoning, ROI, and strategic interpretation.",
    signals: ["Analytical reasoning", "Decision support", "ROI modeling", "Business intelligence"],
  },
];

export const projects: Project[] = [
  {
    slug: "firstmove",
    title: "FirstMove",
    category: "Internal Systems & Products",
    status: "Live MVP",
    featured: true,
    summary: "A behavior-change product system that turns social confidence into a low-friction daily habit loop.",
    overview:
      "FirstMove helps users build social momentum through one intentional social action per day. It is designed around consistency, low pressure, and behavioral feedback.",
    audience: "People who want to build social confidence through small repeatable actions.",
    problem: [
      "Social confidence products often make the first action too large.",
      "Users need a simple loop that rewards showing up, not perfect outcomes.",
      "Retention depends on reducing hesitation at the moment of action.",
    ],
    systems: [
      "Daily rep model with a minimum viable social action.",
      "Streak and XP logic to reinforce consistency.",
      "Prompt library organized around approachable everyday interactions.",
      "Reflection flow for capturing progress without slowing the user down.",
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Claude API", "Lovable.dev"],
    outcomes: [
      "Clarified the MVP around a repeatable habit loop.",
      "Defined retention and engagement metrics before scaling.",
      "Created a product system that can expand into analytics-driven coaching.",
    ],
    takeaways: [
      "Behavioral products need fewer features and sharper loops early.",
      "Small actions become powerful when the system rewards consistency.",
      "Analytics should be designed before the product reaches scale.",
    ],
  },
  {
    slug: "service-business-prospecting-assistant",
    title: "Service Business Prospecting Assistant",
    category: "Internal Systems & Products",
    status: "In Development",
    summary: "An internal workflow for identifying, qualifying, and organizing service-business leads.",
    overview:
      "A prospecting assistant for turning scattered local business research into a structured acquisition workflow with clearer qualification logic.",
    audience: "Growth operators and service-business builders who need repeatable acquisition infrastructure.",
    problem: [
      "Lead research gets fragmented across tabs, notes, and spreadsheets.",
      "Qualification criteria need to be applied consistently.",
      "Prospecting needs an operating system before becoming a CRM process.",
    ],
    systems: [
      "Prospect intake structure for business, market, and outreach context.",
      "Qualification logic for ranking better opportunities.",
      "Research notes organized around pain points and next actions.",
      "Architecture for AI-assisted enrichment and repeatable outreach.",
    ],
    tools: ["Python", "APIs", "Google Sheets", "GPT APIs", "VS Code", "GitHub"],
    outcomes: [
      "Created a clearer workflow for turning research into ranked opportunities.",
      "Reduced ambiguity around which prospects deserve deeper outreach.",
      "Built a foundation for future CRM integration.",
    ],
    takeaways: [
      "Good automation starts with clean decision rules.",
      "Prospecting systems need to preserve context.",
      "The best tools reduce the next decision a human has to make.",
    ],
  },
  {
    slug: "job-automation-tool",
    title: "Job Automation Tool",
    category: "Internal Systems & Products",
    status: "In Development",
    featured: true,
    summary: "A workflow automation project for organizing job search data, applications, and follow-up actions.",
    overview:
      "A structured job-search operating system for tracking applications, deadlines, contacts, documents, and follow-up actions.",
    audience: "Job seekers managing many roles, companies, contacts, and timelines.",
    problem: [
      "Applications, contacts, documents, and statuses become fragmented.",
      "Manual tracking creates missed follow-up windows.",
      "Users need visibility into pipeline health and next actions.",
    ],
    systems: [
      "Application tracker with role, company, status, and priority fields.",
      "Follow-up workflow for next actions and timing.",
      "Opportunity classification by fit, stage, and response quality.",
      "Roadmap for reminders, document generation, and analytics.",
    ],
    tools: ["Python", "CSV", "Google Sheets", "Automation Scripts", "GitHub"],
    outcomes: [
      "Defined a repeatable job-search pipeline.",
      "Created a basis for reminder automation and application analytics.",
      "Turned a personal workflow into an operational system.",
    ],
    takeaways: [
      "Personal workflows benefit from business systems thinking.",
      "Status data is useful only when it drives a next action.",
      "Automation should reduce cognitive load first.",
    ],
  },
  {
    slug: "home-chef-jerry",
    title: "Home Chef Jerry",
    category: "Client & Operational Systems",
    status: "Case Study",
    featured: true,
    summary: "A client-facing growth system focused on lead capture, service positioning, and follow-up structure.",
    overview:
      "A service-business case study built around clearer digital acquisition, premium positioning, and operational follow-through.",
    audience: "A personal chef service needing stronger inquiry flow and client communication.",
    problem: [
      "The path from interest to booked conversation needed to be clearer.",
      "Client inquiries required better qualification and follow-up structure.",
      "Messaging needed to communicate trust, fit, and service value.",
    ],
    systems: [
      "Service positioning framework for clearer value communication.",
      "Lead capture flow structured around client needs.",
      "Inquiry workflow for routing and follow-up.",
      "Future CRM path for tracking status and response quality.",
    ],
    tools: ["Framer", "Forms", "CRM Thinking", "Copy Strategy", "Analytics Planning"],
    outcomes: [
      "Created a clearer digital path from interest to action.",
      "Improved how the service communicates trust and premium positioning.",
      "Established a foundation for acquisition and follow-up infrastructure.",
    ],
    takeaways: [
      "A service website is an operations surface, not just a brochure.",
      "Premium services need trust signals and frictionless inquiry paths.",
      "Lead capture quality improves when messaging and workflow are designed together.",
    ],
  },
  {
    slug: "movie-analytics-project",
    title: "Movie Analytics Project",
    category: "Analytics & Decision Systems",
    status: "Case Study",
    featured: true,
    summary: "A decision-support analytics project exploring performance signals, market patterns, and ROI interpretation.",
    overview:
      "An analytics project using film data to practice translating messy market signals into business interpretation.",
    audience: "Business analysts and decision makers evaluating creative-market performance.",
    problem: [
      "Raw performance data does not explain why a movie succeeds.",
      "Business decisions require context across budget, genre, timing, and ROI.",
      "Analytics work needs to communicate uncertainty and assumptions clearly.",
    ],
    systems: [
      "Analytical framing for performance, budget, and return signals.",
      "Exploratory workflow for comparing movie attributes.",
      "Interpretation layer focused on business implications.",
      "Future dashboard path for filtering and ROI reasoning.",
    ],
    tools: ["Python", "Pandas", "SQL", "Visualization", "Business Analysis"],
    outcomes: [
      "Built a structure for business-aware analytics storytelling.",
      "Identified how context changes the meaning of performance metrics.",
      "Prepared the project for a future dashboard iteration.",
    ],
    takeaways: [
      "Analytics is valuable when it improves judgment under uncertainty.",
      "ROI reasoning requires visible assumptions.",
      "A clear narrative matters as much as the model behind it.",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
