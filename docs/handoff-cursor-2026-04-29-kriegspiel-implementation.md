# Cursor IDE handoff — implement General Staff Atlas (round 2 design)

Paste-ready prompt for **Cursor IDE Auto** (NOT cursor-agent CLI —
the CLI sandbox blocks the shell commands this task needs).

Open Cursor on `personal site/`, switch to a fresh branch
(`cursor/kriegspiel-round-2` recommended), paste the prompt
below, accept Auto routing, let it run.

---

## The prompt to paste

You are implementing round 2 of a design pass on Ray's personal
site (Astro 6 + Tailwind v4 + IBM Plex). Claude Design has
shipped a complete design package; your job is to integrate it.

### Context — read first

The design package is extracted at:
`claude-design-output/personal-site-round2/project/`

Files you must read top-to-bottom before writing anything:

1. `claude-design-output/personal-site-round2/project/SKILL.md` —
   the discipline document. The most authoritative file in this
   task. Already installed at `.claude/skills/personal-site.md`
   (same content). When in doubt, this wins.
2. `claude-design-output/personal-site-round2/project/notes.md` —
   the designer's intent + intentional caveats (especially the
   drop-cap 70/30 caveat at the bottom).
3. `claude-design-output/personal-site-round2/project/index.html` —
   the reference HTML for the home page. Pixel-perfect target.
4. `claude-design-output/personal-site-round2/project/site.css` —
   the source CSS to port. ~26KB. Every named class you'll need
   is defined here.

Also read for context, but don't change them yet:

- `claude-design-output/personal-site-round2/project/hammerstein.html`
  — essay archetype reference (essay implementation is OUT OF
  SCOPE this round; reference only).
- `claude-design-output/personal-site-round2/project/conflict-simulations-llc.html`
  — business-detail archetype reference (also out of scope this
  round).

### What this round ships

**In scope (do these):**

1. **Replace `src/styles/global.css`** with the new aesthetic.
   Port `site.css` into the existing global.css structure,
   keeping the Tailwind v4 `@theme` token block as the source
   of truth for the palette + font stack. CSS classes outside
   `@theme` should land in plain CSS blocks the same way the
   current global.css does.
2. **Install 5 SVG assets** from `claude-design-output/personal-site-round2/project/assets/`
   into `public/`:
   - `counter-rw.svg` (Ray Weiss NATO infantry counter)
   - `counter-csl.svg` (CSL NATO armor counter)
   - `hex-ornament.svg` (three-hex marginal ornament)
   - `scale-bar.svg` (cartographic scale bar)
   - `grain.svg` (REPLACES the existing `public/grain.svg`;
     new version is darker, multiply-blend friendly)
3. **Add `@import url('https://fonts.bunny.net/css?family=gfs-didot:400&display=swap');`**
   alongside the existing IBM Plex imports. GFS Didot is the
   one display face for H1 only.
4. **Update `src/layouts/BaseLayout.astro`** to introduce the
   new `.shell + .sidebar + main` structure:
   - Wrap the existing `<slot />` in `<div class="shell">`
   - Sidebar: render the masthead + colophon + 6 nav-groups
     (the structure is in `index.html` lines 16-78). Use
     Astro `Astro.props` to allow per-page colophon override,
     but provide sensible defaults from `index.html` so
     non-customized pages render reasonable content.
   - Add a `<div class="topbar">` for mobile (lines 81-86 of
     index.html).
   - Add a sheet-id slot (`<slot name="sheet-id" />`) at the
     top of `<main>` so each page can pass its plate number.
     If the slot is empty, render nothing — don't fake a
     plate number for pages that haven't opted in yet.
   - Add a site-footer at the bottom of `<main>` using the
     contact block from `index.html` lines 335-350.
5. **Update `src/pages/index.astro`** to:
   - Pass its own sheet-id to the BaseLayout slot:
     `<div slot="sheet-id" class="sheet-id">PL. I.A — Frontispiece · Personal Imprint / Edition 2026.04 · Brooklyn, NY</div>`
     (mirror the structure of `.sheet-id` from index.html
     lines 94-97 — has `.plate` with `.num` span, plus
     `.edition` div).
   - Update the hero block to use the new structure (counter
     image src `/counter-rw.svg`, the identification slug, etc.)
     per `index.html` lines 100-115.
   - Update each `.section-head` to include the plate-number
     prefix (`<span class="pl">PL. II</span>Writing`) per
     `index.html` lines 138-141.
   - Update each `.entries > li` to include the index column
     (`<div class="index"><em>i.</em> 2026.04</div>`) per
     `index.html` lines 143-152. Pull the entry dates from
     existing content (the writing entries already have implicit
     order from oldest-newest top-to-bottom in current
     index.astro; preserve that order). The index dates in the
     reference HTML are illustrative; use Ray's actual entry
     dates if visible in the existing copy or in `vault/`,
     otherwise leave the date column with `<em>i.</em>` /
     `<em>ii.</em>` etc. without a date suffix.
   - Insert `<div class="hex-rule" aria-hidden="true"><img
     src="/hex-ornament.svg" alt=""></div>` between Writing
     and Businesses (one hex-rule per page maximum per SKILL).
   - Update each `.infra-list > li` to use the new corner-tick
     legend-box structure (the SKILL renames `.infra-meta .dot`
     classes — verify against site.css lines 539-540).

