# Malik's AI Coding Harness

A small set of global policy files I use to keep AI coding agents (Claude
Code, Codex, or anything else that reads project instructions) consistent
across every project I work in — instead of re-explaining the same standards
in every repo, or watching an agent drift into inconsistent habits over a
long session.

## The problem this solves

Left alone, a coding agent will happily invent its own conventions per
session: different commit message formats, inconsistent comment density,
skipped verification steps, changelog entries that never get written. None
of that is a model capability problem — it's a missing-policy problem. These
five files are the policy layer that fixes it.

## What's included

- **coding.md** — Modularity, TypeScript/frontend conventions, and the rule
  to read and follow existing patterns before introducing new ones.
- **documentation.md** — What context an agent should and shouldn't load,
  code comment standards, and a changelog policy (what belongs in
  `CHANGELOG.md`, how entries are structured, when to write one).
- **git.md** — Commit message formats, commit safety rules (never commit
  secrets, never revert someone else's uncommitted work), and a
  changelog-before-commit check.
- **security.md** — Secrets and credentials handling, pre-commit checks, and
  rules for external service credentials.
- **verification.md** — What to run before calling a change complete (tests,
  type checks, lint, build), how to report verification honestly, and how to
  scale verification depth to risk.

These are intentionally vendor-neutral — nothing in them is specific to one
AI tool, one project, or one client.

## How I use these

I keep the originals in a local `~/.agents/` directory that every project on
my machine points to. Each project also gets its own project-local
instruction file (for me, usually `AGENTS.md` or `CLAUDE.md`) that says,
roughly: "follow the global policy in `~/.agents/`, and here is what's
specific to this repo." The global files stay generic; the project file
carries the project-specific stuff — design system, routing conventions,
domain rules. Project-local instructions can override global policy when a
project needs something stricter or different; they just shouldn't
contradict it silently.

## How to adapt these for yourself

1. Drop these files somewhere your agent's instructions can reference —
   a global config directory, or directly inside a project.
2. Point your project-level instructions file at them (a one-line "follow
   the policy in X" is enough).
3. Read through each file and change anything that doesn't match how you
   actually want to work. These reflect my defaults, not universal law —
   your commit message format, comment style, or verification bar may
   reasonably differ.
4. Don't apply all of it blindly. Keep what's useful, cut or rewrite what
   isn't. Treat this as a starting point, not a spec to comply with.

## A note on scope

This package is the global-policy layer only. It doesn't include
project-specific skills, scripts, or context — those are intentionally left
out because they're only useful inside the repos they were built for.
