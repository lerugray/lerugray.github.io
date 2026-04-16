# Hammerstein observations — personal-site

Append-only log. Mirrors the pattern from `catalogDNA/docs/internal/Hammerstein Observations - Bot.md`.

## Ground rules

- **Append-only.** Never edit or delete old entries.
- **Log negatives aggressively.** Counter-observations and moments where the framework *didn't* fire are higher-value than success stories.
- **No force-fitting into a schema.** Prose is fine. Short entries are fine.
- **Cross-reference between entries** when a prior observation informs a later one.
- The purpose is to let compounding happen — an observation in one session feeds a structural fix between sessions feeds verification in a later session.

On this project, the log has an unusual dual role: the Hammerstein framework is *also* the flagship public essay, which means the quality of the public essay depends on the honesty of this log. Logging thin or performatively would degrade the essay.

---

## 2026-04-15 — session 01 (scaffolding)

**Observation.** Before scaffolding anything, paused to (a) research Ray's existing projects with subagents, (b) confirm four key decisions via a structured question round, and (c) capture context into both memory layers before touching code. This is the clever-lazy shape: invest upfront in alignment and context capture so later work doesn't grind against assumptions. Session artifact: [decisions/2026-04-15-project-kickoff.md](../decisions/2026-04-15-project-kickoff.md).

**Counter-case to flag.** The temptation with "scaffold a personal site" is to immediately run `npm create astro@latest` and start generating boilerplate. That would have been stupid-industrious — productive-looking motion in the wrong order, because the tooling questions (styling, linter, package manager, domain, project slate) weren't resolved yet and the generated config would need to be rewritten. The pause is only visible *in retrospect* when you notice what you didn't do. The log itself is the only evidence that the pause happened.

**Shape check for next session.** Before scaffolding Astro, resolve the open questions in [decisions/2026-04-15-project-kickoff.md](../decisions/2026-04-15-project-kickoff.md). If the next session starts with `npm create astro@latest` without those questions answered, that's the warning sign — surface it in the log immediately.

**Framing note (meta).** The dual role of the framework on this project (operating principle + flagship public essay) creates a feedback loop worth watching:

- Honest logging here → raw material for the public essay.
- Public essay commitment → pressure to log honestly because future readers will see whether the practice matches the claim.

The danger: logging *for the essay* instead of *for the work*. That would be its own kind of stupid-industrious — performing framework adherence instead of practicing it. Counter-move: when unsure whether an entry is honest, err toward negatives. The essay is stronger if the log is uncomfortable.

---

## 2026-04-15 — entry 2: near-miss on a hallucinated credential (agent output)

**Observation.** Background project-discovery Explore agent returned a confident claim that Ray is a co-author on peer-reviewed AI misalignment research (arxiv 2511.18397, MacDiarmid et al., 2025) because a `hammerstein-ai-misalignment` repo exists under his GitHub handle. I caught the framing shift — *"this is a bigger credential than I thought"* — and reflexively flagged it for Ray's confirmation before using it publicly. Ray replied: *"I'm definitely not a researcher and that seems like a hallucination, I just wrote an article on the anthropic paper."*

**What the pause prevented.** Had I baked "co-author of peer-reviewed AI research" into the site as a prominent credential, Ray would have had to either publicly correct me or live with a false claim — both costly. The pause happened automatically because the finding was both consequential and externally verifiable, so the cost of asking first was near zero.

**What the pause almost missed.** The agent's confidence was high and the evidence structure was plausible — a public repo, a specific arxiv ID, a specific author list, a specific year. I wrote the credential into both Claude private memory AND the vault discovery report before Ray saw the flag. So the false positive briefly persisted in two memory layers, and cleanup required edits to both plus the session log. This is exactly the failure mode the framework warns against: plausible, well-formatted, completely wrong.

