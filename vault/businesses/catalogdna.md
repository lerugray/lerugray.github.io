# CatalogDNA — public positioning

_Source-of-truth for site copy. Pulled from the public README and CatalogDNA CLAUDE.md positioning sections. **Open-core boundary is strict** — the `interpret` module is private._

## One-liner

A musical fingerprinting tool that reverse-engineers any musician's catalog into structural DNA — the unconscious patterns (chord vocabulary, scale preferences, melodic shapes, rhythmic habits) that define their sound across a body of work.

## Positioning

Unlike Spotify Wrapped or Last.fm, which flatter users with "people who liked X also liked Y," CatalogDNA tells musicians what their music **actually** sounds like structurally — even when that contradicts their stated influences or self-image. **Structural truth over affinity flattery.**

## Target audience

Musicians, composers, music nerds. Work that would otherwise need a musicologist for months.

## Two distinct use cases

1. **Self-analysis** — "What do I actually sound like?" Single artist, deep analysis.
2. **Discovery / comparison** — "Who else sounds like this?" Comparative analysis across reference artists.

## Canonical wow-moment (safe to share)

The Pete Burns / Dead or Alive match surfaced in Ray's own catalog — a structural similarity that contradicted his self-image and made him reconsider his work. That **defiance** is the feature.

## Living demo — the Le Rug / Peter Burns recursion (verified 2026-04-15)

Ray recorded music as **Le Rug** (`lerug.bandcamp.com`). The project is no longer active as of session 03 confirmation; the catalog stays up as an archive of prior work. One of his own Le Rug albums is titled ***Party With Peter Burns*** — an explicit nod to Pete Burns of Dead or Alive. Independently, when CatalogDNA analyzed his ~407-track catalog, its canonical structural match came back as **Pete Burns / Dead or Alive**.

So the album title says *"I know about Pete Burns."* The fingerprint says *"you sound more like him than you thought."* The album is a self-aware homage; the tool reveals the influence runs deeper than a title — into chord vocabulary, scale choices, melodic shape.

This is arguably CatalogDNA's strongest "living demo" story. On the site, the CatalogDNA section should link directly to the *Party With Peter Burns* album — a visitor reads the positioning, follows the link, hears the music, returns with the claim internalized. See [`../music/le-rug.md`](../music/le-rug.md) for the full Le Rug research notes and source links.

## Public vault (live example)

Ray's Le Rug analysis is published at `https://lerugray.github.io/le-rug-musical-dna/`. 439 tracks across ~15 releases (2007-2020). Shows fingerprints, chord vocabularies, influence comparisons, era-based evolution, and per-album deep dives. Ray's catalog was the original test case and still serves as the primary development reference. Content may change as the software is still in development.

Added to site copy 2026-04-16.

## Stack (public, open-core)

Python 3.10–3.12. Pipeline: MP3 → MIDI (`basic-pitch`) → JSON → analysis (scales, chords, motifs, rhythm, register, melody). Optional enrichments via `music21` (harmony) and `librosa` (timbre). Report generation via Jinja2 templates into Obsidian vault markdown.

## Open-core boundary

- **Open source / public:** conversion pipeline, symbolic / harmony / timbre analysis, CLI, report generation.
- **Proprietary / private (DO NOT discuss on the site):** the `interpret` module — prompt engineering for narrative generation, two-tier matching methodology, influence-as-core design pattern.

## DO NOT publish

- `interpret` module methodology, prompts, or matching heuristics.
- Any business metrics or customer list.
- Internal decision records from `docs/internal/` — including the Hammerstein observation logs as raw source; use them through the public essay, not directly.
