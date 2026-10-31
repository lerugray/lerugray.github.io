# Design: lerugray.github.io

The locked system for the Hallmark redesign trial (branch `gs/hallmark-trial-s356`). Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: editorial
- Shape of the first page: Index-First (`/`); every other page is a Long Document
- Theme: Specimen (Hallmark catalog, dealt 1 of 3 against the site's own line: minimalist technical, clean typography, tight grids, utilitarian restraint)
- Axes: light/high-contrast-serif/cool · posture: restrained

## Tokens
`src/styles/tokens.css` is the source of truth. The roles:
```css
:root {
  --color-paper: oklch(96.5% 0.016 82);  --color-paper-2: oklch(93.5% 0.02 80);  --color-paper-3: oklch(89% 0.024 78);
  --color-ink: oklch(17% 0.012 60);  --color-ink-2: oklch(28% 0.014 60);  --color-muted: oklch(49% 0.014 65);  --color-rule: oklch(80% 0.018 75);
  --color-accent: oklch(45% 0.18 262);  --color-accent-ink: oklch(97% 0.012 82);  --color-focus: oklch(50% 0.18 262);
  --font-display: 'Newsreader', Georgia, serif;  --font-body: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif;  --font-outlier: 'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace;
  --radius-card: 0;  --radius-pill: 0;  --rule-hair: 1px;  --shadow-card: none;
}
```
The spacing scale, the type scale, the easings and the durations are the scaffold's and live in `tokens.css`. Project roles (`--measure`, `--text-poster`, `--header-h`) sit at the top of `src/styles/global.css`. Fonts are self-hosted through `@fontsource` packages; no third-party font requests.

## Type
> Fonts reverted 2026-10-31 (Ray: "revert the change in fonts ... its too hard to read now"): the Specimen layout stays, the faces are back to the pre-10-29 set. Bodoni Moda and Geist are superseded; do not reintroduce them.
- Display: Newsreader 400, `h1` and `h2`, sentence case, roman, tracking -0.02em.
- Body: IBM Plex Sans 400 at 17px, line-height 1.55 (1.7 in long prose), measure 58ch.
- Labels, captions, table heads, nav: IBM Plex Sans 500 a step smaller, sentence case, `--color-muted`, never tracked, never capitals.
- Mono: IBM Plex Mono for code, key names and glyph figures only.

## Page shapes
- Pages: a Banner heading (`.page-heading`), then a Long Document grid of four margin columns and eight text columns; `h2` sits in the margin and sticks while its text scrolls.
- Hubs (Commissions, Tools, Works, Field Trials): ruled rows on hairlines, the title in the margin, facts and text on the right.
- First page: the name holds seven columns under its guides with the statement beside it, so the commissions and every price reach the first screen at 1440x900. Each item shows once on that screen; on `/` the header leaves the locator and the address to the hero.
- Field Trials: the twelve builds are cartridges in hairline cells, each with its label drawing (look D's, redrawn in ink: `currentColor`, tints of it and the cell's own ground, 1px non-scaling hairlines, no hue) over its name and register. The selected cartridge fills ink and its label prints in reverse. Under 980px the selected build's details open inside the shelf, directly under the tapped row, and the tap moves the page at once by the least scroll that puts the whole drawer on screen (its top on screen first, when the drawer is taller than the screen).
- Footer: the full sitemap as index columns, then contact and a colophon.
- Nav: under 70rem the seven links wrap to their own rows; nothing scrolls sideways.

## Controls
- Primary: ink fill, oat text, square, 48px tall (`.btn-primary`)
- Secondary: 1px ink outline, same radius and height (`.btn-secondary`, `.cta`)
- Links: ink, a 1px ink-blue underline 0.1em under the baseline that skips descenders and thickens on hover.

## Motion
- Character: still. Only state moves (an underline, a fill); under reduced motion everything ends at once.

## Exports
`src/styles/tokens.css` in this project.
