# Portfolio Repository Instructions

## Purpose

This repository contains Malik Stewart's personal engineering portfolio.

The portfolio should primarily position Malik as:

Full-Stack Engineer | GTM Systems | Applied AI & Automation

Customer-facing, GTM, and sales experience should support the engineering story rather than lead it.

## Project Structure

- `src/pages/PortfolioPage.tsx` assembles the main portfolio route and controls homepage section order.
- `src/pages/LeadGenPage.tsx` assembles the lead generation tool route.
- `src/lib/content.ts` is the canonical content source for the main portfolio.
- `src/lib/leadGenContent.ts` is the canonical content source for the lead generation page.
- `src/data/featuredProjects.ts` stores featured project metadata, video paths, embeds, project links, and visual summary data.
- `src/components/sections/` contains page-level sections.
- `src/components/ui/` contains reusable presentation components.
- `src/components/layout/` contains shared page chrome such as headers and footer.
- `public/videos/featured/{project-slug}/demo.mp4` is the expected path convention for featured project demo videos.
- `public/assets/images/` contains portfolio image assets.
- `src/pages/FreeStuffPage.tsx` and `src/pages/AiHarnessPage.tsx` assemble the `/free-stuff` resource library and its first resource's landing page.
- `src/lib/resources.ts` is the canonical list of downloadable free resources; add an entry there (and a matching `RESOURCES` entry in `free-stuff/google-apps-script/Code.gs`) to add a new resource.
- `src/lib/claimResource.ts` submits free-resource form claims to a Google Apps Script Web App that writes to a Google Sheet — see `free-stuff/google-apps-script/README.md` for setup.
- `free-stuff/<resource>/` holds source material and packaging for a downloadable resource (not the website route, which lives under `src/pages/`). `npm run build:ai-harness` regenerates the AI Harness ZIP from `~/.agents` — see `scripts/build-ai-harness.mjs`.

## Project Conventions

- Preserve the existing design system unless the task explicitly requires a redesign.
- Prefer updating existing reusable components, section components, and data structures over duplicating markup.
- Keep engineering projects and technical experience above sales/GTM content in the main portfolio flow.
- Keep customer-facing, GTM, and sales copy grounded in technical outcomes, systems, integrations, automation, or product delivery.
- Use the current resume as the canonical source for professional experience when supplied.
- Keep portfolio copy centralized in `src/lib/content.ts` unless the content belongs only to another route-specific source.
- Keep featured project details centralized in `src/data/featuredProjects.ts`.
- Personal portfolio contact email: `malik23stewart23@gmail.com`
- Canonical LinkedIn: `https://www.linkedin.com/in/malik-stewart-abb2a1121/`

## Completion

Follow global Git, documentation, security, and verification policies.

For meaningful repository changes:

- update the canonical changelog at `CHANGELOG.md`;
- run the repository's relevant verification command, normally `npm run build`;
- inspect the final diff before reporting completion.
