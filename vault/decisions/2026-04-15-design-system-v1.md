# 2026-04-15 — design system v1

Supplement to [`2026-04-15-project-kickoff.md`](2026-04-15-project-kickoff.md) and [`2026-04-15-tooling-resolution.md`](2026-04-15-tooling-resolution.md). Session 2 opened with a structured design proposal to Ray; he approved all four directional leans in one response. This record locks the choices before building so the proposal doesn't drift mid-build.

## Context

The scaffold was live at `lerugray.github.io` as a prose-free placeholder (dark, system font stack, `bg-neutral-950`). Session 2's job was to turn "minimalist-technical (Linear / Vercel / Radix school)" — the aesthetic that was locked at kickoff — into concrete typography, palette, spacing, and component patterns before writing any real pages.

The hard constraint was spoken by Ray at kickoff and repeated in the handoff: **the site cannot look like a generic AI-generated portfolio template.** It has to look like a real founder's home. That is what every trade-off below was checked against.

## Decisions

### 1. Typography — IBM Plex (serif + sans + mono)

- **Body, essay prose:** IBM Plex Serif (400, 600, 400-italic, 600-italic)
- **Chrome, headings, labels:** IBM Plex Sans (400, 500, 600)
- **Stack, code, tabular figures:** IBM Plex Mono (400, 500)
- Self-hosted via `@fontsource/ibm-plex-*`. OFL-licensed, free, no GitHub Pages friction. `font-display: swap`.
- Fallback chains in `global.css` `@theme`:
  - `--font-serif: "IBM Plex Serif", ui-serif, Georgia, Cambria, "Times New Roman", serif`
  - `--font-sans: "IBM Plex Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`
  - `--font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace`

**Why Plex over alternatives.** Two other options were on the table: (B) Newsreader + Inter + JetBrains Mono (safer, more faithful to Linear/Vercel, highest template risk because Inter is the Linear/Vercel default), and (C) EB Garamond + Space Grotesk + Space Mono (editorial-quirky, higher agency-portfolio risk). Plex won for three reasons. First, it is a **unified family** — serif, sans, and mono were designed together with shared proportions, so mixed-voice pages cohere. Second, it is **specifically not Inter**, which honors Ray's "not default" instinct one layer above the Tailwind/ESLint choice. Third, **Plex Serif survives long-form** at the 2,200-word essay scale, which Inter cannot.

### 2. Palette — "Ink on Parchment" (dark, warm)

Semantic tokens in `global.css` `@theme`:

| Token | Hex | Role |
|---|---|---|
| `--color-background` | `#0c0b09` | Page background — warm-tilted near-black |
| `--color-surface` | `#1a1814` | Table row hover, code blocks, nested surfaces |
| `--color-border` | `#2a2620` | Dividers, table hairlines |
| `--color-foreground` | `#f5f0e6` | Body copy — warm off-white, vellum-leaning |
| `--color-muted` | `#a8a095` | Captions, meta, secondary prose |
| `--color-subtle` | `#6b6356` | Timestamps, footnotes (≥14px only) |
| `--color-link` | `#d4a574` | External links — warm brass, not cyan or blue |
| `--color-link-hover` | `#f0c38a` | Link hover state |
| `--color-accent` | `#c9484e` | Wargame-counter red — CSL brand mark only, never decoration |

Contrast verified against WCAG AA:
- `foreground` on `background`: ~17:1 (AAA)
- `muted` on `background`: ~7:1 (AAA)
- `subtle` on `background`: ~3.3:1 (AA large text / meta only)
- `link` on `background`: ~8.5:1 (AAA)

**Why warm-dark.** Cool-graphite is the Linear/Vercel default; going there would have kept the palette on the safe, template-prone axis. Warm-dark pulls from the historical-wargame cartographic tradition Ray actually works in: vellum, sepia map margins, amber marker lights on a tactical panel. It is the palette-level answer to "not template." The trade-off is real: if the warm tone doesn't land after rendering, unwinding it is not a one-line change because the Plex Serif body is tuned to read on the warm ground. Ray approved the bet.

### 3. Routing — multi-page, file-based Astro routes

Each top-level section is its own Astro route:

