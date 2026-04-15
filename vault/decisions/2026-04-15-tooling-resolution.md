# 2026-04-15 — tooling resolution

Supplement to [`2026-04-15-project-kickoff.md`](2026-04-15-project-kickoff.md). Ray resolved the five open tooling questions later on the same day, after reviewing the initial scaffold.

## Decisions

### 1. Styling: Tailwind CSS (v4)

Ray's exact reasoning: *"probably tailwind so its not 'default', the site needs to look distinctive."* He explicitly rejected plain CSS as a "default" choice. The meta-rule that came with this — don't recommend tools with "it's the default" as the justification — is saved as a feedback memory for future sessions.

**Installed:** `tailwindcss@^4.2.2` + `@tailwindcss/vite@^4.2.2`. Tailwind v4's CSS-first approach: no `tailwind.config.js` — theme tokens live in `src/styles/global.css` using the `@theme` directive, and the framework is wired in via the Vite plugin rather than an Astro integration.

### 2. Linter / formatter: ESLint + Prettier

Same "not default" reasoning from Ray. Chose ESLint v10 flat config + `typescript-eslint` meta-package + `eslint-plugin-astro` + `eslint-config-prettier` to disable ESLint rules that conflict with Prettier formatting. Prettier handles formatting with `prettier-plugin-astro`. Configured at `eslint.config.mjs` and `.prettierrc`.

### 3. Package manager: npm

Ray delegated: *"No idea here, not a programmer, do whatever sounds good."* `pnpm` was not installed on the machine; chose npm over bootstrapping `pnpm` globally. `package-lock.json` is committed.

### 4. Domain: `lerugray.github.io`

Confirmed. No custom domain for now.

### 5. Repo name: **still open**

Ray said `personal-website` is fine unless there's a better idea. Better idea flagged: **rename to `lerugray.github.io`** so GitHub Pages serves at the root URL `https://lerugray.github.io/` per GitHub's convention, rather than `https://lerugray.github.io/personal-website/`. Needs Ray's confirmation before `git init` + `gh repo create`.

## Package versions frozen at install time (2026-04-15)

| Package | Version |
|---|---|
| `astro` | ^6.1.6 |
| `@astrojs/check` | ^0.9.8 |
| `typescript` | ^5.9.3 |
| `tailwindcss` | ^4.2.2 |
| `@tailwindcss/vite` | ^4.2.2 |
| `eslint` | ^10.2.0 |
| `typescript-eslint` | ^8.58.2 |
| `eslint-plugin-astro` | ^1.7.0 |
| `astro-eslint-parser` | ^1.4.0 |
| `eslint-config-prettier` | ^10.1.8 |
| `globals` | ^17.5.0 |
| `prettier` | ^3.8.3 |
| `prettier-plugin-astro` | ^0.14.1 |

`npm audit` reported **5 moderate-severity vulnerabilities** in the dev-dep tree. Not triaged yet — agenda item for the next session.

## Files written this session

- `package.json` — overwritten to clean up npm's default scaffolding (removed `main`, `directories`, default `test` script, switched `type` from `commonjs` to `module`, added real Astro/lint/format scripts).
- `astro.config.mjs` — Tailwind v4 via Vite plugin; `site` set to `https://lerugray.github.io`.
- `tsconfig.json` — extends `astro/tsconfigs/strict`; `@/*` path alias for `src/*`.
- `src/pages/index.astro` — minimal placeholder (name + four business labels). Deliberately no prose, so no `stop-slop` run was needed.
- `src/layouts/BaseLayout.astro` — minimal HTML shell, imports `global.css`.
- `src/styles/global.css` — `@import "tailwindcss"` + `@theme` tokens for system font stacks.
- `public/favicon.svg` — minimal `rw` mark on a dark square.
- `eslint.config.mjs` — flat config: `typescript-eslint` recommended + `eslint-plugin-astro` recommended + Prettier-config to disable format rules.
- `.prettierrc`, `.prettierignore`.

## NOT done this session (deliberate)

- **`git init`** — deferred pending Ray's call on repo name.
- **`astro check` / `astro build` verification** — deferred to next session.
- **`npm audit` triage** — deferred.
- **Any actual public copy** — the placeholder page is intentionally prose-free to sidestep the `stop-slop` requirement. Real prose gets drafted in the vault and runs through the pipeline before it ships.

## Cross-reference

- Feedback memory on "don't default to defaults" saved to `.claude/projects/.../memory/feedback_dont_default_to_defaults.md`.
- Background project-discovery scan results in [`../projects/project-discovery-2026-04-15.md`](../projects/project-discovery-2026-04-15.md).
- Kickoff decisions: [`2026-04-15-project-kickoff.md`](2026-04-15-project-kickoff.md).