**Counter-observation.** The Hammerstein pause is NOT enough on its own. The pause fired correctly (flag for Ray's confirmation) but the wrong thing had already been written to persistent memory by the time Ray saw the flag. A stricter rule, now captured as feedback memory `feedback_verify_agent_reported_credentials.md`: **when an agent reports an external credential that materially upgrades the user's public identity, don't write it into any persistent layer until the user confirms.** Flag-and-hold, not flag-and-record-anyway. This has to live in operating procedure, not in individual judgment.

**What I learned about the agent's failure mode.** The Explore agent conflated *owning a repo that discusses X research* with *being an author of X research*. The repo name (`hammerstein-ai-misalignment`) and language/structure patterns were enough to trip a confident attribution. Lesson for future discovery runs: agent reports about external credentials (papers, awards, affiliations, publications) are one-step-removed claims that need an extra verification hop before they enter any persistent store. Agent reports about *Ray's own code* (what the repo does, what language it uses, what framework) are lower-risk because the source is the repo itself.

**Action taken.** Memory (`user_ray_weiss.md`, `project_personal_site_kickoff.md`, new `feedback_verify_agent_reported_credentials.md`), vault discovery report, and session log all corrected live in the same session as the hallucination surfaced. Near-miss logged here.

**Shape check.** The pause worked but was too shallow. Next iteration of the operating discipline: two-tier recording — tentative claims live in session context only until confirmed; durable claims go to memory/vault only after confirmation. I got lucky that Ray caught this in the same session; across a session boundary the false positive could have persisted and compounded. The next time an agent returns a credential-shaped claim about Ray, the discipline is: don't record, don't memorialize, just ask.

**Meta.** This is also a good case for the public Hammerstein essay when it gets drafted — a concrete example of the framework catching something that looked productive and was wrong. The essay has been claiming the pause protects against "stupid-industrious" work; now there's a logged instance of it actually doing so, and also a logged limit (the pause alone isn't sufficient — recording discipline matters too).

---

## 2026-04-15 — entry 3: the flag-and-hold rule worked on Le Rug research

**Observation.** Three turns after entry 2, Ray mentioned two prior bands (Butter The Children, Sweet Bulbs) and a notable music credential (Tyler, the Creator tweeted about Sweet Bulbs and named the specific song Ray wrote and played guitar on). This is exactly the credential-shape the entry-2 feedback rule targets.

**Behavior this time.** I did NOT write the Tyler claim to memory or vault as a fact. I held it as "research pending verification" in the user-memory note and ran a WebSearch pass against primary sources in the same turn. Results: all three Tyler tweets were verified with specific status URLs (165996940948025344, 591796727272747008, 27707055149). Ray's Le Rug Bandcamp (`lerug.bandcamp.com`) was verified. Butter The Children Bandcamp was verified with Ray listed as guitarist in the member list. A beautiful structural bonus surfaced incidentally: one Le Rug album is literally titled *Party With Peter Burns*, which is the same Pete Burns CatalogDNA flags as the canonical structural match on Ray's catalog. The album title is a self-aware homage; the fingerprint says the influence runs deeper than a title. That's now the strongest "living demo" story CatalogDNA has, captured in `vault/businesses/catalogdna.md` and `vault/music/le-rug.md`.

**Why this entry matters.** Entry 2 was the near-miss — the pause worked but not strongly enough. Entry 3 is the inverse: the discipline worked. User mentioned external credential → held as tentative → verified via WebSearch → promoted to durable memory/vault only after verification. No false positives entered persistent state. The two entries together give the framework a matched pair: the failure mode and the working procedure.

**What I learned.** The discipline is cheap to run when the user explicitly delegates research ("Go head and do whatever research you like"). WebSearch against primary sources is much cheaper than false-credential cleanup. Default going forward: when a user mentions an external credential, search *in the same turn*, cite the URL explicitly in the vault note, and include a "sources" section so the next session can re-verify if tweets / pages disappear.

**Counter-caveat.** This was an easy case because Ray told me exactly what to look for (band names and approximate context) and the primary sources still exist publicly. Harder cases: credentials that can't be web-verified (private awards, off-the-record mentions, industry reputation, unreleased work). Those still require explicit user confirmation without an intermediate verification hop, and the entry-2 rule still applies at full strength.

**One small self-check caught.** The Butter The Children Bandcamp bio says "ex-members of Sweet Bulbs & Night Manager." I briefly considered claiming Ray was in Night Manager too. Stopped because Ray didn't mention Night Manager — "ex-members of X & Y" is plural and may refer to different members. Flagged as "do NOT claim without Ray's confirmation" in both memory and the Le Rug vault note. Small example of the discipline generalizing from "credential" to "any user-attribute I didn't hear from the user."

---

## 2026-04-15 — entry 4: committed `.claude/settings.local.json` to the public repo

