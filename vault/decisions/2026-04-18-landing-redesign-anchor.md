# 2026-04-18 — landing redesign, anchor + Infrastructure section

Successor to [`2026-04-15-design-system-v1.md`](2026-04-15-design-system-v1.md). Design system v1 stays the locked token foundation (palette, type stack, accent, grain) — this record layers the anchor's component vocabulary on top and introduces the Infrastructure taxonomy.

## Context

Phase 18 (2026-04-16) had already done a "distinctive-design pass" against the generic-AI-portfolio failure mode, but the home page's list-hierarchy between Hammerstein / businesses / projects / music was still underspecified. Ray's plan for the week: use Anthropic's Claude Design (CD, rolled into his Claude Max sub) to produce a single carefully-scoped **anchor view**, then hand-extend the anchor's vocabulary across the remaining pages with zero additional CD spend. Discipline borrowed verbatim from [`GeneralStaff/FUTURE-DIRECTIONS-2026-04-15.md` Addendum-3](../../../GeneralStaff/FUTURE-DIRECTIONS-2026-04-15.md).

Ray also surfaced two new projects that needed placement decisions before the brief went out: **GeneralStaff** (open-source autonomous engineering tool, Phases 1–4 shipped, public launch pending) and **RayBrain** (retrieval-only second brain, corpus private). Both are infrastructure for running the four businesses, not separate businesses in their own right.

## Decisions

### 1. Taxonomy — introduce "Infrastructure" as a top-level section

Before this session the site had: Writing · Businesses (4) · Projects (2) · Music (1). After: **Writing · Businesses (4) · Infrastructure (2) · Projects (2) · Music (1)**.

**Why.** GeneralStaff and RayBrain are load-bearing apparatus Ray built to run the four businesses — not products, not side-projects-for-their-own-sake. Folding them into Businesses would misrepresent them as things being sold; folding into Projects would flatten them alongside Auftragstaktik / Buddies which *are* projects-for-their-own-sake. A distinct "Infrastructure" section answers the question a thoughtful visitor asks: *how does a solo founder actually run four businesses?* — which is also the load-bearing question the Hammerstein essay is the answer to.

**Trade-off.** One more navigation group (5 instead of 4) and one more per-page section on the landing. Accepted.

### 2. Anchor — brief `/` as the single vocabulary-forcing view

The brief ([draft preserved at `docs/phase-22-anchor/landing.html`](../../docs/phase-22-anchor/landing.html) as the CD output) forced eight distinct patterns in one pass: hero / bio / featured-essay / section-head / editorial-entries / infrastructure-entries / music-tile / colophon-footer. That coverage is one more than GeneralStaff's fleet-overview anchor (seven patterns), and enough to hand-extend to the other twelve pages without briefing a second anchor.

Following Addendum-3 rule 1, all CD follow-up offers (alternate palettes, second variations, dialed accents) were declined. Single shot.

### 3. Accent scarcity rule, tightened

