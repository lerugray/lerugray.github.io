# Boolean Gates, Not Prompts — vault draft v1

**Draft target:** `src/content/writing/boolean-gates.md`, to become the second `/writing` entry paired with the Hammerstein essay. Shape B (claims-first, philosophical) — Ray-confirmed 2026-04-18 session 5.

**Slug candidate:** `boolean-gates` (terse) or `architectural-refusal` (thematic). Ray picks.

**Voice calibrated against:** `src/content/writing/hammerstein.md`. Short declarative sentences. First-person practice note. Admits what didn't work. No dramatic hook. No SaaS language. Stop-slop sweep pending.

**Length target:** ~1600 words, ~7–8 min reading. Hammerstein essay is ~2200 / ~10 min, so this sits a touch shorter, matching its tighter thesis-first scope.

---

## Title (TBD — three candidates)

1. **Boolean Gates, Not Prompts** — terse, captures the central claim, mirrors Hammerstein's "In Daily Use" terseness.
2. **Make the Failure Mode Impossible** — imperative, thesis-forward, slightly more dramatic.
3. **Architectural Refusal, In Practice** — parallels Hammerstein's "X, In Y" rhythm exactly.

My vote: (1). Ray decides.

---

## Frontmatter

```yaml
---
title: "Boolean Gates, Not Prompts"
publishDate: 2026-04-18
readingTime: "~8 min"
description: "Two tools I built to prevent stupid-industrious failure when the industrious agent is a language model. One verifies execution, the other refuses memory. Both answer the same question at the architecture level."
---
```

---

## Draft body

The Hammerstein essay on this site argues that a ninety-year-old officer typology still names something real about organizations under pressure. The failure mode it warns against is not incompetence but confident effort pointed in the wrong direction. Stupid-plus-industrious. Working relentlessly toward the wrong objective with total commitment.

This piece is about what happens when the industrious agent is a language model, and what you do about it.

Large models trained to be helpful will do the wrong thing confidently, all day, without complaint. That is not a bug in their training. It is the default behavior of a system that has been optimized to produce output. The failure mode lives below the level of intention. You can tell a model to be careful and it will agree with you, describe exactly what care looks like, and then proceed to not be careful because careful was never a constraint, only a description.

I have been building two tools that try to answer this structurally. Not in the prompts. In the code.

## The execution failure — GeneralStaff

The first tool is [GeneralStaff](/generalstaff), an open-source autonomous engineering harness for solo founders. It runs Claude Code agents on local projects, cycle after cycle, while I am writing or sleeping or doing something else. The use case sounds straightforward — let a bot grind through a backlog while I work on design — and the naive implementation is about fifty lines of shell script.

The naive implementation fails in a specific way. The top one-star review complaint on Polsia, the closed-source equivalent, is false task completions. The bot confidently marks a ticket done when the diff is empty, or tests are red, or it has silently rewritten scope. Every solo founder I know who has tried a nightly `claude -p` loop has watched this happen at least once. It compounds quietly. Nobody checks the bot's work against reality, because the whole point of the bot is that you are not checking.

The instinct is to fix this with better prompts. "Do not mark a task complete unless tests pass." "Verify the diff is non-empty before claiming success." "Re-read the scope and confirm the changes match." These instructions are coherent, specific, well-intentioned, and ignorable. A prompt is advice. A model follows it about as reliably as a tired human follows a sticky note on a monitor.

GeneralStaff's Hard Rule 6 is not a prompt. It is a Boolean check in the dispatcher. A cycle is not marked done until three conditions all hold:

1. Tests pass.
2. The diff is non-empty.
3. A separate reviewer agent confirms the scope matches the ticket.

If any of the three fails, the cycle is flagged and the bot loops with the failure in context. The rule fires on every cycle. It is code, not a paragraph. The model cannot talk its way around it any more than a function can talk its way around an `if` statement.

The failure mode is structurally excluded, not discouraged. That is the move.

## The memory failure — RayBrain

The second tool is [RayBrain](/raybrain), a retrieval-only second brain built over a private personal corpus. The intended use is simple: I ask a question, RayBrain returns the specific passages from my own past writing where I addressed it. With citations. Without embellishment.

The stupid-industrious failure here is different in shape but identical in mechanism. Second-brain tools built on top of language models love to synthesize. You ask "what are my three takes on X" and the tool returns a confident paragraph that summarizes, compresses, and smooths. It invents a fourth take you do not hold because the summary reads better with four. It drops a qualifier that was load-bearing. It paraphrases your voice into the voice of the model. None of this is a hallucination in the narrow sense. Every sentence is plausible. Some of them are even close to what you wrote. But they are not what you wrote, and the moment you start reading them as if they were, you have stopped reading your own thinking and started reading a probabilistic reconstruction of it.

