SITE-LEFTOVERS DONE head=9751904 fixed=5/5 build=green routes=50=50 links_ok=1481/1481 frames=12
Branch `gs/site-leftovers-s356`, cut from `main` at 9da97f4 (the Specimen design that went live today). `head=9751904` is the fix commit that every check and frame below ran against. The commit that adds this folder sits on top and changes nothing under `src/`. Nothing went to `main`: no merge, no pull request, no deploy.

# Site leftovers s356: report

## Look at these first

1. **Two sentences now point at the hidden feedback box.** Fix 3 hides the box, but Ray's copy still sends visitors to it, and on a phone the first one is on the first screen of `/games/` (`frames/games-390-s356.png`):
   - `/games/` intro (`src/pages/games.astro`, the `.bio` paragraph): "Play, and if something breaks or feels off, tell me in the field report under the cabinet. I read every one."
   - `/field-trials/` lede (`src/pages/field-trials.astro`): "The cabinet itself, with specimen figures, published test counts, pre-release audits and the field report box, is on the Field Trials page."

   These are Ray's words and outside the five fixes, so I left them as they are. Each needs a one-line edit before or with the merge. For example, the first could end "tell me by email. I read every one." and the second could drop "and the field report box". Ray picks the words.
2. **The footer's Writing column has the same misorder as fix 4.** The site directory at the foot of every page reads from `src/data/navigation.ts` (the third of CLAUDE.md's four hand-curated surfaces). It still lists "Von Hammerstein's Ghost" (04.15) above "Boolean Gates, Not Prompts" (04.18). The fix is a one-line swap of those two items. It is not one of the five, so I didn't change it.

## The five, and what changed

