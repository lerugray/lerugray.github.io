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
