# Conventions

Living document. Short by design. Update in place as the project grows — don't let drift accumulate silently.

## Code

- **TypeScript**, strict mode.
- **Astro components** (`.astro`) for static layout. React / Preact islands only where interactivity genuinely needs it. Default to none.
- **Path alias** `@/` → `src/` set via `tsconfig.json` + `astro.config.mjs` (once scaffolded).
- **Imports** ordered: stdlib → third-party → local absolute (`@/…`) → local relative. Groups separated by blank lines.
- **Styling:** plain CSS with Astro scoped styles. No CSS-in-JS. No Tailwind unless Ray asks.
- **Fonts:** system font stack by default. One display face only if the design calls for it and it's self-hosted (no external font CDNs).
- **No JS in global scope** on pages that don't need it. Let Astro do the static-first thing it's good at.

## Content

- Long-form pages live in `src/content/` as `.md` / `.mdx`.
- Business pages use a shared frontmatter schema defined in `src/content/config.ts` (to be created during scaffolding).
- **Source of truth for copy:** `vault/businesses/<business>.md` and `vault/projects/<project>.md`. Site pages consume these. If you find yourself rewriting copy directly in `src/content/` without touching the vault, stop and reconcile.

## Naming

- Components: `PascalCase.astro` (e.g. `BusinessCard.astro`).
- Utilities: `camelCase.ts` (e.g. `formatDate.ts`).
- Content files: `kebab-case.mdx` (e.g. `devforge.mdx`).
- Vault files: `kebab-case.md`.
- Decisions / session notes in the vault: `YYYY-MM-DD-slug.md`.

## Quality gates (to be enabled after Astro scaffolding)

- **Type check:** `astro check` (strict mode, no errors).
- **Formatter:** Biome (default) or Prettier. Decide during scaffolding.
- **Linter:** Biome (default) or ESLint. Decide during scaffolding.
- **No test harness** planned for a static site. Smoke-test via dev server (`astro dev`) on every non-trivial change. If interactivity gets real, revisit.

## Visual audits

Two tools, two jobs:

- **Playwright script** (`scripts/audit-site.mjs`): headless Chromium screenshots of all 13 routes at desktop + mobile viewports. Good for post-deploy screenshot regression, OG meta verification, layout sweep. Base URL overridable via `AUDIT_BASE_URL` env var. Output goes to `audit-screenshots/` (gitignored).
- **Chrome extension** (Ray's claude.ai browser extension): interactive walkthroughs — clicking nav, testing hover states, inspecting live DOM, exploring user paths. Use when the audit needs more than static screenshots.

Pick the right one for the job. Don't try to script Playwright through interaction loops.

## When to deviate

A convention worth breaking is worth documenting. If you break one, update this file in the same change with the reason. No silent deviations.

## See also

- `../CLAUDE.md` — agent instructions, the Hammerstein framework, the advisor role.
- `content-strategy.md` — voice, scope, public/private boundary.
