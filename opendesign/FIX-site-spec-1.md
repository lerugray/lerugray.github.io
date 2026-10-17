# FIX pass 1 on the site-wide D move (same rules as opendesign/BUILD-BRIEF-site-spec.md: no commit, no push, no servers,
# no browsers, no network; Wargame Modules and /kreuzfeuer/ (restored standalone design, never touch it) stay byte-identical).
Two independent Opus looks found these. Fix every one:

HOME (src/pages/index.astro), the priority:
1. Build the approved mockup's "Work with me" band (opendesign/mockups/site-vibe-bakeoff-D/home.html): the Email me button,
   the dark Digital wargame modules screenshot well, and the service cards, in the first screen as in the mockup. Its copy is
   real and allowed: use the exact lines the mockup uses, which come verbatim from src/pages/services.astro (offer titles,
   their one-line descriptions, prices) and the services dek "A small number of commissions a year." Link each card to its page.
   Keep everything else the home page has today, below that band.
2. Under the headline, use the mockup's locator line ("Brooklyn, NY · 40°41′N · rweiss@consimsltd.com" style, as the mockup
   has it) instead of the old atlas UNIT/TYPE/SCALE/LOC slug. The headline stays "Brooklyn wargame designer, running four businesses."
3. No ~2,200px empty left column on the home page: rebalance the layout so both columns fill or the lower sections go full width.

SITE-WIDE:
4. Footer: the "Field Trials" column appears twice; show it once. The colophon line "Set in IBM Plex & GFS Didot" is now false:
   change it to "Set in Newsreader & IBM Plex".
5. Product/tool pages (generalstaff, hammerstein, hammerstein-ai, hammerstein-model, mission-brain and any like them): put
   their spec and repo lines in the D boxed spec card with a section bar, as /kit does. Same treatment everywhere.
6. Page headers consistent across pages (one header pattern for title, eyebrow and dek); the red eyebrow must not crowd the
   title (conflict-simulations-llc/* subpages); titles use Newsreader (zero-page title looked like a sans).
7. Active nav state on every page, including product pages.
8. Tables (auftragstaktik and any others): no mid-word breaks, readable text size, no clipped header at 375px (allow the
   table to scroll horizontally inside its own box on phones, never the page).
9. /games/ and /field-trials/: blocks share one content width and left edge (ROSTER bar, the dark cabinet, FIELD REPORT bar,
   FIELD NOTES list); the cabinet's green-on-black text readable (size/contrast); field-trials numbers sit close to their titles.
10. Essays: text measure 65-75 characters (about 36-40rem at the essay size), same measure as About.
11. /writing/ list: the underline covers the title only, not the date, dot and minutes.
12. About, buddies, catalogdna, devforge: no large empty gap between the intro line and the body text.
Then `npm run build` (must pass) and print a report of at most 150 words.
