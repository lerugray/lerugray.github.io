# Listing lane report — 2026-08-18

Wall-clock at run: Tue Aug 18 12:03:01 EDT 2026 (start); build complete 12:11.

Headless listing of POPINJAY and MATERIAL BREACH on the public games shelf, matching the Capriole cartridge row. No push.

## Files touched

| File | What changed |
|---|---|
| `src/pages/games.astro` | Two `FieldTrialGame` rows (No.11 / No.12) + two `labelArt` SVGs. Blurbs verbatim. Tests/audits copied from the games' own published records (popinjay 281 / FIX-FIRST; material-breach 205 / release gate 2026-08-18). |
| `public/field-trials/index.html` | Two `<li>` rows + count `10 in trial` → `12 in trial`. Hand-maintained landing, same seam as Capriole. |
| `public/field-trials/devlog.json` | Two **roster** objects only (name / blurb / status / url). **No** `entries` / Field notes authored. `games.astro` comments say never hand-edit this file; the roster is the listing surface Capriole already occupies, so the rows went in and the generated entries array was left alone. |
| `public/field-trials/popinjay-fig-2026-08-18.png` | New specimen figure. |
| `public/field-trials/material-breach-fig-2026-08-18.png` | New specimen figure. |
| `docs/LISTING-LANE-REPORT-2026-08-18.md` | This report. |

Left alone: `_review-20260817/`, game builds, OG cards, Field notes, other pages.

## Fig capture

Sibling measured first: `public/field-trials/capriole-fig-2026-08-11.png` is **1200 × 750** RGB (the CRT `<img width="1200" height="750">` contract). Dated sibling figs are mixed 1200×750 and 1200×630; this lane used Capriole's 1200×750.

Method: Python Playwright, headless Chromium (`chromium-1234` / Google Chrome for Testing), viewport **1200×750** `deviceScaleFactor=1`. Served the staged builds from `public/` at `http://127.0.0.1:8765`.

- **Popinjay.** Waited on `window.POPINJAY.ready`, called `startStageAt(1, 1)`, waited 1.2s for parabola travel, screenshot. Present scale reported `2.5` filling the viewport exactly (native 480×300). Mode after capture: `playing`.
- **Material Breach.** Waited on `window.__GAME.state()`, muted, confirmed `overlay === 'title'` (the Ray-approved charter masthead on the desk), screenshot. Did not click through — the brief asked for the masthead/desk surface, which is the opening.

### Looker (adversarial)

Looked at both PNGs before accepting.

- **popinjay-fig-2026-08-18.png** (405,743 bytes, 40,310 unique colours). HUD reads `1 - 1` / `2 ALOFT`. Two patterned balloons in flight over a furnished World's Fair plaza; sharpshooter (boater, teal coat) on the ground; composure hearts, WIRE READY. Not a title boot, not a blank buffer. **Accepted.**
- **material-breach-fig-2026-08-18.png** (93,063 bytes, 720 unique colours — expected for the ramp palette). Center sheet is the CHARTER OF APPOINTMENT with MATERIAL BREACH as the letterhead; Take up the post / Options / Provenance; ledger and facility section visible around the document on the desk. Stamp-red pixel share is ~0 — the opening charter does not carry a served-instrument stamp, and recapturing after clicking through would leave the masthead. **Accepted as the desk/masthead surface.**

Pixel stats (not a substitute for the look, recorded for the dossier): popinjay top-color share 4.4% (cream poster, not a flood fill); material-breach paper 43% / dark desk 37%, 31 horizontal rule-rows in the upper half (masthead rules).

## Build result

`npm run build` — **exit 0**, 36 pages, 2.23s.

Loaded `dist/games/` (http://127.0.0.1:8766/games/) in the same headless Chromium:

- SCALE **12 in trial**; **12** `.cart` buttons.
- `#cart-popinjay` / `#panel-popinjay`: title Popinjay; blurb verbatim; figure `complete`, natural **1200×750**, figcaption `FIG. 11 · balloons in flight, build 2026.08`.
- `#cart-material-breach` / `#panel-material-breach`: title Material Breach; blurb verbatim; figure `complete`, natural **1200×750**, figcaption `FIG. 12 · masthead on the desk, build 2026.08`.
- Figs also copied to `dist/field-trials/` at the same dimensions.

Landing `dist/field-trials/index.html`: No.11 Popinjay, No.12 Material Breach, `12 in trial`.

No push — orchestrator verifies and deploys.
