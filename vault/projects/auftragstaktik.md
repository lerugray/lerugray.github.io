# Auftragstaktik — public positioning (source-of-truth)

_Created 2026-04-15 from the public README at github.com/lerugray/auftragstaktik. Run through `stop-slop` before moving to `src/content/`._

## One-liner

A tactical OSINT command terminal. Live frontlines, aircraft and ship tracking, air-defense envelopes, radar coverage, military installations, nuclear facilities, conflict events, and auto-translated intel from military Telegram channels — in one terminal, in NATO symbology, all open-source.

## What it is

A web-based tactical map and intelligence dashboard built from public OSINT sources. It shows what is happening and what could happen: where the frontlines are right now, what aircraft and ships are where, what the air-defense coverage looks like, what nuclear sites are near the line, and what recent verified events have landed in the zone.

Named for the German doctrine of **mission-type tactics** — give the objective, let subordinates figure out execution — which is also how Ray built it: direction in, implementation via Claude Code, shipped in roughly two weeks.

## Links

- **Repo:** [github.com/lerugray/auftragstaktik](https://github.com/lerugray/auftragstaktik) — public, MIT, 3 stars
- **Stack:** Next.js 15 + TypeScript 5.7 + MapLibre GL + Ollama (local LLM for briefings)

## Capabilities (from the README)

| Feature | What it does |
|---|---|
| **Tactical map** | Nine togglable layers — frontlines, aircraft, ships, air defense, installations, radar, nuclear, conflict events, density heatmap. Click markers for detail panels and Wikipedia links. Dark or light basemap. |
| **Intelligence feed** | GeoConfirmed events and Telegram posts (auto-translated). Filter by source or severity, click to fly the map to location, export as JSON or CSV. |
| **Briefing generator** | Local LLM (Ollama) produces structured SITREPs — location summaries, faction breakdown, equipment losses, source attribution. Export as PDF. Zero API cost. |
| **Air defense layer** | OSINT-confirmed SAM / AD installations with engagement envelopes. S-400 at 400 km, Patriot at 160 km, Iron Dome at 70 km. Coverage zones and gaps visible at a glance. |
| **Installations layer** | 35 military bases, naval ports, HQs, logistics hubs, strategic chokepoints (Hormuz, Bab el-Mandeb, Suez, Malacca) across four theaters. NATO symbology with friendly / hostile affiliation. |
| **Radar / sensors** | 20 radar sites from Voronezh early warning (6000 km range) down to coastal surveillance. Purple range rings show detection and tracking envelopes. |
| **Nuclear / CBRN** | Known reactors, enrichment plants, weapons storage, test sites. Yellow exclusion zones. CBRN keywords in events auto-escalate to critical severity. |
| **Historical mode** | 140,000+ archived events from UCDP GED (1989–2023) across five theaters — Yugoslav Wars, Gulf War, Iraq War, Afghanistan, Syrian Civil War. Cumulative playback with year-based color gradient, fatality-scaled markers, Wikipedia / news archive links. |

## Data sources (public, no paid APIs required)

- **DeepState** — frontline positions, occupied territory, unit deployments
- **GeoConfirmed** — verified conflict events (strikes, shelling, clashes)
- **adsb.lol** — aircraft positions via ADS-B, military and civilian
- **aisstream.io** — ship positions via AIS (free API key)
- **Telegram channels** — Rybar, DeepState UA, WarGonzo, auto-translated
- **UCDP GED** — historical conflict events 1989–2023, CC BY 4.0
- Curated OSINT databases for air-defense sites, military installations, radar, and nuclear facilities

## Audience

OSINT analysts, conflict journalists, historical wargamers, and anyone who wants a single dashboard view of real-time geopolitical developments without the clickbait layer. Strong audience overlap with the wargaming community that already buys Ray's board wargames and digital historical games.

## Relation to the rest of the portfolio

Auftragstaktik is a concrete example of the **"direct, don't build"** story: Ray is a wargame designer, not a full-time programmer, and Auftragstaktik is a modern Next.js web application with live data integration, a tactical map, a briefing generator, and historical data playback. He didn't write most of its code. He directed it into existence using Claude Code, in roughly two weeks. That is the honest version and it belongs on the project page.

## DO NOT publish

- Any internal usage, traffic, or user metrics
- Claims that Auftragstaktik is an intelligence product in any formal or professional sense — it is a tactical situational-awareness dashboard drawing on public OSINT data
- Speculation about the data sources beyond what the repo README lists

## Sources

- [github.com/lerugray/auftragstaktik](https://github.com/lerugray/auftragstaktik) — public repo and README
- README screenshot filenames reference "built-a-tactical-osint-terminal-with-claude-code-in-two-*" — corroborates the ~2-week build story
