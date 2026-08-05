# field-trials-feedback — setup

This is a standalone Cloudflare Worker + D1 database. It is **not** part of the
Astro site's build or its GitHub Actions deploy — the site (`lerugray.github.io`)
stays a static GitHub Pages deploy regardless of whether this worker exists.
Nothing here needs to be wired up before the `/games` page can ship; until it's
deployed, every feedback box on that page just shows "Feedback wire not yet
connected." and the rest of the page works normally.

## 1. Install

```sh
cd workers/field-trials-feedback
npm install
```

## 2. Auth

Use the wrangler OAuth login, not the `CLOUDFLARE_API_TOKEN` env var if one is
set globally on this machine (that token is read-only analytics scope on other
projects in this account — same convention as hammerstein.ai's deploy script):

```sh
env -u CLOUDFLARE_API_TOKEN wrangler login
```

## 3. Create the D1 database

```sh
npm run db:create
```

This prints a `database_id`. Paste it into `wrangler.toml`, replacing the
`PLACEHOLDER-...` value on the `[[d1_databases]]` block.

## 4. Apply the schema

```sh
npm run db:schema:remote
```

(`db:schema:local` targets wrangler's local dev D1 instead, for testing with
`wrangler dev` before touching the real database.)

## 5. (Optional) set a real IP-hash salt

The worker hashes the submitter's IP with SHA-256 before storing it — the raw
IP is never written to D1. Without this secret it still hashes, just with a
fixed fallback string baked into the source. Set a real one:

```sh
env -u CLOUDFLARE_API_TOKEN wrangler secret put IP_HASH_SALT
# paste any random string when prompted
```

## 6. Deploy

```sh
env -u CLOUDFLARE_API_TOKEN wrangler deploy
```

This prints the live worker URL — either the default
`https://field-trials-feedback.<your-subdomain>.workers.dev` or a custom route
if one is configured later.

## 7. Point the site at it

In `src/pages/games.astro`, find the `FEEDBACK_ENDPOINT` constant near the top
of the frontmatter and replace the placeholder with the real URL from step 6.
Rebuild (`npm run build` at the repo root) and confirm the feedback box on
`/games` loads the (empty) comment list instead of showing the degraded
"wire not yet connected" message.

## CORS

`wrangler.toml` sets `ALLOWED_ORIGIN = "https://lerugray.github.io"` — the
worker only sends CORS headers for that origin, so the API isn't casually
embeddable elsewhere. For local testing against `astro dev`
(`http://localhost:4321`), override it:

```sh
wrangler dev --var ALLOWED_ORIGIN:http://localhost:4321
```

## What's already handled server-side

- **Honeypot** — a hidden `website` field. If it's filled, the worker returns a
  fake success without writing anything, so scripted submitters don't learn
  they were caught.
- **Length caps** — body ~1000 chars, name ~40 chars, both enforced before
  insert (the client mirrors these via `maxlength`, but the server is the real
  gate).
- **Rate limit** — 5 comments per hour per IP hash, counted via a D1 query
  against `ip_hash` (see `schema.sql`'s `idx_comments_iphash_created`).
- **No raw IPs stored** — only a salted SHA-256 hash, in `ip_hash`.

## Adding a second game

Nothing here needs to change — `game` is just a free-text slug on each row,
matching whatever `id` a roster entry uses in `src/pages/games.astro`. Add the
new entry to that page's `games` array and its feedback box starts working
against this same worker automatically.
