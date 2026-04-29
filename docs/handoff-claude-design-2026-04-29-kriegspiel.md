# Personal site — Claude Design brief (round 2, 2026-04-29)

## What this is

A second design pass on Ray Weiss's personal site
(rayweiss.work, Astro 6 + Tailwind v4 + IBM Plex). The first
pass shipped 2026-04-18 (archive: `vault/artifacts/
2026-04-18-claude-design-pass.zip`) and established a
warm-dark "Ink on Parchment" editorial system — single column,
hairline rules, IBM Plex Serif body / Sans headings / Mono
labels, single muted-brick accent used in one place, near-black
warm background `#0c0b09`.

That system's bones are good and stay. The aesthetic register
is too restrained — the dominant impression is "generic dark
personal site," and the only personality moment is the
48px wargame-counter icon. We're shifting the visual register,
not the structure.

## Why round 2 matters now

The site is the conversion surface for an active outreach push.
Five Tier-1 named-target outreach emails went out 2026-04-29 to
SaaS founders and small-team leads (Hyperspell, TestGorilla,
Cogram, AllSpice, Beautiful.ai). Recipients clicking through
land on this site. We want them to remember it — not just see
"yet another tasteful dev portfolio."

The reader is sophisticated. They will pattern-match anything
template-y as AI slop within seconds. They are evaluating
whether Ray can ship + whether working with him will compound
their own velocity. The aesthetic needs to subconsciously
reinforce: "this person designs systems, not just makes
things."

## The aesthetic direction — General Staff Atlas

Anchor reference: 19th-century Prussian general staff working
surfaces. Specifically the kriegspiel lineage (Reisswitz 1824
onward) carried into the modern operations-planning register.
The reader should feel they've opened an officer's working
atlas, not a war movie.

Why this direction fits Ray:

- He IS a wargame designer (Conflict Simulations LLC ships
  hex-and-counter wargames).
- He runs four businesses simultaneously, plus a 19-project
  software portfolio managed via the **GeneralStaff** framework
  (the public project named after the Prussian institution
  that made coordinated planning legible).
- The "I direct, the tools implement" thesis is itself a
  command-staff thesis — the officer who plans the operation
  is not the officer who fires the rifle.
- The kriegspiel register lets the aesthetic work as
  subconscious credentialing: the visitor doesn't read
  "systems designer" anywhere on the page, but the surface
  they're looking at could only have been made by someone
  who thinks in systems.

The register is **restrained, quietly authoritative,
cartographic.** It is NOT a war movie, NOT a Tom Clancy cover,
NOT camo / dog-tags / "operator-core." It is the planner's
desk, not the soldier's kit.

## What's already locked (do not change)

### Stack and infrastructure

- **Astro 6.1.6 + Tailwind v4** — return CSS + component
  patterns, never propose framework swaps.
- **IBM Plex face stack** is locked — Serif (body), Sans
  (headings), Mono (small-caps labels). You may propose ONE
  display face for top-level H1s only (steel-engraving register
  — transitional serif, lithographed display, or fraktur-
  influenced display used with extreme restraint). Do not
  introduce additional faces beyond that.
- **AAA contrast** is non-negotiable. Current palette verifies
  ~17:1 foreground, ~7:1 muted, ~8.5:1 link. Match or improve.

### Layout vocabulary (named patterns)

The site uses a shared anchor vocabulary established in the
2026-04-18 pass — every page composes from these named
classes. Round 2 EXTENDS this vocabulary; **keep the names,
change the visual treatment**:

- `.hero` — counter icon + H1 + italic dek, two-column grid
- `.bio` — single-paragraph 65ch measure prose block
- `.featured` — left-rule highlight ("Start here") with
  CTA. The ONLY dedicated accent application on the site.
- `.entries` — editorial list with hairline dividers, used
  for Writing / Businesses / Projects