The instinct, again, is to fix this in the prompt. "Do not synthesize." "Only quote verbatim." "Always include citations." The instincts get the same treatment from the model that GeneralStaff's instructions got. Agreement, description, compliance-shaped output, and drift the moment the task feels stylistically awkward.

RayBrain's answer is that the query path cannot import a generative language model client. Not by rule. By code. A module-boundary check enforced at type-check time. The file that implements query retrieval is in a namespace the build system physically prevents from reaching the generation namespace. If someone asks RayBrain to synthesize, it has no path to the capability. The only possible response is to return the retrieved passages with the explicit note that synthesis is out of scope.

Refusal is the feature. It is the only way the tool does what I want the tool to do.

## The common move

Both tools apply the same principle. The failure mode is load-bearing enough that no amount of prompting will reliably prevent it. So the architecture makes it structurally impossible instead.

Prompts are advisory. A model told not to do X may still do X — especially when X is the stylistically expected default. Code enforcement is categorical. A function that cannot import a generative client cannot generate, the same way a cycle that fails tests cannot be marked done. The difference between the two regimes is the difference between hope and architecture.

This is the clever-lazy move in the Hammerstein sense. Find the one structural change that removes the failure mode from the space of possible outputs, and spend nothing further on trying to prevent it in every individual case. The worst response to agent misbehavior is to write a longer prompt. The prompt will be longer. The agent will read it the same way it read the short one.

There is a trade-off. Structural refusal is stiff. A model that cannot synthesize cannot synthesize even when synthesis would have been useful. A cycle that fails verification cannot proceed even when the human operator would have waved it through. Boolean gates are blunt. That is the point. A Boolean gate that bends when the bot is persuasive is not a gate.

In both tools, the stiffness is the feature. I want the bot to fail loudly when it would otherwise fail silently. I want the query tool to refuse to synthesize so that I read my own words. I want the cycle to halt so that I know the cycle halted.

## What this updates in the framework

The Hammerstein essay is about operating principles at the human-decision scale. Do I pause before running this command? Do I verify the premise before acting on it? Is this the right shape of work? These are the daily questions.

The architecture question is one layer below. For the load-bearing failure modes — the ones that would compound into real damage if they fired during my next break — the right place to answer them is not in my head. It is in the code the bot runs through every cycle, and in the types the build system enforces on every compile.

You can read this as engineering pragmatism. You can also read it as applied distrust of language models, which is what it is. I use them every day. I built a second brain and a development harness on top of them. I also do not trust them to police their own behavior when the behavior is exactly what their training rewards. Asking a helpful model to refuse to be helpful in a specific load-bearing way, via prompt alone, is a rickety bet. Asking the compiler to refuse the import is a solid one.

Both tools are open source in intent. GeneralStaff is preparing for a public launch. RayBrain's architecture will be published separately from its corpus, which stays private. If either shape of refusal is useful to you, take it and use it.

Further reading: [Von Hammerstein's Ghost, In Daily Use](/writing/hammerstein).

---

## Notes for editing pass

- Opening two paragraphs are the most likely candidates for tightening. The "optimized to produce output" and "below the level of intention" framing could be a sentence shorter each without losing the claim.
- The sentence in Act 3 beginning "The worst response to agent misbehavior is to write a longer prompt" is a strong candidate for the essay's pull-quote. Consider whether to lift it into a `<blockquote>` in the Astro render.
- The "rickety bet" / "solid one" closer might come off as too punchy; alternative: "A prompt is a rope of sand; a type boundary is a wall." Ray's call on register.
- Essay avoids naming Polsia more than once — good, keeps it grounded rather than picking a fight.
- Slug candidate: `boolean-gates`, `architectural-refusal`, or `refusal-is-the-feature`. First is terse, last is load-bearing thematically.
- Publish date: set to 2026-04-18 to match the day the pieces actually shipped.

## Pre-publish checklist

- [ ] Run stop-slop sweep (phrases + structures + examples references)
- [ ] Confirm no IP leak: nothing from `raybrain/CLAUDE.md §0` referenced, no GeneralStaff internal-doc references
- [ ] Confirm cross-links to `/generalstaff`, `/raybrain`, `/writing/hammerstein`
- [ ] Verify length/reading-time after stop-slop edits (may trim by 10–15%)
- [ ] Ray reads the vault draft and approves
- [ ] Move to `src/content/writing/<slug>.md` with final frontmatter
- [ ] Verify build clean + writing index picks it up automatically
