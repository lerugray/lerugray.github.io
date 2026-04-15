# Content strategy

## Purpose of the site

Consolidate Ray Weiss's public-facing work (four businesses + a curated project slate) into a single home, and carry the **Hammerstein framework** as a flagship public essay. Not a resume. Not a conventional marketing site. A structural-truth presentation of a working practice.

## Voice

- **Honest-findings principle** (see `CLAUDE.md`). Structural truth over affinity flattery.
- **No resume-speak.** No "passionate about," no "results-driven," no "I love building," no stats-as-bragging.
- State what each thing IS, who it's for, and what structural claim it's making.
- **Mirror the tone of each business' existing public copy.** Don't invent a new marketing voice. If it wouldn't fit on the Retrogaze or Devforge homepage, it shouldn't fit here.

**Self-test for every paragraph:** if it could live on any SaaS marketing page without changing the product name, it's wrong. Rewrite until it couldn't.

## Drafting workflow

**Every public-facing piece of prose goes through the `stop-slop` skill before it ships.** Hard rule, Ray's request (2026-04-15). The stop-slop skill exists specifically to strip AI writing patterns ("leveraging," "robust," "at its core," tricolon intros, em-dash cascades, hedging filler). The signature of everything Ray ships is structural truth; AI-tell patterns would undermine it.

Pipeline:

1. **Draft in the vault.** Business copy in `../vault/businesses/<business>.md`; the Hammerstein essay in `../vault/hammerstein-essay-draft.md`; curated project cards in `../vault/projects/<project>.md`. Drafts live in the vault until they harden.
2. **Run `stop-slop` over the draft.** Consult `stop-slop:references:phrases`, `stop-slop:references:structures`, and `stop-slop:references:examples` for specific pattern classes as needed.
3. **Reconcile** the stop-slop edits back into the vault draft. Don't skip this step — the vault is the source of truth.
4. **Move the cleaned prose to `src/content/`** as the consumed site copy.

**Exempt:** code blocks, YAML frontmatter, pure link / tag lists, navigation labels.
**Not exempt:** headings, body prose, alt text, meta descriptions, page titles, any text a visitor reads as sentences.

## Scope

- **Four businesses** — each gets a top-level section:
  - Devforge
  - CatalogDNA
  - Retrogaze
  - Conflict Simulations LLC
- **Flagship essay:** Hammerstein framework.
- **Curated projects:** 3–6 hand-picked, to be selected with Ray from the 15+ folders in `../`.
- **About page:** short, structural, no filler.
- **Contact:** simple email link (`lerugray@gmail.com`). No contact form.

### Excluded by default

- Blog / feed
- Newsletter signup
- "Now" page
- "Uses" page
- Testimonials
- Stats counters ("X projects shipped" etc.)
- Timeline / resume section

Reconsider case-by-case only if Ray explicitly requests.

## Public / private boundary

See `CLAUDE.md` § "IP protection." Only use **public marketing-page-level** detail for each business. When in doubt, ask Ray. Never extrapolate from internal docs, prompt engineering, business metrics, or in-progress manuscript chapters.

## Per-business source-of-truth

For each business, `vault/businesses/<business>.md` holds the public positioning notes. Site copy pulls from those notes. If the site copy diverges from the vault, reconcile back to the vault — the vault wins.

## The Hammerstein essay

- **Load-bearing content**, not an afterthought. This is the thing that differentiates Ray's site from every other "I build stuff" portfolio.
- **Don't flatten into generic productivity advice.** The defiance of stupid-industrious work is the point.
- **Source material:** `../hammerstein-article/article_draft.md` and observation logs in `../catalogDNA/docs/internal/`.
- **Draft location:** `vault/hammerstein-essay-draft.md` (to be created). Drafts live in the vault until they harden, then move to `src/content/`.

## See also

- `../CLAUDE.md` — agent instructions, the Hammerstein framework, the advisor role.
- `conventions.md` — code and naming conventions.
- `../vault/businesses/` — per-business positioning source-of-truth.
