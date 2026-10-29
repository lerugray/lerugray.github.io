RAY-ASK: 2026-10-29 07:34 "another skill that will probably help in our anti-slop efforts, if you think it makes sense we could try it out on my personal site which probably could use a refresh anyway" (then picked "Audit D, then a bake-off")

# HALLMARK-TRIAL-S356: audit look D, then one Hallmark redesign for a side-by-side pick

**Grounded:** `lerugray.github.io` main@af54ea5d (2026-10-17: whole site moved to look D on Ray's go after a seen
before/after render). Hallmark = `nutlope/hallmark` pinned at `8f6969f8922caabde9de1784959eae11ddf68073` (MIT).
No SPEC.md in this repo; the anchor is Ray's words above plus this repo's CLAUDE.md "Aesthetic direction":
minimalist technical, clean typography, tight grids, utilitarian restraint.

**MOVES:** Ray sees his live look D next to one Hallmark redesign of the same site, at his screen size and on a
phone, and picks one; he also gets a plain report of what in look D reads as machine-made.

## Setup (no install into any settings)
- Fetch only `skills/hallmark/` at the pin into the lane's own scratch dir; read its `SKILL.md` and follow it.
- NEVER run `scripts/install-hook.mjs` or `scripts/install.mjs` (no settings or hook writes). NEVER run
  `scripts/imagegen.mjs` (AI image model; no key is provided and AI art is not allowed here).
- Its render scripts need headless Chrome (Puppeteer or `CHROME_PATH`); install what they need inside the lane.

## Phase A: audit (report only, no source edits)
Build the site (`npm ci && npm run build`), serve `dist/` over HTTP, then run Hallmark's audit mode on: `/`,
`/writing/`, `/games/`, `/about/`, `/hammerstein-ai/`, `/wargame-modules/`. Write
`docs/verification/hallmark-trial-s356/AUDIT.md`, line 1
`HALLMARK-AUDIT pages=6 floor=<n> reflex=<n> finish=<n>`, then each finding as page, element, gate, and one
plain sentence on why it reads as made-by-a-machine.

## Phase B: one redesign on this branch
Hallmark's redesign mode on the whole site, keeping:
- every page, route, heading and sentence of content (no rewrites; any NEW label or sentence follows the
  stop-slop rules: no em-dashes, no hype words, plain claims only);
- every internal and external link, the nav (`src/data/navigation.ts`), the content collections, and the four
  hand-curated writing surfaces this repo's CLAUDE.md names (homepage `<ol>`, sidebar items, start-here hero);
- the stack: Astro, TypeScript, plain scoped CSS, no Tailwind, no CSS-in-JS, no new third-party scripts;
- images: only images already in the repo. No stock photos (Hallmark's photo pack stays unused on a personal site).
Direction: let Hallmark's pre-flight read the aesthetic line above; record the theme or custom direction it took,
and why, in REPORT.md. One redesign only.

## Fence
- Commit only to this branch (`gs/hallmark-trial-s356`). NEVER push to `main` (GitHub Pages deploys from main).
  No deploy of any kind. No merge.
- This repo is PUBLIC: no host names, IP addresses, local paths, keys or private repo names in any committed file.
- Out of scope: `workers/`, `vault/`, `.mcp.json`, `.claude/`, `opendesign/` (read-only).

## Proof (all in `docs/verification/hallmark-trial-s356/`)
1. `npm run build` green at af54ea5d and at the redesign head.
2. Route parity: the set of built HTML routes is identical; every internal href on both builds resolves (count both).
3. Hallmark's render lint (`sloplint.mjs --render`) on the redesign: floor = 0; also report look D's floor count.
4. Frames of `/`, `/writing/`, `/games/`, `/hammerstein-ai/`, look D and redesign each, at 1440x900 DPR 2 and
   390x844 DPR 3, first screen plus one full-page capture each, filenames `<page>-<D|H>-<w>-s356.png`.
5. REPORT.md line 1: `HALLMARK-TRIAL DONE|PARTIAL audit=<floor>/<reflex>/<finish> head=<sha> build=green
   routes=<n>=<n> links_ok=<n>/<n> floor=<n> frames=<n> direction=<theme|custom>`.

## Chain
ONE Sonnet 5.5 author (MAIN account, Ray s356 07:01 ruling), cap 10,800 s, checkpoint commits. Then ONE Opus 5.5
look (MAIN) gating the relay to Ray: content parity, no Hallmark floor tells, reads as Ray's own site rather than a
template, phone layout sound. Then GS stages a desk packet: look D or the Hallmark redesign, one-word answer.
Landing to `main` is a separate step after Ray's pick.
