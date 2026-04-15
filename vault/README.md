# Vault

Obsidian-style persistent memory for the `personal-site` project. Markdown files, git-tracked, readable directly in Obsidian — open `personal-site/` (or just `personal-site/vault/`) as a vault.

## Why the vault exists

Cross-session continuity. There are two memory layers on this project:

1. **Claude private memory** (`.claude/projects/.../memory/`) — operational, Claude-specific working context. Not visible to Ray in Obsidian.
2. **Project vault** (this folder) — project-bound state that Ray should be able to read and edit: decisions, session notes, the Hammerstein observations log, and the source-of-truth positioning for each business.

Both are in use. Rule of thumb: **if Ray should be able to read and edit it, it goes here.** If it's Claude-specific operational context (user preferences, working-style signals), it goes in private memory.

This structure mirrors the pattern Ray already uses on CatalogDNA (`docs/internal/` + append-only observation logs), so it should feel familiar.

## Structure

- [`index.md`](./index.md) — map of content. Start here.
- [`decisions/`](./decisions/) — ADR-style records of architectural and product decisions. Date-prefixed filenames (`YYYY-MM-DD-slug.md`).
- [`sessions/`](./sessions/) — per-session working notes. Date-prefixed filenames.
- [`hammerstein-log/`](./hammerstein-log/) — append-only observations log for the Hammerstein framework. Ground rules inside.
- [`businesses/`](./businesses/) — public positioning source-of-truth for each of the four businesses. Site copy pulls from here.
- `projects/` — same, for the curated project slate (to be built as projects are selected).

## Ground rules

- **Session notes** — drop one in `sessions/` for every non-trivial working session. Date-prefixed.
- **Decisions** — drop one in `decisions/` for every non-trivial decision. ADR-style: context, decision, trade-offs accepted, open questions.
- **Hammerstein log is append-only.** Never edit or delete old entries. Log negatives aggressively — counter-observations outweigh success stories.
- **Business blurbs are the source of truth.** Site copy consumes them. Don't duplicate copy into `src/content/` without touching the vault — reconcile to the vault first.
- **Files are `kebab-case.md`.**
