# RayBrain — public positioning

_Source-of-truth for site copy. **Architectural content only.** The personal corpus and all its contents are strictly private. **Do not extrapolate from `raybrain/CLAUDE.md` §0** — it contains Ray's stated political identity, AI-use philosophy, and project motivation prose that are off-scope for the public site._

## Tagline

> "Retrieval-only second brain."

## Sub-tagline

> "Refusal is the feature."

## One-liner

A second brain built over a private personal corpus. It surfaces cited passages from prior user output. It does not synthesize. In the query path it refuses to generate text at all — it retrieves, cites, and stops.

## Problem it solves

Most second-brain tools conflate two jobs: _finding_ what you already wrote, and _generating_ new text on top of it. The second job contaminates the first — once the tool starts writing, the user stops reading. RayBrain separates them architecturally: the query engine cannot import a generative LLM client, enforced by a module-boundary AST gate, not a prompt.

## Architectural spine (public)

**Andrej Karpathy's three-layer LLM-Wiki pattern:**

1. **Raw sources** — the authoritative corpus. Nothing is ever rewritten here.
2. **Wiki** — LLM-maintained markdown pages that synthesize across the sources. Every paragraph carries a citation marker pointing back to a specific passage.
3. **Schema** — a single file the ingest LLM reads as in-context instruction before emitting any wiki page. The schema encodes the retrieval-only and citation-first invariants as rules the model cannot bypass.

**Ingest is the only phase where the LLM generates. Query does not generate. Lint does not generate.**

## Four invariants (all code-enforced)

1. **Citation floor** — every non-empty paragraph in every wiki page contains at least one well-formed citation marker. A citation-less paragraph is a hallucination by definition and will not be written.
2. **Idempotent regeneration** — running ingest twice over the same corpus and config produces byte-identical output. Manifest hashes over `(content, loader version, config, overlay, schema)`.
3. **User-editable, user-rejectable** — hand edits live in a sibling overlay file; the next ingest never clobbers them. Hand edits are the source of truth on synthesis quality; the LLM defers.
4. **Query-time co-visibility** — the query API always returns both the synthesized wiki page and its raw citations. A result containing a page but an empty citation list is broken by definition.

## Citation grammar (public)

Every claim carries a marker of the form `[ref:<source_id>:<locator>]`. Locator is one of a line range, a page number, an audio timestamp, or a structured paragraph anchor. Multiple citations per paragraph are allowed and encouraged. One anchor per paragraph is the **floor**, not the target.

## Refusal stance (public)

If a query asks RayBrain to synthesize, the right response is to return the passages and their citations with the explicit note that synthesis is out of scope by design. Refusal preserves the thing the tool is for: surfacing what the user actually wrote, so the user can read it and think. The moment the tool paraphrases, the user stops doing the thinking.

## Relationship to other projects

- **GeneralStaff** — sibling infrastructure. Same anti-stupid-industrious thesis from a different angle: GeneralStaff verifies execution, RayBrain refuses to hallucinate on retrieval.
- **Hammerstein essay** — both tools are applications of the officer-typology framework in daily work.

## Status

**Private.** Corpus is private and will remain so. The architecture — schema, invariants, enforcement sites, test harness — will be published as an open-source reference implementation once the four invariants are stable against Ray's own ingest runs.

## License (intended)

MIT (architecture) when published.

## Target audience

Power users building their own second-brain systems who want an architectural reference rather than a hosted product. People who've been burned by tools that hallucinate on top of their own writing.

## DO NOT publish

- **Any content from `raybrain/CLAUDE.md` §0** (political identity, AI-use philosophy prose, project motivation framing). These are Ray's stated positions but off-scope for the public site.
- Specific corpus contents (music archives, personal correspondence, Facebook/email archives, etc.)
- Specific provider choices (Voyage embeddings, Claude CLI synthesis) — implementation detail that may churn
- Ingestion prompts or schema specifics beyond the four invariants
- Eval queries or expected-passages data (Ray-authored, private)
- Any `raybrain/hands_off.yaml` contents or internal task-list specifics

## Cross-references

- `../../src/pages/raybrain.astro` — the live page that pulls from this vault file
- Sibling infrastructure: [`generalstaff.md`](generalstaff.md)
- Framework anchor: [`../hammerstein-essay-draft.md`](../hammerstein-essay-draft.md)
- External architecture rationale: `../../../raybrain/idea.md` + `raybrain/CLAUDE.md` §1–3 (public-safe sections)
