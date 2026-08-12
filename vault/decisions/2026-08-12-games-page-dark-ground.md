# 2026-08-12 — Field Trials page gets a full dark ground (page-scoped)

## Decision

The `/games` page ground goes dark end-to-end so the arcade specimen cabinet no
longer sits on parchment. Operator verdict: light page + dark boxes clash; the
cabinet matters more than matching the rest of the atlas. Other pages stay light.

## How scoping works

All dark-ground rules live in `src/pages/games.astro`'s `<style>` block as
`:global(:root)` / `:global(html)` / `:global(body::…)` overrides. Astro emits
that stylesheet only for `/games`. No changes to `BaseLayout.astro` or
`src/styles/global.css`. Palette tokens (`--color-background`, `--color-foreground`,
links, nav accents, borders) are retokenized on `:root` for this page so the
shared sidebar, topbar, sheet-id, hero, bio, section heads, field notes, and
footer inherit readable dark-room colors without per-component edits.

## What was allowed to change

- Page ground (near-black `#0c0b09`, darker than the cabinet's `#14120e` so the
  cabinet stays the brightest object).
- Grain overlay blend mode (multiply → soft-light) + faint vignette.
- Outermost `.cabinet` / `.field-report` seam colors only (atlas double-frame
  that existed to sit on parchment).
- Hex ornament invert so ink strokes read on dark.
- Shared nav/footer/prose colors via the page-local token override.

## What was certified untouched

Cabinet markup, cart label SVGs, CRT panel internals, audit chips, keyboard
grammar, PLAY control, field-report form behavior/scripts, roster data, OG image
(`/og-games.png` — already a dark capture; not regenerated).
