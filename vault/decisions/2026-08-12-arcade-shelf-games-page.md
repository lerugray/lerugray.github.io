# 2026-08-12 — Field Trials page becomes a cartridge cabinet (deliberate register break)

## Decision

`/games` is redesigned from the atlas `.infra-list` card stack into a UFO 50-style
cartridge shelf: nine code-drawn SVG cartridges on a dark "specimen cabinet" plate, a CRT
detail panel that lights up with the selected game's real capture, arrow-key browsing,
Enter-to-play. Ray's directive (2026-08-12, near-verbatim): the games deserve "a slick and
engaging/dopamine inducing interface … similar setup to UFO 50, with cartridges for each
of the cards … we want people to see it and go 'holy shit I want to play these'."

## What breaks register, and how the seam is held

- The cabinet interior is dark (`#14120e`) with an amber power accent (`#e8a13c`) — both
  off the atlas palette. This is scoped to the cabinet plate ONLY; tokens live in the
  page's scoped style block, not `global.css`.
- The seam: the cabinet is framed exactly like a specimen figure (1px rule + offset
  outline), sits under the standard `PL. VIII Roster` section head, and the page keeps
  sheet-id, hero, slug, bio, field notes, footer, and nav untouched. It reads as an atlas
  plate whose subject is a lit cabinet.
- No new fonts (Plex Mono/Sans/Serif carry the cabinet; Didot stays H1-only). No new
  dependencies. All cart label art is inline SVG drawn in-page — no image assets, no
  AI-generated images — because the games themselves are code-drawn-art projects.
- Grep-for-violations exceptions knowingly incurred inside the cabinet: colored glows
  (per-cart `box-shadow`) and per-game label palettes. No gradients-as-decoration beyond
  plastic/plank shading, no glass, no rounded-SaaS look.

## Data honesty

Test counts + audit verdicts on each panel come from the published field-trials README
audit table (LoA/Capriole from their own repo logs: 156/156 release audit re-run;
188/188 + 8,000-case spawn sweep). The shelf rail total is computed from the roster
array at build time so it can't drift from what's shown.

## Seam for pulled games

ADVERSARY stays pulled (commit 6b300c1). Returning a game = re-add its roster entry with
the original `id` (feedback threads key off it) + a `labelArt` SVG. Comment at the top of
the roster array says the same.

## Kept behavior

Feedback worker wiring (all nine boxes, per-game, degrade-in-place), devlog field notes,
deep links (`/games#<id>` selects the cart), no-JS fallback (all panels render stacked),
`prefers-reduced-motion` disables lift/glow transitions and the CRT power-on blip.
