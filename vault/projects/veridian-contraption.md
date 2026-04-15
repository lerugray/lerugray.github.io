# Veridian Contraption — public positioning (source-of-truth)

_Created 2026-04-15 from the private repo README (`github.com/lerugray/veridian-contraption`) via authenticated `gh api`, plus the public itch listing at `conflict-simulations-llc.itch.io/veridian-contraption`. Run through `stop-slop` before shipping site copy._

## One-liner

An autonomous ASCII world-simulator that generates and sustains living worlds of considerable strangeness — worlds that proceed whether the player watches or not, narrate themselves in dense and peculiar prose, and export their histories on demand.

## Tagline (Ray's own, verbatim from the README)

> *A World-Simulator of Considerable Density and Dubious Intent*

## What it is

A full-screen terminal application. Left pane: a colored ASCII world map. Right pane: a scrolling narrative log. Settlements glow amber. Caravans crawl along trade routes. Forgotten beasts patrol in magenta. Levies march in blood-red. The log reads **like a bureaucrat who has absorbed too much Borges** (from the README).

Civilizations rise, splinter, and develop baroque bureaucracies while the player is doing something else. When the player returns, there is always more to read.

## Public listing

- **itch:** [conflict-simulations-llc.itch.io/veridian-contraption](https://conflict-simulations-llc.itch.io/veridian-contraption)
- **Price:** $3
- **Status:** Released (Ray described it as "nearly finished / early-access"; the itch listing currently shows Released)
- **Engine / language:** Rust (edition 2021), terminal with truecolor support
- **Published by:** Conflict Simulations LLC

## What's inside (from the README)

**Simulation core:**

- Autonomous simulation — the world runs on its own, interaction is optional
- Procedural everything — terrain, peoples, names, institutions, artifacts, prose, history
- 170+ event types rendered in register-sensitive prose (Clinical, Lyrical, Bureaucratic, Ominous, Conspiratorial)
- 21 quest types — agents pursue quests autonomously, or the player commissions them from a patron budget
- Variable world size (Small to Huge) with scrollable viewport and minimap
- Full save/load, multiple named worlds, autosave, 11 document report types, TXT history export

**Systems on top of the sim:**

- **Faction founding and patronage** — guilds, cults, mercenary companies
- **Patron actions** — sponsor artists, introduce rumors, declare trade embargoes, grant titles
- **Military system** — levies, cavalry, artillery, wars resolved with tabletop-inspired CRT combat
- **Sieges and fortifications** — organic wall development, fortified-town defense, multi-phase off-map invasions
- **Off-map forces** — foreign powers approach with three-tier foreshadowing (rumors, sightings, arrival), then invade, parley, settle, or fragment
- **Cross-world connectivity** — worlds reference each other through manifests, the Atlas screen tracks entities and expeditions, there is a Bureau of Absent Persons
- **Lair escalation and blight** — neglected monster lairs escalate from Minor to Major to Forgotten, corrupting surrounding terrain
- **Magic system** — six traditions (Necromancer, Elementalist, Geomancer, Bureaucromancer, Cleric, Illusionist), wizard towers, corruption, rogue wizards
- **Political layer** — coups, purges, show trials, espionage, demagogues, ideological spread
- **R'lyeh Deep One Emergence** — slow-building Lovecraftian event with foreshadowing, surfacing, and diplomatic Deep Ones
- **7 Eschaton types** — world-altering catastrophes that permanently reshape geography, institutions, and populations, without ending the simulation
- **Living ecology** — 24 animal species, predator-prey dynamics, seasonal cycles, hunting
- **Trade and economy** — 27 trade goods, A* caravan pathfinding, price history, off-map traders, naval blockades during sieges
- **Anomalies** — 16 types of rare localized world events with lifecycles and map visibility
- **Artist system** — poets, bards, and visual artists create feeling-driven works; great works enter the World Annals
- **Five world flavor presets** — The Long Bureaucracy, The Burning Provinces, The Deep Taxonomy, The Conspiratorial Age, Unguided

## Controls (partial)

| Key | Action |
|---|---|
| `Space` | pause / unpause |
| `.` | step one tick |
| `0` / `1` / `2` / `3` / `4` | speed (0.25x / 0.5x / 1x / 5x / 10x) |
| `i` | inspect entity (agents, settlements, factions, sites) |

## Audience

Players who want a world that exists without them. People who liked Dwarf Fortress's narrative layer more than the colony management. Readers who thought *Dune*'s appendices were the best part. Anyone whose ideal Saturday is running a simulation and reading the output.

## Relation to the rest of the portfolio

Veridian Contraption is the most systemically ambitious thing Ray has shipped on the digital side of Conflict Simulations LLC. The feature list alone — 170+ event types, 21 quest types, seven Eschaton classes, full military / political / magic / economic / ecological systems, procedural prose registers — is substantially more work than most indie simulators attempt. It is also terminal-first and ASCII-rendered, which ties aesthetically to DOAE and Auftragstaktik.

## DO NOT publish

- Internal pricing, sales, or download numbers
- Implementation details beyond what is in the README
- In-progress features or roadmap items not already publicly documented

## Sources

- Private repo README: `github.com/lerugray/veridian-contraption` (accessed via authenticated `gh api`)
- Public itch listing: https://conflict-simulations-llc.itch.io/veridian-contraption
