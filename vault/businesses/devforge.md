# Devforge — public positioning

_Source-of-truth for site copy. Pulled from existing public marketing + README. **Do not extrapolate from internal docs.**_

## Tagline

> "A game dev terminal that knows your project cold."

## One-liner

A structured UI that wraps AI coding tools (Claude Code) for game developers. Not a game engine; not a designer — a context-keeper and mode-switcher for solo and indie game devs.

## Problem it solves

Designers re-explaining their project to Claude every session, losing context, and avoiding git because they're not programmers.

## Positioning quotes (verbatim from existing public copy)

- "DevForge is a structured UI that wraps AI coding tools. It's not a game engine and it's not going to design your game."
- "You make the design decisions. DevForge handles context, modes, and version control."
- "Your GDD stays loaded. Claude reads it before every session, along with your stack, your tasks, and last session's notes."

## Key features (public)

- **12 Modes**, each with one specialized job: FORGE (generate structure), IMPLEMENT (write code), PITCH (stress-test), DEBUG, RESEARCH, QA, etc.
- **Analog Mode** for tabletop game design.

## Pricing (public)

**$9 on itch.io** — https://conflict-simulations-llc.itch.io/devforge. Released status, one-time purchase, no subscription. (An earlier draft of this file said "$20 one-time" based on an older marketing page; that was stale. Ray confirmed 2026-04-15 the itch price is $9.)

## Publisher

Published under **Conflict Simulations LLC** on itch (alongside Ray's other digital games — Veridian Contraption, Death Of An Empire, Prigozhin's March of Justice). CSL is Ray's game-publishing entity across formats (board wargames at `consimsltd.com/shop` plus digital games on itch), not a peer-level business separate from Devforge. The kickoff-era "four businesses" framing is deprecated; see `vault/businesses/conflict-simulations.md` for the CSL umbrella structure.

## Stack (public)

Windows desktop app. **Tauri 2 + React 19.** xterm.js terminal. `@react-pdf/renderer` for exports. **Press Start 2P + Space Mono** typography.

## Links

- **Marketing site:** https://usedevforge.com (public, launched — confirmed by Ray 2026-04-15)
- **Buy on itch:** https://conflict-simulations-llc.itch.io/devforge
- App repo: https://github.com/lerugray/devforge
- Website repo: https://github.com/lerugray/devforge-website

## Target audience

Solo game designers and indie devs with a clear vision but needing technical implementation help.

## DO NOT publish

- Internal mode prompts / system-prompt design.
- Any business metrics.
- Anything not already on the Devforge website or public repo README.
