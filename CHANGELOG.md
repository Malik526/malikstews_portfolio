# CHANGELOG

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
