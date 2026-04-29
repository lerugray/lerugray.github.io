# Personal site SKILL — General Staff Atlas

A discipline document for `rayweiss.work` (Astro 6 + Tailwind v4 + IBM Plex).
Round 2, 2026-04-29. Officer's atlas, paper register.

This file installs at `.claude/skills/personal-site.md`.

---

## What the site is

Ray Weiss's personal site is the conversion surface for outbound to
sophisticated SaaS founders. The aesthetic must subconsciously read
"this person designs systems, not just makes things." It is **not** a
resume, **not** a marketing page, **not** a dev portfolio template.

Anchor reference: 19th-century Prussian general staff working
surfaces. Reisswitz 1824 → Stieler's Hand-Atlas → Großer
Generalstab field maps. **The planner's desk, not the soldier's
kit.**

## Locked, do not change

- **Stack:** Astro 6.1.6 + Tailwind v4. CSS lives in `global.css`.
- **Type stack:** IBM Plex Serif (body), Plex Sans (headings),
  Plex Mono (small-caps labels). ONE display face for top-level H1
  only — currently **GFS Didot** (transitional, steel-engraving
  register). No additional faces. Period.
- **AAA contrast:** non-negotiable. Every palette change must verify.
- **Named-class vocabulary** (see "Anchor vocabulary" below).
  Existing names keep working so the 14 page files don't need
  rewrites. New patterns extend the vocabulary.
- **Voice and copy:** locked. Aesthetic shifts only.

## Palette — Officer's Atlas (paper register)

Verified contrast against ground `#e8dfc8`:

| Token | Hex | Contrast | Notes |
|---|---|---|---|
| `--color-background` | `#e8dfc8` | — | Warm oat parchment ground |
| `--color-surface` | `#ddd2b6` | — | Slightly darker plate area |
| `--color-frame` | `#c8bb98` | — | Hairline frame fill |
| `--color-border` | `#b8a87f` | — | Hairline rules |
| `--color-rule` | `#8b7e5d` | — | Atlas marginalia rules |
| `--color-foreground` | `#1f1b14` | 12.6:1 | Iron-gall ink, AAA body |
| `--color-muted` | `#4a4339` | 6.7:1 | AAA body |
| `--color-subtle` | `#6b6356` | 4.7:1 | AA, ≥14px only |
| `--color-link` | `#1f3a5f` | 7.6:1 | Prussian blue, AAA |
| `--color-link-hover` | `#2d4a72` | 6.0:1 | AAA |
| `--color-accent` | `#6b2d2d` | 7.9:1 | Oxblood — `.featured` rule, plate-number ticks. The ONLY dedicated accent application beyond the NATO blue-tick. |

## Anchor vocabulary (locked names, atlas treatments)

These class names were established 2026-04-18. Round 2 keeps the
names, changes the visual treatment.

- `.hero` — counter SVG + display-face H1 + italic dek + identification slug.
- `.bio` — single 65ch paragraph block.
- `.featured` — oxblood left rule, NATO friendly-tick at top of rule.
  ONLY accent application on the site. Used once per page maximum.
- `.entries` — editorial list. Indexed (i. ii. iii.) in mono-Roman in
  the gutter, hairline dividers, Plex Serif titles + descriptions.
- `.infra-list` — atlas legend-box treatment. Hairline-framed cards
  with corner ticks, mono metadata strip (Status / License / Access),
  Plex Sans titles + Plex Serif descriptions. Categorically distinct
  from `.entries`.
- `.section-head` / `.section-label` / `.section-count` —
  mono small-caps with plate number prefix (`PL. III` in oxblood)
  over atlas double-rule.
- `.music-block` — short prose with mono follow link.
- `.terminal-section` — terminal-game project pages get triangle
  prefix on h2s. **Compatible with new register; do not retire.**
- `.prose-body` — long-form essay register. Drop-cap on first
  paragraph (Didot), `§` glyph in margin of h2, `⁂` asterism
  divider, `.pullquote` legend-box for marginalia.
- `.nav-group` / `.nav-group-label` / `.nav-group a` — sidebar nav.
  Plate numbers (`Pl. II`, `Pl. III`, ...) appear on group labels.

### New patterns introduced round 2

- `.sheet-id` — atlas frontispiece block at top of every page.
  `PL. I.A` plate number + chart title left, edition right, atlas
  double-rule below.
- `.colophon` — sidebar marginal-apparatus block (Sheet, Edition,
  Loc., Scale).
- `.hero .slug` — NATO-style identification slug under hero
  (UNIT / TYPE / SCALE / LOC). Used on index hero only.
- `.detail-header` — business-page header with counter + display H1
  + dek + atlas double-rule.
- `.meta-strip` — mono-small-caps imprint particulars on detail pages.
- `.scale-row` — cartographic scale-bar marginal motif on detail pages.
- `.data-table` — atlas legend register for catalogs.
- `.sub-head` — `§ 1`, `§ 2` mono-small-caps subsection headings.
- `.hex-rule` — three-hex marginal ornament between sections. Use
  sparingly: max once per long page.