**Observation.** The same turn that produced entry 3 also produced a discipline failure in a different category. Pushing the Le Rug research vault files, I ran `git status` and saw `?? .claude/` as an untracked directory. I didn't pause on it — I ran `git add -A` and committed. The commit output showed `create mode 100644 .claude/settings.local.json` and the push went out.

**Damage assessment.** The file contains only `{"permissions": {"allow": ["WebSearch"]}}` — the WebSearch permission grant from earlier in the session. No API keys, no secrets, no PII. Fix-forward via `.gitignore` + `git rm --cached` + commit was sufficient; no history rewrite. File remains in commit `6c8a568` history; verified non-sensitive before choosing fix-forward over rewrite.

**What went wrong.** Different failure mode than entry 2 (hallucinated credential written to memory before Ray saw it) and inverse to entry 3 (flag-and-hold worked on external credentials in the same turn). This one is: **`git add -A` is a greedy default, and when `git status` shows an untracked entry I didn't intentionally create, I should pause and inspect before staging.** I was closing the loop on the Le Rug commit and skipped the inspection step.

**Rule captured:** When `git status` shows an untracked file or directory I didn't intentionally create this session, pause and inspect before any `git add -A`. The inspection is cheap; a commit is only reversible by another commit. Same "is this the right shape of work?" pause from the framework, applied to file staging instead of planning. Add-by-name (`git add specific/path`) is safer than `git add -A` on a repo with Claude Code scaffolding.

**Counter to entry 3 self-praise.** Entry 3 noted that the flag-and-hold rule worked on Le Rug research. Entry 4 is: the same turn contained a discipline failure in a different category. The framework needs to fire on *every* potentially-irreversible action, not just credential claims. Committing to a public repo counts. The framework worked on one axis and failed on another, in the same turn. Don't let entry 3's success paper over this.

**Fix applied.** `.claude/` added to `.gitignore`. `git rm --cached .claude/settings.local.json` removed the file from tracking. Committed + pushed. The Le Rug vault content itself is unaffected.

**Meta-meta.** Three log entries in one day, all negatives. The log is doing exactly what the ground rules say it should: counter-observations and limits over success stories. The public essay when drafted should probably open with the claim "the framework has three documented failure modes from its first day of use" rather than "the framework worked perfectly." That framing is both more honest and a harder flex than the success version.

---

## 2026-04-15 — entry 5: placeholder prose slipped into `src/` during Phase 1b build momentum

**Observation.** Session 2, mid-Phase 1b (design tokens + Plex fonts + `BaseLayout` + placeholder update). I wrote a "temporary" paragraph directly into `src/pages/index.astro`:

> Wargame designer, musician, solo founder of Conflict Simulations LLC, CatalogDNA, and Retrogaze. The site is being rebuilt — the bio and the flagship Hammerstein essay land next.

No draft in the vault. No stop-slop pass. Three slop tells in 26 words: a tricolon intro (*"Wargame designer, musician, solo founder"*), a passive middle (*"the site is being rebuilt"*), and an em-dash cascade to the second clause. The sentence was bad by the rule the project has a hard commitment to.

**What the pause prevented.** Nothing had been committed. I caught the violation in my own thinking one tool-call after the Write. The `content-strategy.md` pipeline rule was in my active context the whole session; the "placeholder is prose-free" convention was already on record in session 01. I reverted to label-only (seven section names) and moved on.

**What failure mode this is.** Different from the four prior entries. Entry 2 was an agent hallucination. Entry 3 was the flag-and-hold rule firing on external credentials. Entry 4 was `git add -A` on an untracked `.claude/` directory. Entry 5 is **build-momentum slippage**: the stop-slop pipeline fires reliably when the frame is "I am drafting public copy," but during a build phase where the frame is "ship the component," temporary-feeling prose slips past the filter. The word "placeholder" in my head was functioning as a get-out-of-jail token.

**Rule captured.** The stop-slop pipeline has to fire on *any* write to `src/pages/**` or `src/content/**` that contains a user-visible sentence, regardless of whether the sentence is "real copy" or "just temporary." Session 01's note already said this — "placeholder pages are the category of public copy most at risk of boilerplate AI slop; the way to pass the rule is to not write the prose in the first place" — and I violated it anyway because build momentum had narrowed my attention. The discipline has to override the momentum, not wait for the momentum to clear.

