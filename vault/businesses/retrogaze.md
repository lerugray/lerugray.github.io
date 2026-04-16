# Retrogaze — public positioning

_Source-of-truth for site copy. Pulled from existing public marketing at retrogazeai.com and the public repo README._

## One-liner

AI-powered multi-console pixel art generator. Nine asset types for eight retro consoles, generated inside real hardware constraints.

## Taglines (from retrogazeai.com)

> "Classic console pixel art, generated in seconds."
> "Built by a game designer, not venture capital."

## Supported consoles (8)

NES, SNES, Genesis, Game Boy, Game Boy Color, Commodore 64, PC-Engine.

(Ray confirmed 8 consoles, 2026-04-16. Game Boy covers DMG and Pocket variants.)

## Asset types (9)

Characters, enemies, items, tiles, tilesets, UI elements, sprite sheets, directional walking sets, UI frames.

## Animation cycles (6, from gallery + help pages)

Walk, attack, death, cast, idle, jump. 4-frame spritesheets. Zero palette drift between frames.

## Era system (from gallery page)

Four historical periods that shape constraint strictness and visual style:
- **RETRO** (1978-1983): 3 colors
- **EARLY** (1983-1984): 4 colors
- **MID** (1985-1986): 6 colors
- **LATE** (1987+): 6 colors

## Workflow (public, from homepage)

1. **Describe** — type what you need in plain English. Character, enemy, item, tile, UI element. Specify era, mood, pose.
2. **Generate** — AI builds it inside real hardware constraints (actual palettes, tile limits, sprite rules). Up to four candidates per generation (batch generation).
3. **Export** — PNG, sprite sheets, atlas JSON, or palette files (GPL, hex, PAL). Scaled 1x-8x. Drop into Unity, Godot, GameMaker, or homebrew toolkits.

## Key features (all public on retrogazeai.com)

- Console select (8 platforms)
- True hardware constraints (real palettes and limits)
- Palette lock (consistent colors across a project)
- Reference upload (sketches/mockups as style references)
- Prompt templates (save generation configs)
- Batch generation (up to 4 candidates simultaneously)
- MCP server with native Aseprite integration (output is real .aseprite files with editable layers and palette)

## Ethics stance (public, from retrogazeai.com/ethics)

This is a major differentiator. Key public claims:
- **No model training on pixel art.** "We didn't train a model. We don't scrape itch.io, we don't harvest DeviantArt portfolios."
- **34 artists credited** across 6 consoles on the ethics page, by name, with context on their work.
- **5-10% of net profit** committed to the pixel art community once profitable.
- **Artist recommendations in-app** after generation (links to real pixel artists who work in retro styles).
- **No AI art in Retrogaze's own marketing.** All branding/tutorial art commissioned from working pixel artists.
- **Honest scope statement:** "AI-generated art is not as good as hand-drawn work. You will need a pixel artist if you're serious about shipping." Retrogaze is a prototyping tool for developers who can't draw.
- **Sponsor pixel art jams** that ban AI assets.

## Upcoming (confirmed by Ray, 2026-04-16)

- **Pre-rendered sprite mode for SNES** — targeting the Donkey Kong Country / Super Mario RPG aesthetic (SGI workstation-rendered 3D models compressed into SNES sprites).

## Pricing (public on retrogazeai.com)

- **Free:** 5 generations/day, all 9 asset types, all features, PNG export.
- **Starter:** $5/mo, 200 generations/month, generation history, saved settings, metadata export.
- **Pro:** $10/mo, 600 generations/month, API access (100 calls/mo), priority queue.
- **Studio:** $20/mo, 2000 generations/month, unlimited API calls, priority support.

17% annual billing discount available in-app.

## Positioning

Retrogaze enforces *actual* hardware constraints. NES gets 54 colors with four per tile. Game Boy gets four shades. Genesis gets 512. Output runs on real hardware and faithful emulators, not just "looks retro" on a modern monitor. Built by a game designer, not venture capital. A prototyping tool for developers who can't draw, not a replacement for real pixel artists.

## Target audience

Indie game devs, game jam participants, retro modding communities, pixel artists, hobbyist game creators. People who can code a platformer but can't draw a character to put in it.

## Stack

Intentionally omitted from the vault. Retrogaze's constraint-enforcement
implementation, model choices, and backend stack are off-limits per the
`DO NOT publish` block below and per `CLAUDE.md`'s Retrogaze IP rule.
If a future session needs Retrogaze stack context, ask Ray directly
rather than pulling it from any prior vault version.

## Links

- Public site: https://retrogazeai.com
- Repo: https://github.com/lerugray/retrogaze

## Status

Closed beta as of 2026-04-09.

## DO NOT publish

- Constraint-enforcement implementation details beyond what the site already shows.
- Model choices or prompt design beyond what's on the homepage.
- Beta user list or usage metrics.