- `.site-footer` — `APP.` plate-marked contact block.

## Marginal apparatus rules

The cartographic register identifies itself through marginal
apparatus, not pictorial decoration. The apparatus is non-negotiable;
the pictures are forbidden.

- **Plate numbers** (`PL. I.A`, `PL. II.A`, ...) appear on every
  page's `.sheet-id` and inside every `.section-label`. Always in
  Plex Mono, always in oxblood when prefixing a section.
- **Atlas double-rule:** every `.section-head` and `.sheet-id` carries
  a `1px solid foreground` rule plus a `1px / 0.4 opacity` rule 3px
  below it. Implemented via `::before`. Don't fake this with
  `border-bottom: 3px double`; the double-rule has uneven weights.
- **Identification slug:** UNIT / TYPE / SCALE / LOC. Index hero only.
- **Scale bar:** business detail pages where scope is relevant.
- **Asterism `⁂`:** essay section breaks. Used only inside `.prose-body`.

## NATO symbology — the test

NATO APP-6 markers are permitted as a **quiet motif** — status dots,
counter graphics, the oxblood tick on the `.featured` rule. **Test
for whether NATO symbology is earning its place: would a real
general-staff officer find it confusing or gratuitous? If yes, cut it.**

Specific permitted uses:

- `.featured::before` — oxblood square = friendly-marker tick. One per page.
- `.infra-meta .dot.live` — solid Prussian-blue square = live/friendly.
- `.infra-meta .dot.private` — hollow square = unidentified/private.
- Counter SVGs (`assets/counter-rw.svg`, `assets/counter-csl.svg`) —
  full NATO friendly rectangle with branch symbol inscribed.

Forbidden:

- NATO markers as decoration on writing entries (a writing piece is
  not an infantry company).
- Hex grids as page background or hero element.
- Camo, dog tags, "operator core" iconography of any kind.
- War-movie typography or imagery.
- Tactical-icon strips alongside marketing copy.

## Display-face usage rules — GFS Didot

- `.hero h1`, `.detail-header h1`, `.essay-header h1` only.
- Drop-cap glyph in `.prose-body p:first-of-type::first-letter`.
- `§` and `⁂` glyphs (because they read engraved at scale).
- **Never** for body, never for nav, never for buttons. Never below H1.
- Track at `letter-spacing: -0.005em` to `0.005em` only; never tighter,
  never looser.

## Hex grid — handle with care

Hex grids may appear:

- As three-hex marginal ornament between major sections (`.hex-rule`).
  Maximum once per page.
- As a watermark on the wargame counter image (none currently — earn it
  if you add it).

Forbidden: hex-grid backgrounds, hero treatments, decoration of any
section that is not specifically about wargames.

## Grep-for-violations

Future agents and human editors can self-check by grepping for:

| Pattern | Violation |
|---|---|
| `Inter\|Roboto\|system-ui` in `font-family` | Wrong type stack |
| `linear-gradient.*hsl\|gradient.*purple` | AI-startup gradient slop |
| `backdrop-blur\|glass\b` | Glass morphism, forbidden |
| `rounded-(2xl|3xl|full)\b` for non-circular elements | Rounded SaaS look |
| `shadow-(lg|xl|2xl)\b` | Soft drop shadows, forbidden |
| `class=".*hex.*"` outside `.hex-rule` | Hex grid abuse |
| `text-emerald\|text-cyan\|text-purple` | Off-palette accents |
| `<svg.*camo\|tactical\|dogtag` | Anti-reference iconography |
| H1 in non-display face | Type-stack violation |
| Two display faces in same page | One-display-face rule |
| `.prose-body p` `font-size` < 17px | Reading register violation |

## Page archetypes — composition recipes

### Index (`PL. I.A` Frontispiece)

```
.shell
  .sidebar (.colophon + 6× .nav-group)
  main
    .sheet-id
    .hero (counter + h1 + .dek + .slug)
    .bio
    .featured
    section .section-head .entries (Writing)
    .hex-rule
    section .section-head .entries (Businesses)
    section .section-head .infra-list (Infrastructure)
    section .section-head .entries (Projects)
    section .section-head .music-block (Music)
    .site-footer
```

### Essay (`PL. II.A` Writing)

```
.shell
  .sidebar
  main
    .sheet-id
    article
      .essay-header (h1 + .meta)
      .prose-body (drop-cap + § h2s + ⁂ hr + .pullquote)
    .site-footer
```

### Business detail (`PL. III.A` Businesses)

```
.shell
  .sidebar
  main
    .sheet-id
    .detail-header (counter + h1 + .dek)
    .meta-strip
    .scale-row
    .sub-head + .detail-prose  (× N)
    .data-table  (when catalog)
    .hex-rule
    .site-footer
```

## When to deviate

A convention worth breaking is worth documenting in
`vault/decisions/YYYY-MM-DD-<slug>.md`. No silent deviations.
