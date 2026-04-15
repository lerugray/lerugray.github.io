# 2026-04-15 — project kickoff

**Context:** First working session. Ray asked to stand up a personal website consolidating his four active businesses (Devforge, CatalogDNA, Retrogaze, Conflict Simulations LLC) plus a curated project slate plus a flagship Hammerstein essay. He explicitly asked to borrow CatalogDNA's conventions and incorporate the Hammerstein framework into how Claude works on the project.

## Decisions

### 1. Tech stack: Astro + TypeScript

Rationale: component islands + first-class markdown content collections + clean GitHub Pages deployment, without the machinery of Next.js. Plain HTML/CSS was considered but ruled out — multi-section portfolio with a long-form Hammerstein essay and four business sections will benefit from shared layout components and content collections. 11ty was considered; Astro wins on TypeScript ergonomics and the islands model. Next.js is overkill for a static portfolio.

### 2. Content scope: four businesses + 3–6 curated projects + Hammerstein essay

Rationale: **curation is the feature.** A full portfolio dump of the 15+ folders in `Dev Work/` would dilute the structural-truth signal. The four businesses are the anchors; the curated project slate reinforces the working practice; the Hammerstein essay is the differentiator.

Rejected alternatives:
- "Four businesses only" — too business-card-like, loses the founder-with-practice angle.
- "Skills-forward portfolio" — turns into a consultant/engineer site, wrong fit for Ray's creator-founder posture.
- "Full portfolio dump" — sprawl, noise.

### 3. Aesthetic direction: minimalist technical

Linear / Vercel / Radix school — clean typography, tight grids, utilitarian restraint. Ages well, doesn't date quickly.

Rejected alternatives:
- **Retro / terminal** — pushes too hard on one slice of Ray's work (Retrogaze, Devforge, wargaming). The meta-site doesn't need to wear one of the child products' clothes.
- **Editorial long-form** — wrong shape for a business index.
- **Brutalist / distinct** — high ceiling, easy to get wrong, and the last thing a portfolio needs is to look like someone's design exercise.

### 4. Hammerstein framework: public flagship essay + operating principle

The framework is **both**:
- The *how-we-work* operating principle on this project (codified in `CLAUDE.md`).
- A flagship piece of public content (a full essay hosted here, not just a link to the external article repo).

Rejected alternatives:
- "Internal only" — leaves the most differentiating thing Ray has invisible to visitors.
- "Subtle nod + link" — underweights it. This is the signature piece.
- "Public essay feature" was the explicit choice.

Commits Ray to publishing the essay here first (or at least concurrently with any other venue). Accepted trade-off.

### 5. Persistent memory: Obsidian-style vault at `personal-site/vault/`

Mirrors the CatalogDNA pattern (`docs/internal/` + append-only observation logs). Git-tracked so it syncs across machines and sessions. Two memory layers in use: Claude private memory (`.claude/projects/.../memory/`) for operational/user-profile state, and this vault for project-bound state Ray should be able to read directly in Obsidian.

### 6. IP boundary: public-marketing-page level only

For each of the four businesses, only use detail already present on the business's public marketing page, public repo README, or public storefront. Proprietary methodology (CatalogDNA `interpret` module, Devforge prompt engineering, Retrogaze constraint-enforcement internals, Conflict Simulations pricing/fulfillment, in-progress wargame book chapters) stays off the site. Per-business source-of-truth lives in `vault/businesses/<business>.md`.

## Trade-offs consciously accepted

- **Curation over breadth.** Excluding the other 15+ folders in `Dev Work/` is intentional. If a project doesn't advance the structural-truth positioning, it doesn't ship.
- **Minimalist technical over retro.** Leaves the retro-gaming aesthetic as Retrogaze's own territory. Conflict of identity otherwise.
- **Public Hammerstein essay** commits Ray to publishing the framework here as its primary home (or concurrent with any other venue).
- **Vault is git-tracked with the site.** That means session notes and decision records are public once the repo is public. Anything genuinely private goes in Claude memory, not the vault.

## Open questions (to resolve in the next session, before Astro scaffolding)

- **Styling:** plain CSS with Astro scoped styles vs Tailwind? _Default plan: plain CSS._
- **Linter / formatter:** Biome vs ESLint+Prettier? _Default plan: Biome (single tool, fast)._
- **Package manager:** pnpm vs npm vs yarn? _Default plan: pnpm._
- **Domain:** custom domain vs `lerugray.github.io`? Ray to decide.
- **Curated project slate:** which 3–6 of the 15+ `Dev Work/` folders make the cut? Needs a pass-through with Ray.
- **Repo name:** `personal-site`, `lerugray.github.io`, or custom? Depends on domain decision.
- **When to `git init`** — at the same time as Astro scaffolding, or earlier? Currently not initialized.

## References

- `../../CLAUDE.md`
- `../../docs/content-strategy.md`
- `../../docs/conventions.md`
- `../sessions/2026-04-15-session-01.md`
- `../hammerstein-log/observations.md`
