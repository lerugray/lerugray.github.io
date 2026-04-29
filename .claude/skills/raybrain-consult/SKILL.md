---
name: raybrain-consult
description: When drafting text that should carry Ray's voice — opinions, creative register, project framing, or topical perspective — call `consult_voice` to retrieve cited passages from his actual prior writing (Facebook posts, wargame manuals, music catalog, bullet-journal entries) and weave them into the draft. Skip for mechanical code, generic infrastructure, or tasks where no Ray-voice surface exists. Citations must be preserved verbatim as `[ref:source_id:locator]` markers in the output so Ray can verify the source.
---

# raybrain — consult Ray's voice

Raybrain is a queryable copy of Ray's voice/opinion/creative tendencies, indexed from his actual writing across multiple corpora (Facebook posts, wargame design notes, music analysis, bullet-journal entries). The `consult_voice` tool is **retrieval-only** — it returns cited passages from Ray's real prior text. It never generates new text on Ray's behalf.

## When to call this tool

Call `consult_voice` when the task involves:
- Ray's opinions on a topic (politics, music, design, business, his own work)
- Ray's creative register (game-design notes, music composition voice, narrative tone)
- Project-specific framing where Ray has prior thinking on the surface (e.g., "how does Ray talk about X?")
- Direct-quote situations where the citation itself is the deliverable (preserving Ray's actual words)

Do NOT call this tool when:
- The task is mechanical code (refactoring, type fixes, lint cleanup)
- The task is generic infrastructure (CI config, dependency updates, build scripts)
- The text being drafted is system-facing (error messages, log lines, schema documentation)
- You're answering a factual question with no voice surface

## How to use the result

The tool returns JSON with a `raw_citations` array (cited passages from Ray's corpus). Each citation has `source_id` and `locator` fields. Use these as **ground for drafting**, not as starting points for paraphrase:

- **Quote directly** when the citation answers the question with Ray's actual phrasing. Wrap with `[ref:source_id:locator]` after the quoted text.
- **Build on** the citation when Ray's prior text frames the topic but the current task needs more — use the citation to anchor your tone, then extend.
- **Don't paraphrase silently** — if you replace Ray's actual words with your own, you've lost what raybrain provides. Either quote with attribution or skip the citation.

The `synthesized_page` field is a pre-built summary the synthesis layer produces. It's a starting point, not a deliverable — verify against `raw_citations` before relying on it.

## Tool surface

```
consult_voice(
  query: string,                           # the question/concept
  top_k?: number = 5,                      # retrieval breadth
  exclude_provenance?: string[] = ["journal-private"]
)
```

Default `exclude_provenance` filters Ray's private journal entries from results. Override only when the calling context has explicit authorization for journal-private content.

## Example

Task: "Draft a forum post replying to a Reformation-wargame question about why early-modern logistics is gameworthy."

```
consult_voice({
  query: "early modern logistics wargaming",
  top_k: 8
})
```

Returned `raw_citations` might include passages from `amfiog/MISSION.md`, `plain-md-notes-2018-wargame-design`, or `fb-posts-2021-grognard-thread`. Pull the passages where Ray's framing matches the forum question, quote them with `[ref:...]` markers, and write transitions between them in your own voice. Don't restate the citations in different words — that defeats the retrieval-only invariant.

## Citation invariant

Every passage you carry forward must keep its `[ref:source_id:locator]` marker exactly as raybrain returned it. The marker is the audit trail back to Ray's actual text. Stripping it is a silent quality regression: the reader can't tell what's Ray and what's you.

## Privacy floor

The default `exclude_provenance: ["journal-private"]` blocks Ray's bullet-journal entries from leaking into bot-driven drafts. If a task requires journal access, the calling context (a Ray-driven session, not a bot cycle) sets `exclude_provenance: []` explicitly. Don't override the default speculatively.

## When raybrain has no answer

If the query returns no useful citations (low top_k overlap, off-topic corpus), say so directly: "raybrain has no Ray-voice citations for X." Don't fabricate a voice. The tool's silence is also a signal — it means the task is outside Ray's documented prior thinking, and the deliverable should make that absence visible rather than paper over it.

## Setup

The MCP server in this directory wraps `raybrain query --json`. Configure your MCP host to launch it (see `mcp-server/README.md` for client-specific config). The Python `raybrain` CLI must be installed and on `PATH` for the server to function.
