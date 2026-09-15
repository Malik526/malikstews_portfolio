# CHANGELOG

## [2026-09-15] — Fix Intermittent AI Harness Claim Failure

### Summary
The AI Harness form intermittently showed "Something went wrong. Please try again." after submission. Root cause: Google Apps Script Web Apps redirect every request to a one-time `script.googleusercontent.com` content URL, and that second hop is observably flaky in production — it intermittently 404s or takes 8-13s+ — even though the underlying `doPost()` and Sheet write had already succeeded. The generic error hid this distinction and gave no diagnostic detail.

### Changes
- `src/lib/claimResource.ts`: retries once on transport-level failure (bad HTTP status, network error, unparseable JSON) with a short delay. Safe to retry because Apps Script (`Code.gs`) dedupes by normalized email — a retried submission updates the existing row instead of duplicating it. A well-formed `{ok:false}` rejection from Apps Script is *not* retried, since that's a genuine rejection, not a transient failure. Added `console.debug`/`console.warn` logging of the raw Apps Script payload and each failed attempt.
- `src/components/sections/AiHarnessForm.tsx`: wrapped `triggerDownload` in its own try/catch (a download-trigger failure after a confirmed claim success is a distinct, separate failure, not a claim failure) and labeled the two existing console.error calls explicitly as CLAIM FAILURE (Apps Script rejected the submission) vs. an unconfirmed transport failure (both retries failed), so the real failure category is visible in dev tools instead of only a generic on-page message.

