# BUILD: move the whole site to the locked D look  (grounded: main d80d942 = Wargame Modules live in D; Ray's go 2026-10-17 01:0x)

Work ONLY inside this repository checkout. First write and delete a file named WRITE-PROBE. Do not commit, do not push, no
dev servers, no browsers, no network. Finish with a report of at most 200 words.

## Read first
- `opendesign/design-register.md` (the lock: D supersedes the old "General Staff Atlas" parchment look).
- The live D implementation: `src/layouts/SpecLayout.astro`, `src/styles/spec.css`, `src/pages/wargame-modules.astro`.
- The approved home mockup: `opendesign/mockups/site-vibe-bakeoff-D/home.html` (with its styles.css).
- The old look: `src/layouts/BaseLayout.astro`, `src/layouts/EssayLayout.astro`, `src/styles/global.css`, `src/components/SiteNav.astro`,
  `src/data/navigation.ts`, and the pages under `src/pages/` (23 use BaseLayout; writing/[slug].astro uses EssayLayout; essays
  come from `src/content/writing`).

## Build
1. HOME (`src/pages/index.astro`): rebuild in the D home mockup's structure and components. Ray ruled 2026-10-17: keep the live
   headline line "Brooklyn wargame designer, running four businesses." Every word of copy comes from the CURRENT index.astro
   (the mockup used the same copy). Keep every section and every link the current home page has (writing list, businesses,
   tools, projects and the rest): restyle them in D, never drop them. Hiring paths (Commissions, Wargame Modules, email) are
   prominent in the first screen as in the mockup.
2. EVERY OTHER PAGE: move BaseLayout and EssayLayout to D, so all pages share the D header (same as SpecLayout's), D footer,
   palette, type and components. The best route is one shared D stylesheet: fold spec.css's tokens and base styles into a site
   stylesheet that all layouts use, then restyle the class vocabulary the existing pages use (.hero, .dek, .slug, .bio,
   .section-head, .section-label, .section-count, .entries, .entry-title, .entry-desc, .infra-list, .infra-meta, .infra-title,
   .infra-desc, .featured, .cta, .prose-body, blockquote, the Tailwind utility classes in use, essay typography) in D. Pages
   keep their markup unless a change is needed for the look.
3. SUPERSEDE the atlas: the old parchment tokens, the hex/plate ornaments and the sidebar layout go. The plate labels ("PL. I.A",
   "PL. II" etc., the `sheet-id` slot, the `.pl` spans, nav plate column) are atlas-only: remove them from the rendered pages.
   Delete what is no longer used in the same change (old CSS rules, unused components); do not leave a dead atlas beside D.
   The remote font import at the top of global.css (fonts.bunny.net) must be gone: all fonts local via @fontsource.
4. Wargame Modules stays exactly as it is now (it is live and approved). If you unify layouts, its render must not change.
5. WORDS: no copy changes anywhere except removing plate labels. Every page's text must stay word for word. Every link keeps
   its target. Head meta (title, description, canonical, Open Graph, Twitter, favicon) unchanged on every page.
6. Must hold at 375px wide with no horizontal scroll on every page; text contrast WCAG AA; essays comfortable to read
   (measure ~65-75 characters).

## Verify before reporting
- `npm run build` succeeds; the page count is unchanged.
- grep dist for fonts.googleapis, gstatic, bunny.net: zero hits.
- Report: files changed and deleted, anything you could not move to D and why.
