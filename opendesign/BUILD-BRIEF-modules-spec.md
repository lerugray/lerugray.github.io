# BUILD: Wargame Modules page in the locked D direction  (grounded: origin/main d5be329; Ray picked D 2026-10-17 on seen renders)

Work ONLY inside this repository checkout. Begin by writing and deleting a file named WRITE-PROBE here. Do not commit, do not
push, do not run dev servers or browsers, no network. When done, print a report of at most 200 words.

## Read first
- `opendesign/design-register.md` (the lock).
- The spec: `opendesign/mockups/site-vibe-bakeoff-D/modules.html` and `styles.css`. This is what Ray approved. Port it faithfully:
  same structure, section order, components, palette, type, spacing, shadows. Do not restyle anything Ray saw.
- The current page `src/pages/wargame-modules.astro` (its copy, captions, alt text, links and the `optedOut` array logic are
  the content source) and `src/layouts/BaseLayout.astro` (its <head>: title, description, canonical, Open Graph, favicon and
  anything else in head must carry over).

## Build
1. New layout `src/layouts/SpecLayout.astro`: the full <head> from BaseLayout (same props: title, description; same meta,
   favicon, OG image logic), the D header (wordmark, nav, email) and D footer from the spec. Nav targets are the real site
   routes: /games (Field Trials), /services (Commissions), /wargame-modules, /writing/out-of-the-notebook or the Writing
   index if one exists (check src/pages/writing), Businesses -> /conflict-simulations-llc, Tools -> /kit, About -> /about.
   It must NOT import src/styles/global.css (the old atlas look must not bleed in).
2. `src/styles/spec.css`: the spec's styles.css adapted (tokens on :root). Fonts via @fontsource imports at the top
   (@fontsource/newsreader 400, 500, 600, 700, 400-italic; ibm-plex-sans 400, 500, 600; ibm-plex-sans-condensed 500, 600;
   ibm-plex-mono 400, 500). These packages are installed. No @font-face pointing anywhere else, no remote URLs.
3. Rewrite `src/pages/wargame-modules.astro` to use SpecLayout and the spec's markup. Every word of copy, every caption, alt
   text and link comes from the CURRENT wargame-modules.astro (identical to the spec's copy). The Terms section text stays
   EXACTLY as in the current file, and the `optedOut` array plus its rendering stays. Images from /images/wargame-modules/.
4. Fix these defects an independent look found in the spec (they are bugs, not style):
   - first-screen pricing card: no ~60px empty gap between the price grid and the Email button; the email address and the
     button line up.
   - paired screenshot cards share one bottom edge (Paths of Glory vs For the People were 19px off).
   - the left Bloody April screenshot is too small to read: give it a larger slot.
   - the testimonial attribution "David Greenwood, Bloody April commission" must not break mid-name (nowrap or wider).
   - Napoleon at Bay hero: hide the cut toolbar fragment at the image's far-left edge with CSS framing only (object-fit:
     cover plus object-position right in a frame a few percent narrower), never by editing image files.
5. No other page changes. BaseLayout, global.css and every other page stay untouched.
6. Must hold at 375px wide with no horizontal scroll; text contrast WCAG AA.

## Verify (all must pass before you report)
- `npm run build` succeeds and produces dist/wargame-modules/index.html.
- grep the built dist/wargame-modules/index.html and its CSS for fonts.googleapis, gstatic, bunny.net: zero hits.
- Report: files changed, build result, anything from the spec you could not port and why.
