# Cursor handoff — ZERO PAGE landing page (2026-05-27)

Build the ZERO PAGE landing page on this Astro site, matching the
shape of the Veridian Contraption page at
`src/pages/conflict-simulations-llc/veridian-contraption.astro`.

Ray launched ZERO PAGE 1.0 today on itch.io at
https://conflict-simulations-llc.itch.io/zero-page for $6.99. The
itch.io page is in draft; the landing page on lerugray.github.io is
the richer marketing surface, mirroring how the VC page complements
the VC itch listing.

## Scope (one Cursor batch)

Write a single new file:

```
src/pages/conflict-simulations-llc/zero-page.astro
```

Plus copy one asset:

```
cp /Users/rayweiss/Desktop/Dev\ Work/ZERO-PAGE-private/app/public/manual.pdf \
   public/zero-page/manual.pdf
```

Do NOT also build the demo, sandbox, or music-video assets — those
are separate Cursor batches scoped below. The page can reference
them with the agreed local paths (`/zero-page-demo/`,
`/zero-page-sandbox/`, `/zero-page-music-video.mp4`); they will be
populated by the follow-on batches before launch.

## Reference: Veridian Contraption page shape

Read `src/pages/conflict-simulations-llc/veridian-contraption.astro`
first. Match this structure exactly:

1. BaseLayout wrapper with title + description meta
2. Breadcrumb link to `/conflict-simulations-llc`
3. H1 game name + italic subtitle in font-serif
4. In-game blockquote with mono attribution footer
5. 3 prose paragraphs (font-serif via .prose-body, em for emphasis)
6. "Play it in your browser" section + big bordered CTA button
7. System / What it does table
8. Soundtrack section (or analogue)
9. Stack section
10. Lineage section
11. Buy section
12. Closing italic personal note signed Ray

Use the same Tailwind classes verbatim where they're load-bearing for
the design system (`.font-mono`, `.font-serif`, `.prose-body`,
`.terminal-section`, `.border-border`, `.text-muted`,
`.text-foreground`, etc).

## ZERO PAGE — page content

### Meta

- Title: `ZERO PAGE | Ray Weiss`
- Description: `ZERO PAGE — a 6502 assembly puzzle game. 24 missions
  in a phosphor terminal with bureaucratic dread. Playable web demo;
  released on itch under Conflict Simulations LLC at $6.99.`

### Subtitle

```
6502 assembly puzzles with bureaucratic dread.
```

### In-game blockquote

```
Artillery unit reports systematic deviation in impact coordinates.
Field sensors return raw range data, but atmospheric wind drift
introduces consistent offset. Program the correction module.
```

Attribution footer:

```
PUZZLE 001 · FIELD BALLISTICS UNIT
```

### Prose intro (3 paragraphs)

```
You are contracted to write low-level microprocessor code for a
government program. The puzzles are routine. The narrative is not.

ZERO PAGE is a 6502 assembly puzzle game played in a terminal.
Fifteen main missions teach the instruction set, from load and store
through bit manipulation to indirect addressing. Six bridge missions
pace the second half. Three hidden missions live behind in-game
clues that attentive play surfaces.

Each puzzle ships with a briefing and a debrief, both written in the
register of the agency you work for. Field ballistics units.
Suppression filters. Density scanners. Record processing. The
bureaucratic language stays clinical. As the puzzles advance, the
tone shifts from reassuring to terse to minimal. Read carefully and
you see what the agency does.
```

### "Play it in your browser" section

Heading: `Play it in your browser`

Body:

```
A curated two-puzzle demo of the assembly editor, the memory grid,
the 6502 instruction subset. Same engine as the full standalone.
Keyboard-first; mouse supported.
```

CTA button: link to `/zero-page-demo/index.html` with text `▶ Play
the web demo` (use the same chevron entity as VC) and the muted
subtitle `opens fullscreen, in a new tab`.

### Sandbox section (new — not in VC)

Heading: `Sandbox mode`

Body:

```
Write freeform 6502 assembly outside the campaign. The same memory
model, the same instruction subset, no mission tests, no time
pressure. Useful for the curious; load whatever you want into the
zero page and watch what happens.
```

CTA button: link to `/zero-page-sandbox/index.html` with text `▶
Open sandbox` and muted subtitle `opens fullscreen, in a new tab`.

### Music video section (new — not in VC)

Heading: `My Malfunction`

Body:

```
Somewhere late in the campaign the program plays itself a music
video. Original composition, lo-fi visualizer, phosphor green. A
thirty-second teaser is below; the full sequence unlocks in the
standalone.
```

Embed: `<video>` element with `src="/zero-page-music-video.mp4"`,
attributes `autoplay muted loop playsinline controls`. Same bordered
container style as the demo CTA. If the video file does not exist
yet, render the `<video>` tag anyway — the file will be added in a
follow-on batch and the page already loads against the path.

### Operator's Reference Manual

Heading: `The Operator Reference Manual`

