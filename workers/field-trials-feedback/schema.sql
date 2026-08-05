-- Field Trials feedback — anonymous comment box, one row per submission.
-- Apply with: wrangler d1 execute field-trials-feedback --remote --file=./schema.sql
-- (drop --remote for a local dev database).

CREATE TABLE IF NOT EXISTS comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  game TEXT NOT NULL,              -- roster slug, e.g. "chapel-perilous" (matches games.astro id)
  name TEXT,                       -- optional, capped at 40 chars by the worker before insert
  body TEXT NOT NULL,              -- capped at ~1000 chars by the worker before insert
  created TEXT NOT NULL DEFAULT (datetime('now')),
  ip_hash TEXT NOT NULL            -- salted SHA-256 of the submitter's IP; never the raw IP
);

-- Serves GET /comments?game=X (newest first).
CREATE INDEX IF NOT EXISTS idx_comments_game_created ON comments (game, created DESC);

-- Serves the per-IP-hash rate-limit count (last hour, per game key implicitly via game+ip_hash).
CREATE INDEX IF NOT EXISTS idx_comments_iphash_created ON comments (ip_hash, created);
