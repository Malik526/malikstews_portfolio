/**
 * aiHarnessContent.ts
 * Single source of truth for all text content on the /free-stuff/ai-harness page.
 */

export const aiHarnessMeta = {
  title: "AI Engineering Harness | Malik Stewart",
  description:
    "The system I use to make AI coding agents more consistent: shared engineering policies, deterministic verification, scoped project context, reusable workflows, and optional Autobuild orchestration. Free on GitHub.",
};

export const aiHarnessHero = {
  label: "FREE RESOURCE",
  headline: "AI Engineering Harness",
  subtext:
    "The system I use to make AI coding agents more consistent: shared engineering policies, deterministic verification, scoped project context, reusable workflows, and an optional autonomous build loop.",
  includes: [
    "Shared engineering policies for Claude Code and Codex",
    "Deterministic verification and commit safeguards",
    "Scoped project context instead of one giant instruction file",
    "Reusable workflow skills",
    "Autobuild, an optional autonomous build loop",
  ],
  evolutionNote:
    "The first version was a set of persistent Markdown instructions. It helped, but instructions alone hit a consistency ceiling, so I rebuilt it into a real engineering system.",
  deliveryNote:
    "You get the full GitHub repository, always the latest version. Setup instructions live in the README.",
};

export const aiHarnessForm = {
  nameLabel: "Name",
  emailLabel: "Email",
  submitLabel: "Get the AI Engineering Harness",
  submittingLabel: "Sending...",
  successHeadlineNew: "You're in.",
  successHeadlineExisting: "You're already on the list.",
  successBody: "Your access to the AI Engineering Harness is ready. The full repository is on GitHub.",
  autobuildNote:
    "It includes the core harness plus Autobuild. Autobuild is optional: you can use the base harness without it.",
  githubCtaLabel: "Open the AI Engineering Harness on GitHub",
  genericError: "Something went wrong. Please try again.",
  invalidNameError: "Enter your name.",
  invalidEmailError: "Enter a valid email address.",
};
