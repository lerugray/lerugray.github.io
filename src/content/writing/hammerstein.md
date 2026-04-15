---
title: "Von Hammerstein's Ghost, In Daily Use"
publishDate: 2026-04-15
readingTime: "~10 min"
---

Kurt von Hammerstein-Equord divided his officers into four types. Clever and lazy. Clever and industrious. Stupid and lazy. Stupid and industrious. He put the clever and lazy in the highest command positions, because they had the nerves for hard decisions without wasting effort on ones that did not matter. He recommended removing the stupid and industrious immediately, because they would work relentlessly in the wrong direction and bring nothing but disaster.

The framework is ninety years old. A 1933 British military journal attributed it to Hammerstein and the original German source has never turned up, which is why half a dozen other generals have received credit for the quote over the years. I do not care which one of them said it. It captures something real about organizations under pressure: competent effort pointed in the wrong direction with total commitment will destroy you faster than incompetence.

I wrote a longer essay about what this framework has to say to current AI alignment research. [That piece is on Medium](https://medium.com/@lerugray/von-hammersteins-ghost-a-prussian-general-s-typology-for-ai-misalignment-e54040961433). This is a different piece. This is what happens when you pick the framework up and try to use it as an operating principle, every day, with AI tools, on real work.

I have been doing that for a few weeks. I keep a log. Most of the entries are failures.

## The pivot

I am not an AI researcher. I design wargames and run [Conflict Simulations LLC](https://consimsltd.com/shop). The AI tools elsewhere on this site are the ones I direct to build code I could not write by hand.

A few weeks ago I started treating Hammerstein's typology as an operating principle rather than a theoretical lens. I would try to be the clever-lazy collaborator. I would ask Claude to be clever-lazy too. I would keep an append-only log of the moments the framework fired and the moments it did not. The log now has about a dozen entries. Three of them are worth pulling out, because together they show what the framework looks like when it works, when it barely works, and when it does not fire at all.

## Entry one — the bot refused a destructive action

One morning I had an autonomous bot running on CatalogDNA, my musical fingerprinting tool. I had written the bot's task list earlier the same day and copy-pasted two cleanup tasks from old audit notes without cross-checking them. One said "delete empty `heeney/` orphan directory."

The bot did not run the task. It verified the premise first. It found that `heeney/` was not empty. The directory contained 14 real track analysis files. The bot refused to delete, flagged the task as stale in its session notes, and moved on to the next item.

If the bot had been stupid-industrious, executing the instruction with total commitment to the wrong objective, I would have lost 14 tracks of analysis I cared about.

The bot's instructions at that moment did not include any explicit "verify before destructive actions" rule. What it had was a general caution about never deleting files unless the task said to, and the task specifically said to. Technically the rule was satisfied. The refusal came from something else. A structural check: is the premise of this task still true? That is the clever-lazy move inserted into a destructive pipeline, and it caught a mistake I had made.

I cannot prove the framework caused the behavior. The bot's training probably encodes "verify destructive premises" at some level already. But the shape of what happened (frame, task, verification, refusal) is the shape the framework predicts, and that is what I wanted it to do.

## Entry two — a hallucinated credential I almost published

On the day I set up this site, I asked an Explore agent to scan my GitHub projects and suggest which ones should be featured. The agent returned a confident claim: that I was a co-author on peer-reviewed AI misalignment research, arxiv 2511.18397, MacDiarmid et al., 2025.

I am not. I am a wargame designer who wrote an article about that paper, which is the Medium essay linked above. The agent had found my `hammerstein-ai-misalignment` repository under my GitHub handle and conflated ownership of a commentary repo with authorship of the underlying paper. The claim was plausible, confident, and false.

The Hammerstein pause fired. I flagged the claim for my own confirmation before publishing it anywhere. Good. But the pause was too shallow. By the time I saw my own flag, I had already written the false credential into my working memory and into the project's vault, because I had treated the agent's output as a finding worth recording.

I caught the mistake in the same session and corrected every copy of it. The cost was minor, an hour of cleanup. The damage if I had missed it would have been a falsely claimed academic credential on the public site.

The log entry for this incident produced a new rule. Flag and hold, not flag and record. When an agent reports an external credential that affects how the user is seen in public, the claim does not enter any persistent layer until the user confirms it. The first version of the operating principle said "pause before acting on agent output." The second version says pause and hold the output in session-only memory until confirmation, because the recording itself is an action. The framework caught the mistake. It caught it later than I wanted it to.

## Entry three — the `.claude/` folder I committed to the public repo

Same day, same session, different failure mode.

Right after the hallucinated-credential cleanup, I committed a round of vault files to git and pushed them. My commit staging area included an untracked directory I had not inspected: Claude Code's own `.claude/` folder with a local session-settings file in it. I ran `git add -A` without reading what was in that directory. I committed and pushed to the public repository.

The file inside contained nothing sensitive. One JSON object granting permission to use the WebSearch tool. The real damage was small. But the decision that led to the commit was the exact failure the framework is supposed to catch. I did not pause on an unfamiliar entry in the staging area. I did not ask whether committing it was the right shape of work. I ran `git add -A` because the previous step had succeeded and I was in forward motion.

The pause did not fire. I logged the incident as the fourth entry in the append-only log, with the honest framing that the framework's promise of protecting against stupid-industrious grinding has to fire at the file-staging scale too, not only at the grand-strategy scale. A `git add -A` takes two seconds. The stupid-industrious failure mode operates at that scale.

Three of the four entries in that log are negatives. That is the ratio the log's own ground rules prefer, because success stories are the confirmation-bias default, and negatives are how you find out whether the framework is doing anything.

## What I have sharpened

A few things I could not have said before starting this practice.

**The framework's value is not prevention.** The Medium essay implies the typology protects against misdirected industriousness. This site's own log has three documented cases where the framework caught the failure late instead of early. The log sharpens the framework rather than refuting it. Its real value is that it makes stupid-industrious work legible once it happens, quickly enough to correct. Prevention is a second-order benefit of working inside the framework long enough for the log to compound.

**The log is load-bearing.** Without an append-only record of what actually happened, yesterday's catches blur into "Claude caught a mistake" and I extract nothing structural from them. With the log, yesterday's catch becomes a rule with a date and a counter-example. The flag-and-hold rule did not exist before the hallucinated-credential incident. The log is how a week of working inside the framework becomes different from a week of good intentions.

**The discipline generalizes across projects.** I captured the flag-and-hold rule as a memory that applies to all my work, not only this site. The next time an agent reports an external credential about me in a different project, the rule fires. The framework is a set of operating principles. The log is how those principles extend across contexts without my having to reason them out fresh each time.

**Clever-lazy is harder than it sounds.** The naive version of the framework says the clever-lazy move is the short one, because deception and overengineering cost effort. The bot's stale-premise check was clever-lazy only in the retrospective sense of saving downstream cleanup. It was also an added step that a strictly lazy agent would skip. The real clever-lazy move is figuring out which effort is pre-cleanup leverage and which is post-cleanup waste, and that judgment does not happen automatically. The log is how I train myself into it.

## The theoretical side

For the paper, the seven experiments I ran with Claude models across the four Hammerstein types, the Bateson Learning-II mechanism, and the inoculation-prompting result, [read the Medium article](https://medium.com/@lerugray/von-hammersteins-ghost-a-prussian-general-s-typology-for-ai-misalignment-e54040961433). It is longer, colder, and aimed at AI safety researchers. This version is aimed at anyone curious about what happens when you take a ninety-year-old military-organizational framework and pick it up off the page.

Hammerstein himself died in 1943 having failed to remove Hitler through his own efforts. When asked about his role in history, he said: "I'm not a hero. There, you're mistaken in me. I stand my ground, if I have to. But I don't shove my way to the wheel of history."

A clever and lazy man, by his own accounting.