1. **Columbo title.** In `src/content/writing/columbo-needed-a-confession.md` the title is now `Columbo Needed a Confession`. I checked every place that shows it. These read the front matter and changed: the post's `<title>`, `og:title`, `twitter:title` and `<h1>`, and its `/writing/` index entry. These were already typed in Title Case by hand and still match: the home Writing list and the footer directory on every page. Start here shows the newest essay (Out of the Notebook), so it is not affected. No lowercase copy is left anywhere in the build. Crops: `frames/fixes/fix1-*`.
2. **Home service prices.** "Custom voice & persona models" and "Game-design consultation" now carry `Quote on request.` in the same `service-card__meta` slot as "Setup $1,200 fixed.": Geist 16px, weight 500, ink. The full stop matches the sibling prices. The voice card's slot held "Delivery 2 to 3 weeks." and still does, after the quote, so no words were lost. With a short title, "Game-design consultation" put its price to the right of the title, not under it. One rule (`flex-basis: 100%` on the slot) now puts every service's price on its own line under its title at every width. "Setup $1,200 fixed." sits where it did. Crops: `frames/fixes/fix2-*`.
3. **`/games/` feedback box.** The whole field report (its head, the "Filed under" selector, the comment list and the form) is not rendered, and neither is its widget script. One flag gates both: `const FEEDBACK_WIRED = false;` in the page frontmatter, with comments that say the box is hidden until a real endpoint is wired. The widget code moved unchanged to `src/scripts/field-report.ts` and loads only with the box. Nothing was wired to any service, and the endpoint address already in the file is untouched. Built `/games/` now ships one script (the cabinet's), and no "feedback" string appears in its HTML. Setting the flag to `true` builds the box and its script again; the script compiles to the same 3,108 bytes as before. The cabinet grid now ends at the details column, and the field notes follow at the usual section gap. Crop: `frames/fixes/fix3-games-feedback-1440-*` (the "before" crop shows the live "Feedback wire not yet connected.").
4. **Home Writing list order.** In the hand-curated `<ol>` on `src/pages/index.astro`, Boolean Gates (2026.04.18) is now `xi.` and Von Hammerstein's Ghost (2026.04.15) is `xii.`. The twelve entries now run in the same order as `/writing/`, newest first, checked slug by slug against the built index. Entries i to x were already right. Only that list's numerals moved; the other sections' `<em>i.</em>` markup is untouched. The count stays "12 entries". Crop: `frames/fixes/fix4-*`.
5. **Home Music block at 1440.** The line ("Le Rug, with Sweet Bulbs and…") now starts at column 1 like every other section's content. It holds eight columns, and Listen sits at the right end of the same row, the pattern the commissions header uses for "Email me". The 459px empty column is gone. The dead gap came from 96px of bottom padding on the home's lower deck, on top of the footer's own 144px section gap. That padding is gone, so the space from the last content to the footer's double rule is now 144px at 1440 (was 240) and 72px at 390 (was 168), the same as every other page. At 390 the block stacks as before, with Listen under the line. Crops: `frames/fixes/fix5-music-1440-*` and `fix5-music-390-*`.

## Checks

| # | Check | Result | File |
| --- | --- | --- | --- |
| 1 | `npm run build` at 9751904, after `npm ci` | green, 37 pages | `build.txt` |
| 2 | Built HTML routes, main against branch | 50 = 50, the identical set | `parity.md` |
| 2 | Internal links resolving, fragments checked | main 1481/1481, branch 1481/1481 | `parity.md` |
| 2 | Every `<a href>`, per page | 1706 = 1706, 0 lost, 0 gained | `parity.md` |
| 2 | Visible text, word level, all 50 pages | 4 pages change, each by one of the five fixes, nothing else | `parity.md` |
| 3 | Hallmark `sloplint --render`, whole site (static `src` plus 36 rendered routes) | branch: **0 FAIL, 0 WARN** (42 waived, 19 answered, 37 dismissed, 58 notes), the same counts as main | `sloplint-branch.txt`, `sloplint-main.txt` |
| 3 | Hallmark `--kept` against main's before record | links 135/135, figures 165/165, fields 0/4 and headings 183/184, with the feedback box's 4 fields and its head dropped on the record | `sloplint-branch.txt` |
| 3 | Findings, main against branch | 156 = 156; the only differences are two gate-58 notes on `/` and `/games/` whose densest screen moved with the layout | (compared in session) |
| 4 | Frames | 12: `/`, `/games/`, `/writing/` at 1440x900 DPR 2 and 390x844 DPR 3, first screen and full page; plus 16 before/after crops of the five fixes | `frames/`, `frames/fixes/` |
| 5 | `astro check` | 0 errors, 0 warnings, 1 hint (an unused variable in the prebuilt `public/veridian-contraption-demo` script, which this branch does not touch; the trial recorded the same hint) | (run in session) |
| 5 | ESLint on `src` | clean | (run in session) |
| 5 | `/games/` cabinet on a phone and back to desktop | taps open each build under its row as on main; details return to their column at 1440; no page errors | `parity.md` |

**How the Hallmark lint ran.** The lint is not part of this repo's verification tooling. I fetched Hallmark's own repository at the commit the trial pinned (`8f6969f`, MIT) into a scratch folder outside the repo, as the trial lane did, and ran `sloplint.mjs` with headless Chromium. Nothing was vendored, installed into settings or hooks, and none of its install or image scripts ran. To make the comparison pair every file and page, main's record was taken from the same source path and the same local address as the branch run, with `src/` set to main for that run and restored after; the fix commit was already made.

## Frames

Names follow the trial's pattern: `<page>-<width>-s356.png` for the first screen and `<page>-<width>-full-s356.png` for the full page. All 12 come from Chromium at 1440x900 DPR 2 and 390x844 DPR 3. Neither width scrolls sideways (scroll width 1440 and 390). First screens are full-colour PNG. Full pages are 256-colour PNG, as in the trial, which keeps the tallest (home at 390, 36,213px high) near 1.5 MB. `frames/fixes/` holds a before (main) and after (branch) crop of each fix, named `fix<n>-<subject>-<width>-<before|after>-s356.png`.

## On the record

- **The stamp.** `src/styles/global.css` carries Hallmark's design stamp, and a later Hallmark run reads drops from it. One line records the hidden box: `dropped form 1, #fr-game, website, name, body, Field report — tell me what broke`, with the reason. Without it, the kept check fails on the missing form. It is a comment and changes no style.
- **Why a separate script file.** A `<script>` inside a conditional builds fine in Astro, but Prettier can't parse TypeScript there and errors on the whole file. Loading `src/scripts/field-report.ts` by `src` keeps Prettier able to read `games.astro`. That file still has the same style warning it has on main, and so do the other touched files; Prettier is not part of CI, which only builds.
- **The prices are words, not numbers.** No figure was invented. `/services/` lists the same two commissions with a delivery time and a "Per project" scope, and no price. The brief covered the home page only, so `/services/` is unchanged.

## Seen, not changed

- The two sentences and the footer order under "Look at these first".
- After the merge, CLAUDE.md's verification standard applies: fetch the live home page and check the Writing list order, both new prices, and the Music row; fetch `/games/` and check that no feedback box shows.
