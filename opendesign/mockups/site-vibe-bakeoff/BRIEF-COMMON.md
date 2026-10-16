# SITE VIBE BAKE-OFF — common brief (read fully before writing anything)

grounded: lerugray.github.io main = d5be329 (Terms section published 2026-10-16); live site rendered 2026-10-16.

## Why this exists
Ray Weiss is a Brooklyn wargame designer who now builds software by directing AI tools. His words (2026-10-16):
"we should also make sure the layout looks as good as possible, doesn't need to be married to the site, should be
engineered to get me hired lol - the whole personal site could be improved frankly in terms of its vibe at this
point". A wargame publisher who approached Ray is reading the Wargame Modules page right now. That page is the
priority. The goal of every mockup: a stranger who lands on it understands in five seconds what Ray sells, sees real
proof (real screenshots, a real client), sees the price, and knows how to start (one email). It should look like the
work of someone worth hiring: confident, crafted, legible, not templated.

## What you produce (in YOUR working directory only)
- `modules.html` — the FULL Wargame Modules page, every section in CONTENT.md, in a sensible order.
- `home.html` — the home page: the first screen (1440x900) plus roughly half a screen more. It must make hiring
  Ray obvious (a clear path to Wargame Modules and Commissions) while staying a personal site.
- `styles.css` — shared by both pages. Put every color/size/font token as a CSS custom property on `:root`.
- `NOTES.md` — at most 150 words: the direction's name, palette (hex), type choices, and one line on why it helps
  Ray get hired. This is your report; keep it that short.
Plain static HTML + CSS. No build step, no framework, no CDN, no JavaScript unless a tiny inline script is truly
needed (it is not needed for anything here). Both pages must render correctly opened as `file://`.

## Hard rules
1. CONTENT: every sentence comes verbatim from `../CONTENT.md` (rules at its top). New words only for short UI
   labels (four words max, no praise adjectives). Invent no numbers, clients, quotes, features or claims.
2. TERMS: the Terms section text is legal wording. Reproduce it exactly, in order, all four terms, the opted-out
   line and the publishers line. Never add anything about screenshots, scans or licensed editions.
3. IMAGES: use only the files in `../shared/images/` (8 module screenshots as .webp, plus counter-rw.svg and
   hex-ornament.svg which you may use or ignore). Reference them by relative path `../shared/images/<file>`. Use the
   alt text from CONTENT.md verbatim. Do not crop away the game content; object-fit framing is fine. Give every
   <img> width/height attributes matching its real aspect ratio (sizes are listed in CONTENT.md).
4. FONTS: no remote fonts, ever (no Google Fonts, no bunny.net, no @import url(http...)). Use only the woff2 files in
   `../shared/fonts/` via your own @font-face rules (relative url `../shared/fonts/<file>`), or system font stacks.
   Available families: IBM Plex Serif / Sans / Mono / Sans Condensed, GFS Didot (400 only), Fraunces, Newsreader,
   Instrument Serif (400 + italic), Space Grotesk, Inter Tight, JetBrains Mono. Weights present: 300-700 latin for
   most; check the file list.
5. LAYOUT: designed for a 1440x900 desktop first screen, viewed at retina density. Must also hold together at 375px
   wide with no horizontal scroll (single column is fine). Text contrast at least WCAG AA. Links look like links.
6. The modules page's FIRST SCREEN (1440x900, before any scroll) must show: the page title, the one-line dek, a
   real module screenshot at a size that reads as proof, the price range, and a visible way to email Ray.
7. No browser launches, no servers, no network. Do not touch anything outside your working directory. Not a git
   repo: nothing to commit. Begin by writing and deleting a file named WRITE-PROBE in your working directory to
   confirm you can write; if that fails, stop and say so in your final message.

## Quality bar
Aim past "passes": the version a senior designer would put in their own portfolio. Real typographic hierarchy, a
deliberate grid, generous but purposeful whitespace, screenshots presented like product shots (framing, captions),
the testimonial treated as the strongest proof on the page, pricing a reader can scan in two seconds. Avoid generic
SaaS template tells (gradient blobs, emoji icons, "trusted by" bars, fake logos, glassmorphism for its own sake).
