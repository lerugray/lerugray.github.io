// field-trials-feedback — anonymous comment box for lerugray.github.io/games.
//
//   GET  /comments?game=<slug>   -> newest-first list, capped at 100, for that game
//   POST /comments               -> { game, name?, body } -> creates one comment
//
// No accounts, no auth. Abuse controls: a hidden honeypot field, hard length caps on
// name/body, and a per-IP-hash rate limit (5 / hour / game). The IP itself is never
// stored — only a salted SHA-256 hash, so a comment can't be traced back to an address
// even by someone with DB read access.
//
// Companion to the twu-telemetry worker's shape (CORS-first, never throw on a bad
// beacon) — this one carries D1 + real validation because unlike telemetry it's
// public-facing content, not aggregate counters.

export interface Env {
  DB: D1Database;
  ALLOWED_ORIGIN: string;
  /** Optional. Set via `wrangler secret put IP_HASH_SALT` for a real deploy.
   *  Falls back to a fixed string if unset — still a hash, just not secret-salted. */
  IP_HASH_SALT?: string;
}

const MAX_BODY_LEN = 1000;
const MAX_NAME_LEN = 40;
const MAX_GAME_LEN = 60;
const RATE_LIMIT_PER_HOUR = 5;
const LIST_CAP = 100;

interface CommentRow {
  id: number;
  name: string | null;
  body: string;
  created: string;
}

function corsHeaders(origin: string): HeadersInit {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
}

function json(data: unknown, status: number, origin: string): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
  });
}

async function hashIp(ip: string, salt: string): Promise<string> {
  const enc = new TextEncoder().encode(`${salt}:${ip}`);
  const digest = await crypto.subtle.digest('SHA-256', enc);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

/** Trim, strip control chars, cap length. Comments render via textContent client-side
 *  (see games.astro), so this is abuse/quality hygiene, not an XSS boundary — but never
 *  trust that a future consumer of this API will render it as safely. */
function clean(input: unknown, maxLen: number): string {
  if (typeof input !== 'string') return '';
  const stripped = input.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g, '').trim();
  return stripped.slice(0, maxLen);
}

function isValidGameSlug(game: string): boolean {
  return /^[a-z0-9-]{1,60}$/.test(game);
}

async function handleGet(url: URL, env: Env, origin: string): Promise<Response> {
  const game = clean(url.searchParams.get('game'), MAX_GAME_LEN);
  if (!game || !isValidGameSlug(game)) {
    return json({ error: 'missing or invalid game' }, 400, origin);
  }

  const { results } = await env.DB.prepare(
    'SELECT id, name, body, created FROM comments WHERE game = ?1 ORDER BY created DESC, id DESC LIMIT ?2'
  )
    .bind(game, LIST_CAP)
    .all<CommentRow>();

  return json(results ?? [], 200, origin);
}

async function handlePost(request: Request, env: Env, origin: string): Promise<Response> {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'invalid JSON body' }, 400, origin);
  }

  // Honeypot: a real visitor never fills this hidden field. Bots that fill every
  // field on a form do. Respond as if it worked so scripted retries don't adapt —
  // just never touch the database.
  const honeypot = clean(payload.website, 200);
  if (honeypot) {
    return json({ id: 0, name: null, body: '', created: new Date().toISOString() }, 201, origin);
  }

  const game = clean(payload.game, MAX_GAME_LEN);
  const name = clean(payload.name, MAX_NAME_LEN);
  const body = clean(payload.body, MAX_BODY_LEN);

  if (!game || !isValidGameSlug(game)) {
    return json({ error: 'missing or invalid game' }, 400, origin);
  }
  if (!body) {
    return json({ error: 'body is required' }, 400, origin);
  }

  const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';
  const salt = env.IP_HASH_SALT ?? 'field-trials-feedback-default-salt';
  const ipHash = await hashIp(ip, salt);

  const rateRow = await env.DB.prepare(
    "SELECT COUNT(*) AS n FROM comments WHERE ip_hash = ?1 AND created >= datetime('now', '-1 hour')"
  )
    .bind(ipHash)
    .first<{ n: number }>();

  if ((rateRow?.n ?? 0) >= RATE_LIMIT_PER_HOUR) {
    return json({ error: 'rate limit exceeded, try again later' }, 429, origin);
  }

  const created = new Date().toISOString();
  const insert = await env.DB.prepare(
    'INSERT INTO comments (game, name, body, created, ip_hash) VALUES (?1, ?2, ?3, ?4, ?5)'
  )
    .bind(game, name || null, body, created, ipHash)
    .run();

  const id = insert.meta.last_row_id;
  return json({ id, name: name || null, body, created }, 201, origin);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    // Always the fixed configured origin — never a wildcard, never whatever the
    // caller's Origin header claims. A request from elsewhere still gets a normal
    // response (this is publicly readable data either way), it just won't carry a
    // CORS header that a browser on some other origin will accept, so a page on
    // another site can't read the response cross-site.
    const origin = env.ALLOWED_ORIGIN;

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    try {
      if (url.pathname === '/comments' && request.method === 'GET') {
        return await handleGet(url, env, origin);
      }
      if (url.pathname === '/comments' && request.method === 'POST') {
        return await handlePost(request, env, origin);
      }
    } catch (err) {
      console.error('field-trials-feedback error', err);
      return json({ error: 'internal error' }, 500, origin);
    }

    return json(
      { error: 'not found', usage: 'GET /comments?game=<slug>, POST /comments' },
      404,
      origin
    );
  },
};
