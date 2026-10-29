HALLMARK-TRIAL DONE audit=98/105/15 head=274a682 build=green routes=50=50 links_ok=1435/1435 floor=0 frames=32 direction=theme
Headless Chrome ran: Hallmark's render tier (sloplint --render, through puppeteer-core with the container's Chromium and --no-sandbox) and all 32 frames are real captures; nothing on this page is from a static-only fallback.

# Hallmark trial s356: report

Branch `gs/hallmark-trial-s356`. `head=274a682` is the redesign commit every check and frame below ran against; the commit that adds this report and its proof files sits on top and changes nothing under `src/`. Nothing was pushed or merged to `main`, nothing was deployed, and no pull request was opened.

## FIX1

HALLMARK-FIX1 DONE head=495c25b fixed=6/6 build=green routes=50=50 links_ok=1435/1435 floor=0 frames=32

The independent look passed the redesign with six defects. All six are fixed on this branch in the Specimen material. `head=495c25b` is the fix commit that every check and frame in this section ran against. The commit that adds this section, its proof files and the new frames sits on top and changes nothing under `src/`. Branch only: nothing went to `main`, no pull request, no deploy. This section supersedes "What the old design did better" further down: both gaps that section kept are now closed.

### The six, and what changed

1. **/games/ pictures.** Every cartridge has its picture again. I redrew look D's twelve label drawings (the `labelArt` SVGs at af54ea5) in Specimen's material. They keep the same compositions in ink on oat, using `currentColor`, tints of it and the cell's own ground. The hairlines stay 1px at any size, and there is no hue. The selected cartridge fills ink and its label prints in reverse. The page copy ("Pick a cartridge below… under the cabinet") is untouched and now matches the screen. The Jacquard Index label has its clue digits back. The drawings are code in `src/pages/games.astro`: no stock, AI or new raster images.
2. **Phone nav.** Under 70rem the seven links wrap onto their own rows, two rows at 390px, as look D's did. The sideways scroll and its fade are gone. I checked six pages at 390px: no link sits off screen and the page stays 390px wide.
3. **Home first screen.** The name now holds seven of the twelve columns under its guides, with the statement beside it, on a paper-2 plate. Under that, the commissions run in two columns: the flagship with "Price $400 to $800." on the left, the three services on the right. At 1440x900 all three prices are on the first screen; the last ends at y 874. On `/` the header drops its locator and its address, because the hero prints both directly under it, so each shows once. Every other page keeps the header as it was.
4. **/games/ on a phone.** Under 980px the selected build's details open inside the shelf, directly under the row of the tapped cartridge, as a drawer. The tapped cartridge stays where the finger was. If the details would start low on the screen, the row lifts to the top so the picture and Play come into view. On first load the details close the shelf, so all twelve cartridges read together first. A deep link such as `#capriole` opens under that cartridge's own row. Desktop is unchanged: the details stay in the column beside the shelf. Keys pressed inside the opened details no longer move the shelf's selection.
5. **Bodoni dashes.** Bodoni Moda draws its en and em dashes as one hairline at every optical size and weight; I tested up to weight 900. Two `unicode-range` faces now join the Bodoni family for the dash code points only and draw them from Geist. The text is unchanged. On /games/, Chrome's own font report shows the statement and the field-report head drawing their dashes from Geist and every other glyph from Bodoni.
6. **Phone link underlines.** The underline now sits 0.1em under the baseline instead of 0.18em, with skip-ink set. Wrapped display titles get a little more line height (1.2 to 1.22). The line now breaks around J and g tails and stays clear of the next line.

Checking turned up two smaller faults, both fixed. On touch screens the tapped cartridge kept a hover tint; it now shows the plain ink fill. At laptop widths (960 to 1200px) the home's identity line wraps, and the counter now holds its first line instead of floating between two.

### Proof (files in this folder)

