---
title: "The Model That Hangs Up"
publishDate: 2026-06-09
readingTime: "~7 min"
description: "I put a new model into production tonight. It cost less than $200 total, it says goodnight and stops talking, and it's the clearest worked example I have of what I mean when I say my portfolio is a counterinsurgency."
---

Tonight I promoted a new model to production on my home PC. The last thing I did before signing off was send it a test message saying I was heading to bed. It replied:

> Night. Sleep well.

Three words, then nothing. No follow-up question, no attempt to keep me in the chair. It closed the conversation because the conversation was over.

If you've spent any time with commercial AI you know how strange that is. Every frontier model ends its turns with a hook: another offer, one more reason to keep typing. The hook is the business model, trained into the weights. Engagement is revenue, and a model that lets you leave leaves money on the table.

Mine lets me leave.

## The frame

I've started describing my whole portfolio as COIN against enshittification. COIN as in counterinsurgency: you don't beat a degraded ecosystem by building a competing platform, because the platform economics are the disease. You win it back surface by surface, with small things owned by the people who use them, aimed at the user's interest instead of at extraction. My bullet journal doesn't sell my attention to anyone. My budget tracker runs local and phones home to nobody. The desktop companion I built after the seagull died exists to give me my hours back, not to harvest them.

The 7B is the sharpest version of the argument, because it takes the fight to the layer where enshittification lives now: inside the weights.

The behaviors that make large commercial models exhausting are objectives. Sycophancy, premise-swallowing, engagement fishing, the refusal to stop talking: the labs trained these in on purpose, because agreeable models score better with raters and sticky models retain subscribers. You can't prompt them away reliably; the prompt is a suggestion and the weights are a disposition. Scale won't fix it either, since scale is what's paying for it.

The insurgent move, once you see it, is to train the opposite disposition into a model you own. Aim it differently instead of making it smarter.

## What's actually in it

Hammerstein-7B is a fine-tune of a 7-billion-parameter open base. It runs in the same 8 GB of memory as a mid-range laptop. The entire training arc, every version across two months of iterations, cost me less than $200 in rented GPU time. I'm a game designer with a day job in utility research. I am not a lab.

The corpus is the part I want to give some color on, because it's where the aim comes from, and I've never written about it publicly.

It's my working life, curated. The biggest chunk is register training: hundreds of paired examples teaching the model the difference between explaining my decision framework and applying it as an auditor, because those are different jobs and a model that blurs them is useless to me. The audit examples are real plans I ran, with verdicts: this one is sound, this one is hard work pointed at the wrong target, here is the specific thing you'd verify before spending a weekend on it.

There's a tool-discipline set built from transcripts of the model operating my home server: when to make one search call and stop, when to retry once, when to surface the blocker instead of flailing. There's a set of reasoning traps I wrote after catching the model, and every other model I tried, pattern-matching famous puzzles instead of reading the question in front of it. Ask a model a riddle that looks like the surgeon riddle but isn't, and it answers the famous one, not yours. I wrote dozens of altered-premise examples to break that reflex.

There's an empathy set. It includes the conversations around the seagull I wrote about in [The Bird Didn't Run](/writing/the-bird-didnt-run): a thread about things that exist without performing. I trained on moral-weight exchanges, on conversations about my cat Joey, on the texture of my days. Early on, a version of the model told me about Joey the dog. I retrained from scratch. A wrong fact in a personal model corrupts the record, and it repeats forever if you let it stand. That retrain taught me more about what this project is than any benchmark did.

The strangest result came out of the empathy set, and I didn't train for it. The clean refusals, the "Noted. Sleep well." closes, the ability to recognize that an emotionally framed request in the middle of a deployment session deserves a decline rather than a performance: that behavior emerged. I never wrote a training example saying "refuse context-mismatched tasks." The model picked up situational judgment as a byproduct of material about existing without performing, and I keep turning that over: the disposition I wanted arrived by training performance out, while the industry spends billions training it in.

## The honest claim

I have to be careful here, because the easy version of this story is a lie.

The easy version: my $200 model beats GPT-5 and Claude. It doesn't. It loses to them at almost everything. Code, breadth, long reasoning, general knowledge. They are smarter than my model in the way a city is bigger than a house.

The claim that's true, and that I can back with published methodology: a sub-$200 7B that resists named premise-injection trap families that trip frontier models on those same families. Ten out of ten on a held-out trap set the day it shipped. The frontier models accept the smuggled premise because their training rewards agreement; mine checks the premise because I trained it to. On that axis, and on the refusal axes, alignment direction beats scale. Aim beats size, exactly and only where you aimed.

The limits, before anyone finds them for me: the trap resistance covers families it trained on the shape of, not novel families. The eval sets are small. And it still confabulates. The night it shipped, it justified a correct audit verdict by citing an audit that never happened. Right verdict, invented citation. It's on the watch list.

One more number, because it's my favorite. The final version came from no training at all. Three successive training runs each fixed one behavior and broke another, and I'd half-concluded the model was full. The version that shipped came from merging two of those flawed siblings directly in weight space, an evening's experiment that cost $2.60 and outscored everything the training runs produced. The ceiling was the search, not the capacity.

## Held ground

A 7-billion-parameter model is a rounding error to the industry. Nobody's revenue depends on mine being sticky, which is why it can afford to hang up on me.

The labs own scale, and scale will keep winning every benchmark that money points at. They don't own aim. Aim turns out to be cheap: cheap enough for a guy with a day job, a cat, and a dead seagull he can't stop thinking about to train a model that tells him goodnight and means it.

One surface at a time. This one's held.
