# Retrogaze — public positioning

_Source-of-truth for site copy. Pulled from existing public marketing at retrogazeai.com and the public repo README._

## One-liner

AI-powered multi-console pixel art generator. Sprites and tilesets **validated against real hardware constraints** for 8 retro consoles.

## Tagline

> "Hardware-authentic pixel art for classic consoles. Generated in seconds."

## Supported consoles

NES, Game Boy (DMG / Pocket / Color), Commodore 64, Genesis, SNES, PC-Engine.

## Positioning

The differentiation is **not** "looks retro." It's that Retrogaze enforces *actual* hardware constraints — NES gets exactly 54 colors + 4-per-tile; Game Boy gets 4 shades; Genesis gets 512 colors. Output is genuinely playable on real hardware or faithful emulations.

## Target audience

Indie game devs, game jam participants, retro modding communities, pixel artists, hobbyist game creators.

## Stack (public)

- **Generation:** FLUX Schnell + Image2Pixel (fal.ai) for FLUX mode; Claude Haiku + pixel-mcp for Aseprite mode.
- **Constraint enforcement:** Python (Pillow, numpy) + CIE76 Lab color matching.
- **Backend:** FastAPI.
- **Database:** Supabase (Postgres).
- **Frontend:** vanilla HTML / CSS / JS, NES-themed.
- **Hosting:** Railway (Docker).

## Links

- Public site: https://retrogazeai.com
- Repo: https://github.com/lerugray/retrogaze

## Status

Closed beta as of 2026-04-09.

## DO NOT publish

- Constraint-enforcement implementation details beyond what the site already shows.
- Model choices or prompt design beyond what's on the homepage.
- Beta user list or usage metrics.
