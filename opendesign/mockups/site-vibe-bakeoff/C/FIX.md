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
1. C-modules-first: the screenshot's top bar starts mid-button (": On"). The pitch paragraph sits under the "Napoleon at Bay" heading, so it reads like that game's blurb. The "$400 to monster" link is unclear.
2. C-modules-375: the nav has no Email link and no email button shows on the first screen. "DIGITAL / MODULES" wraps, and "browser." sits alone on its own line.
3. tile 1–2, Flattop: the frame runs very tall with no caption. The map labels are cut ("ella Lavella", "New"), and the log panel is mostly empty white.
4. tile 2, Paths of Glory: a dead green/black block fills the bottom-left. Its frame is about 300px taller than For the People's, which leaves a hole under that caption. The card text and the For the People map can't be read.
5. tile 2, pull quote: "side.”" sits alone on line 3. The quote appears again word for word at the end of testimonial column 1 (tile 3). Screenshots split the quote from its attribution, which weakens the set-piece.
6. tile 3, Bloody April log and East Prussia map: the text is too small to read. In "Try one" the two frame bottoms don't line up, so the links sit at different heights.
7. tile 4, pricing: the "Quoted" row sits about 5px right of the other columns. "Monster games / Monster games quoted per project" says the same thing twice. The payment note is indented to no column.
8. Craft: it looks like a template. Small uppercase labels, ↗ on every link, a stock blue button, and a sans-plus-serif pairing.

