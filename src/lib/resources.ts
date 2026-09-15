/**
 * resources.ts
 * Canonical list of downloadable free resources shared by /free-stuff and
 * each resource's own landing page. Add a new resource here to make it
 * appear in the library and to make its id available to claimResource.
 * Each `id` must also exist in the RESOURCES map in
 * free-stuff/google-apps-script/Code.gs — that is the server-side source of
 * truth the Apps Script Web App validates against.
 */

export interface Resource {
  id: string;
  name: string;
  description: string;
  href: string;
  ctaLabel: string;
  downloadPath: string;
  downloadFilename: string;
}

export const resources: Resource[] = [
  {
    id: "ai-harness",
    name: "AI Coding Harness",
    description:
      "The engineering policies I use to keep coding agents consistent and prevent them from drifting off track.",
    href: "/free-stuff/ai-harness",
    ctaLabel: "Get the Harness",
    downloadPath: "/downloads/ai-harness/malik-ai-harness-v1.zip",
    downloadFilename: "malik-ai-harness-v1.zip",
  },
];

export function getResource(id: string): Resource {
  const resource = resources.find((item) => item.id === id);
  if (!resource) {
    throw new Error(`Unknown resource id: ${id}`);
  }
  return resource;
}