**Out of scope (DO NOT touch this round):**

- Other 13 `.astro` page files in `src/pages/`. They will
  inherit the new global.css palette automatically (links
  turn Prussian-blue, ground turns oat parchment, etc.) but
  the page-specific structure stays as-is until separate
  passes update each.
- `src/layouts/EssayLayout.astro` — essay implementation
  ships in a later round.
- Any content / copy / voice. Aesthetic shift only.
- Adding any font face beyond the IBM Plex stack + GFS Didot.
- Adding any color outside the SKILL palette.
- The `vault/`, `drafts/`, `audit-screenshots/`, or
  `claude-design-output/` directories.

### Locked constraints (per SKILL — non-negotiable)

- **Palette** must match SKILL §"Palette — Officer's Atlas"
  exactly. AAA contrast verified.
- **Type stack:** IBM Plex Serif/Sans/Mono + GFS Didot for H1
  only. Per SKILL: "Never for body, never for nav, never for
  buttons. Never below H1."
- **Named-class vocabulary:** existing names keep working.
  New patterns extend the vocabulary; do not rename
  `.hero / .bio / .featured / .entries / .infra-list /
  .section-head / .section-label / .section-count /
  .music-block / .terminal-section / .prose-body /
  .nav-group`.
- **No silent class deviations.** If you need a new class,
  it must compose from the SKILL's design tokens.

### Forbidden patterns (per SKILL grep table)

If your CSS or HTML matches any of these, revert before
shipping:

- `Inter|Roboto|system-ui` in `font-family` (wrong type stack)
- `linear-gradient.*hsl|gradient.*purple` (AI-startup gradient
  slop — the palette has ONE gradient, on `.infra-list > li`
  using oat-cream, anything else is a violation)
- `backdrop-blur|glass\b` (glass morphism, forbidden)
- `rounded-(2xl|3xl|full)` for non-circular elements
- `shadow-(lg|xl|2xl)` (soft drop shadows forbidden)
- `class=".*hex.*"` outside the single `.hex-rule` element
- `text-emerald|text-cyan|text-purple` (off-palette accents)
- H1 in any face other than GFS Didot
- Two display faces in the same page
- `.prose-body p` font-size below 17px

### Verification gates

Before reporting done:

1. `npm run build` exits 0. No TypeScript errors. No Astro
   errors.
2. `npm run dev` starts cleanly. Visit
   `http://localhost:4321/` (or whichever port) and verify:
   - Background is warm oat parchment, not dark.
   - The hero has a real counter image (NATO infantry
     rectangle with "RW" inscribed), not a broken image
     icon.
   - The sidebar shows masthead + colophon + 6 nav-groups
     (Writing/Businesses/Infrastructure/Projects/Music/
     Contact) with plate numbers in the right column of
     each group label.
   - The sheet-id `PL. I.A — Frontispiece · Personal
     Imprint` is present above the hero with an atlas
     double-rule beneath.
   - The identification slug under the dek shows
     `UNIT RW / 26 / TYPE Designer-Director / SCALE Solo + 4
     Cos. / LOC 40°41′N`.
   - At least one section-head shows a plate number prefix
     (`PL. II Writing` etc.).
   - The hex-rule ornament renders between Writing and
     Businesses.
   - Console is clean — no font-loading 404s, no 404s on
     `/counter-rw.svg`, `/hex-ornament.svg`, `/grain.svg`.
3. Visit one OTHER page (e.g.
   `http://localhost:4321/about`) and verify it still
   renders without crashing. It will look different from
   the index because it doesn't yet use the new patterns,
   but it MUST not throw errors. The shared global.css
   palette change (oat ground, ink text, Prussian blue
   links) should propagate cleanly.
4. Lighthouse / contrast spot-check: run a quick contrast
   probe on the index hero — the body text must read AAA
   against the new palette.

### Commit + push

When all gates pass:

1. Commit the change as **two commits** for cleanliness:
   a. `design: round 2 General Staff Atlas — global.css + assets + GFS Didot`
   b. `index: compose with round 2 atlas vocabulary (PL. I.A frontispiece, slug, hex-rule)`
2. Branch is `cursor/kriegspiel-round-2` per the prep step
   above — push with `-u` so origin tracks it.
3. **Do not merge to main.** Ray reviews the diff visually
   first (open the URL after pushing, walk the page on
   desktop + mobile breakpoints).
4. Report done with: branch name + commit SHAs + the URL of
   any local dev render you screenshotted, plus a one-line
   note on whether the drop-cap on the essay's first
   paragraph looks right (notes.md flagged this as the
   designer's 70/30 confidence call — Ray will adjudicate).

If any verification gate fails, ship a smaller subset (e.g.,
just the global.css + assets) on the branch and flag what
broke in your final report. Do not push broken code to
main.

---

## After Cursor finishes

Ray returns to a Claude Code session with this branch checked
out. Walk the dev render in browser, decide on the drop-cap +
any other 70/30 calls in notes.md, then either merge to main
or queue follow-up tweaks.