Body:

```
The build ships with the OPERATOR REFERENCE MANUAL, a six-by-nine
PDF in the same voice as the briefings. Instruction set, memory
map, mission notes, and the parts that did not survive a contractor
audit. Read it here.
```

CTA link: `/zero-page/manual.pdf`, opens in new tab. Use a smaller
button style than the demo/sandbox CTAs.

### System / What it does table

| System | What it does |
| --- | --- |
| 6502 engine | Load and store, arithmetic, branching, bit manipulation, stack ops, indirect addressing — a curated subset of the real MOS 6502 instruction set, tuned for puzzle pacing rather than complete chip emulation. |
| Campaign | 24 missions: 15 main (instruction set teach), 6 bridge (difficulty pacing), 3 hidden (in-game clues, classified-module debriefs). Reference solutions ship for every puzzle. |
| Execution controls | Step one instruction at a time, run until completion, configurable cycle limit per mission. Mission tests with pass/fail feedback. |
| Sandbox | Freeform 6502 outside the campaign. Same engine, no constraints. |
| Save tapes | `.6502` files — plain text, hand-editable. Save your program at any point, reload later. |
| Aesthetic | Phosphor green default; amber, stark white-on-black, and light mode all in Options. Optional CRT bloom, scanlines, vignette. Keyboard-first; mouse supported but not primary. |
| Manual | A six-by-nine PDF written in the same diegetic register as the briefings. Ships with the build and is also linked here. |

### Stack section

```
Electron 33 with a Vite + React renderer. TypeScript end-to-end.
The 6502 engine is a clean reimplementation, not an off-the-shelf
emulator — small enough to verify cycle-accurate, focused on the
instruction subset the puzzles actually use. Cross-platform builds
for Mac (Intel and Apple Silicon), Linux, and Windows.
```

### Lineage section

```
TIS-100, Shenzhen I/O, EXAPUNKS — Zachtronics-adjacent in shape, but
the diegetic register pulls from somewhere else entirely. Period
bureaucratic prose, recordkeeping language, the way agencies
describe their work to themselves. The phosphor terminal aesthetic
borrows from late-80s industrial CRT readouts.
```

### Buy section

```
On itch under Conflict Simulations LLC at $6.99 —
[conflict-simulations-llc.itch.io/zero-page](https://conflict-simulations-llc.itch.io/zero-page).
Native builds for Mac (Intel and Apple Silicon), Linux. Windows
build lands this week.
```

### Closing personal note

Italic, font-serif, signed `— Ray`. Suggested:

```
The free fifteen-puzzle web version of ZERO PAGE has lived on itch
in some form for a while. The standalone is the version I always
wanted to ship: the full twenty-four-mission campaign, the bridge
missions that pace the second half, the three classified modules,
and the manual. Thanks for playing.
— Ray
```

## Voice constraints

- No em-dashes in prose. Use ", " or ". " or "(...)" instead.
- No exclamation points.
- No marketing-bro adjectives ("incredible," "stunning," "immersive").
- No "discover," "embark," "journey," "experience" as verbs.
- No rhetorical questions.
- The diegetic register (field ballistics units, agencies, classified
  modules) is the voice. Run with it, don't break frame to "this is
  a game where you...".

## Follow-on Cursor batches (NOT this batch)

These are separate Cursor sessions that will run after this one:

1. **`public/zero-page-demo/`** — A standalone two-puzzle build of
   ZERO PAGE. Source: `/Users/rayweiss/Desktop/Dev Work/ZERO-PAGE/`
   (the public 15-puzzle game.html). Strip to missions 1-2, remove
   the mission-select for higher missions, drop the music video.
   Open as a fullscreen page.

2. **`public/zero-page-sandbox/`** — A standalone sandbox-only build.
   Same source, boots straight into sandbox mode. No campaign.

3. **`public/zero-page-music-video.mp4`** — A 30-second clip of the
   "My Malfunction" music video. Source: the in-game audio +
   visualizer canvas under
   `/Users/rayweiss/Desktop/Dev Work/ZERO-PAGE-private/app/src/renderer/src/core/malfunction-visualizer.ts`
   and the music file in `public/`. Render the visualizer to canvas,
   record the first ~30 seconds via `ffmpeg` or a canvas-capture lib,
   encode to mp4.

Don't attempt these in this batch.

## Acceptance criteria for this batch

- `src/pages/conflict-simulations-llc/zero-page.astro` exists and
  matches the structure of the VC page.
- `public/zero-page/manual.pdf` exists (copied from the source repo).
- `npm run build` succeeds.
- `npm run dev` renders the page at
  `http://localhost:4321/conflict-simulations-llc/zero-page` without
  TypeScript or Tailwind errors. Broken iframes / video src is
  expected (those assets ship later).
- No content from this brief is invented — quote prose verbatim from
  the "ZERO PAGE — page content" section above, with only minor
  HTML-escape adjustments.
