# FIX pass 1 on the built Wargame Modules page (edit only src/styles/spec.css and src/pages/wargame-modules.astro)
Same rules as opendesign/BUILD-BRIEF-modules-spec.md: no commit, no push, no servers, no browsers, no network; Terms text
unchanged; every word of copy from the current page. The approved mockup is opendesign/mockups/site-vibe-bakeoff-D/.
An independent look compared the build to the mockup. Make the build match the mockup again, and finish two fixes:
1. Pricing "Quoted" card: remove the extra bold line "Monster games quoted per project." so the card matches the mockup.
2. Terms links: style exactly as the mockup: "Publishers who want an official adaptation can contact me." is a carmine
   underlined link (href mailto:rweiss@consimsltd.com), as in the mockup. The email inside term 4 stays a working mailto link,
   styled as the mockup styles inline links in body text.
3. Hero: the Napoleon at Bay map's inset inside its frame matches the mockup (about 15px per side at 1x, aligned with the
   caption rule), and the intro paragraph in the left column sits at the mockup's vertical position (it is ~16px too low).
4. Napoleon hero far-left edge: a cut slider track is still visible. Increase the CSS framing (object-position right, frame
   a little narrower) until the leftmost toolbar fragment is fully hidden. CSS only; never edit images.
5. Testimonial attribution "David Greenwood, Bloody April commission" must stay on one line at 1440 (white-space: nowrap on
   the name part, or a wider attribution column); it may wrap only at phone width, between "Greenwood," and "Bloody".
6. Bloody April right card (Phase record, bloody-april-ai.webp): the image fills its card's well the way the mockup does;
   no ~105px empty dark bands above and below. Left Bloody April card: no ~17px dark gutters beside the map; the image fills
   the well width. Both cards keep a shared bottom edge.
Then run `npm run build` (must pass) and print a report of at most 120 words.
