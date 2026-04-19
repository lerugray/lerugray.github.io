---
title: 'Boolean Gates, Not Prompts'
publishDate: 2026-04-18
readingTime: '~8 min'
description: "Two tools I built to prevent stupid-industrious failure when the industrious agent is a language model. One verifies execution, the other refuses memory. Both answer the same question at the architecture level."
---

The Hammerstein essay on this site argues a ninety-year-old officer typology still names something real about organizations under pressure. Hammerstein warned against the stupid-industrious quadrant: confident work aimed at the wrong objective, carried out with commitment. A direction that compounds commitment into damage.

This piece is about the same failure mode when the industrious agent is a language model.

Helpful-trained models will do the wrong thing without hesitation, all day. Training rewarded output. Output is what they make. Instructions in language do not prevent it. Tell a model to be careful. It will agree, describe what care looks like, and produce text that reads as careful. Then the description ends and the model goes back to producing whatever comes next.

I have been building two tools that answer this in the code, not in the prompts.

## GeneralStaff: the execution failure

The first tool is [GeneralStaff](/generalstaff), an open-source autonomous engineering harness for solo founders. It runs Claude Code agents on local projects, cycle after cycle, while I am writing or sleeping or doing something else. The use case is straightforward: let a bot grind through a backlog while I work on design. The naive implementation is about fifty lines of shell script.

The naive implementation fails in a specific way. The top one-star review complaint on Polsia, the closed-source equivalent, is false task completions. The bot marks a ticket done when the diff is empty, or tests are red, or it has rewritten scope without saying so. Every solo founder I know who has tried a nightly `claude -p` loop has watched this happen at least once. It compounds where you cannot see it. Nobody checks the bot's work against reality, because the whole point of the bot is that you are not checking.

The instinct is to fix this with better prompts. "Do not mark a task complete unless tests pass." "Verify the diff is non-empty." "Re-read the scope and confirm the changes match." Specific, well-intentioned, ignorable. A prompt is advice. A model follows advice about as well as a tired programmer follows a sticky note on the monitor.

GeneralStaff's Hard Rule 6 is not a prompt. It is a Boolean check in the dispatcher. A cycle is not marked done until three conditions all hold: tests pass, the diff is non-empty, and a separate reviewer agent confirms the scope matches the ticket. If any of the three fails, the cycle is flagged and the bot loops with the failure in context. The rule fires on every cycle. It is code, not a paragraph. The model cannot talk its way around an `if` statement the way it can talk its way around an instruction.

The failure mode is structurally excluded, not discouraged. That is the move.

## RayBrain: the memory failure

The second tool is [RayBrain](/raybrain), a retrieval-only second brain built over a private personal corpus. I ask a question. RayBrain returns the specific passages from my own past writing where I addressed it. With citations. Without embellishment.

The stupid-industrious failure here is different in shape but identical in mechanism. Second-brain tools built on top of language models love to synthesize. You ask "what are my three takes on X" and the tool returns a confident paragraph that summarizes, compresses, and smooths. It invents a fourth take you do not hold because the summary reads better with four. It drops a qualifier that was load-bearing. It paraphrases your voice into the voice of the model. None of this is a hallucination in the narrow sense. Every sentence is plausible. Some of them are close to what you wrote. They are not what you wrote, and the moment you start reading them as if they were, you have stopped reading your own thinking and started reading a probabilistic reconstruction of it.

The instinct is the same: fix it in the prompt. "Do not synthesize." "Only quote verbatim." "Always include citations." The model gives those instructions the same treatment it gave GeneralStaff's. Agreement, description, compliance-shaped output, drift the moment the instruction starts to read as awkward.

RayBrain's answer lives in the code. A module-boundary check enforced at type-check time. The file that implements query retrieval sits in a namespace the build system prevents from reaching the generation namespace. If someone asks RayBrain to synthesize, it has no path to the capability. The only possible response is to return the retrieved passages with the explicit note that synthesis is out of scope.

Refusal is the feature. That refusal is the only way the tool does what I want it to do.

## The common move

Both tools apply the same principle. The failure mode is load-bearing enough that no amount of prompting will prevent it. So the architecture makes the failure mode impossible instead.

Prompts are advisory. A model told not to do X may still do X when X is what training rewarded. Code enforcement is categorical. A function that cannot import a generative client cannot generate, the same way a cycle that fails tests cannot be marked done. The difference between the two regimes is the difference between hope and architecture.

This is the clever-lazy move in the Hammerstein sense. Find the one structural change that removes the failure mode from the space of possible outputs. Spend nothing further trying to prevent it in every individual case. The worst response to agent misbehavior is to write a longer prompt. The prompt will be longer. The agent will read it the same way it read the short one.

There is a trade-off. Structural refusal is stiff. A model that cannot synthesize cannot synthesize even when synthesis would have been useful. A cycle that fails verification cannot proceed even when the operator would have waved it through. Boolean gates are blunt. That is the point. A gate that bends when the bot pushes back is not a gate.

In both tools, the stiffness is the feature. I want the bot to fail loudly when it would otherwise fail silently. I want the query tool to refuse to synthesize so that I read my own words. I want the cycle to halt so that I know the cycle halted.

## What this updates in the framework

The Hammerstein essay is about operating principles at the human-decision scale. Do I pause before running this command? Do I verify the premise before acting on it? Is this the right shape of work? These are the daily questions.

The architecture question is one layer below. For the load-bearing failure modes, the ones that would compound into real damage if they fired during my next break, the right place to answer them is not in my head. It is in the code the bot runs through every cycle, and in the types the build system enforces on every compile.

You can read this as engineering pragmatism. You can also read it as applied distrust of language models, which is what it is. I use them every day. I built a second brain and a development harness on top of them. I also do not trust them to police their own behavior when the behavior is exactly what their training rewards. Asking a helpful model to refuse to be helpful in a specific load-bearing way, via prompt alone, is a rickety bet. Asking the compiler to refuse the import is a solid one.

Both tools are open source in intent. GeneralStaff is preparing for a public launch. RayBrain's architecture will be published separately from its corpus, which stays private. If either shape of refusal is useful to you, take it and use it.

Further reading: [Von Hammerstein's Ghost, In Daily Use](/writing/hammerstein).