- `.infra-list` — indented tree with left-hairline + tick
  marks + Plex Mono metadata strip. Categorically distinct
  from `.entries`. Used for Infrastructure (GeneralStaff,
  Mission Brain, Mission Bullet OSS, etc.)
- `.section-head` / `.section-label` / `.section-count` —
  mono small-caps section header with editorial-index "04 ——"
  count over hairline rule
- `.music-block` — short prose with Plex Mono follow link
- `.terminal-section` — terminal-game project pages get a
  triangle prefix on h2s
- `.prose-body` — long-form essay styling (Hammerstein-grade
  reading register)
- `.nav-group` / `.nav-group-label` / `.nav-group a` —
  grouped sidebar nav

The named-class vocabulary is referenced from
`src/styles/global.css` lines 156+ ("Anchor vocabulary
(landing redesign 2026-04-18)"). Do not rename or
restructure. New patterns may extend the vocabulary, but
existing names must keep working so 14 page files don't
need rewrites.

### Content + voice

Every page's copy is locked. Voice is Ray's. Aesthetic shift
only — do not propose copy edits, page reorganizations, or new
content. Hero line "Brooklyn wargame designer, running four
businesses" + "I direct, the tools implement" thesis stay
exactly as written.

### Page archetypes (3 to design at full fidelity)

Return new full-fidelity HTML for these three archetypes.
Every other page on the site composes from the same
vocabulary, so these three ground the system:

1. **Index (home)** — current state at
   `audit-screenshots/01-home-desktop.png`. Composes hero +
   bio + featured + writing entries + businesses entries +
   projects entries + infrastructure infra-list + music-block.
2. **Essay long-form** — Hammerstein essay, current state at
   `audit-screenshots/04-essay-hammerstein-desktop.png`.
   Tests `.prose-body` reading register at scale.
3. **Business detail page** — Conflict Simulations LLC
   umbrella, current state at
   `audit-screenshots/05-csl-umbrella-desktop.png` and
   `05-csl-umbrella-mobile.png`. Tests how a business surface
   reads when it's neither index nor essay.

## Specific positive references

### Primary (study these)

- **Reisswitz 1824 *Kriegspiel*** — original Prussian
  wargame. Map atlas + rule book. The visual world we're
  living in.
- **Stieler's Hand-Atlas** (Justus Perthes, 1817 onward) —
  German cartographic standard of the 19th century.
  Steel-engraving register, hairline precision.
- **Von Reymann's *Topographische Spezial-Karte*** — Prussian
  topographic plates, ~1806–1908. Look at the marginal
  apparatus (sheet titles, scale bars, legend boxes).
- **Prussian general staff working maps** —
  Großer Generalstab cartographic output, late 19th c. Look
  at how operational overlays sit ON the cartographic base
  without overpowering it.
- **The GeneralStaff project's own brand** —
  github.com/lerugray/generalstaff. Mustard `#d4a32b`
  brand-tag on near-black, cream Oswald wordmark. The
  personal site should feel like the planner's desk in the
  same world the GS dashboard inhabits.

### Secondary (tonal anchors)

- **Edward Tufte** — editorial discipline, marginalia
  treatment, restraint about decoration.
- **USGS topographic map register** — fine, functional,
  restrained. The American descendant of the Prussian
  cartographic tradition.
- **Stripe Press / Anthropic.com** — only as reference for
  "elevated tech-press confidence." The kriegspiel register
  takes a different path but the discipline is similar.

### Tertiary (NATO symbology, USE WITH RESTRAINT)

NATO APP-6 friendly/enemy unit markers (the basic blue
rectangle = friendly, red diamond = enemy, plus the 14
basic icons inside) are permitted as a **quiet motif** —
section dots, marginal accents, status indicators. NOT as
wallpaper, NOT as decoration, NOT as iconography for items
that are not actually units (a writing piece is not an
infantry company; do not draw it as one).

Test for whether NATO symbology is earning its place: would
a real general-staff officer find it confusing or
gratuitous? If yes, cut it.

## Anti-references (avoid hard)

- WWII Hollywood aesthetic (no, this is not Saving Private
  Ryan)
- Tom Clancy thriller cover register
- Camo patterns, dog tags, "operator core" Instagram-bro
  visual codes
- Cyberpunk-military fusion (Neuromancer-meets-Black-Ops)
- Generic "command center" UIs (the kind that show up in
  bad SaaS landing pages selling "mission-critical
  intelligence platforms")
- Fantasy / D20 / tabletop-gaming visual codes (Ray makes
  *historical* wargames; the register is non-fiction)
- Dev-portfolio-template aesthetic (the thing we're escaping)
- Notion-resume aesthetic
- AI-startup landing-page aesthetic (purple gradients, glass
  morphism, oversized hero glyphs)
- Brutalist-web aesthetic (Ray's audience is not the type
  who values raw monospace as a flex)
- Web 1.0 / GeoCities pastiche

## Direction guidance (loose, not prescriptive)

These are dimensions to consider — propose specifics within
them. You have license to depart if the result is stronger.

### Palette

The current Ink on Parchment palette is too dark to feel
inhabited. Consider:

- **Option 1 — Officer's atlas (paper register).** Move to a
  warm oat / buff paper ground (`~#E8DFC8` or similar),
  iron-gall ink foreground (`~#1F1B14`). Accent palette
  should pull from the kriegspiel atlas vocabulary — Prussian
  blue (`~#1F3A5F`) for primary accent, oxblood (`~#6B2D2D`)
  for secondary / friendly-marker accent. This is the most
  direct read of the reference.
- **Option 2 — Planner's desk after dark (dark register
  retained).** Keep the warm-dark register but shift it
  toward an officer's table-lamp lit reading surface.
  Background warmer (more iron-gall sepia), accents shift
  to map-symbol vocabulary (Prussian blue for friendly,
  oxblood for emphasis), reduce the contrast ratio of body
  text slightly to read as ink-on-stained-paper rather than
  cream-on-black. Reads more "general staff working late."

Pick whichever serves the kriegspiel reference best. If
both work, propose the paper register as primary (the
prior round was already dark; round 2 should feel like a
real shift, not a re-tinting).

### Type

- Keep IBM Plex Serif / Sans / Mono.
- ONE display face for H1s only is allowed if it strengthens
  the steel-engraving register. Suggestions: a transitional
  serif with strong contrast (Bodoni, Didot — but easy to
  overshoot into fashion-magazine), a steel-engraving display
  (Caslon, Baskerville-display weights), or — the bolder
  move — a fraktur-influenced display used at H1 only,
  scaled large, with massive tracking discipline. Fraktur
  is risky; only propose it if you're confident the result
  reads "atlas" not "metal album."

### Marginal apparatus (cartographic tells)

Cartographic atlases identify themselves through their
marginal apparatus, not through pictorial decoration. Borrow
specifically:

- Sheet/plate identification — section heads could carry an
  unobtrusive plate number ("PL. III // BUSINESSES" instead
  of just "BUSINESSES // 04 ——"). Consider whether this
  earns its place or feels affected.
- Scale bars — could become a visual motif on individual
  business pages where Ray's projects reference scope or
  scale.
- Legend boxes — for the Infrastructure section's
  metadata (status: live / private; scale: solo project /
  fleet member), a legend treatment may read more
  authoritatively than the current dot-and-keyvalue strip.
- Hairline frames — the cartographic register uses
  hairline rectangles to bound content blocks. Used
  sparingly, this could replace some of the current
  hairline-rule + section-head pattern.

### Hex grid as marginal motif (handle with care)

Hex grids are the wargame designer's ambient texture. They
can appear:

- As corner ornaments at section breaks (1-3 hexes,
  geometric, fine line)
- As a watermark on the wargame counter image
- As a divider element instead of a hairline rule on the
  index page (one-line hex pattern, very faint)

Do NOT use hex grids as page background, as a hero element,
or anywhere that overpowers the editorial reading register.
The hex grid is an artifact of the world the site lives in,
not the subject of the site.

### Wargame counter motif (already present, scale up)

The current 48px wargame-counter icon is the only personality
moment. In the round-2 register it should become more
present — possibly:

- Custom counter graphics per section (each business gets a
  counter symbol)
- The hero counter scales up and becomes the main visual
  anchor
- A counter-format "Ray Weiss" identification block in
  the hero (NATO-ish identification slug, unit type,
  scale, location)

The current `wargame-counter.png` is included in
attachments. You may propose new counter graphics; they need
to read at 48px and stay legible. Do NOT propose pixelated
sprite-art counters — the register is engraved/lithographed,
not retro-game.

## Output ask

Standard Claude Design output package:

- **`SKILL.md`** — discipline document for the new register.
  We don't have a personal-site SKILL yet. Lock the palette,
  type, named-class vocabulary, motif rules, and
  anti-references. Will be installed at
  `.claude/skills/personal-site.md`. Include the same
  "grep-for-violations" pattern table style used in
  `retrogaze-site.md` (linked in the GS ecosystem) so
  future agents can self-check.
- **3 reference HTML files** at full fidelity — index,
  hammerstein essay, conflict-simulations-llc umbrella. Each
  should compose from the named-class vocabulary so the CSS
  patterns extract cleanly into `global.css`.
- **CSS in the HTML files** can be inlined — Ray will
  extract patterns into Tailwind v4 + global.css discipline.
- **Any new SVG assets** (counter graphics, motif elements,
  hex ornaments, NATO unit markers) packaged in `assets/`.
  Existing `grain.svg` can stay or be replaced.
- **A short notes.md** describing intentional design
  decisions and where you departed from the brief (always
  useful for the integration step).

Same shape as the 2026-04-18 zip (which contained
`landing.html`, `assets/grain.svg`, `assets/wargame-counter.png`,
plus uploads of the screenshots that informed it).

## Attachments to include

When uploading this brief to claude.ai/design, attach:

1. **All 16 audit screenshots** at `audit-screenshots/`.
   Title: "Current state, all major pages, desktop + mobile
   where applicable." These are the round-1 result Ray's
   shifting from.
2. **`src/styles/global.css`** — current named-class
   vocabulary + Ink on Parchment palette + paper-grain
   overlay. Title: "Locked layout vocabulary; round 2 keeps
   class names, changes visual treatment."
3. **`src/layouts/BaseLayout.astro`** + **`src/layouts/EssayLayout.astro`**
   + **`src/pages/index.astro`** — minimal page-shell
   reference so Claude Design sees the Astro composition
   model. Title: "Astro page composition shape."
4. **`vault/artifacts/2026-04-18-claude-design-pass.zip`** —
   the prior round. Title: "Round 1 output. DO NOT REPEAT
   the dark-restrained-editorial register; round 2 is a
   directional shift."
5. **`README.md`** + **`docs/content-strategy.md`** +
   **`docs/conventions.md`** — context for what the site is
   and what discipline already exists. Title: "Site
   identity + content discipline."

## Done criteria

The output is successful if:

1. A SaaS founder lands on rayweiss.work and remembers it
   30 seconds after closing the tab.
2. The aesthetic reads "the person who made this thinks in
   systems" without saying so anywhere on the page.
3. The SKILL.md lets Ray (or a future agent) extend the
   register to a new page in 30 minutes by composing from
   the named vocabulary.
4. NATO symbology is present and earns every appearance — a
   real officer would not flinch.
5. The existing Hammerstein essay reading experience is at
   least as good as the current state (long-form prose at
   17px+ Plex Serif, generous line-height, tight measure).
6. Ray's voice is intact in every visible byte of copy.

If any of those are at risk, ship a less ambitious variant
and flag it in notes.md.
