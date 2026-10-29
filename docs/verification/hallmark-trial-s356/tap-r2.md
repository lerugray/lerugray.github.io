# Phone tap on /games/, FIX1 (495c25b) against FIX2 (efac24a)

A tap is a real touch event in headless Chromium (`isMobile`, `hasTouch`, DPR 3). Each of the 11 cartridges that are not the default selection is tapped from three scroll positions: the cell's middle at 15%, 45% and 80% down the screen, counting only taps on a fully visible cell. Positions are read in the first frame after the tap, with no wait. "Shows" means the build's capture starts on screen and its name ends on screen.

| Screen | FIX1: shows the build | FIX1: Play on screen | FIX2: shows the build | FIX2: Play on screen |
| --- | --- | --- | --- | --- |
| 390x844 | 20/33 | 0/33 | 33/33 | 9/33 |
| 375x667 | | | 31/31 | 0/31 |
| 768x1024 | | | 33/33 | 33/33 |

**FIX1.** The drawer opens directly under the tapped row. A tap low on the screen leaves the drawer below the fold in the first frame: in all 13 failures the capture starts at y 798 to 799 of 844. A smooth scroll then lifts the row to the top over about 250ms. Even after the lift, Play ends below the fold (Capriole: Play at y 942 of 844).

**FIX2.** The tap moves the page at once, by the least scroll that puts the whole drawer on screen. When the drawer is taller than the screen, its top goes on screen first. The drawer lands in the same place wherever the tap was. At 390x844 the capture starts at y 40 for every build. Play is on screen for 3 of the 11 builds (Oddseedz, Capriole and Popinjay, from all three positions). For the other 8, Play ends 18 to 124px below the fold, one short scroll down. At 375x667 every drawer is taller than the screen, so each one opens at its top, and the capture and name are on screen. On a tablet (768x1024) the whole drawer, Play included, is on screen for every build. At 1440 a click does not scroll, and the details stay in their column beside the shelf.

**The frame.** `frames/games-H-390-tap-r2-s356.png`: /games/ at 390x844 DPR 3 with the roster head scrolled to the top of the screen. Capriole is the sixth of twelve cartridges, and its cell sat at y 645 to 825, the lowest row on screen; Chapel Perilous was the default selection. After the tap, captured at once: Capriole is selected, its drawer is inside the shelf at y 16, the capture at y 40 to 242, the name to y 341, the facts at y 452 to 610, the audit at y 626 to 738 and Play at y 762 to 810, all on the 844px screen.