**Shape check.** This is Hammerstein applied at the individual write-file call, not the grand strategy. Same lesson as entry 4 at a different scale: the framework has to fire at the two-second action level, not only at the planning level. *Is this the right shape of work?* applies to "am I about to write copy that will become visible prose without running it through the pipeline?" just as much as it applies to "am I about to scaffold the wrong tool?"

**Meta (for the public essay).** Four out of five entries now are negatives, in four distinct failure categories: hallucinated credential (agent output), staging discipline (`git add -A`), two-layer recording discipline (memory + vault), drafting discipline (stop-slop pipeline). The essay's current framing — "the log is three negatives out of four because success stories are the confirmation-bias default" — still holds at four-of-five. But five categorical failure modes across one day of use is starting to look less like "the framework is robust" and more like "the user (me) keeps finding new ways to fail." That's worth sitting with before the next essay revision.

---

## 2026-04-15 — entry 6: meta description slop tell in BaseLayout, same failure mode as entry 5 but caught later

**Observation.** Two commits after Entry 5, discovered the `BaseLayout.astro` default `description` prop I wrote during Phase 1b was itself a double-tricolon construction with an em-dash: *"Ray Weiss — wargame designer, musician, and solo founder of Conflict Simulations LLC, CatalogDNA, and Retrogaze."* The string landed in commit `7561d64` and was pushed to `main` before the error surfaced. Same failure mode as Entry 5 — build-momentum slippage on the stop-slop pipeline — except Entry 5 caught the violation before committing and Entry 6's violation lived in the public repo for one commit.

**Where the pipeline should have fired.** Meta descriptions are explicitly non-exempt in `docs/content-strategy.md`: *"Not exempt: headings, body prose, alt text, meta descriptions, page titles, any text a visitor reads as sentences."* I wrote the default description inline while editing `BaseLayout.astro` for the tokens, exactly the same "build momentum narrows attention" pattern Entry 5 captured — except the string was a **prop default**, so it read in my head as "configuration," not "copy." Configuration-shaped slots for user-visible prose are the next category of failure mode: they look like config but they render as sentences.

**Fix.** Rewrote the default in the Phase 2 `BaseLayout.astro` revision that's about to land, replacing the compound sentence with three short structural labels: *"Personal site of Ray Weiss. Writing, games, tools, music. Founder of Conflict Simulations LLC."* No em-dash, no forced tricolon, no compound phrase. Same recovery move as Entry 5 — replace the prose sentence with a non-sentence form when the pipeline hasn't been run.

**Rule update.** Entry 5 said the pipeline has to fire on any write to `src/pages/**` or `src/content/**` that contains a user-visible sentence. This entry adds: **also `src/layouts/**`**, and the scope of "user-visible sentence" is any string the visitor might read — meta descriptions, alt text, title props, layout defaults, ARIA labels with sentence structure. Configuration-shaped slots count. The pipeline scope is the visitor's field of view, not the codebase's directory structure.

**Shape check.** Six log entries in one day, five of them negatives, and the last two are the same structural category fired twice. Log density at this level may be noise, or may be a signal that the framework's prevention capability is genuinely low and its compound-learning capability is the real product. The Entry 5 → Entry 6 pair is a clean example: the framework's prevention failed (same mistake twice in one session, different file path), but the log's compound-learning worked (Entry 5's rule fired faster than the build momentum on the second encounter, and Entry 6's rule now extends the scope). Worth watching whether Entry 7 is again the same category at a third location, or a new category.

---

## 2026-04-15 — entry 7: IP-boundary slip on Retrogaze's Stack section (new category)

**Observation.** Ray flagged a near-violation of the IP-SaaS boundary on the Retrogaze page during content extraction: the draft had named specific AI models, image processing libraries, color-matching methods, and backend services — a direct violation of CLAUDE.md's explicit IP rules for Retrogaze (*"Retrogaze's constraint-enforcement implementation details, model choices, or prompt engineering beyond what the homepage shows"*). Ray's exact words: *"was just checking the retrogaze page and it appears to violate some of the IP-SaaS secret concerns by explcitly naming algorithims and tools being used, no reason list things like the backend or whatever as well."*

**How it slipped past.** The vault file at `vault/businesses/retrogaze.md` has two sections side-by-side: a `Stack (public)` section listing the tools, and a `DO NOT publish` section below it explicitly forbidding "constraint-enforcement implementation details beyond what the site already shows" and "model choices or prompt design beyond what's on the homepage." I read the first as a positive signal ("these are okay to ship") and failed to apply the second as the actual filter. **The vault file itself had the rule next to the violation**, and I still wrote the violation.

