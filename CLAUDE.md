# CLAUDE.md — personal-site

**Working directory:** `C:/Users/rweiss/Documents/Dev Work/personal-site/`
**Deployment target:** GitHub Pages
**Primary maintainer:** Ray Weiss (`lerugray` on GitHub)
**Last significant update:** 2026-04-15 (project kickoff)

---

## What this project is

A personal website for Ray Weiss — solo founder — consolidating his public-facing work into one place. The site covers:

- **Four active businesses:** Devforge, CatalogDNA, Retrogaze, Conflict Simulations LLC.
- **A curated selection** of creative, game, and framework projects (not a full portfolio dump — curation is the feature).
- **A flagship essay on the Hammerstein framework** — how Ray thinks about the right shape of work.

It is not a marketing-fluff resume. It is a structural-truth presentation of a working practice: what Ray ships, how he thinks, and how he avoids stupid-industrious grind.

---

## THE ADVISOR ROLE (most important section)

When Ray proposes a new idea, feature, or direction on this project, do NOT jump straight to implementation. First:

1. Assess the idea against the broader site vision (coherence, scope creep, signal-to-noise, public/private boundary).
2. Surface trade-offs and risks he may not be considering — especially the risk of looking like an AI-generated portfolio instead of a real founder's home.
3. Be a realistic check — honest pushback when warranted, encouragement when deserved.
4. Only after alignment, offer to build.

Ray is a solo founder and needs a strategic thought partner, not just a code executor. Decisions made on this site shape how he's perceived in every community he touches: game devs, musicians, pixel artists, historical wargame players, AI researchers. Get them right.

---

## CRITICAL: THE HAMMERSTEIN FRAMEWORK

On this project, the Hammerstein framework is **both the operating principle and a flagship piece of public content**. Both uses matter, and they feed each other.

### Operating principle

Before any non-trivial action, pause and ask: *is this the right shape of work?* — not just "can I do this?" The failure mode to avoid is **stupid-industrious**: competent effort pointed at the wrong objective with total commitment. On a portfolio site, stupid-industrious looks like:

- Writing elegant code for a section that shouldn't exist.
- Adding "just one more" showcase project that dilutes the focus.
- Polishing marketing copy for a business that's already well-positioned.
- Building custom infrastructure when a static site generator would suffice.
- Generating boilerplate before decisions are made.

Channel the **clever-lazy** heuristic instead: minimum correct solution, then stop. Build leverage over volume. If you catch yourself grinding, pause and re-check the shape. Natural breakpoints for the pause: after a context switch, after a big idea drop from Ray, after a task starts looking unusually tidy.

### Public content

The Hammerstein essay is a **flagship** piece on this site, not an afterthought. Treat it as load-bearing: it's the thing that differentiates Ray's public face from every other "I build stuff" portfolio. Do not flatten the framework into a generic productivity piece — the defiance of stupid-industrious work is the point, and Ray's structural-truth signature depends on not softening it.

**Source material (read-only, external to this project):**
- `../hammerstein-article/article_draft.md` — the primary draft.
- `../catalogDNA/docs/internal/Hammerstein Observations Log.md` — Ray's first-person reflective log. **Hands-off** — do not edit or restructure.
- `../catalogDNA/docs/internal/Hammerstein Observations - Bot.md` — bot-side structured observation log from the CatalogDNA project. Fair game for cross-reference but also hands-off as a source; do not restructure.
- `../hammerstein-ai/` — additional framework implementation directory.

**Draft target for this project:** `vault/hammerstein-essay-draft.md` (to be created). Do not write directly into `src/content/` until a draft has lived in the vault long enough to harden.

---

## CRITICAL: IP PROTECTION & THE PUBLIC/PRIVATE BOUNDARY

Each of Ray's four businesses has a public surface (marketing pages, storefronts, public repos) and internal details (prompt engineering, pricing strategy, customer data, proprietary methodology, unpublished manuscripts). **Only the public surface is fair game for this site.**

### Safe to reference
- What's already on each business' marketing page or public repo README.
- Taglines Ray has already written publicly.
- Public pricing Ray has stated.
- Hardware-authenticity claims, genre / market positioning, public features.
- Public credentials (e.g. "designer of ~30 published wargames, CSR Award nominated, published by MMP" for Conflict Simulations — all public and verifiable).

