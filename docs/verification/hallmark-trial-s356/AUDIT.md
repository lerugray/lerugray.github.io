HALLMARK-AUDIT pages=6 floor=98 reflex=105 finish=15
Breakdown: machine (sloplint --render, Hallmark at nutlope/hallmark@8f6969f) 98 Floor / 94 Reflex / 14 Finish, plus 5 unconfirmed warns; judged from the screenshots 0 Floor / 11 Reflex / 1 Finish.

# Hallmark audit of look D (report only)

- **Target:** look D as built from `main@af54ea5d` (this branch's first commit adds only the card, so the source is identical). Six routes: `/`, `/writing/`, `/games/`, `/about/`, `/hammerstein-ai/`, `/wargame-modules/`.
- **How it ran:** `npm ci && npm run build`, `dist/` served over local HTTP, then Hallmark's audit mode: `sloplint.mjs <the six page files, src/layouts, src/components, src/styles> --genre editorial --render --url <each route>`, headless Chromium for the render tier (it ran: 30 screenshots at 1280x800, 1440x900, 1920x1080, and full pages at 1440 and 375). Then the judged gates (gates.md § 4 J and R/J clauses) walked from the screenshots.
- **Genre:** inferred, since look D carries no Hallmark stamp: **editorial** (a personal site built around essays and a portfolio of work). The modern-minimal and playful keywords both fire faintly (developer tools, games); editorial was picked and is said here.
- **No source file was edited for this audit.**

## The read (four lines)

1. **What it is for:** the home of a Brooklyn wargame designer who runs four businesses; the one action is to email Ray about a commission, the second is to read the essays.
2. **What works and stays:** the material is real and specific. A real capture of the Napoleon at Bay module leads the commissions block, the counter logo is Ray's own mark, every essay carries its true date and a one-line description that could only be Ray's, and the prices are stated plainly ($400 to $800, $1,200 fixed, $15 a month).
3. **What reads as generated:** the system, not the words. Cream paper, a serif display and a terracotta-band accent is the single most recognised generated look (65); small tracked capitals and monospace on every label and meta line (67 and 64: 33 and 8 machine findings on these six pages, 56 and 31 across the whole site); middle dots and glued arrows as punctuation (63); the same bordered box with a buff header bar repeated for every list (9, F7); the CSS-drawn cartridge cabinet on `/games/` (47c, 80, 29).
4. **What is broken:** focus rings at 2.03:1 on the dark commissions panel and 1.07:1 on the module screenshots (26a); the feedback select's edge at 1.49:1 (40); 10px field-notes text (75); prose at about 119 characters a line on `/wargame-modules/` (25); no `overflow-x: clip` on `html` and `body` (34).

**Lightest depth that settles it.** A *polish* settles the material Floor findings (67, 64, 63, 48, 26a, 40, 34, 7a, 39a, 75) without touching the layout. A *restyle* is the least that settles 65 and 37, since the named look lives in the palette and the faces. Only a *full* redesign settles the composition findings: the repeated list boxes (9), the reflex chrome (42), the thin hero that stops at y 170 to 314 on a 900px screen (44c, 79), the 14px section heads (78), and the drawn cabinet on `/games/` (47c, 80).

## Judged findings (from the screenshots)

| Page | Element | Tier | Gate | Why it reads as machine-made |
| --- | --- | --- | --- | --- |
| all six | `:root` palette in `src/styles/global.css` (paper `#f2ece0` = OKLCH L94 hue 85, Newsreader display, carmine `#8b261d` = hue 29) | Reflex | 65 | Cream paper, a serif display and a clay-red accent together are the named look, the one a model reaches for first on anything warm or bookish; all three axes sit inside the gate's bands. |
| all six | header, `src/components/SiteHeader.astro` | Reflex | 42 | Wordmark left, a row of inline links, a contact link right, a rule under it: the default nav, arrived at by reflex rather than chosen. |
| all six | footer, `src/layouts/BaseLayout.astro` + `src/components/SiteFooter.astro` | Reflex | 42 | Eight link columns, a contact row, an imprint line, then a second footer line repeating the name and the email: the stock footer stacked twice. |
| `/` | the five list blocks (Writing, Businesses, Tools, Projects, Music) | Reflex | 9 | Every list sits in the same bordered box under the same buff header bar, so every seam climbs the same rung and the page reads as one template repeated. |
| `/` | `Brooklyn, NY · 40°41′N` in the header and the hero, `12 entries ——` count tails | Reflex | 66 | A latitude and dash-tailed counters are decoration text: they say "designed" without telling the reader anything they need. |
| all six | `Imprint · Brooklyn, NY · Set in Newsreader & IBM Plex · Edition 2026.04` | Reflex | 66 | A colophon of fonts and an edition number on a personal site is agency-portfolio furniture. |
| `/games/` | `UNIT RW / 26`, `TYPE Preview builds`, `SCALE 12 in trial` strip, `No.01` to `No.12` tile counts, `← ↑ ↓ → BROWSE · ENTER PLAYS` | Reflex | 66 | Mono-caps strips and numbered tiles under the title are the decoration a generator adds to make a list look like an object. |
| `/games/` | the specimen cabinet: CSS cartridges with grips, LEDs and labels, a CRT bezel with scanlines and a power LED | Reflex | 47c | Styled divs imitating physical hardware; the builds themselves are real and playable, the plastic is invented. |
| `/games/` | twelve cartridge-label SVGs (a corridor, a skyline with a tentacle, a creature, a television, a flask) | Reflex | 80 | Drawn illustrations stand in for the games while real screenshots of each build already sit in `public/field-trials/`. |
| `/games/` | amber glows on the LEDs, the Play button and the field-report title (`rgb(232 161 60 / 0.55 to 0.7)`) | Reflex | 29 | A coloured zero-offset glow on a dark panel is the neon-console tell. |
| `/` | `rweiss@consimsltd.com` in the header, the hero, the commissions block and the footer; `Brooklyn, NY` four times | Reflex | 69 | One fact printed in four or more places reads as filler; each repetition makes the page feel padded. |
| `/`, `/games/`, `/hammerstein-ai/` | the bordered box with a buff header bar used for every list, the roster, the field notes and the specifications | Finish | F7 | One container recipe stamped across six or more selectors, so every block on every page wears the same frame. |

## Machine findings, by page

Every line `sloplint --render` printed, grouped by page and gate (counts reconcile with line 1: Floor 98, Reflex 94, Finish 14, plus 5 warns). Shared files (`src/styles/*`, `src/layouts/*`) affect all six pages and are listed once under "shared". Rows with `render` came from the rendered page at the width shown in the evidence.

### /

| Tier | Gate | n | Element (where) | Why it reads as machine-made |
| --- | --- | --- | --- | --- |
| Floor | 19 | 1 | dash "—" in copy (src/pages/index.astro:147) | An em dash in copy, the best-known punctuation tell of generated prose. The words are Ray's; the audit only flags the mark. |
| Floor | 26a | 4 | focus ring 2.03:1 against what is behind it on a "Digital wargame mo" (render); focus ring 2.03:1 against what is behind it on a.flagship-offer__image (render); focus ring 2.03:1 against what is behind it on a.btn-primary "Wargame Modules →" (render); focus ring 2.03:1 against what is behind it on a.flagship-offer__price "rweiss@consimsltd." (render) | Focus ring under 3:1 against what it is drawn over, so a keyboard user loses their place. A defect more than a tell. |
| Floor | 54 | 1 | eyebrow "Start here" before <h3> (src/pages/index.astro:137) | A small label announcing the heading under it: the eyebrow, the most common generated opening. |
| Floor | 58 | 1 | 227 words on one screen (from y=1550) (render) | Far more than about 80 words in one 900px screen: a document dump, not one idea per screen. |
| Floor | 58 | 1 | hero carries 3 text blocks before its actions (render) | The hero stacks three text blocks before its action. |
| Floor | 63 | 1 | middle-dot meta string "Brooklyn, NY · 40°41′N · rweiss@consimsltd.com" (src/pages/index.astro:29) | Middle dots joining facts into one meta string: template punctuation. |
| Floor | 63 | 10 | arrow glued to the label "Email me →" (src/pages/index.astro:52); arrow glued to the label "Digital wargame modules →" (src/pages/index.astro:60); arrow glued to the label "Wargame Modules →" (src/pages/index.astro:78); and 7 more of the same gate | An arrow glued to link text repeats what a link already says; it is the universal suffix of generated buttons. |
| Floor | 63 | 1 | decorative status dots (dot live) repeated across the page (src/pages/index.astro:406) | Status dots before labels that imitate a live state nothing measures. |
| Reflex | 39b | 1 | control height outside 44 to 52px: a.cta 18px (render) | A control outside 44 to 52px tall (an 18px text link as the action, 160px cartridge buttons). |
| Reflex | 44c | 1 | hero ends at 197px of a 900px screen (render) | The hero stops far above the fold, so the first screen frames no single idea. |
| Reflex | 49b | 4 | link "Digital wargame modules →" wraps to 2 lines (a) (render); link "AI workflow & automation builds " wraps to 2 lines (a) (render); link "Custom voice & persona models →" wraps to 2 lines (a) (render); link "Game-design consultation →" wraps to 2 lines (a) (render) | A link label wraps at phone width. |
| Reflex | 59 | 1 | smallest gap between sections is 50px (gaps: 50, 58, 651, 52) (render) | Section gaps under 120px and nearly the same at every seam. |
| Reflex | 77 | 1 | 1 thin section: section.contact-directory (49% wide, no mass) (render) | A thin section with no mass: the contact block at half width. |
| Reflex | 78 | 1 | section heads render at 14px under a 44px hero head (render) | Section heads render at 14 to 32px under a 44 to 50px title, so headings collapse into labels. |
| Finish | F1 | 1 | straight quote in prose x11 (first: tried and couldn't quite learn) (src/pages/index.astro:38) | Straight typewriter quotes in set prose. |
| Finish | F19 | 1 | 4 font weights in running use (400, 500, 600, 700) (render) | Four weights in running use (400, 500, 600, 700) where two or three would hold the hierarchy. |

### /writing/

| Tier | Gate | n | Element (where) | Why it reads as machine-made |
| --- | --- | --- | --- | --- |
| Floor | 58 | 1 | 109 words on one screen (from y=1300) (render) | Far more than about 80 words in one 900px screen: a document dump, not one idea per screen. |
| Floor | 67 | 1 | uppercase at 12px tracked 0.05em on <p class="mt-3 font-mono text-xs uppercas…"> (src/pages/writing/index.astro:21) | Small capitals with spread letters is the label voice generated pages default to; sentence case in the body face says the same thing. |
| Reflex | 23 | 1 | accent paints ~12.7% of the 1280x800 viewport (> 8%) (render) | The accent paints about 12.7% of the first screen, past a signal's share. |
| Reflex | 44c | 1 | hero ends at 170px of a 900px screen (render) | The hero stops far above the fold, so the first screen frames no single idea. |
| Reflex | 59 | 1 | smallest gap between sections is 52px (gaps: 674, 52) (render) | Section gaps under 120px and nearly the same at every seam. |
| Reflex | 79 | 1 | 752px of nothing between the hero's last content (y 148) and the fold (render) | A band of empty paper between the hero's last line and the fold. |
| Finish | F19 | 1 | 4 font weights in running use (400, 500, 600, 700) (render) | Four weights in running use (400, 500, 600, 700) where two or three would hold the hierarchy. |
| Warn | 77 | 1 | 3 sections, hero and footer included (render) | Three sections, hero and footer included: a stub more than a page. |

### /games/

| Tier | Gate | n | Element (where) | Why it reads as machine-made |
| --- | --- | --- | --- | --- |
| Floor | 19 | 1 | dash "—" in copy (src/pages/games.astro:671) | An em dash in copy, the best-known punctuation tell of generated prose. The words are Ray's; the audit only flags the mark. |
| Floor | 39a | 1 | disabled via opacity alone on .feedback-submit:disabled (src/pages/games.astro:1606) | Disabled shown by opacity alone, the default a generator ships, with no cursor or fill change. |
| Floor | 40 | 1 | a field's edge is under 3:1 against what surrounds it: select.fr-select 1.49:1 (render) | The select's edge is 1.49:1 against its panel, so the field disappears. A defect. |
| Floor | 48 | 21 | colour literal rgb(232 161 60 / 0.55) outside tokens (box-shadow on .cab-rail-left::before) (src/pages/games.astro:1005); colour literal rgb(232 161 60 / 0.07) outside tokens (background on .cab-shelf-col) (src/pages/games.astro:1024); colour literal rgb(0 0 0 / 0.65) outside tokens (border on .cart) (src/pages/games.astro:1058); and 18 more of the same gate | A raw rgb() or hex colour outside the palette (amber glows and black shadows), so the page paints colours its own tokens do not name. |
| Floor | 58 | 1 | 249 words on one screen (from y=2000) (render) | Far more than about 80 words in one 900px screen: a document dump, not one idea per screen. |
| Floor | 67 | 26 | "→ BROWSE · ENTER PLAYS" typed in capitals at 14px tracked 0.06em (<p class="cab-hint">) (src/pages/games.astro:733); .cab-hint: letter-spaced tracked 0.06em at 14px in a label role (src/pages/games.astro:877); .cab-rail: letter-spaced tracked 0.06em at 14px in a label role (src/pages/games.astro:984); and 23 more of the same gate | Small capitals with spread letters is the label voice generated pages default to; sentence case in the body face says the same thing. |
| Floor | 7a | 1 | pure #000: background: #000 (.crt-screen) (src/pages/games.astro:1251) | Pure #000, a value nothing in the palette asked for. |
| Reflex | 24b | 46 | margin: 14px auto 0 (off the 4px scale) on .cabinet (src/pages/games.astro:978); padding: 10px 16px (off the 4px scale) on .cab-rail (src/pages/games.astro:989); margin-right: 9px (off the 4px scale) on .cab-rail-left::before (src/pages/games.astro:1003); and 43 more of the same gate | Spacing nudged one odd value at a time (7, 9, 14, 26px) instead of set on one scale, which is how iterated CSS drifts. |
| Reflex | 38iii | 1 | accented word inside a heading (.fn-sub-title) (src/pages/games.astro:1680) | One word in a heading set apart by colour or weight: the accented-word habit. |
| Reflex | 39b | 1 | control height outside 44 to 52px: button.cart 160px, button.cart 160px, button.cart 160px (render) | A control outside 44 to 52px tall (an 18px text link as the action, 160px cartridge buttons). |
| Reflex | 44c | 1 | hero ends at 242px of a 900px screen (render) | The hero stops far above the fold, so the first screen frames no single idea. |
| Reflex | 59 | 1 | smallest gap between sections is 34px (gaps: 40, 34, 705, 52) (render) | Section gaps under 120px and nearly the same at every seam. |
| Reflex | 64 | 3 | monospace label voice on .crt-fig figcaption (src/pages/games.astro:1301); monospace label voice on .feedback-label (src/pages/games.astro:1554); monospace label voice on .feedback-note (src/pages/games.astro:1611) | Monospace as costume: none of this text is code or a measurement, so the mono reads as a developer-tool template. |
| Reflex | 75 | 1 | text that strains the eye: span.field-notes-meta at 10px, span.field-notes-meta at 10px, span.field-notes-meta… (render) | 10px text that strains the eye. |
| Reflex | 77 | 1 | 1 thin section: section.contact-directory (53% wide, no mass) (render) | A thin section with no mass: the contact block at half width. |
| Reflex | 78 | 1 | section heads render at 14px under a 50px hero head (render) | Section heads render at 14 to 32px under a 44 to 50px title, so headings collapse into labels. |
| Reflex | 79 | 1 | 241px of nothing between the hero's last content (y 220) and the next section (render) | A band of empty paper between the hero's last line and the fold. |
| Finish | F1 | 1 | straight quote in prose x3 (first: These are games I'm still buildi) (src/pages/games.astro:671) | Straight typewriter quotes in set prose. |
| Warn | 49 | 1 | long clickable label "No.{(i + 1).toString().padStart(2, …" without nowrap (src/pages/games.astro:712) | A long clickable label with no nowrap, so it can break mid-phrase. |

### /about/

| Tier | Gate | n | Element (where) | Why it reads as machine-made |
| --- | --- | --- | --- | --- |
| Floor | 58 | 1 | 288 words on one screen (from y=950) (render) | Far more than about 80 words in one 900px screen: a document dump, not one idea per screen. |
| Reflex | 44c | 1 | hero ends at 170px of a 900px screen (render) | The hero stops far above the fold, so the first screen frames no single idea. |
| Reflex | 59 | 1 | smallest gap between sections is 52px (gaps: 698, 52) (render) | Section gaps under 120px and nearly the same at every seam. |
| Reflex | 79 | 1 | 752px of nothing between the hero's last content (y 148) and the fold (render) | A band of empty paper between the hero's last line and the fold. |
| Finish | F1 | 1 | straight quote in prose x5 (first: ittle about me. I've been design) (src/pages/about.astro:14) | Straight typewriter quotes in set prose. |
| Finish | F19 | 1 | 4 font weights in running use (400, 500, 600, 700) (render) | Four weights in running use (400, 500, 600, 700) where two or three would hold the hierarchy. |
| Warn | 77 | 1 | 3 sections, hero and footer included (render) | Three sections, hero and footer included: a stub more than a page. |

### /hammerstein-ai/

| Tier | Gate | n | Element (where) | Why it reads as machine-made |
| --- | --- | --- | --- | --- |
| Floor | 58 | 1 | 176 words on one screen (from y=550) (render) | Far more than about 80 words in one 900px screen: a document dump, not one idea per screen. |
| Floor | 58 | 1 | hero carries 3 text blocks before its actions (render) | The hero stacks three text blocks before its action. |
| Floor | 63 | 1 | middle-dot meta string "Status Live · early access Price $15 / month Limi…" (src/pages/hammerstein-ai.astro:25) | Middle dots joining facts into one meta string: template punctuation. |
| Reflex | 44c | 1 | hero ends at 314px of a 900px screen (render) | The hero stops far above the fold, so the first screen frames no single idea. |
| Reflex | 59 | 1 | smallest gap between sections is 52px (gaps: 698, 52) (render) | Section gaps under 120px and nearly the same at every seam. |
| Reflex | 77 | 1 | 1 thin section: section.contact-directory (67% wide, no mass) (render) | A thin section with no mass: the contact block at half width. |
| Reflex | 79 | 1 | 608px of nothing between the hero's last content (y 292) and the fold (render) | A band of empty paper between the hero's last line and the fold. |
| Finish | F1 | 1 | straight quote in prose x1 (first: What's shipped) (src/pages/hammerstein-ai.astro:59) | Straight typewriter quotes in set prose. |
| Finish | F19 | 1 | 4 font weights in running use (400, 500, 600, 700) (render) | Four weights in running use (400, 500, 600, 700) where two or three would hold the hierarchy. |
| Finish | F20 | 1 | div.infra-meta leaves one item alone on its last row (3 + 1) (render) | A row that leaves one item alone on its last line. |
| Warn | 77 | 1 | 3 sections, hero and footer included (render) | Three sections, hero and footer included: a stub more than a page. |

### /wargame-modules/

| Tier | Gate | n | Element (where) | Why it reads as machine-made |
| --- | --- | --- | --- | --- |
| Floor | 26a | 1 | focus ring 1.07:1 against what is behind it on a.screen-plate__frame (render) | Focus ring under 3:1 against what it is drawn over, so a keyboard user loses their place. A defect more than a tell. |
| Floor | 58 | 1 | 272 words on one screen (from y=4500) (render) | Far more than about 80 words in one 900px screen: a document dump, not one idea per screen. |
| Floor | 63 | 3 | middle-dot meta string "Digital modules · Commissions open, selective · $…" (src/pages/wargame-modules.astro:14); middle-dot meta string "rweiss@consimsltd.com $400 to monster · Pricing ·…" (src/pages/wargame-modules.astro:61); middle-dot meta string "$400 to monster · Pricing · Terms" (src/pages/wargame-modules.astro:65) | Middle dots joining facts into one meta string: template punctuation. |
| Floor | 63 | 5 | arrow glued to the label "Pricing →" (src/pages/wargame-modules.astro:17); arrow glued to the label "Email me →" (src/pages/wargame-modules.astro:60); arrow glued to the label "The World Undone: East Front Trilogy, D…" (src/pages/wargame-modules.astro:370); and 2 more of the same gate | An arrow glued to link text repeats what a link already says; it is the universal suffix of generated buttons. |
| Reflex | 25 | 1 | running prose set too wide: p.track-record-card__body about 119 characters a line, p.try-one-lead about 102 ch… (render) | Running prose set past 75 characters a line. |
| Reflex | 44c | 1 | hero ends at 213px of a 900px screen (render) | The hero stops far above the fold, so the first screen frames no single idea. |
| Reflex | 49b | 4 | link "The World Undone: East Front Tri" wraps to 2 lines (a) (render); link "Play the East Prussia 1914 playt" wraps to 2 lines (a) (render); link "Publishers who want an official " wraps to 3 lines (a) (render); link "Publishers who want an official " wraps to 2 lines (a) (render) | A link label wraps at phone width. |
| Reflex | 59 | 1 | smallest gap between sections is 78px (gaps: 78, 114, 114, 114, 114, 114, 78) (render) | Section gaps under 120px and nearly the same at every seam. |
| Reflex | 78 | 1 | section heads render at 32px under a 50px hero head (render) | Section heads render at 14 to 32px under a 44 to 50px title, so headings collapse into labels. |
| Reflex | 79 | 1 | 700px of nothing between the hero's last content (y 200) and the fold (render) | A band of empty paper between the hero's last line and the fold. |
| Reflex | 83 | 1 | photographs cover 44% of the page below the hero (7 pictures) (render) | Pictures cover 44% of the page below the hero, so it reads as a gallery. |
| Finish | F1 | 1 | straight quote in prose x3 (first: oody April is GMT's game of the) (src/pages/wargame-modules.astro:204) | Straight typewriter quotes in set prose. |
| Finish | F19 | 1 | 4 font weights in running use (400, 500, 600, 700) (render) | Four weights in running use (400, 500, 600, 700) where two or three would hold the hierarchy. |

### shared (all six)

| Tier | Gate | n | Element (where) | Why it reads as machine-made |
| --- | --- | --- | --- | --- |
| Floor | 20 | 1 | no Hallmark stamp on the first non-empty line of any CSS (src/styles/global.css:1) | No Hallmark stamp. Bookkeeping only: look D was not built by Hallmark, and a visitor never sees this. |
| Floor | 34 | 1 | no overflow-x: clip on html and body (src/layouts/BaseLayout.astro:1) | No overflow-x: clip on html and body, so a wide child can scroll the page sideways. |
| Floor | 63 | 1 | middle-dot meta string "Imprint · Brooklyn, NY · Set in Newsreader & IBM …" (src/layouts/BaseLayout.astro:46) | Middle dots joining facts into one meta string: template punctuation. |
| Floor | 67 | 6 | .featured-essay__label: uppercase tracked 0.06em at 12px in a label role (src/styles/global.css:1250); .index-block__heading: uppercase tracked 0.06em at 14px in a label role (src/styles/global.css:1286); .site-page .section-label, .site-page .sub-head: uppercase tracked 0.06em at 14px in a label role (src/styles/global.css:1717); and 3 more of the same gate | Small capitals with spread letters is the label voice generated pages default to; sentence case in the body face says the same thing. |
| Floor | 6a | 1 | hero sized in vh: min-height: calc(100vh - 5.3125rem) on .hero-dossier (src/styles/global.css:339) | A hero sized in vh jumps on phones when the browser bar moves; 100vh is the habit of a template. |
| Reflex | 24b | 1 | margin-right: 7px (off the 4px scale) on .site-page .dot (src/styles/global.css:1798) | Spacing nudged one odd value at a time (7, 9, 14, 26px) instead of set on one scale, which is how iterated CSS drifts. |
| Reflex | 37 | 1 | 4 font families: newsreader, ibm plex sans, ibm plex sans condensed, ibm… (src/styles/global.css:50) | Four families (Newsreader, Plex Sans, Plex Sans Condensed, Plex Mono) is one voice more than a page holds; stacking families is how a generator adds variety. |
| Reflex | 64 | 5 | monospace label voice on .dispatch-subnote (src/styles/global.css:492); monospace label voice on .screen-plate__caption (src/styles/global.css:553); monospace label voice on .featured-essay__label (src/styles/global.css:1251); and 2 more of the same gate | Monospace as costume: none of this text is code or a measurement, so the mono reads as a developer-tool template. |
| Finish | F15 | 1 | 2 container widths on one page (1376, 1152px) (src/styles/global.css:1) | Two container widths (1376 and 1152px), so left edges do not line up section to section. |
| Finish | F16 | 1 | browser surfaces unthemed: ::selection, scrollbar-color (src/styles/global.css:1) | Selection and scrollbar fall back to browser defaults on a page with a committed palette. |
| Finish | F4 | 1 | 3 filled primary-button recipes: .btn-primary + .closing-cta + .site-page .game-land… (src/styles/global.css:970) | Three filled primary-button recipes compete for the one action. |
| Warn | 3 | 1 | side stripe border-left: 3px solid var(--color-carmine) on .site-page blockquote, .site-page .pullquote (src/styles/global.css:1911) | A thick carmine stripe down the left of a quote is the stock callout of generated docs. |
