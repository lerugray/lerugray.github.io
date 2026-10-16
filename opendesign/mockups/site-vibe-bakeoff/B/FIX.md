## Fix round (one pass). Keep your direction, palette and type exactly; fix only what is listed. Same hard rules as ../BRIEF-COMMON.md and ../CONTENT.md (no new sentences; Terms verbatim; local fonts only; no browser, no network). Edit modules.html, home.html and styles.css in place, then update NOTES.md (still at most 150 words) and print it.

Seat rulings that apply to every direction:
- The Napoleon at Bay screenshot itself begins mid-button at its left edge (": On"). That is the source file; do not crop it further and do not try to hide it.
- The testimonial pull quote must not repeat. The full three paragraphs must appear once; if you want a large pulled sentence, set that sentence large where it occurs inside the full text (or as the opening line set large), so no sentence is printed twice.
- Screenshot groups: frames in the same row share one height and bottom edge; use object-fit: contain on a uniform mat so no frame shows a dead empty block. A screenshot whose text cannot be read at its size gets a larger slot (full grid width if needed); every screenshot may link to its own image file (href to ../shared/images/<file>) so a reader can open it full size.
- Captions sit directly under their own image, aligned to the frame edge. Paired figures have their captions on one baseline.
- Repeated stat labels ("July 2026 / since July 2026") collapse to one label each.
- Pricing: all four tiers, each with its price, scope, title and description verbatim from CONTENT.md, then the payment line. Do not repeat "Monster games" twice in one row: show scope "Monster games" and the description "Multiple maps, thousands of counters, campaign scale." with the title line "Monster games quoted per project" only if it adds information in your layout.
- Terms must read as plain, confident policy at normal body size and contrast, not fine print.
- Phone width 375: the Email action must be visible on the first screen; no one-word last lines in the dek or headings where avoidable (use text-wrap: balance / pretty).
- No heading touching its paragraph; no paragraph touching a stats row.

Your looker's defects (fix every one that is not overridden above):

DEFECTS:
1. tile4, Pricing: the section never states a price. It has only the deposit and support terms, then a large empty area. The $400 to $800 range appears only in the hero.
2. All hero shots (modules-first, home-first, 375): the game toolbar is clipped on the left, so the first button reads ": On".
3. modules-first: the caption sits about 900px below the price block at the bottom-right. The right column above it is empty.
4. home-first: the heading "The wargame you own" is cut through its letters at the fold.
5. tile1, stats strip: "July 2026 / since July 2026" and "2 days / previews within 2 days" each say the same thing twice. A row of big numbers like this is a common template pattern.
6. tile2: the Flattop and Paths of Glory frames have different heights. The For the People frame is narrower than the 80–1360 grid. Paths has a blank grey-green block at lower left, and its card stack is cut off at the bottom.
7. tile3, right: the Phase record screenshot is too small to read at 1x.
8. tile3, testimonial: the pull quote repeats a sentence from the body text below it. The body is long, grey and low contrast.
9. tile4, Try one: the two frames have different heights and their links sit at different baselines. The counters can't be read, and the East Prussia shot looks like an almost empty map.
10. tile5, Terms: the small grey text and the opt-out list read like fine print.
11. 375: the subhead breaks into a short line plus a one-word line ("browser."). Its tight letter spacing makes it harder to read.

- Restore the full four-tier Pricing section; it is missing entirely from modules.html (only the hero mentions $400 to $800).
