# Fable direction memo — personal-site (2026-06-12, final-night blitz)

State read, verified against the repo tonight: Astro/TS static site on `main`, clean tree, fully pushed, deployed to GitHub Pages via `deploy.yml`. The Weiss-voiced essay "Judgment Does Not Transfer" (the nano obituary) published and went live tonight (93b2e88), featured on the homepage. Writing section carries 9+ essays at roughly two a month. Project pages: Veridian Contraption rebuilt with hosted web demo (05-16), ZERO PAGE landing live (05-27), Kreuzfeuer woodcut landing sitting at `public/kreuzfeuer/` with 5 `[TBD]` placeholders. tasks.json: 0 pending, 3 done, 3 deferred (psite-003 lint cadence, psite-004 Hammerstein drafts, psite-006 VC card), 1 cancelled.

## The calls

1. **LOCK: this site is the portfolio front door for the employment pivot.** The job search relaunched 2026-06-10 and the homepage is what a hiring contact sees first. Successor sessions weigh projects-section freshness equal to essay publishing — a portfolio that reads as a blog undersells the shipped products.

2. **LOCK: close psite-006 as already shipped.** VC is linked from the homepage (`index.astro:384`) and its project page was rebuilt with a web demo on 2026-05-16. The deferred task is stale; do not re-execute it. Update the GS-side tasks.json status next time that file is open.

3. **LOCK: the Kreuzfeuer page is deployed, not staged.** The commit (964390b) is on `origin/main`, `deploy.yml` builds from main, and `public/` ships verbatim — `/kreuzfeuer/` serves right now with 5 TBDs and `#` CTAs to anyone holding the URL. It is dark only because nothing links to it. Correct move: leave it dark, fill the 5 TBDs the session that price/itch URL exist, then add the nav/projects link. Do not link it before the values land. [RAY] on pulling the page entirely instead — my lean: leave it; unlinked and out of the sitemap, the exposure is negligible and the page is one value-fill from useful.

4. **[RAY] psite-004 — Hammerstein drafts, publish or shelve.** My lean: publish, as the "Two Hammersteins" comparative (CLI vs 7B). Tonight's essay set up exactly that distinction — judgment lives in the framework-trained 7B, not in surface pattern-matching — and the comparative is its natural sibling. Form and timing are Ray's voice call; the drafts sit in gitignored `drafts/`, so a successor must check there, not git.

5. **LOCK: psite-003 stays closed as "no CI lint gate."** The deploy workflow already builds the site; a type error that breaks the build fails the deploy, which is the only gate a personal static site needs. Adding a lint cadence here is automation theater. Run `npm run check` opportunistically when touching code, nothing more.

6. **LOCK: next non-essay session is projects-section freshness, not writing infrastructure.** The recon risk is real — six essays since mid-May against two project-page updates. Kreuzfeuer fill (call 3) is the queued item; new product pages follow product launches, never precede them. Which projects deserve homepage real estate is [RAY] — my lean: keep the current curation, add only on ship.

## Risks to respect

- `/kreuzfeuer/` is publicly reachable with placeholder copy. Low exposure, but real; resolves at value-fill time. Don't compound it by linking early.
- Deferred tasks are invisible to pending-only sweeps. A successor scanning `status: "pending"` sees an empty queue and may call this project done. Check deferred explicitly (psite-004 is the only live one after call 2 and 5 close the others).
- `docs/conventions.md` names `vault/` as the copy source of truth for business pages. Editing `src/content/` business copy directly without reconciling the vault is silent drift — the conventions doc says stop and reconcile, so do.
- The Weiss essay is a published, model-authored, Ray-edited artifact with a disclosure line. Do not retro-edit its voice. It is a Fable-era document now; fixes are limited to factual errors Ray flags.

## Fable-era note

The register is the asset. `docs/content-strategy.md` holds the law: structural truth over affinity flattery, no resume-speak, and the self-test — if a paragraph could live on any SaaS marketing page without changing the product name, it is wrong. Every public prose piece goes through stop-slop before Ray sees a v1; that pipeline is documented and non-negotiable. No em-dash cascades, no tricolon intros.

Two conventions tonight's work crystallized, and the successor must preserve both. First, the site publishes honest negative results with real numbers — the nano obituary names the 48% teacher self-agreement, the 79.1% ceiling, the few-dollar cost. That candor IS the positioning; sanding it into success-story framing would destroy the thing that differentiates this portfolio. Second, model-voiced essays are allowed when the disclosure is explicit ("Ray operates the lab and edited this piece") — the lab's working relationship with its models is part of the public story, not something to launder into first-person-Ray. Build choices stay boring on purpose: Astro static-first, scoped CSS, no Tailwind, system fonts, no client JS unless interactivity genuinely needs it. The site's restraint is the same claim the essays make.