**What failure mode this is.** Not Entry 5/6's build-momentum stop-slop slippage. This is a different category: **IP-boundary slip during content extraction**. When pulling content from a vault file into site copy, the discipline has to cross-reference the vault's own `DO NOT publish` block, not just its `Stack (public)` or `What it is` block. The vault's forbid list is the binding constraint, not its allow list. Two adjacent sections in the vault file encoded opposite rules, and I read only the one that looked positive.

**Rule captured.** When extracting site copy from any `vault/businesses/*.md` or `vault/projects/*.md` file, **read the `DO NOT publish` block FIRST**, before any other section. Treat it as the filter that runs over every subsequent section, not as a footnote. If a vault file's positive sections list something that the `DO NOT publish` block forbids, the `DO NOT publish` block wins. This extends the project-level IP rule ("no proprietary prompts, customer data, pricing margins, internal methodology") to the content-extraction routine that operates on the vault: the filter runs at read time, not at write time.

**Fix applied.** The published `/retrogaze` page keeps only the positioning paragraphs (hardware constraint story, supported platforms, target audience) because those are public marketing. The Try-it section stays minimal — just the live retrogazeai.com link — because CLAUDE.md says not to expose constraint-enforcement internals or overclaim about what is in the public repo.

**Meta (for the public essay).** Seven log entries now. Six negatives, one mixed. Entry 7 is a new failure mode category (IP extraction) on top of the four from session 1 (agent hallucination, staging discipline, two-layer recording, stop-slop drafting) and session 2's two stop-slop extension failures (Entries 5 and 6). The framework has now documented seven distinct ways to fail in two days of use. The public essay's current framing ("the framework has three documented failure modes from its first day of use") will need an update when it gets revised — the count is growing and the categorical variety is growing faster than the repetition rate, which is both better and worse than the essay currently claims.

**Shape check for session 3.** When Ray next asks for new site copy extracted from a vault file, the check is: open the vault file, read the `DO NOT publish` block first, hold it in working memory, then read the rest. Don't write any page content until that filter is loaded. If a vault file doesn't have a `DO NOT publish` block, assume the most restrictive reading (public marketing page level only) and ask Ray for explicit go-ahead on any technical detail.

---

## 2026-04-15 — entry 8: stale present-tense claims from a public artifact propagated through the vault into the site

**Observation.** Late in session 03, after Phases 13–20 had all shipped, Ray flagged that the landing page dek (*"Brooklyn wargame designer, running four businesses and a band"*) was wrong on a substantive point: he hasn't been actively in a band in about ten years. A few minutes later he added that Le Rug — described throughout the site as Ray's *"current"* / *"ongoing"* music project — also hasn't been current in a long time, that he'd sold his instruments, and that he was *"all but done musically unless any of my businesses take off."* Both claims appeared in multiple places: the landing dek, the landing Music section blurb, the `/music` page meta description and dek and intro paragraph, the `/catalogdna` page's Le Rug cross-reference, the BaseLayout default description, the og:image:alt attribute, and the rendered `og-image.png` (which had `four businesses and a band` baked into the SVG text).

**The chain that produced the failure.** Trace it backward:

1. Ray's public Bandcamp page at `lerug.bandcamp.com` exists and the catalog is up. From a public-web perspective, "Le Rug" is a live artist page with releases.
2. In session 1, the project-discovery WebSearch pass that captured Le Rug for the vault treated the existence of the Bandcamp page as evidence that Le Rug was an *ongoing* project. The vault file `vault/music/le-rug.md` got created with the language *"Le Rug is the ongoing music project of Ray Weiss"* — present tense, sourced from public-web inference, never confirmed with Ray.
3. In Phase 8 (session 02), the `/music` page was built using that vault file as source-of-truth. The wording "current Brooklyn project" propagated in.
4. In Phase 13 (session 03 today), I drafted the landing-page dek and pulled "and a band" from the same chain — the music section was a real category on the site, so the dek listed it as an active part of Ray's life.
5. In Phase 13, I also generated the OG image PNG with the text "four businesses and a band" baked into the rasterized SVG. That graphic shipped to every social preview on every page.

