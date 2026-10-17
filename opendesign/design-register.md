# Design register: lerugray.github.io

The site's aesthetic source of truth. Read before any UI work on this repo.

## Locked art direction (Ray, 2026-10-17 00:4x EDT, picked on seen renders)
**Direction D, "Simonsen Cartographic Spec"**, from the 2026-10-16 vibe bake-off (four directions: A atlas-premium, B dark
studio, C editorial portfolio, D off-signature). D was proposed by Gemini 4 Argon, a lane never shown Ray's site or corpus
(the OFF-SIGNATURE slot). Ray picked it over the seat lean list's alternatives. It SUPERSEDES the "General Staff Atlas"
parchment look (global.css tokens #e8dfc8 / oxblood #6b2d2d / plate labels), which was never formally ruled; pages move to D
one at a time, Wargame Modules first. Packet: ~/Documents/session-artifacts/SITE-VIBE-BAKEOFF-2026-10-16/.

Spec mockup: `opendesign/mockups/site-vibe-bakeoff-D/` (modules.html, home.html, styles.css). The full four-way bake-off is
on branch `design/site-vibe-bakeoff`.

## Palette (from the D spec)
- Ordnance Paper #F2ECE0 (ground), sheet #FAF6EE
- Counter Buff #E6DCC2 (panels), deep buff #DCD0B2
- Command Slate #171815 (screenshot wells), inner mat #21231E, bezel #353830
- Printer's Ink #1A1713 (primary), #2B2620 (body), #52493D (muted)
- Carmine #8B261D (prices, links, calls to action); dark-well accents #E67667, brass #D4A853

## Typography (all local, OFL, via @fontsource; never a remote font)
- Display and testimonial: Newsreader
- Body and policy: IBM Plex Sans; IBM Plex Sans Condensed for labels
- Data (prices, dates, stats, coordinates): IBM Plex Mono

## Components
Boxed spec sections with a section bar; screenshot plates in dark command-table wells on a uniform mat; stat strip;
four-tier pricing grid; dispatch-style call-to-action card; testimonial set-piece.

## Content rules
Copy comes from Ray's live pages; the Terms section on /wargame-modules/ is legal wording and is reproduced exactly
(d5be329). Never add lines about screenshots, scans or licensed editions.

## Known asset issues
nab-crop.webp's left edge cuts a toolbar button (": On"); pog-crop.webp has an empty block bottom-left; flattop-crop.webp
has clipped labels at its left edge. Handle by CSS framing, never by inventing content.