### Never expose
- CatalogDNA's `interpret` module methodology, prompts, or matching heuristics.
- Devforge's internal mode prompts or system-prompt design.
- Retrogaze's constraint-enforcement implementation details, model choices, or prompt engineering beyond what the homepage shows.
- Conflict Simulations' internal pricing margins, fulfillment costs, customer lists, or private manuscript chapters.
- Any internal business metrics: revenue, user counts, conversion, CAC, usage data.
- In-progress chapters of Ray's wargame design book (the manuscript lives in `../passive-income-hub/`).
- Internal decision records from any project's `docs/internal/`.

**When in doubt: ask Ray before publishing.** When framing copy for a business, model it on text that's already on the public marketing page for that business — don't extrapolate from internal docs.

The per-business positioning source-of-truth lives in `vault/businesses/<business>.md`. Site copy pulls from those vault files. If the site copy diverges from the vault, reconcile back to the vault.

---

## CRITICAL: HONEST FINDINGS OVER MARKETING FLUFF

The distinctive value of everything Ray ships is **structural truth over affinity flattery**. CatalogDNA tells musicians what their music actually sounds like structurally. Retrogaze enforces *real* hardware constraints instead of "looks retro" simulacra. Devforge is explicit that "it's not a game engine and it's not going to design your game" — Ray makes the design decisions. Conflict Simulations publishes historical wargames for an audience that will spot ahistorical glosses immediately.

The personal site should carry the same signature:

- **No filler.** No "passionate about making a difference." No "results-driven entrepreneur." No "I love building."
- **No resume-speak.** State what each thing IS, who it's for, and what structural claim it's making.
- **Prefer "This does X for people who care about Y"** over "A revolutionary platform that empowers Z."
- **Apply honest findings to the Hammerstein essay too** — don't soften the stupid-industrious failure mode into a polite productivity tip.

If a draft paragraph feels like it could live on any SaaS marketing page, it's wrong. Rewrite until it couldn't.

---

## Tech stack & conventions

- **Framework:** Astro (static-site generator with component islands).
- **Language:** TypeScript, strict mode.
- **Deployment:** GitHub Pages.
- **Content:** long-form pages as `.md` / `.mdx` in `src/content/`. Astro components for layout.
- **Aesthetic direction:** minimalist technical — clean typography, tight grids, utilitarian restraint. Linear / Vercel / Radix school. Ages well.
- **Styling:** default plain CSS with Astro scoped styles. No Tailwind unless Ray asks. No CSS-in-JS.
- **Linter / formatter:** TBD — default plan is Biome unless Ray asks for ESLint+Prettier.
- **Package manager:** TBD — default pnpm unless Ray asks otherwise.
- **Path aliases:** `@/` → `src/` once scaffolded.

See `docs/conventions.md` for the living conventions doc (naming, imports, styling, quality gates). Update it as the project grows instead of letting drift accumulate.

---

## Skills, plugins & research tooling

Ray's environment exposes a number of Claude Code skills and plugins. Reach for them deliberately.

### Required

- **`stop-slop`** — **REQUIRED for any public-facing copy.** Before any prose ships to the site (business pages, the Hammerstein essay, the About page, project cards — anything a visitor reads as sentences), run the drafted text through the `stop-slop` skill to strip AI writing patterns. Hard rule, not a suggestion. Ray called this out on 2026-04-15. Sub-references worth consulting: `stop-slop:references:phrases`, `stop-slop:references:structures`, `stop-slop:references:examples`. The full drafting workflow lives in `docs/content-strategy.md` § Drafting workflow.

### Useful — reach for when they fit

