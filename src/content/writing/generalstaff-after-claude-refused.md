---
title: "GeneralStaff After Claude Refused"
publishDate: 2026-11-02
readingTime: "~5 min"
description: "What happened when Claude refused my client work, and how GeneralStaff let me continue with Codex and Kimi."
---

This week I continued paid client work with Codex and Kimi after Claude began refusing it. I brought the project records and acceptance criteria with me. The verification gates still found problems the builders missed. Work continued because the process I had built around the models could survive changing them.

I call that process GeneralStaff. I am a wargame designer with no formal engineering background. I supply the design, constraints, direction, and acceptance decisions; the models supply most of the implementation labor. I have spent months learning how to divide that labor into jobs I can judge, how to check the results, and how to recover when an agent gets something wrong. This week gave me an additional reason to keep the project outside any one model's conversation.

The interrupted work needs a precise description. I build personalized game modules under paid commission for individual clients, based on games they own. Each client shows proof of ownership and supplies the materials, including material unavailable on publisher sites or in existing VASSAL modules. The build is for that client's own use. I charge for the work; I do not sell or distribute the builds as game products. I honor publisher and designer opt-outs, and I decline projects where the publisher already offers a digital version. This work is not publisher-licensed. I corrected an earlier description that used that word in my [public issue](https://github.com/anthropics/claude-code/issues/106167). Ownership and private use are facts about the arrangement; they do not establish legal clearance.

Some of my customers are older wargamers whose physical or social circumstances limit in-person play. A playable digital module helps them keep playing. An interruption to this work reaches beyond my conversation with a coding tool.

On October 30, [Game Developer reported](https://www.gamedeveloper.com/programming/anthropic-appears-to-have-ordered-ai-tool-claude-to-stop-remaking-video-games) a Claude Code prompt change reportedly pushed around October 27. Anthropic referred the publication to Addy Osmani's statement confirming two sentences added to Opus 5.5 to discourage recreations of specific existing games. He said original games, genre games, and projects using users' own designs and assets should continue working, and invited examples of mistaken refusals.

My sessions continued working after the rule reportedly shipped. The refusals began after I asked Claude whether the rule affected our work, as I recorded in my [October 30 update](https://github.com/anthropics/claude-code/issues/106167#issuecomment-6521127074). They affected paid projects that had been running for months. I escalated through support. As of November 2, I had received no substantive resolution.

I had asked because I wanted to be honest about what I was doing. Seeing work I depended on stop after that question was a shock. I felt betrayed, and spent about a day panicking over how I would keep the client work moving. Then I could see what the months spent building GeneralStaff had given me. The project records, specifications, and checks were still there. I could take them to another builder and see whether we could continue.

While that remained unresolved, I continued work on both modules using Codex and Kimi in one long session. I gave the builders bounded jobs against the existing project material and checked what came back. Changing providers left me responsible for evaluating their work. The checks caught problems, and the process allowed work to continue. That is the extent of this particular result; I did not run a controlled comparison of the models.

The design documents, constraints, current project state, and acceptance criteria live outside any one model's conversation. I give a builder a bounded job against that material. When I change tools, I can bring the same project record and expectations to the next builder. A long conversation can be useful, but it is a poor place to leave the only account of what the project is supposed to do.

The public [GeneralStaff package](https://github.com/lerugray/generalstaff) implements part of this approach as a local-first dispatcher. It runs project-authored checks, requires a non-empty change, and uses a separate reviewer to examine scope and protected files. Failed cycles roll back, and logs preserve the record. It can also verify changes produced by other agents. Its documentation states the limits: tests can pass for the wrong reason, and reviewing scope does not guarantee correctness.

My wider daily GeneralStaff practice includes work outside that package. The Codex and Kimi session is an example of the practice carrying over; it is not a claim that the public CLI orchestrated every action. The useful unit for me is a small job with explicit checks, a reviewable change, evidence of what happened, and a way back when it fails.

Keeping the builder and the reviewer in separate sessions helps. The reviewer gets the assignment and the change to examine, rather than sharing the builder's accumulated explanation of why everything is finished. I still have to judge the actual result. If a check is weak, arranging for a second model to repeat it will not make it strong. Part of directing the work is deciding what evidence would expose a mistake, then making sure someone actually runs the check.

I run [Hammerstein.ai](https://hammerstein.ai/) for paying subscribers, helping people play tabletop wargames. That work has given me plenty of practice with the gap between a model sounding authoritative and a result worth offering to a player. Supplying the right context and directing the implementation remain my responsibility. So does deciding what is ready.

I take on paid AI workflow and automation work using the same approach: define a job, give the agent the material it needs, arrange independent checks, and make failures recoverable. If you have an existing process where nobody can tell whether the agent has done the job, or a workflow that depends on one provider continuing to behave exactly as it does today, I can help examine it. My [commissions page](https://lerugray.github.io/services/) describes the work I take on.
