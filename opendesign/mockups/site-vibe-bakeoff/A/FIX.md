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
1. A-modules-first: the screenshot's top-left toolbar button is cut to ": On". The same crop shows in all renders.
2. tile 2, Greenwood quote: "side." sits alone on the last line, the quote repeats paragraph 1 word for word, and the right third of the panel is empty.
3. tile 2, pricing Monster row: the Scope cell just repeats "Monster games quoted per project".
4. tile 2, track record: only "automated rules checks" wraps to two lines, and the paragraph below sits almost touching the stats.
5. tile 3, gallery: the three cards have different heights, so bottoms and captions don't line up. Flattop leaves a white strip on its right, and the gallery has no heading.
6. tile 3, Paths of Glory and For the People thumbnails: too small to read. They don't work as proof.
7. tile 1, Bloody April phase-record image: the text can't be read.
8. tile 4, World Undone: the itch.io link under image 1 almost touches the frame of image 2, so it's unclear which image it belongs to.
9. tile 4, Terms: the text column starts at x≈600, but other sections start at x≈533.
10. tile 5, "One email starts it": no space between the heading and the paragraph.
11. A-modules-375: "Email me" drops to its own nav line, "browser." sits alone on a line, and the price and email button are below the fold.
12. Template tells: the 7/4/600 stats row, full-width "Email me →" bars, and "PL." labels on every section.