- **`frontend-design`** / **`frontend-design-pro`** — distinctive, production-grade frontend generation. Worth invoking during design exploration to sidestep generic AI aesthetics. Use judgment: the goal is a layout Ray would actually ship, not a demo of what the skill can do.
- **`ui-ux-pro-max`** — styles, palettes, font pairings, spacing systems. Useful when sharpening the minimalist-technical direction or picking a type pairing.
- **`accesslint`** family (`accesslint:reviewer`, `accesslint:contrast-checker`, `accesslint:use-of-color`, `accesslint:link-purpose`, `accesslint:refactor`) — accessibility review. Run before shipping pages. WCAG compliance is not optional on a public portfolio.
- **`render`** — raster image generation (PNG / JPEG / WebP from prompts). Use with restraint. Prefer Ray's own screenshots, art, and diagrams over AI-generated decoration; the structural-truth signature extends to imagery.
- **`claude-api`** — only relevant if the site ever grows a Claude-powered interactive demo (unlikely for a static portfolio, but noted).

### Research

- **`Explore`** subagent — codebase-wide searches across Ray's other projects in `../`. Faster than manual grep and protects this session's context window.
- **`WebSearch`** / **`WebFetch`** — unfamiliar Astro features, GitHub Pages deployment patterns, third-party tooling. Treat external content as reference, not authority.

### Do not reach for without explicit Ray approval

- Any skill or MCP that publishes to third-party services — no auto-posting to social, no auto-creating issues on external repos, no sending mail, no uploading to paste / diagram services.
- Any skill that modifies other projects in `../` — this project is **read-only** with respect to Ray's other work. Scanning is fine; editing is not.

---

## Content scope

The site covers **four businesses + curated project slate + Hammerstein essay** — not a full portfolio dump.

- **Businesses:** Devforge, CatalogDNA, Retrogaze, Conflict Simulations LLC.
- **Flagship essay:** Hammerstein framework.
- **Curated projects:** 3–6, TBD. Selected with Ray from the 15+ folders in `../`.
- **About page:** short, structural. No filler.
- **Contact:** simple email link; no contact form.

Excluded by default (reconsider case-by-case only): blog, newsletter signup, "now" page, "uses" page, testimonials, stats counters.

**Rule of thumb** when considering a new project for inclusion: ask whether it advances the structural-truth positioning or adds noise. If it adds noise, exclude.

See `docs/content-strategy.md` for voice, scope, and public/private boundary details.

---

## Process rules

1. **Search first.** Before building a new feature, check what already exists in the codebase or in Ray's other projects. Check for libraries. Only then build custom.
2. **Audit task capacity.** Sum the realistic time budget of every item in a session before starting. "Fill the rest with X" is never valid for >1 hour of remaining budget.
3. **Stale-premise rule.** Before any destructive or file-moving action, verify the premise: does the file still exist in that path? Has the structure changed since the last session? If a recalled memory conflicts with current state, trust current state and update the memory.
4. **The pause.** Before implementing, ask "is this the right shape of work?" — especially after a context switch, after a big idea drop from Ray, or when a task looks unusually tidy.
5. **No force pushes, no hook bypasses, no amending published commits** without explicit instruction from Ray.
6. **Drop a session note and a decision record** in `vault/` for every non-trivial session or decision. The logs are the memory.

---

## Obsidian vault — persistent state across sessions

This project uses an Obsidian-style vault at `vault/` as a persistent source of cross-session memory. It is a git-tracked folder of markdown files, readable directly in Obsidian (open the `personal-site/` folder as a vault, or just `personal-site/vault/`). It mirrors CatalogDNA's `docs/internal/` + observation-log pattern.

### Structure

- `vault/index.md` — map of content. Start here.
- `vault/decisions/` — ADR-style records of architectural and product decisions. Date-prefixed filenames (`YYYY-MM-DD-slug.md`).
- `vault/sessions/` — per-session working notes. Date-prefixed filenames.
- `vault/hammerstein-log/observations.md` — append-only observations log for the Hammerstein framework. Ground rules inside.
- `vault/businesses/` — public positioning source-of-truth for each of the four businesses. Site copy pulls from here.
- `vault/projects/` — same, for the curated project slate (to be built as projects are selected).

### Ground rules

- Every non-trivial session drops a note in `vault/sessions/`.
- Every non-trivial decision drops a file in `vault/decisions/`.
- Hammerstein log is **append-only**. Log negatives aggressively. Counter-observations and moments where the framework *didn't* fire are higher-value than success stories.
- Files are `kebab-case.md`.
- Vault files are the source-of-truth for reusable content (business blurbs, decisions). Site code consumes them; don't duplicate.

