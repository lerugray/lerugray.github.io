# GeneralStaff — public positioning

_Source-of-truth for site copy. Pulled from the public `GeneralStaff/README.md` and `GeneralStaff/LAUNCH-PLAN.md`. **Do not extrapolate from `GeneralStaff/docs/internal/` or any RULE-RELAXATION log not yet published.**_

## Tagline

> "Open-source autonomous engineering for solo founders."

## Sub-tagline

> "Your code. Your keys. Your control."

## One-liner

A meta-dispatcher that runs Claude Code agents on your local projects with a verification gate that cannot be prompted around, mandatory hands-off lists, and a full audit log of every prompt, response, and diff.

## Problem it solves

Autonomous coding agents fail in one predictable way: they are industrious without judgment. Closed SaaS platforms and naive `claude -p` loops let agents confidently mark tasks as done when tests fail, diffs are empty, or scope was hallucinated. The verification gate is a Boolean check in code, not a prompt — prompts can be ignored, Boolean gates cannot.

## Positioning quotes (verbatim from the public README)

- "Open-source alternative to Polsia — autonomous engineering with the anti-slop architecture Polsia doesn't have."
- "Polsia assumes you want a SaaS. GeneralStaff doesn't care what you're building. Bring your own imagination; the tool runs the execution."
- "The architecture is the philosophy."

**Do NOT use** (per `LAUNCH-PLAN.md`): "We open-sourced Polsia" (legal/accuracy risk) or "Polsia killer" (VC-posture tone).

## Ray's own framing (from 2026-04-18 conversation)

> "It's basically my scheme to open-source and democratize Polsia all while getting my own projects done sanely."

The word "sanely" is the Ray-voice hook — keep it in site copy.

## Architectural pieces (public)

1. Verification gate (Hard Rule #6) — tests pass + diff non-empty + reviewer confirms scope match. Boolean, not prompt-based.
2. Hands-off lists (Hard Rule #5) — per-project glob patterns the bot must not touch. Empty list = no registration.
3. Worktree isolation — bot works in `.bot-worktree` on a `bot/work` branch.
4. BYOK billing (Hard Rule #8) — user pays Anthropic/OpenRouter/etc. directly, no platform credits.
5. Open audit log (Hard Rule #9) — every prompt, response, tool call, and diff in `state/<project>/PROGRESS.jsonl`.

## Hard Rules (10, public)

All enforced in code or by convention. The full list lives in the public README; site pages may reproduce verbatim.

## Status (as of 2026-04-18)

**Phases 1–4 shipped.** 1,000+ passing tests. 15+ CLI commands. Three managed projects cycling (GeneralStaff self-dogfood + gamr + raybrain). Private repo, preparing for public launch.

- Phase 1 (closed 2026-04-17) — sequential MVP, verification gate, reviewer, open audit log
- Phase 2 (closed 2026-04-17) — multi-provider LLM routing (Ollama + OpenRouter + Claude), digest narrative, provider registry
- Phase 3 (closed 2026-04-18) — dispatcher generality across non-dogfood projects; five generality gaps surfaced and shipped same-day
- Phase 4 (closed 2026-04-18) — parallel worktrees, round-based concurrency, per-provider reviewer semaphore, efficiency observability. Default `max_parallel_slots: 1` preserves Phase 1–3 behaviour
- Phase 5 (in progress) — local desktop UI shell (Tauri)
- Phase 5.5+ — Kriegspiel / command-room UI theme
- Phase 7 — public launch

## License

**MIT.**

## Links

- **Repo (currently private, public at launch):** `github.com/lerugray/generalstaff`
- **Reach me:** lerugray@gmail.com

## Target audience

Solo founders running autonomous coding agents against their own projects. Developers who have been burned by closed SaaS bot platforms, or who've written their own nightly-script loop and want a hardened, inspectable version.

## DO NOT publish

- Anything from `GeneralStaff/docs/internal/`
- Private business metrics (revenue, user counts, cost data)
- Specific dogfood project internal details beyond what's already in the public README
- Any `RULE-RELAXATION-*.md` contents not yet committed to the public repo
- Phase-complete narrative specifics beyond the public README summaries

## Cross-references

- `../../src/pages/generalstaff.astro` — the live page that pulls from this vault file
- Sibling infrastructure: [`raybrain.md`](raybrain.md)
- Framework anchor: [`../hammerstein-essay-draft.md`](../hammerstein-essay-draft.md)