### Verification
- Reproduced the reported failure live in Chromium before the fix: POST → 302 → GET to the content-echo URL → 404 after ~11s → thrown error → correctly caught and shown as the generic error (confirmed via console: `claimResource request failed: Error: Apps Script request failed with status 404`). Re-ran immediately after with no code changes and it succeeded — confirming the 404 is Google-side infrastructure flakiness, not a deterministic bug.
- Confirmed `src/lib/resources.ts`'s `downloadPath` (`/downloads/ai-harness/malik-ai-harness-v1.zip`) is correct, and that the file exists, is non-zero size, and is a valid, uncorrupted ZIP (`python3 zipfile` test) via the local production preview, with correct `Content-Type: application/zip` and matching `Content-Length`.
- After the fix, ran 8 live end-to-end trials in real Chromium: 8/8 reached a confirmed success state (new or existing subscriber), 7/8 had a directly confirmed ZIP download (the 8th triggered the retry path — confirmed via console log that the Sheet write had already succeeded on attempt 1, since the retry correctly resolved to "existing" for a brand-new email — but the test harness's own download-listener timeout was too short for that unusually long retry sequence; the same download code path was independently confirmed working on other "existing"-status trials). Zero trials ended in the user-facing error state, versus a reproducible failure on the very first attempt before the fix.
- Ran `npm run build` (tsc + vite build) successfully.

### Known tradeoff
Worst case (both attempts hit the slow/flaky path) could take ~25s+ before the user sees a result. Not addressed here since it would require UX changes beyond this defect fix — flagged for a future pass if it proves common in practice.

---

## [2026-09-15] — Fix Netlify Direct-Link 404 on SPA Routes

### Summary
Direct-loading or refreshing a client-side route (e.g. `/free-stuff`, `/free-stuff/ai-harness`) returned Netlify's default 404 because no SPA fallback rewrite existed — Netlify tried to resolve those paths as real files before the client-side router could run.

### Changes
- Added `public/_redirects` with `/*    /index.html    200`, Netlify's documented SPA fallback rewrite (status 200, not a 301/302 — the URL stays visible while `index.html` is served). Vite copies `public/` verbatim into `dist/`, so this lands at `dist/_redirects` automatically on every build.
- Updated the root `README.md`, which still said "no deployment has been configured" — the site is now live on Netlify.

### Verification
- Ran `npm run build`; confirmed `dist/_redirects` exists with the exact expected content, and that `dist/assets/*` and `dist/downloads/ai-harness/malik-ai-harness-v1.zip` are still present as real files.
- `netlify-cli serve` failed with an internal CLI error reproducible even against an unrelated throwaway directory, confirming it's an environment/CLI issue unrelated to this change — not usable for local verification here.
- Built a small local server that faithfully replicates Netlify's documented rewrite semantics (real file wins; otherwise fall back to `index.html` with 200) and served the actual `dist/` output through it. Confirmed via curl and a real Chromium browser: `/`, `/free-stuff`, and `/free-stuff/ai-harness` all return 200 and render correctly on direct load; a full page refresh on `/free-stuff/ai-harness` stays on that URL and re-renders correctly; internal nav (Portfolio → Free Stuff → AI Harness → Back to Free Stuff) still works; real assets (`/assets/*.js`) and the harness ZIP (`/downloads/ai-harness/malik-ai-harness-v1.zip`) are served as themselves, not the HTML fallback; the ZIP download still completes successfully.
- This was a simulation of Netlify's documented behavior, not Netlify's actual production edge — true confirmation still requires checking the live Netlify deploy directly (see report).

---

## [2026-09-15] — Free Stuff / AI Coding Harness Lead Magnet

### Summary
Added a `/free-stuff` resource library and a `/free-stuff/ai-harness` landing page that captures name + email, records the requested resource in a Google Sheet via a Google Apps Script Web App, and immediately serves the AI Coding Harness ZIP. The harness ZIP is generated from the local `~/.agents` global-policy files through an explicit allowlist rather than maintained as a duplicate copy.

### Changes
- Added `/free-stuff` (`src/pages/FreeStuffPage.tsx`) and `/free-stuff/ai-harness` (`src/pages/AiHarnessPage.tsx`) routes to `src/App.tsx`, reusing the existing `LeadGenHeader`.
- Extracted `src/components/layout/MinimalFooter.tsx` from `LeadGenPage.tsx`'s inline footer so it can be shared across `/lead-gen` and the new `/free-stuff` pages.
- Added `src/lib/resources.ts` as the single place to register a downloadable resource (id, copy, download path) so future resources are one array entry plus a matching `RESOURCES` entry in the Apps Script.
- Added `src/lib/claimResource.ts`, which POSTs name/email/resourceId to a Google Apps Script Web App (`VITE_APPS_SCRIPT_URL`) that upserts one subscriber row per normalized email in a Google Sheet — no Supabase or other database involved. A duplicate email updates the existing row instead of erroring.
- Added `free-stuff/google-apps-script/Code.gs` and its setup `README.md` — the Apps Script source of truth (Google's side, not deployable from this repo) plus one-time and redeploy instructions.
- Added `scripts/build-ai-harness.mjs` (`npm run build:ai-harness`), which copies an explicit allowlist of five files from `~/.agents` (CODING.md, DOCUMENTATION.md, GIT.md, SECURITY.md, VERIFICATION.md) into `free-stuff/ai-harness/package/`, redacts one known private cross-reference, scans for secret-like patterns, and zips the result plus the public `free-stuff/ai-harness/README.md` into `free-stuff/ai-harness/dist/malik-ai-harness-v1.zip` and `public/downloads/ai-harness/malik-ai-harness-v1.zip`.
- The `public/downloads/ai-harness/` copy is committed (not gitignored) because `~/.agents` only exists on this machine, not on a deploy/CI server, so the ZIP can't be regenerated at build time — rerun `npm run build:ai-harness` and commit the result whenever `~/.agents` changes.

### Verification
- Ran `npm run build:ai-harness`; confirmed the output ZIP opens, contains the expected 6 files, and the known private cross-reference was redacted.
- Ran `npm run build` (tsc + vite build) successfully.
- Started the dev server and confirmed `/free-stuff`, `/free-stuff/ai-harness`, and the static ZIP download path all respond 200 with correct content.
- Could not complete a rendered-browser/mobile-layout check or a live Apps Script submission in this environment: headless Chromium is missing system NSS libraries (`libnss3`, `libnspr4`) that require `sudo apt-get install`, and no Google Apps Script deployment exists yet to submit against. Both are noted as follow-ups for the user.

---

## [2026-08-30 16:33 EDT] — Engineering Portfolio Repositioning and FirstMove Video Fit

### Summary
Repositioned the portfolio around full-stack engineering, GTM systems, and applied AI/automation, then fixed the FirstMove project demo so its vertical product video is preserved instead of cropped.

### Changes
- Updated portfolio positioning, metadata, README copy, site content, hero copy, contact email, LinkedIn URL, footer copy, and supporting GTM language to lead with Malik's engineering story.
- Reordered the homepage so technical capabilities and engineering projects appear before operational/customer-facing experience.
- Added `src/components/sections/TechnicalProfile.tsx` and related content for skills and education.
- Reworked featured projects around engineering systems including MoreClientsCo, FirstMove, the AI Agent Development Harness, the prospecting assistant, and Chef Gerry Catering.
- Updated reusable project rendering in `src/components/ui/FeaturedProject.tsx` to support video, Loom embeds, visual-only project summaries, links, and configurable video fit behavior.
- Added `videoFit: "contain"` for the FirstMove featured project so its vertical demo displays without unwanted cropping.
- Removed the old Approach section from the active section exports and homepage flow.

### Verification
- Ran `npm run build` successfully after documenting the August 30 changes.

---

## [2026-06-04 14:51 EDT] — Archive Capabilities and Cold Call Recording

### Summary
Archived the Capabilities section from the live page and removed the cold call recording placeholder from the Sales & Outreach section.

### Changes
- Removed `<CapabilityAreas />` from the homepage render order.
- Removed the Capabilities nav link so the header no longer points to an archived section.
- Removed the cold call recording placeholder markup from `ColdCalling.tsx`.
- Removed the unused `videoPlaceholder` content from `src/lib/content.ts`.
- Removed `CapabilityAreas` from the sections barrel export while leaving the component file available for future restoration.

### Verification
- Ran `npm run build` successfully.
- Confirmed the recording placeholder text and capabilities anchor are no longer present in active source paths.

---

## [2026-06-04 13:16 EDT] — Cold Calling & Sales Experience Section

### Summary
Added a new editorial Cold Calling & Sales Experience section between Capabilities and Selected Work without changing the existing sections, typography system, or project layout.

### Changes
- Added `src/components/sections/ColdCalling.tsx` for sales stats, outbound activity details, and a dark navy cold call recording placeholder.
- Added the `coldCalling` content key to `src/lib/content.ts`.
- Exported the new section from `src/components/sections/index.ts`.
- Inserted `<ColdCalling />` between `<CapabilityAreas />` and `<FeaturedProjects />` in `src/App.tsx`.

### Verification
- Ran `npm run build` successfully.
- Started the Vite dev server and verified the local page responds with HTTP 200.
- Confirmed no emoji characters were found in `src` or `CHANGELOG.md`.

---

## [2026-05-28] — Featured Project Videos + Fullscreen Control

### Summary
Replaced the Recent Systems & Automations project card grid with three video-led featured project showcases and added a reliable custom fullscreen button for each video.

### Changes
- Added `src/data/featuredProjects.ts` as the metadata source for featured projects.
- Added `src/components/ui/FeaturedProject.tsx` for reusable video showcase blocks.
- Added `src/components/sections/FeaturedProjectsSection.tsx` to render the three featured projects.
- Updated `src/components/sections/FeaturedProjects.tsx` to render featured video projects instead of the old card grid.
- Renamed featured video files to the expected `demo.mp4` convention:
  - `public/videos/featured/moreclientsco/demo.mp4`
  - `public/videos/featured/prospecting-tool/demo.mp4`
  - `public/videos/featured/firstmove/demo.mp4`
- Added a custom fullscreen button that calls `requestFullscreen()` with `webkitEnterFullscreen()` fallback for iOS Safari.
- Wired FirstMove to use `/images/frames/iphone-frame.png` only for the FirstMove video frame.

### Notes
- Existing project data for Job Automation, Home Chef Jerry, and Movie Analytics remains in `src/lib/content.ts` for future Additional Projects expansion.
- The iPhone frame path is wired, but `public/images/frames/iphone-frame.png` is not currently present in the repo.

---

## [2026-05-26] — Hero Headshot: Replace Placeholder with Real Photo

### Summary
Replaced the `hero.photo` placeholder src in the Hero section with the real headshot image. No layout, spacing, color, or structural changes.

### Change
- **File:** `src/components/sections/Hero.tsx`
- **Element:** `<img>` in the hero right column
- **src:** `hero.photo` (placeholder) → `/assets/images/profile/headsot_0.jpeg`
- **alt:** Updated to `"Malik Stewart — Systems Builder & AI Automation Specialist"`
- **Removed:** `{/* TODO: replace with real photo */}` comment
- All existing classes preserved: `w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700`
- Parallax `ref={imgRef}`, container styles, badge — all untouched

> Note: filename `headsot_0.jpeg` has a typo (missing 'h'); used exact filename as found in `/public/assets/images/profile/`.

---

## [2026-05-26] — Accent Color Shift: Selected Titles to Gold

### Summary
Changed specific title/label elements from navy (`text-primary` / `#00236f`) or muted (`text-on-surface-variant`) to warm gold (`text-secondary` / `#7b5800`). No layout, spacing, content, or structural changes.

### Color Used
- `text-secondary` (`#7b5800`) — dark warm gold; chosen over `secondary-container` (`#fdc656`) for legibility on light backgrounds

### Elements Changed

| File | Element |
|------|---------|
| `src/components/sections/Hero.tsx` | Hero subtitle `h2` — "Systems Builder & AI Automation Specialist" |
| `src/components/sections/CapabilityAreas.tsx` | All three capability card titles `h4` |
| `src/components/sections/Approach.tsx` | All four principle titles `h6` |
| `src/components/ui/ExperienceEntry.tsx` | Company name `p` in each experience entry |

---

## [2026-05-26] — Full Stitch → Modular React Rebuild

### Summary
Rebuilt the Google Stitch portfolio HTML prototype as a complete Vite + React + TypeScript + Tailwind project. All placeholder content replaced with real content. Old router-based file structure replaced with a flat single-page architecture.

### Architecture
- **No router** — single-page with anchor scroll navigation
- **Content centralized** — all text in `src/lib/content.ts`, zero hardcoded strings in components
- **Fully typed** — TypeScript strict mode, zero `tsc --noEmit` errors

### Files Created / Replaced

| File | Purpose |
|------|---------|
| `tailwind.config.ts` | Exact Stitch color system, typography scale, spacing tokens |
| `src/styles/globals.css` | Google Fonts, ticker animation keyframe, soft-shadow, editorial-line |
| `src/lib/content.ts` | All text content: nav, hero, ticker, capabilities, projects, principles, experience, contact, footer |
| `src/components/ui/Button.tsx` | Primary + outline button variants, renders `<a>` or `<button>` |
| `src/components/ui/ProjectCard.tsx` | Project card with hover zoom image |
| `src/components/ui/ExperienceEntry.tsx` | Experience row with optional bottom border |
| `src/components/layout/Header.tsx` | Fixed nav with blur backdrop, smooth-scroll anchors |
| `src/components/layout/Footer.tsx` | Brand, tagline, copyright, external links |
| `src/components/sections/Hero.tsx` | Hero with parallax scroll, reduced spacing, education badge |
| `src/components/sections/Ticker.tsx` | Infinite CSS marquee, duplicated items for seamless loop |
| `src/components/sections/CapabilityAreas.tsx` | 3-column capabilities grid on warm background |
| `src/components/sections/FeaturedProjects.tsx` | 6-project 3-col grid using ProjectCard |
| `src/components/sections/Approach.tsx` | 2-col principles section, numbered 01–04 |
| `src/components/sections/OperationalExperience.tsx` | 12-col resume section using ExperienceEntry |
| `src/components/sections/ContactCta.tsx` | Centered contact with email + LinkedIn/GitHub links |
| `src/App.tsx` | Root component, no router, mounts all sections in order |
| `src/main.tsx` | Vite entry point, imports globals.css |

### Spacing Reductions Applied (per spec)
- Hero: `mb-24 lg:mb-40` → `mb-12 lg:mb-20`
- Ticker banner: `mb-40` → `mb-20`
- Capabilities: `py-32 lg:py-40` → `py-16 lg:py-20`
- Projects: `py-32 lg:py-40` → `py-16 lg:py-20`
- Principles: `py-32` → `py-16`
- Experience: `py-32` → `py-16`
- Contact: `py-32 lg:py-60` → `py-16 lg:py-24`
- Footer: `mt-40` → `mt-0`

### Content Replaced
- All 6 placeholder projects → real projects (MoreClientsCo, Prospecting Tool, FirstMove, Job Automation, Home Chef Jerry, Movie Analytics)
- All 3 placeholder capabilities → real capabilities (AI Automation, Growth Systems, Analytics)
- All 3 placeholder jobs → real experience (MoreClientsCo, IBS Security/Peninsula, Vintek)
- All 4 placeholder principles → real principles
- Contact email: `malik@stewart.design` → `malik@moreclientsco.com`
- Social links: removed Twitter, Dribbble; kept LinkedIn, GitHub
- Hero badge: removed "142+ SYSTEMS OPTIMIZED"; added education credential

### Files Removed
- `src/components/navigation/Navigation.tsx`
- `src/components/project/ProjectCard.tsx` (old)
- `src/components/project/ProjectTemplate.tsx`
- `src/components/layout/Layout.tsx`
- `src/components/ui/SectionHeading.tsx`
- `src/pages/Home.tsx`, `Projects.tsx`, `ProjectDetail.tsx`, `About.tsx`, `Contact.tsx`
- `src/data/projects.ts`, `src/data/experience.ts`
- `src/utils/ScrollToTop.tsx`
- `src/styles/global.css` (old path, replaced by `globals.css`)

### TODOs Remaining
- Replace `hero.photo` placeholder with real headshot
- Replace all 6 project image placeholders with real screenshots
- Update LinkedIn/GitHub URLs in `content.ts` with live profile links
- Implement mobile hamburger menu drawer (currently visual-only)
