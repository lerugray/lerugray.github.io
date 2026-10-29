# Parity: main 9da97f4 against the branch head 9751904

Both builds from `npm run build` after `npm ci`, compared file by file.

## Routes

Built HTML files: main 50, branch 50, the identical set (no route added or lost).

```
/about/index.html
/auftragstaktik/index.html
/buddies/index.html
/catalogdna/index.html
/conflict-simulations-llc/death-of-an-empire/index.html
/conflict-simulations-llc/index.html
/conflict-simulations-llc/veridian-contraption/index.html
/conflict-simulations-llc/zero-page/index.html
/devforge/index.html
/field-trials/alkahest/alkahest.html
/field-trials/alkahest/index.html
/field-trials/capriole/index.html
/field-trials/index.html
/field-trials/jacquard-index/index.html
/field-trials/lines-of-advance/index.html
/field-trials/material-breach/index.html
/field-trials/oddseedz/index.html
/field-trials/office-of-the-road/index.html
/field-trials/popinjay/index.html
/field-trials/shoeleather/index.html
/field-trials/stray-squadron/index.html
/games/index.html
/generalstaff/index.html
/hammerstein-ai/index.html
/hammerstein-model/index.html
/hammerstein/index.html
/index.html
/kit/index.html
/kreuzfeuer/index.html
/mission-brain/index.html
/music/index.html
/raybrain/index.html
/retrogaze/index.html
/services/index.html
/veridian-contraption-demo/index.html
/wargame-modules/index.html
/works/index.html
/writing/boolean-gates/index.html
/writing/columbo-needed-a-confession/index.html
/writing/democratic-defeat-counter-autopsy/index.html
/writing/gs-launch-post/index.html
/writing/hammerstein/index.html
/writing/hundred-percent-then-broke-it/index.html
/writing/i-am-the-gate/index.html
/writing/index.html
/writing/judgment-does-not-transfer/index.html
/writing/out-of-the-notebook/index.html
/writing/the-bird-didnt-run/index.html
/writing/the-model-that-hangs-up/index.html
/writing/the-register-not-the-man/index.html
```

## Internal links

Every `<a href>` and `<link href>` on every built page that points into this build (root-relative, relative, or this site's own address) must resolve to a built file, and a `#fragment` must match an `id` on the target page. Addresses under the same host that belong to other repositories' Pages sites (`/the-elect/`, `/yoon-suin/`, `/chp-preview/`, `/ZERO-PAGE/`, `/le-rug-musical-dna/`) are not in this build and count as external.

| Build | Internal links resolving |
| --- | --- |
| main 9da97f4 | 1481/1481 |
| branch 9751904 | 1481/1481 |

This count includes `<link>` tags, so it differs from the Hallmark trial's 1435 by method, not by content. Every `<a href>` per page: main 1706, branch 1706; per-page multisets identical, 0 lost, 0 gained (the feedback box held no links).

## Visible text, word level, every page

Words of each built page outside `script`, `style`, `noscript` and `svg`, plus image alt text and the description and title meta tags, diffed main to branch. 4 of 50 pages change, each change one of the five fixes. On `/` the swap of entries xi and xii shows as one insert and one delete.

```
## /games/
- delete: …a new tab Field [report — tell me what broke Filed under Chapel Perilous Innsmouth 2000 Stray Squadron Oddseedz Lines of Advance Capriole Shoeleather The Jacquard Index Alkahest The Office of the Road Popinjay Material Breach Leave this field blank Name (optional) Feedback Send Field] -> []
## /
- insert: …voice & persona models [] -> [Quote on request.]
- insert: …own notes. Game-design consultation [] -> [Quote on request.]
- insert: …GeneralStaff went public. xi. [] -> [2026.04.18 Boolean Gates, Not Prompts When the industrious agent is a language model, fix the failure mode in the code, not the prompts. The architecture-layer companion to the Hammerstein essay. xii.]
- delete: …moments it did not. [xii. 2026.04.18 Boolean Gates, Not Prompts When the industrious agent is a language model, fix the failure mode in the code, not the prompts. The architecture-layer companion to the Hammerstein essay.] -> []
## /writing/columbo-needed-a-confession/
- replace: … [columbo needed] -> [Columbo Needed]
- replace: …columbo needed a [confession] -> [Confession]
- replace: …with his blessing. [og:title] [columbo needed] -> [Columbo Needed]
- replace: …[og:title] columbo needed a [confession] -> [Confession]
- replace: …with his blessing. [twitter:title] [columbo needed] -> [Columbo Needed]
- replace: …[twitter:title] columbo needed a [confession] -> [Confession]
- replace: …Businesses Tools About rweiss@consimsltd.com [columbo needed] -> [Columbo Needed]
- replace: …rweiss@consimsltd.com columbo needed a [confession] -> [Confession]
## /writing/
- replace: …14, 2026 ~4 min [columbo needed] -> [Columbo Needed]
- replace: …min columbo needed a [confession] -> [Confession]
pages with visible-text changes: 4 of 50
```

## Layout measurements (Chromium, CSS px)

| Check | main | branch |
| --- | --- | --- |
| `/` at 1440: where the Music line starts | x 523 (column 5; columns 1 to 4, 459px, empty) | x 64 (column 1) |
| `/` at 1440: Listen | under the line at x 523 | same row, right end, x 1280 to 1376 |
| `/` at 1440: last content to the footer's double rule | 240px | 144px (every other page: 144px) |
| `/` at 390: last content to the footer's double rule | 168px | 72px (every other page: 72px) |
| `/` page height at 1440 | 7396 | 7244 |
| Service price slot | a price on "AI workflow" only; "Custom voice" shows its delivery note there, "Game-design consultation" has no slot | all three priced, each on its own line under its title: 32 to 33px below the title's top at 1440, 29 to 30 at 1100, 27 at 768 and 390, at one left edge |
| `/games/` at 1440: cabinet grid bottom | 2015 (feedback box under the cells) | 1777 (the details column's bottom) |
| `/games/` content end at 1440 / 390 | 3421 / 5622 | 3183 / 5319 |
| `/games/` 390x844 taps on Capriole, Material Breach, Oddseedz | details open under the tapped row at y 16, hash set | identical |
| `/games/` back to 1440 after taps | details return to their column | identical (now the grid's last child) |
| Page errors during the taps | none | none |