- `/` → About (bio is the homepage; no separate `/about` route)
- `/writing` → writing index (one entry for now, room for more)
- `/writing/hammerstein` → flagship essay (shareable URL to pair with the Medium companion)
- `/conflict-simulations-llc` → CSL umbrella
- `/catalogdna` → CatalogDNA standalone
- `/retrogaze` → Retrogaze standalone
- `/auftragstaktik` → standalone project
- `/buddies` → standalone project
- `/music` → Le Rug + prior bands
- Contact lives in the site footer, reachable via `#contact` anchor on every page (not a separate route)

**Why multi-page over single-page scroll.** Shareable URLs for the essay and for each business/project, cleaner back-button behavior, each page gets its own load budget, and the essay can render as a real document rather than a scroll section. Trade-off: more routing scaffolding upfront before anything renders meaningfully. Ray approved the trade.

### 4. Component patterns

Approved in §4 of the proposal. Summary (full pattern detail in the session-02 log):

- **A. Essay** — classic editorial single column, 65ch measure, 1.75 leading, Plex Serif body. H2 in Plex Sans same color as body. Horizontal rule only at act boundaries. External-link underline with 1px thickness, 3px offset, amber.
- **B. Business umbrella (CSL)** — H1 + dek + credential strip (Plex Mono small caps between hairlines) + three nested blocks (Board / Digital / Book), each with a small-caps sans label over a hairline rule.
- **C. Catalog table** — plain `<table>`, hairline borders, title (Plex Serif bold) / price (Plex Mono tabular) / format / description. Full-row hover shifts to surface. Reused for CSL digital catalog and Auftragstaktik feature table.
- **D. Project card** — H1 + serif one-liner + mono repo/stack row + prose + feature table + "how it was built" honest note in muted sans.
- **E. Music** — Bandcamp official iframe + selected-releases UL + "Previously" block + three Tyler tweets as styled `<blockquote>` with status URLs + archive.org fallback. **No live tweet embed widgets.**
- **F. About** — single column, seven paragraphs of bio in Plex Serif, contact line at bottom, no photo, no hero, no resume.
- **G. Site shell** — sidebar at ≥`lg`, top bar below. Nine items, current-section highlighted with a 2px left border in `link` amber.

## Trade-offs accepted

1. **Warm-dark is the biggest single bet.** If the palette doesn't land after rendering, unwinding it propagates through Plex Serif's contrast tuning. Accepted in exchange for the strongest lever on "not template."
2. **Plex is more idiosyncratic than Inter.** Linear/Vercel use Inter. Visitors who are fluent in the minimalist-technical idiom may read Plex as "not quite the default technical sans," which is exactly the point — and exactly the risk.
3. **Multi-page adds scaffolding** before the first visual output. Single-page would have been faster to iterate on.

## Explicit NOT decisions

- **No animated hero, parallax, cursor trails, 3D intros** — age badly, scream AI template.
- **No card-grid project gallery** — projects read as separately-considered entries.
- **No light/dark mode toggle in v1** — ship dark, add light later if Ray wants.
- **No live tweet embeds** — ad tracking + tweets can disappear. Styled blockquotes + archive fallback.
- **No icon-heavy chrome** — one family (Lucide), minimal use.
- **No custom display typeface from a paid foundry** — overkill.
- **No wargame-map illustrative background or hex grid** — violates honest-findings, the site is not a wargame.

## Open questions (resolve as they come up)

- Whether the reading-time estimate under the essay title reads as useful or cute. Low-stakes, can cut during iteration.
- Final homepage shape: straight bio, or bio + a tiny "what I'm building right now" strip. Default = straight bio unless it feels too thin when rendered.
- Whether CSL's URL should be `/conflict-simulations-llc` (descriptive, long) or `/csl` (terse, opaque). Default to the descriptive version unless the sidebar chrome feels crowded.

## Cross-reference

- Session log for this build work: [`../sessions/2026-04-15-session-02.md`](../sessions/2026-04-15-session-02.md)
- Kickoff decisions: [`2026-04-15-project-kickoff.md`](2026-04-15-project-kickoff.md)
- Tooling resolution: [`2026-04-15-tooling-resolution.md`](2026-04-15-tooling-resolution.md)
