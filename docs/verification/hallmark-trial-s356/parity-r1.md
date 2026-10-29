# Route and link parity, FIX1: look D (af54ea5) against the fixed redesign (495c25b)

Same method as `parity.md`, rerun on fresh builds: D from a clean checkout of af54ea5, the redesign at the FIX1 head 495c25b, and for the delta the redesign before this fix (564468c). Every HTML file in each `dist/` is a route, including the game builds copied from `public/`.

```
ROUTES D=50 H=50 identical=yes
LINKS D ok=1502/1502 H ok=1435/1435
A-HREFS D=1707 H=1706
LOST 1 (distinct hrefs lost: 0)
GAINED 0
```

- **Routes:** the set of built HTML files is identical (the same 50 as in `parity.md`).
- **Internal hrefs** (`<a>` and `<link>` with a root-relative or relative target, fragments checked against the target page's ids): every one resolves in both builds, D 1502/1502 and the redesign 1435/1435, the same counts as before the fix.
- **Anchors:** one anchor fewer, on purpose: `mailto:rweiss@consimsltd.com` on `/` x1. That is the header's copy of the address on `/`, removed so the address shows once on the home's first screen (defect 3); the hero's address button, the commissions' `Email me`, the flagship row and the footer still carry the same link, so no destination is lost from any page. No anchor was gained.

## What this fix changed, against the redesign before it (564468c)

```
ROUTES identical=yes  LINKS ok=1435/1435
A-HREFS 1707 -> 1706  LOST 1  GAINED 0
VISIBLE WORDS removed=5 added=0 changes=2
  /: "Brooklyn, NY · 40°41′N" removed (after "Ray Weiss")
  /: "rweiss@consimsltd.com" removed (after "e Modules Writing Businesses Tools About")
```

Unresolved internal hrefs, D: none

Unresolved internal hrefs, H: none