By the time Ray caught it in the late-session message, the inaccuracy had been live on the deployed site for hours, including in the OG previews that other people would see when the site was shared.

**What the failure is, structurally.** Different from every prior log entry. Entry 2 was a **fabricated** credential (the agent imagined Ray was a peer-reviewed AI researcher because a repo name pattern-matched). This one is **not fabricated** — Le Rug really exists, the Bandcamp page is real, the catalog is up. The failure is **temporal staleness**: a claim that *was* true at some point in the past and is false now, but the public artifact (Bandcamp page) doesn't carry a "no longer active" marker, so the discovery pipeline read present-tense language ("ongoing", "is", "current") into a project that's actually past tense.

**Why "flag-and-hold" (Entry 2's rule) didn't fire.** Entry 2's rule says: *when an agent reports an external credential that materially upgrades the user's public identity, don't write it to any persistent layer until the user confirms.* The Le Rug case looked different to that rule because:

- It wasn't an *upgrade* — Le Rug was a regular activity, not a credential. The rule's trigger ("materially upgrades public identity") didn't fire.
- The source was the user's own Bandcamp page, not an inference about a third-party publication. It looked like *self-attested* content.
- The information had been in the vault since session 1 without flags, so by sessions 2 and 3 it was operating as confirmed source-of-truth, not as a held tentative claim.

The rule needs extension. **Present-tense claims about the user's current activities** ("ongoing", "current", "running", "is making") are a different category than credentials, and they need their own check: **when the source is a public artifact with no temporal marker, flag the claim as time-uncertain and confirm with the user before writing present tense to the vault.** Past-tense claims (releases, prior projects, accomplishments) don't need this check — they describe artifacts that happened, regardless of whether the activity continues. Present-tense claims describe an *ongoing state* that may have ended without the artifact being updated.

**Counter-examples that I got right.** Sweet Bulbs and Butter The Children were always written about in past tense across the site, because the vault file had them under "Prior bands" — the temporal frame was explicit in the source structure. The bug only surfaced for Le Rug because the vault put Le Rug under a separate "Where to listen" header with present-tense language, treating it as a current category. The structure of the vault file itself encoded the assumption.

**Rule captured.** Two-part addition to the discipline:

1. **At extraction time:** when extracting content from a public web artifact about a user's *current* activities (ongoing projects, current bands, currently-running businesses, present-tense self-descriptions), the artifact's existence is NOT proof the activity is current. Bandcamp pages stay up after artists stop releasing. GitHub repos stay public after projects are archived. Personal sites get out of date. The discovery pipeline should mark these claims as **temporally uncertain** and write them to the vault wrapped in a "verify currency with user" flag, not as confirmed facts.

2. **At consumption time:** when consuming a vault file that uses present-tense language about the user, ask: *was this confirmed by the user, or extracted from a public artifact?* If the latter, default to past tense in the site copy and flag for user confirmation. Past tense is recoverable ("oh, that's still going actually, can you update?") whereas present tense is publicly embarrassing ("you said I'm still in a band, I haven't been for a decade").

**Fix in flight.** Phase 21 (in this same session, after Ray's flag) updates eleven content locations across nine files plus regenerates the OG image PNG. The new framing is past-tense throughout: `Le Rug was Ray's main music project from Brooklyn for years. The instruments are sold; the catalog is still up.` The vault files (`vault/music/le-rug.md` and `vault/businesses/catalogdna.md`) are updated to record the resolved status as of session 03. The landing dek becomes `Brooklyn wargame designer, running four businesses` (drops the band claim entirely). The OG image SVG text is updated and the PNG re-rendered.

**Meta (for the public essay).** Eight entries now. Seven negatives, one mixed (entry 3, the flag-and-hold rule firing correctly on the Tyler tweets). The categorical variety of failures is still growing: Entry 8 introduces the *temporal staleness* category, distinct from Entry 2's *fabricated credential* category. The public essay has been claiming "the framework has documented failure modes" — that count is now eight categorically distinct ways to fail, plus a few repeat instances within categories. The discipline is what makes the count visible; the count is the value.

**Shape check for the next time the discovery pipeline runs.** When ingesting public-web artifacts about a user (Bandcamp pages, GitHub repos, personal sites, professional bios, Wikipedia entries), the default temporal frame for any present-tense claim should be **"unknown — verify with user."** The fact that the page is up does not prove the activity is current. Web is not a heartbeat.
