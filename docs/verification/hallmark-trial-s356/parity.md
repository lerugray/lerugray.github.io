# Route and link parity, look D (af54ea5) against the redesign

Both builds are `npm run build` output; D from a clean checkout of af54ea5, the redesign from this branch. Every HTML file in each `dist/` is a route here, including the game builds copied from `public/`.

```
ROUTES D=50 H=50 identical=yes
LINKS D ok=1502/1502 H ok=1435/1435
A-HREFS D=1707 H=1707
LOST 0
GAINED 0
```

- **Routes:** the set of built HTML files is identical.
- **Internal hrefs** (`<a>` and `<link>` with a root-relative or relative target, fragments checked against the target page's ids): every one resolves in both builds. The redesign has fewer because each page now links one stylesheet bundle instead of three.
- **Anchors:** every `<a href>` on every page, compared as a multiset per page: none lost, none gained.


Built HTML files (both builds, same set):

- /about/index.html
- /auftragstaktik/index.html
- /buddies/index.html
- /catalogdna/index.html
- /conflict-simulations-llc/death-of-an-empire/index.html
- /conflict-simulations-llc/index.html
- /conflict-simulations-llc/veridian-contraption/index.html
- /conflict-simulations-llc/zero-page/index.html
- /devforge/index.html
- /field-trials/alkahest/alkahest.html
- /field-trials/alkahest/index.html
- /field-trials/capriole/index.html
- /field-trials/index.html
- /field-trials/jacquard-index/index.html
- /field-trials/lines-of-advance/index.html
- /field-trials/material-breach/index.html
- /field-trials/oddseedz/index.html
- /field-trials/office-of-the-road/index.html
- /field-trials/popinjay/index.html
- /field-trials/shoeleather/index.html
- /field-trials/stray-squadron/index.html
- /games/index.html
- /generalstaff/index.html
- /hammerstein-ai/index.html
- /hammerstein-model/index.html
- /hammerstein/index.html
- /index.html
- /kit/index.html
- /kreuzfeuer/index.html
- /mission-brain/index.html
- /music/index.html
- /raybrain/index.html
- /retrogaze/index.html
- /services/index.html
- /veridian-contraption-demo/index.html
- /wargame-modules/index.html
- /works/index.html
- /writing/boolean-gates/index.html
- /writing/columbo-needed-a-confession/index.html
- /writing/democratic-defeat-counter-autopsy/index.html
- /writing/gs-launch-post/index.html
- /writing/hammerstein/index.html
- /writing/hundred-percent-then-broke-it/index.html
- /writing/i-am-the-gate/index.html
- /writing/index.html
- /writing/judgment-does-not-transfer/index.html
- /writing/out-of-the-notebook/index.html
- /writing/the-bird-didnt-run/index.html
- /writing/the-model-that-hangs-up/index.html
- /writing/the-register-not-the-man/index.html

Unresolved internal hrefs, D:
none

Unresolved internal hrefs, H:
none
