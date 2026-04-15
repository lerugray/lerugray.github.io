# 2026-04-15 — project discovery (public-safe summary)

Background Explore agent walked Ray's GitHub repos (via `gh repo list lerugray`) and the `.git` directories in `C:/Users/rweiss/Documents/Dev Work/` to build a candidate list for the personal-site project slate. File listing alone is misleading because most local folders are stale relative to their git history — Ray called this out explicitly.

**Important:** This vault is git-tracked and will become public when the site repo is pushed. This note lists only **public** repos, candidates, and derivatives. The full discovery report (including private-repo details and non-public work) stays in Claude private memory and in the session context — it does not live here.

## Tooling confirmed available on this machine (2026-04-15)

- `node` 24.14, `npm` 11.9 — functional.
- `gh` 2.89 — authenticated as `lerugray`.
- `pnpm` — not installed (chose npm for the scaffold).

## Public repos worth considering for the curated slate

Not a ranking. Not exhaustive. Ray and Claude to curate together in the next session.

### Research-adjacent, writing & tools

- **`hammerstein-article`** — Ray's own **article** discussing an Anthropic paper on Hammerstein-style AI misalignment. **Correction 2026-04-15:** the discovery Explore agent initially reported this as "peer-reviewed research, Ray is co-author of arxiv 2511.18397 / MacDiarmid et al. 2025." That was a hallucination — Ray confirmed same session that he is not a researcher and not a co-author. The article is his own writing/commentary on the topic. Could be featured as a writing piece alongside the wargame design book, not as a research credential.
- **`auftragstaktik`** — tactical OSINT command terminal (conflict tracking, frontlines, force deployments). 3 stars. Audience overlap with the wargaming community.
- **`bookfinder-general`** — research book finder / downloader / summarizer. 1 star. Solo-dev utility.

### Games (public, playable or playtestable)

- **`Buddies`** — AI companion collectible game; 70+ species, 10-game arcade, MUD, personality-drift system, async multiplayer. Active.
- **`sandkasten`** — open-source wargame simulator; NATO symbology, radar, fog-of-war, WeGo multiplayer. Strong fit with the wargame audience.
- **`ZERO-PAGE`** — 6502 assembly puzzle game plus a full 6502 sandbox. Retro-programming showcase.
- **`BAAL`** — ASCII roguelike (DCSS / D&D / Wizardry lineage).
- **`Adversary`** — NES-style JavaScript game.
- **`amfiog-playtest`** — playtest build of *A Mighty Fortress Is Our God*.

### Writing / publishing

- **`wargame-design-book`** — has its own public repo, separate from `passive-income-hub/`. Ready for KDP + GitHub Pages. Candidate for a dedicated site slot alongside Conflict Simulations LLC rather than a sub-section under it.
- **`le-rug-musical-dna`** — Ray's own 407-track catalog analyzed via CatalogDNA, published as a public artifact. Candidate for a "living demo" link from the CatalogDNA section — shows the tool applied to its creator's own work.

### Tools / sidequest

- **`chipforge`** — chiptune tracker DAW (C++, SNES-inspired UI, NES sound emulation). Public. Unique music tool; worth a 5-minute look together to decide whether it warrants a slot or is orphaned.
- **`routwizard`** — shell utility. Scope TBD on review.

## Activity snapshot (public repos only, as of 2026-04-15)

- **ACTIVE** (commits in last 30 days): `hammerstein-ai-misalignment`, `auftragstaktik`, `bookfinder-general`, `Buddies`, `devforge-website`.
- **RECENT** (30–180 days): `sandkasten`, `ZERO-PAGE`, `BAAL`, `Adversary`, `amfiog-playtest`.

The slate should probably lean on ACTIVE projects to avoid surfacing stale work.

## Curation prompts for the next session

- Does **Ray's Hammerstein-AI article** get featured as a writing piece alongside the flagship Hammerstein framework essay? It's Ray's own commentary on Anthropic's paper about the topic, not peer-reviewed research. (The "co-author" framing earlier in this file is a corrected hallucination — see the Research-adjacent section above.)
- Is **Buddies** a standalone portfolio slot, or does it belong in a games cluster?
- Does the **Wargame Design Book** earn a standalone slot, or live as a sub-section under Conflict Simulations LLC?
- Is **`le-rug-musical-dna`** its own project, a CatalogDNA demo link, or both?
- Is **Chipforge** under active maintenance by Ray (the agent flagged it as interesting but with no local folder — worth a quick look together).
- **Auftragstaktik** and **ZERO-PAGE** have audiences that overlap with the wargaming community — worth considering for signal density alongside Conflict Simulations.

## Discovery limitations & caveats

- Activity cutoffs use 2026-04-15 as the reference date.
- Private repos and their content are intentionally excluded from this file. Ray may still reference them verbally during curation.
- The agent noticed several uncommitted `.claude/` directories scattered across other projects — unrelated to personal-site but possibly a broader settings-hygiene pattern to address separately.