| # | Check | Result | File |
| --- | --- | --- | --- |
| 1 | `npm run build` at 495c25b | green, 37 pages | `build-H-r1.txt` |
| 2 | Built HTML routes, look D against the fix | 50 = 50, identical set | `parity-r1.md` |
| 2 | Internal hrefs resolving, fragments checked | D 1502/1502, fix 1435/1435 | `parity-r1.md` |
| 2 | Every `<a href>`, per page | 1707 to 1706: the header's copy of the address on `/`, removed on purpose; no destination is lost from any page and nothing is gained | `parity-r1.md` |
| 2 | Visible text, word level | look D to the fix equals look D to the redesign before it, plus two removals on `/` (the header's "Brooklyn, NY · 40°41′N" and its address); no sentence changed | `text-parity.md`, section FIX1 |
| 3 | `sloplint --render --kept`, whole site | fix: 0 FAIL, 0 REFLEX, 0 WARN (42 waived, 19 answered, 37 dismissed, 58 notes); kept: links 135/135, fields 4/4, headings 177/181 and figures 164/165, every gap on the record | `sloplint-H-site-r1.txt` |
| 3 | Look D, same conditions | 182 FAIL, 235 REFLEX, 83 WARN | `sloplint-D-site-r1.txt` |
| 4 | Frames | 32 new captures named `-r1-s356.png`, beside the 32 originals; same pages, sizes and densities | `frames/` |
| 5 | Repo checks | `astro check` 0 errors; ESLint clean on `src` | (run in session) |

### On the record

- **Gate 44c is waived.** It wants the hero to fill the first screen and only that screen. Defect 3 wants the commissions and their prices on that screen, so on `/` the hero plate ends near 432px and the commissions start under it. The stamp says so. That makes four waived Reflex gates, which sloplint reports as a note, not a failure.
- **Gate 59 is met, not waived.** It wants 112px between sections, or 64px where the paper changes. The hero plate is paper-2 and the commissions sit on the page's paper, so the 70px between them passes. The plate and Start here are the page's two bands, the most Specimen allows.
- **Look D's count is 182 FAIL here, not 186.** The first run linted look D from a folder without the project's `package.json`. Files that carry no CSS of their own (a layout, a component and two page templates) then did not inherit the stylesheet's focus styles. Both builds in this section ran with the project root in place. My own first lint of the fix had the same gap and showed 6 FAIL on those same files; rerunning with the root cleared them, which is how I found the cause.
- **Text totals.** The rerun splits words at block boundaries slightly differently from the first run, so its totals for the redesign before this fix (463 removed, 228 added) differ by a few words from the first run's 467 and 227. The FIX1 comparison uses the same method for every build.
- **No new requests.** The dash faces reuse the Geist file every page already loads, and the page still sets three families (gate 37).

### Still yours to weigh

- At 1440x900 the /games/ first screen is still the title and the statement, and the cartridges start one scroll down. Look D's cabinet began on the first screen. That was not one of the six, so it stays as it was.
- On a phone, a tap opens a long drawer (the capture, the facts, the audit, Play) under that row of cartridges, and the rest of the shelf continues below it.

## For Ray, in four lines

1. **Audit of look D** (`AUDIT.md`): on the six pages, Hallmark's linter finds 98 Floor, 94 Reflex and 14 Finish findings, and the judged gates add 11 Reflex and 1 Finish. The headline is gate 65: cream paper, a serif display and a clay-red accent together are the single most recognised generated look, and look D sits inside all three bands. The words, prices and module captures are strong; the system around them is what reads as machine-made.
2. **The redesign** is Hallmark's **Specimen** theme, dealt against the site's own line (minimalist technical, clean typography, tight grids, utilitarian restraint): oat paper, near-black ink, Bodoni Moda at optical size 96 over Geist, square 1px rules, one ink-blue signal. Every page, route, link, heading and sentence is kept; the system and the compositions changed.
3. **The signature** is your name set across the full measure in razor-hairline Bodoni with ink-blue guides on its cap height and baseline, the RW counter beside the sub-line. `/games/` became Specimen's cell grid: twelve builds as hairline cells, the selected one filled ink beside its real capture.
4. **What to compare:** `frames/` holds `/`, `/writing/`, `/games/` and `/hammerstein-ai/` for look D (`-D-`) and the redesign (`-H-`) at your desktop size and on a phone. To browse the whole thing: `git checkout gs/hallmark-trial-s356 && npm ci && npm run build && npx astro preview`.

## Direction: the theme Hallmark dealt, and why this one

Pre-flight read the project: Astro 6, look D's palette (cream paper `#f2ece0`, carmine `#8b261d`), Newsreader plus three IBM Plex families, Tailwind 4 wired in for content utilities, no `design.md`. The anchor line (minimalist technical, clean typography, tight grids, utilitarian restraint) went into the deal prompt with the read of what the site is. Genre: **editorial** (a personal site built on essays and a portfolio; the modern-minimal and playful keywords fired faintly and lost).

`theme.mjs deal` dealt three: **Specimen**, Formwork, Garden. **Specimen** was taken: its material is type, square 1px rules, a grid of cells and one ink-blue signal that draws metric guides, which carries a site that is mostly words, spec tables and dated indexes, and it reads as the anchor line asks. Formwork (concrete grey, Oswald capitals, safety orange) would have printed Ray's colour game captures in black and white, and Garden needs daylight photographs the site does not have. Specimen also moves the axis gate 65 names first: look D is cream paper, a serif display and a clay-red accent, the named generated look; the redesign keeps an oat paper and a high-contrast serif but takes the accent to ink blue (hue 262).

**direction=theme** (Specimen, dealt 1 of 3, seed `personal-brooklyn-wargame-designer-8be8·276607cb·2026-10-29·r0`). Brand kept: the RW unit counter (`counter-rw.svg`) and the favicon. Look D's palette was not kept as a brand, because gate 65 names it.

## The Picks block

**Hallmark · v2.0.0**

- **Redesign** · full · 37 Astro pages (36 rendered; `/raybrain/` is a redirect stub)
- **Before** · six-page audit Floor 98 FAIL · Reflex 105 · Finish 15 (AUDIT.md); whole site by sloplint 186 FAIL · 240 REFLEX · cream paper, a serif display and a clay accent, mono capitals on every label; the essays, prices and the module capture are strong and stay
- **Keeps** · every page, route, heading, sentence, link and image; the nav (`src/data/navigation.ts`, untouched); the content collection; the four hand-curated writing surfaces; the RW counter
- **Files** · edit: every page under `src/pages`, `src/layouts/*`, `src/components/SiteHeader.astro`, `src/styles/global.css`, `astro.config.mjs`, `package.json`, `CLAUDE.md` (one line) · create: `src/styles/tokens.css`, `src/styles/base.css` (Hallmark's scaffold), `DESIGN.md` · delete: `src/styles/utilities.css` (Tailwind), `src/styles/site-content.css`
- **Theme** · Specimen, dealt 1/3 (oat paper, near-black ink, Bodoni Moda 400 at optical size 96 over Geist, square 1px rules, one ink-blue signal)
- **Shape** · Index-First on `/`, Long Document on every other page (heads in a four-column margin, text on eight)
- **Chrome** · nav: edge-aligned, the counter and wordmark left, the seven links and the contact address right · footer: index columns (the real sitemap), then contact and a colophon
- **Hero** · `/`: Settled, the name across the full measure; pages: Banner
- **Signature** · "Ray Weiss" set at poster size in Bodoni Moda with ink-blue guides at its cap height and baseline, the RW counter beside the sub-line
- **Sections (/)** · hero · commissions (the module capture as a showcase, three services as rows) · Start here (a paper band) · Writing (index rows) · Businesses (four across) · Tools (rows with facts) · Projects (four across) · Music · footer
- **Material** · real: everything on look D's pages · pictures: Ray's own module captures, covers and screenshots already in the repo · absent: library photographs (none used), AI images (none), stock (none)

## Proof

All files are in `docs/verification/hallmark-trial-s356/`.

| # | Check | Result | File |
| --- | --- | --- | --- |
| 1 | `npm run build` at af54ea5 (look D, clean `npm ci` in a scratch worktree) | green, 37 pages | `build-D-af54ea5.txt` |
| 1 | `npm run build` at the redesign head | green, 37 pages | `build-H.txt` |
| 2 | Built HTML routes, D against redesign | 50 = 50, identical set | `parity.md` |
| 2 | Internal hrefs resolving (`<a>` and `<link>`, fragments checked) | D 1502/1502, redesign 1435/1435 (one stylesheet bundle per page instead of three) | `parity.md` |
| 2 | Every `<a href>` on every page, per-page multiset | 1707 = 1707, 0 lost, 0 gained | `parity.md` |
| 2 | Visible text, word-level diff on every page | no sentence changed: punctuation (dots, dash tails, glued arrows), label case, the colophon's font names, and on `/games/` the dropped tile counters and slot labels with the build names now set as text; listed in full | `text-parity.md` |
| 3 | `sloplint --render`, whole site (static `src` plus 36 rendered routes) | look D: **186 FAIL**, 240 REFLEX, 83 WARN · redesign: **0 FAIL**, 0 REFLEX, 0 open WARN (43 waived, 19 answered, 37 dismissed on the record, 55 notes) | `sloplint-D-site.txt`, `sloplint-H-site.txt` |
| 3 | `sloplint --kept` against look D's record | links 135/135, fields 4/4, headings 177/181 (4 reworded on record), figures 164/165 (1 dropped on record) | `sloplint-H-site.txt` |
| 4 | Frames | 32 PNGs: `/`, `/writing/`, `/games/`, `/hammerstein-ai/`, look D and redesign, 1440x900 at DPR 2 and 390x844 at DPR 3, first screen and full page | `frames/` |
| 5 | Repo checks | `astro check` 0 errors; ESLint clean on site code | (run in session) |

**Scope note on the lint.** The render tier ran on 36 of the 37 Astro routes in both runs. `/raybrain/` is a meta-refresh redirect stub to `/mission-brain/`; it navigates away while the renderer measures it and hangs the run, so it is skipped for D and the redesign alike. Its source is still linted statically.

**Frames.** Names follow `<page>-<D|H>-<w>-s356.png` for the first screen; the full-page capture of the same view is `<page>-<D|H>-<w>-full-s356.png`. First screens are full-colour PNG; full-page captures are 256-colour PNG (lossless to the eye on these flat pages) so the 16 tall captures stay near 1.5 MB each instead of 4 MB.

## What changed

**System.** `src/styles/tokens.css` and `src/styles/base.css` are Hallmark's scaffold for Specimen (`theme.mjs scaffold specimen --redesign full`); `src/styles/global.css` is rewritten from scratch on top of them (about 1,200 lines, down from 2,170 plus two side sheets), its first 17 lines the Hallmark stamp, waivers and records. Fonts are self-hosted through `@fontsource` (Bodoni Moda variable with its optical-size axis, Geist, Geist Mono); no request leaves the site. `DESIGN.md` at the root locks the system for later runs.

**Stack.** Look D had Tailwind 4 wired in (`@tailwindcss/vite`, `utilities.css`) for utility classes in the content markup. The card's stack line is "plain scoped CSS, no Tailwind", so the redesign removes it: every utility class string was mapped to a semantic class or to element styles, and `tailwindcss`, `@tailwindcss/vite` and the four old font packages left `package.json`. Astro and TypeScript are unchanged; `astro check` reports 0 errors.

**Compositions.**
- **Every page:** an edge-aligned header (the counter and the wordmark left, the seven links and the address right; the links wrap to their own row under 70rem and scroll with a fade on phones). The footer is the full sitemap as index columns, then contact and a colophon.
- **`/`:** the name at poster size under its guides, the RW counter and the action, your paragraph set as a statement. Then the commissions: the Napoleon at Bay capture as a showcase, the three services as ruled rows. Start here is a paper band with its head in the margin, and the index follows: Writing as dated rows, Businesses and Projects four across, Tools as rows with their facts.
- **Document pages** (products, businesses, essays, About, Music): a Banner heading, then a Long Document grid with each `h2` in a four-column margin that stays in view while its text scrolls, the text on eight columns at a 58ch measure. Tables run under a 3px double rule.
- **`/writing/`, `/works/`, `/services/`, `/kit/`, `/field-trials/`:** ruled indexes; Works became one full-width catalog index.
- **`/games/`:** the roster as twelve hairline cells, the selected one filled ink, beside the build's real capture, its facts, the audit and Play. The field report and field notes are restyled with every field and script intact.
- **`/wargame-modules/`:** one composed offer page. The first screen holds the title, the intro, the four prices, the Email action and the lead capture. The captures run as a showcase, the client case as a split, and the testimonial sits on the site's one ink band. Prices sit under a double rule; the terms keep their exact wording.

**Who built what.** I built the system, the chrome, the home page and every page except two. `/games/` and `/wargame-modules/` were each rebuilt by a helper agent in its own worktree under a written brief, and I integrated and checked both: both scripts on `/games/` are byte-identical to look D's, and every word, image, href and id on `/wargame-modules/` was confirmed unchanged.

## Every text change (full list in `text-parity.md`)

No sentence was rewritten. The visible-text diff over every page shows only these:
- **Template punctuation removed** (gate 63): 150 middle dots (as separators between facts, or turned into commas inside a value such as "Live, early access"), 19 arrows glued to link labels ("Email me →" became "Email me"), 17 dash tails on counts ("12 entries ——" became "12 entries"). In `CLAUDE.md`, the posting checklist now says "bump the 'NN entries' count", so it matches.
- **Labels set in sentence case** (gate 67): `UNIT`, `TYPE`, `STATUS`, `SCALE`, `LICENSE`, `FORMAT` became `Unit`, `Type`, and so on, and the `/` separators between them went. On `/games/`, the cabinet's capital captions and the four devlog names typed in capitals became sentence case.
- **The colophon:** "Set in Newsreader & IBM Plex" became "Set in Bodoni Moda & Geist", because the old line would no longer be true.
- **`/games/`:** the `No.01` to `No.12` tile counters, the `SLOT` labels, the ▶ glyph and the dash separators in the field-notes rows were dropped as decoration (gate 66). The build names, which look D drew inside SVG labels, are now set as text in the cells.

## Dropped, on the record

- **The twelve drawn cartridge labels, the CRT bezel, LEDs, scanlines and amber glows on `/games/`** (gates 47c, 80, 29). The real capture of each build now shows when it is selected. One drawing, the Jacquard Index nonogram, carried clue digits that the kept check read as a figure (`08246642135531`); it is recorded as dropped in the stamp.
- **Status dots** before "Status" facts (gate 63).

## Hallmark's own record

- **Pre-flight:** Astro 6, look D's palette (paper L94 hue 85, carmine hue 29), Newsreader and three Plex families, Tailwind 4, no `design.md`. Preserved: the RW counter and the content. Introduced: theme, shape, gates and hero discipline.
- **Deal:** Specimen, Formwork, Garden. Specimen was taken because its material is type, rules, a cell grid and guides, which suits a site of essays, specs and dated indexes. Formwork would print your colour captures in black and white, and Garden needs photographs.
- **Hero review** (fresh-context subagent): first word `fix`, 5 findings, 3 resolved and 2 partial. The nav still repeats the address on `/`, and the statement runs past the action.
- **Finish review** (fresh-context subagent): first word `fix`, 7 findings, all 7 resolved. The fixes: optical size now follows the type size for small heads, the Start here head moved to the margin, the hero holds one screen, the guides draw in opaque blue on whole pixels, the phone counter stays 112px, and two composition faults on the modules page are fixed.
- **Waived** (Reflex, with reasons in the stamp): 79 on Banner pages, where the render tier counts only section boundaries; 49b for index titles that are names and cannot shorten; 39b for the square roster cells. **Dismissed:** 77 on Long Document pages, and 49 on the roster cells. **Answered:** F1, straight apostrophes kept because the copy is verbatim.
- **Library photographs, AI images, stock:** none. `imagegen.mjs`, `install.mjs` and `install-hook.mjs` were never run; nothing was written to any settings or hook file.

## What the old design did better (from the finish review), and what I did

- **The old home showed the commissions** (the module capture and its price) on the first screen. The new first screen gives that space to the name, the sub-line and the email action; the commissions start one scroll down. I kept this trade on purpose, and it is the main thing to weigh when you pick.
- **The old cabinet gave every game a picture**, though a drawn one. The new roster shows the selected game's real capture and sets the other eleven as type. Kept.
- **Old index titles were visibly links.** Fixed: titles now carry a quiet underline at rest.

## Could not do, or left for landing

- **`/raybrain/`** is a meta-refresh redirect stub that hangs Hallmark's renderer, so it is linted statically only, in both the look D run and the redesign run.
- **Waiting on you:** the straight apostrophes stay because the words are yours. The social preview image (`public/og-image.png`) still shows look D's design; regenerating it in the new faces is a landing step.
- **Landing to `main`** is a separate step after your pick. This branch also carries a one-line `CLAUDE.md` edit, `DESIGN.md`, and a dependency change (fonts in, Tailwind out), so `npm ci` will be needed.
- **ESLint** shows errors only when the helper worktrees under `.claude/worktrees/` are present (multiple tsconfig roots). On the site code it is clean, and on a fresh checkout the worktrees do not exist.