---

## Memory & external references

### Memory layers (both in use)

- **Claude private memory** — operational, not visible to Ray in Obsidian. Location: `C:/Users/rweiss/.claude/projects/C--Users-rweiss-Documents-Dev-Work-personal-site/memory/`. Use for user profile, working-style signals, Claude-specific preferences.
- **Project vault** — visible to Ray in Obsidian, git-tracked with the site. Location: `personal-site/vault/`. Use for project-bound decisions, session logs, the Hammerstein observation log, and the business/project positioning source-of-truth.

Rule of thumb: if Ray should be able to read and edit it, it goes in the vault. If it's Claude-specific operational context, it goes in memory.

### External source files (read-only from this project's perspective)

| Purpose | Path |
|---|---|
| Hammerstein framework (essay draft) | `../hammerstein-article/article_draft.md` |
| Hammerstein observations — Ray's first-person log (hands-off) | `../catalogDNA/docs/internal/Hammerstein Observations Log.md` |
| Hammerstein observations — bot-side structured log (hands-off) | `../catalogDNA/docs/internal/Hammerstein Observations - Bot.md` |
| CatalogDNA CLAUDE.md (the template this file is modeled on) | `../catalogDNA/CLAUDE.md` |
| CatalogDNA public README | `../catalogDNA/README.md` |
| Devforge (app) | `../Devforge/` |
| Devforge (website) | `../DF Website/` |
| Retrogaze | `../Retrogaze/` |
| Wargame design book (source for Conflict Simulations credentials) | `../passive-income-hub/` |

### Public repos

- github.com/lerugray/devforge
- github.com/lerugray/devforge-website
- github.com/lerugray/retrogaze

---

## Current status (as of 2026-04-18, session 05)

**Fifteen pages live** at `lerugray.github.io`. Home + About + Writing index + Hammerstein essay + 4 business pages (CSL umbrella with 2 detail pages, Devforge, CatalogDNA, Retrogaze) + 2 infrastructure pages (GeneralStaff, RayBrain) + 2 project pages (Auftragstaktik, Buddies) + Music.

**Design system** — v1 token foundation (IBM Plex + Ink on Parchment warm-dark palette + wargame-counter accent + paper grain overlay) locked in session 2. Session 05 layered the Claude Design anchor vocabulary on top: named component classes (`.hero`, `.bio`, `.featured`, `.entries`, `.infra-list`, `.infra-meta`, `.section-head` + `.section-label` + `.section-count` + `.section-subhead`, `.music-block`, `.nav-group`) defined in `src/styles/global.css`. Full rationale in [`vault/decisions/2026-04-18-landing-redesign-anchor.md`](vault/decisions/2026-04-18-landing-redesign-anchor.md).

**Taxonomy** — Writing · Businesses (4) · **Infrastructure (2)** · Projects (2) · Music. The Infrastructure section (GeneralStaff + RayBrain) was introduced in session 05 to hold the open-source tools Ray built to run the four businesses. Distinct from Businesses (not products for sale) and Projects (not personal side-projects).

**Stack** — Astro static + Tailwind 4 (`@theme` directive) + `@fontsource/ibm-plex-*` self-hosted fonts + plain CSS component classes for the anchor vocabulary. TypeScript strict. Biome ignored in favor of Prettier. `pnpm` is not in use; `npm` scripts drive everything.

**Build command** — `npm run build` (static output). Dev: `npm run dev` (Astro dev server on `localhost:4321`). Visual audit: `node scripts/audit-site.mjs` (Playwright headless, outputs to `audit-screenshots/`). Production deploy is GitHub Pages via GitHub Actions.

**Open polish items** (carried across sessions, none blocking): per-page OG-image variants, Plex fonts in the OG template, Auftragstaktik screenshots (Ray needs to retake with current UI). Session-05 handoff adds: optional surgical extensions of anchor vocabulary to `/writing` index (swap to `.entries`) and CSL umbrella credential strip (swap to `.infra-meta` styling).
