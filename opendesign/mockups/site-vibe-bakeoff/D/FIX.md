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

- Visible text must not show raw link paths such as /wargame-modules or /services; those are hrefs, not labels.
DEFECTS:
1. D-modules-first: under the pricing/email box, the left column has an empty band about 300px tall at 2x, while the right column runs on into the "What a module includes" box. The fold cuts through the top edges of the Track record card and the next screenshot ("MM14 A14" labels sliced).
2. D-modules-first, D-home-first, all tiles: the Napoleon at Bay toolbar label is clipped to ": On" at the left edge. "Advanced to initiative" (top right) is too small to read.
3. Tile 1, Track record card: big dead gap between the body text and the Greenwood quote. In the Flattop shot the left edge cuts off "ella Lavella" and "DOW", and the Wildcat counter sits on top of the "Lexington" label.
4. Tile 2: in Paths of Glory, an empty grey block sits under the map. The For the People card has about 330px of empty black under its caption. The Phase record card ends about 220px above the Bloody April card, so the bottoms don't line up.
5. Tile 2, Greenwood set-piece: the gold pull quote and the full quote fight each other. "Bargain" also appears again in the Track record card. The three-column body reads as a wall of text.
6. Tile 3: the payment line is one row of about 150 characters in small monospace, which reads like fine print. The two "Try one" links sit at different heights (y1571 vs y1484). The screenshot UI can't be read at this size.
7. Tiles 2–4: the hexagon icons in the section corners look like a template.
8. D-modules-375: the nav, email and ticker fill about 550px. No screenshot or Email button shows on the first screen. The tagline breaks "in / a browser."

