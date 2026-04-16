import { Resvg } from '@resvg/resvg-js';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const out = resolve(projectRoot, 'public/og-image.png');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0c0b09"/>
  <text x="96" y="340" font-family="Arial" font-size="148" font-weight="500" fill="#f5f0e6">Ray Weiss</text>
  <text x="96" y="430" font-family="Georgia" font-size="38" font-style="italic" fill="#f5f0e6">Brooklyn wargame designer,</text>
  <text x="96" y="478" font-family="Georgia" font-size="38" font-style="italic" fill="#f5f0e6">running four businesses.</text>
  <text x="1104" y="572" font-family="Consolas" font-size="22" fill="#a8a095" text-anchor="end">lerugray.github.io</text>
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
