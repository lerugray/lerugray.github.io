# Buddies — public positioning (source-of-truth)

_Created 2026-04-15 from the public README at github.com/lerugray/Buddies. Run through `stop-slop` before shipping to `src/content/`._

## One-liner

The game layer for Claude Code. Collect, evolve, and play with AI companions in your terminal — while it also acts as a productivity layer that trims tokens, grades your `CLAUDE.md`, and watches for repeated mistakes.

## What it is

Two things at once:

1. **A creature-collection game** with 70+ species, 16 hats, a 10-game arcade (including a deckbuilder, Snake, and Ski Free), a full text-adventure MUD, buddy fusion, personality drift, a retro BBS, and async multiplayer.
2. **A Claude Code productivity layer** that auto-generates a code map of your project so Claude doesn't burn tokens figuring out where things are, grades your `CLAUDE.md`, watches for repeated mistakes and writes rules to stop Claude making them, and tracks token usage with warnings before context limits.

The framing from the README: *"Because productivity tools should be fun."*

## Links

- **Repo:** [github.com/lerugray/Buddies](https://github.com/lerugray/Buddies) — public, MIT
- **Stack:** Python 3.11+ with 1015 passing tests
- **Optional:** Ollama for local LLM integration (no API cost)

## What's inside (from the README badges)

- 70+ collectible species
- 16 hats
- 10 arcade games
- 79 achievements
- 1015 passing tests

## How it sits with Claude Code

Claude Code ships with a built-in `/buddy` companion — a cute mascot that watches you code. Buddies is everything beyond that: you can import your Claude Code `/buddy` companion into your Buddies party, and Claude bridges the two systems automatically. Your Claude Code mushroom can sit at the poker table with your Phoenix.

## Local AI support

Optional. Install Ollama, pull a model, and your buddy can answer coding questions, read files, search code, and run safe commands with no API cost. Queries are routed automatically by complexity.

## Audience

Claude Code users who want a productivity layer that does not feel like a productivity layer. Collectors. People who think Tamagotchi and coding assistants should have a baby.

## Relation to the rest of the portfolio

Buddies sits in a different register from the CSL games (serious, historical, terminal-first). It is lighter, funnier, and it demonstrates a different capability: Ray directing the construction of a substantial Python + local-LLM tool with real test coverage and real tool integration, for a productivity audience rather than a wargaming one. It is also the portfolio piece that most directly addresses developers as a reader.

## DO NOT publish

- Any claim about user counts or adoption metrics
- Internal architecture decisions or implementation details beyond the public README
- Speculation about the Claude Code `/buddy` companion that Buddies extends

## Sources

- [github.com/lerugray/Buddies](https://github.com/lerugray/Buddies) — public repo and README
