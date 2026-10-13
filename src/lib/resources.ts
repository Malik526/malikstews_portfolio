/**
 * resources.ts
 * Canonical list of free resources shared by /free-stuff and each resource's
 * own landing page. Add a new resource here to make it appear in the library
 * and to make its id available to claimResource.
 * Each `id` must also exist in the RESOURCES map in
 * free-stuff/google-apps-script/Code.gs — that is the server-side source of
 * truth the Apps Script Web App validates against.
 *
 * `accessUrl` is where the success state sends someone after their claim is
 * confirmed. Resources are delivered from their canonical home (e.g. a GitHub
 * repository), not from a packaged copy hosted on this site.
 */

export interface Resource {
  id: string;
  name: string;
  description: string;
  href: string;
  ctaLabel: string;
  accessUrl: string;
}

// Canonical distribution for the AI Engineering Harness. The site captures the
// lead; GitHub delivers the software, so it never drifts behind a stale copy.
export const AI_HARNESS_REPO_URL = "https://github.com/Malik526/ai-engineering-harness";

export const resources: Resource[] = [
  {
    id: "ai-harness",
    name: "AI Engineering Harness",
    description:
      "The system I use to make AI coding agents more consistent: shared policies, deterministic verification, reusable workflows, and an optional autonomous build loop.",
    href: "/free-stuff/ai-harness",
    ctaLabel: "Get the Harness",
    accessUrl: AI_HARNESS_REPO_URL,
  },
];

export function getResource(id: string): Resource {
  const resource = resources.find((item) => item.id === id);
  if (!resource) {
    throw new Error(`Unknown resource id: ${id}`);
  }
  return resource;
}
