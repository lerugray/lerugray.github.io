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

## Stack (public, open-core)

Python 3.10–3.12. Pipeline: MP3 → MIDI (`basic-pitch`) → JSON → analysis (scales, chords, motifs, rhythm, register, melody). Optional enrichments via `music21` (harmony) and `librosa` (timbre). Report generation via Jinja2 templates into Obsidian vault markdown.

## Open-core boundary

- **Open source / public:** conversion pipeline, symbolic / harmony / timbre analysis, CLI, report generation.
- **Proprietary / private (DO NOT discuss on the site):** the `interpret` module — prompt engineering for narrative generation, two-tier matching methodology, influence-as-core design pattern.

## DO NOT publish

- `interpret` module methodology, prompts, or matching heuristics.
- Any business metrics or customer list.
- Internal decision records from `docs/internal/` — including the Hammerstein observation logs as raw source; use them through the public essay, not directly.
