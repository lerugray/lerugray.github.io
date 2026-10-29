# Route and link parity, FIX2: look D (af54ea5) against the FIX2 head (efac24a)

Same method as `parity.md` and `parity-r1.md`, rerun on fresh builds, each from a clean `npm ci` in its own worktree: look D at af54ea5, FIX1 at 495c25b and FIX2 at efac24a. Every HTML file in each `dist/` is a route, including the game builds copied from `public/`. Internal hrefs are `<a>` and `<link>` targets that are root-relative or relative, with fragments checked against the target page's ids. The script reproduces the FIX1 counts exactly (D 1502/1502, FIX1 1435/1435, anchors 1707 and 1706) before it is pointed at FIX2.

```
ROUTES D=50 H=50 identical=yes
LINKS D ok=1502/1502 H ok=1435/1435
A-HREFS D=1707 H=1706
LOST 1 (distinct hrefs lost: 0)
GAINED 0
```

- **Routes:** the set of 50 built HTML files is identical.
- **Internal hrefs:** every one resolves in both builds, D 1502/1502 and FIX2 1435/1435, the same counts as FIX1.
- **Anchors:** the one anchor fewer is the same one as in FIX1: `mailto:rweiss@consimsltd.com` on `/` x1, the header's second copy of the address on the home's first screen. No destination is lost from any page and nothing is gained.

## What this fix changed, against FIX1 (495c25b)

```
ROUTES identical=yes  LINKS ok=1435/1435
A-HREFS 1706 -> 1706  LOST 0  GAINED 0
```

With the two renamed CSS bundles normalized (`SiteFooter.*.css`, `games@_@astro.*.css`), the only built HTML file that differs from FIX1 is `/games/index.html` (the cabinet's script and scoped styles).

Unresolved internal hrefs, D: none

Unresolved internal hrefs, FIX2: none
