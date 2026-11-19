# Personal site: take down Field Trials, add the new released games

Grounded: repo HEAD = 71816d0 (main), branch `site/field-trials-and-new-games` already checked out in this tree.
Ray's words: "the field trials section should probably be taken down as I don't want those games previewed yet, might want to also add pages for some of my new games where my other games are listed".

You work ONLY inside this working tree. Do NOT commit, push, or touch any other directory. `node_modules` is a symlink; do not run `npm install`.

## Part A: remove Field Trials completely

Nothing on the built site may preview, link to, or host the field-trial games.

1. Delete `src/pages/games.astro` (it IS the Field Trials page: roster cabinet, field report form, field notes).
2. Delete `src/pages/field-trials.astro` (the /field-trials/ index page).
3. Delete the whole `public/field-trials/` directory (hosted preview builds, figures, devlog.json). It stays in git history.
4. Delete `src/scripts/field-report.ts` if nothing else imports it (grep first).
5. `src/data/navigation.ts`: remove the `Field Trials` nav group.
6. `src/components/SiteHeader.astro`: remove the `/games` header link and the `'/games': ['/field-trials']` section mapping. Keep the header otherwise identical.
7. Remove only the Field-Trials-specific Hallmark comment lines in `src/layouts/SpecLayout.astro` and CSS rules in `src/styles/global.css` that exist solely for the roster/cabinet/field-report/field-notes (grep `cabinet`, `field-report`, `fr-`, `fn-`, `ft-`, `roster`). If unsure whether a rule is shared, leave it.
8. Grep the whole `src/` and `public/` for every remaining reference: `field-trials`, `Field Trials`, `field trial`, `/games`, and these titles: Chapel Perilous, Innsmouth 2000, Stray Squadron, Oddseedz, Lines of Advance, Capriole, Shoeleather, Jacquard Index, Alkahest, Office of the Road, Popinjay, Material Breach, chp-preview, i2-preview, ss-preview. Remove links/mentions in pages, footer, sitemap, index, about, works, writing posts. In a writing post, keep the essay's sentence but unlink it (or drop a sentence that only points readers to play a field trial). Report every file you changed this way.

## Part B: add the new released games where the other games are listed

Where games are listed: `src/pages/conflict-simulations-llc.astro`, section "Digital games" (a table: Title, Price, Format, Description), with per-game pages under `src/pages/conflict-simulations-llc/` (`zero-page.astro`, `veridian-contraption.astro`, `death-of-an-empire.astro`). Copy the ZERO PAGE page's structure EXACTLY (same BaseLayout, `main.doc`, `doc__frame`, breadcrumb eyebrow, h1, dek, prose-body sections, a figure with real capture, a Buy/Play section linking the store). NO new CSS, no new components, no new classes. The site's Hallmark look is fixed.

Add one page + one table row each, for these publicly available titles (all URLs answered 200 on 2026-11-19):

| Slug (new page) | Title | Store URL | Price | Format |
|---|---|---|---|---|
| lesser-heavens | Lesser Heavens | https://conflict-simulations-llc.itch.io/lesser-heavens | $6.99 | Windows, macOS, browser |
| men-and-magic | Men and Magic | https://conflict-simulations-llc.itch.io/men-and-magic | $6.99 | Windows, macOS, Linux |
| darkness-on-the-edge-of-town | Darkness on the Edge of Town | https://conflict-simulations-llc.itch.io/darkness-on-the-edge-of-town | $6.99 | Windows, macOS, Linux |
| kreuzfeuer | Kreuzfeuer | https://conflict-simulations-llc.itch.io/kreuzfeuer | $9.99 | Windows, macOS |
| appendix-n | Appendix N | https://conflict-simulations-llc.itch.io/appendix-n | $9.99 | Windows, macOS |
| sandkasten | Sandkasten | https://csl-sandkasten.com | Free | Browser |

Also add a table row for ZERO PAGE (its page already exists, `/conflict-simulations-llc/zero-page`; $6.99; Windows, macOS, Linux, browser demo). Update the intro sentence "Four titles released on itch under the CSL brand" to the true count, or reword it so it holds no number. Put Sandkasten in the same table (note "free, in your browser"); if Sandkasten is not a CSL product per its own site, still list it here but say in its description where it lives.

The itch titles other than ZERO PAGE are in early access ("In development" on itch): say "Early access" honestly on each page (e.g. in the dek or the Buy section). Prices may change; copy them as above.

Content for each page, sourced from the game's OWN store page (fetch it with curl) and, where present, the repo README on this Mac under `~/Desktop/Dev Work/` (read only):
- A dek of one line and 2-3 short paragraphs saying what the game is and how it plays. Facts only from the store page/README; no invented features, no superlatives. Then run the copy through the stop-slop rules: no em-dashes, no "not X but Y" constructions, no rule-of-three filler, no "dive into", "immersive", "unforgettable", "journey", "experience" padding.
- One figure: download the store page's cover image or first screenshot into `public/images/games/<slug>-cover.<ext>` (or `-shot`), keep the original file, `width` attribute matching the existing figures, `loading="lazy"`, and an `alt` describing what is literally in the frame. The figcaption states only what the frame shows (e.g. "Title screen" or "Combat, the second floor"), never a claim about the game.
- The store link and the price.

Also add each new page to whatever page index/footer sitemap lists ZERO PAGE (grep `zero-page` across `src/`), and add rows to `src/data/canon.json` only if ZERO PAGE has one (match its fields exactly).

## Done means
- `npm run build` exits 0 (run it; fix any error you caused).
- `grep -ril -E "field-trials|field trial|chapel perilous|stray squadron|oddseedz|capriole|shoeleather|alkahest|innsmouth|jacquard|office of the road|lines of advance|popinjay|material breach" dist` prints nothing.
- `dist/conflict-simulations-llc/<slug>/index.html` exists for all six new slugs, and every image they reference exists in `dist`.
- Final message (under 250 words): files deleted, files changed, files added, the build result, the dist grep result, and anything you could not source (e.g. no screenshot found). Do not commit.