Design system v1 made `--color-accent` (#c9484e, wargame-counter red) the CSL brand mark and said "never decoration." The anchor reinforces this at a specific cardinality: **accent appears on the landing page exactly twice** — the wargame-counter PNG and the 2px left rule on the "Start here" featured block. Nowhere else. Not hover, not underlines, not section borders. Downstream pages may use `--color-accent` only when the use has an equivalent load-bearing reason (wargame-counter motif, CSL brand mark, or a deliberately scarce featured-block analogue). The discipline is: scarcity is the effect.

### 4. Infrastructure-section differentiation — sans-serif titles + metadata strip

CD proposed (and we kept) a structurally distinct treatment for Infrastructure vs. editorial entries:

- **Editorial entries** (Businesses, Projects) — Plex **Serif** titles, muted Serif descriptions, hairline dividers. Reads as "things to consider."
- **Infrastructure entries** — Plex **Sans** titles, Plex Mono metadata strip above each title (Status / License / Access or Pattern / Invariants), indented tree with left hairline + inward tick-mark. Reads as "technical tooling that runs the work."

The serif/sans split is the single-axis vocabulary distinction that does most of the categorical work — it's not cosmetic.

### 5. Status dots — no new palette colors

CD's first pass introduced `#7ba05b` (warm olive) as a "live" status-dot color. Rejected at port time: the locked palette has nine tokens, and accepting a tenth for a 6px dot is drift. Instead, `.infra-meta .dot.live` uses `var(--color-link)` (amber), `.infra-meta .dot.private` uses `var(--color-subtle)` (gray). Existing vocabulary, zero drift.

### 6. Motion rule, held

Design system v1 said no animated hero, no parallax, no cursor trails. CD's first pass snuck a `translateX(3px)` on the featured-CTA arrow on hover — removed at port time. The rule is "single 150ms color transition, no other motion." Applies sitewide.

### 7. Mobile nav — zero JS, flat fallback

The anchor's mobile hamburger used an inline `onclick` handler for the menu toggle — one-line JS, but the brief pinned zero JS. At port time, kept the existing horizontal-scroll mobile topbar instead of introducing a hamburger with `<details>`/`<summary>`. Trade-off accepted: mobile users see a flat scrollable list rather than a grouped dropdown. If this proves ergonomically weak, revisit with a `<details>` pattern (JS-free).

## Vocabulary — named component classes extracted from the anchor

Reused across pages. Defined in [`src/styles/global.css`](../../src/styles/global.css).

| Class | Role | First-use | Extensions allowed |
|---|---|---|---|
| `.hero` | Counter + H1 + italic dek grid | `/` landing | Landing only — per-page H1 uses Tailwind utilities |
| `.bio` | 65ch Serif prose block | `/` landing | Any single-paragraph lead |
| `.featured` | 2px accent-left-rule featured block | `/` "Start here" | **Reserve for featured-essay treatment. Do not replicate.** |
| `.section-head` + `.section-label` + `.section-count` | Mono small-caps label + "N ——" count over hairline | Landing sections | Any major section break |
| `.section-subhead` | Italic Serif muted 15px | Landing Infrastructure intro | Any intro-under-section-head need |
| `.entries` / `.entry` / `.entry-title` / `.entry-desc` | Editorial list of Serif items | Landing Businesses + Projects | Any list-of-editorial-items (writing index is a candidate) |
| `.infra-list` / `.infra-meta` / `.infra-title` / `.infra-desc` | Indented tree with mono metadata | Landing Infrastructure | `/generalstaff`, `/raybrain` status strips already use `.infra-meta`; any page needing a technical status line |
| `.music-block` | Shorter single-paragraph block | Landing Music | Any "fewer-items-no-list" treatment |
| `.nav-group` / `.nav-group-label` | Grouped sidebar nav | `SiteNav.astro` sidebar | Nav only |

## What would earn a second anchor brief

Per Addendum-3 rule 6: brief a second anchor ONLY when a view genuinely cannot be expressed in the current vocabulary. Candidates that would NOT earn one:

- Essay long-form prose — `.prose-body` already handles it
- Dense project detail pages (CSL Veridian, DOAE) — existing patterns hold
- Music blockquotes (Tyler tweets) — `.prose-body blockquote` already handles
- Data tables (Retrogaze features, CSL digital catalog) — extend from `.entries` + hairlines

Candidates that WOULD earn one:

- A real interactive demo surface (not currently planned)
- An image gallery with grid density beyond the CSL umbrella's three imagery hits (not currently planned)
- A live-data dashboard if GeneralStaff ever ships an embedded status widget (speculative, not planned)

The burden of proof is on "existing vocabulary genuinely cannot express this," not "want something new."

## Examined and rejected for anchor-vocabulary retrofit (2026-04-18)

After the anchor + GS/RB landed, two existing pages were flagged as candidate surgical upgrades. On closer inspection both were rejected:

- **`/writing` index → `.entries` pattern** — writing items are "title + metadata" (date + reading time), not the anchor's "title + description." Mapping would require either stripping the metadata (information loss) or inventing a metadata-instead-of-desc variant class. Two entries on the page do not justify the new class. Kept the existing H2-serif + mono-metadata treatment.
- **`/conflict-simulations-llc` credential strip → `.infra-meta` styling** — the existing strip uses `border-y` top/bottom hairlines around three unlabeled achievements. `.infra-meta` is unbordered flex and assumes key-value `.k` / `.v` pairs. The CSL achievements are not key-value (they are three unlabeled credentials), and the borders are more distinctive than `.infra-meta`'s pure flex. Forcing the swap would strip the borders AND require fake key-value wrappers. Kept the existing strip.

Both decisions follow the Addendum-3 rule: extend the vocabulary rather than replace existing patterns. Existing patterns are already coherent with the anchor via the shared `@theme` tokens (same type stack, same palette, same spacing). Forced retrofit would have been premature abstraction.

The general rule this sharpens: **a candidate page earns anchor-vocabulary retrofit only when (a) the semantic fit is exact and (b) the existing treatment is less distinctive or less reusable than the anchor primitive. If either fails, leave the page alone.**

## What this updates in design system v1

v1 stays the token foundation. v1's §4 component patterns list (A through G) is **superseded** by the anchor-vocabulary table above. v1's "NOT decisions" list (no animated hero, no card grid, no cursor trails, no custom paid display typeface) stays in force.

## Cross-reference

- Session log: [`../sessions/2026-04-18-session-05.md`](../sessions/2026-04-18-session-05.md)
- Anchor artifact: [`../../docs/phase-22-anchor/landing.html`](../../docs/phase-22-anchor/landing.html)
- Ancestor — design system v1: [`2026-04-15-design-system-v1.md`](2026-04-15-design-system-v1.md)
- Discipline source: `../../../GeneralStaff/FUTURE-DIRECTIONS-2026-04-15.md` Addendum-3
