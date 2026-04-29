import { Resvg } from '@resvg/resvg-js';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const out = resolve(projectRoot, 'public/og-image.png');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#e8dfc8"/>
  <rect x="0" y="0" width="1200" height="36" fill="#6b2d2d"/>
  <text x="96" y="24" font-family="Consolas, monospace" font-size="13" letter-spacing="0.35em" fill="#e8dfc8" text-transform="uppercase">PL. I.A — Frontispiece</text>
  <text x="96" y="330" font-family="Georgia, serif" font-size="132" font-weight="400" fill="#1f1b14">Ray Weiss</text>
  <text x="96" y="418" font-family="Georgia, serif" font-size="34" font-style="italic" fill="#1f1b14">Brooklyn wargame designer,</text>
  <text x="96" y="462" font-family="Georgia, serif" font-size="34" font-style="italic" fill="#1f1b14">running four businesses.</text>
  <rect x="96" y="508" width="1008" height="1" fill="#6b6356" opacity="0.55"/>
  <text x="1104" y="572" font-family="Consolas, monospace" font-size="21" fill="#6b6356" text-anchor="end">lerugray.github.io</text>
</svg>`;

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: {
    loadSystemFonts: true,
  },
});

const png = resvg.render().asPng();
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, png);
console.log(`Wrote ${out} (${png.length} bytes)`);
