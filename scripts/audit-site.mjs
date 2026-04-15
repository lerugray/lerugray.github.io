import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const auditDir = resolve(projectRoot, 'audit-screenshots');
mkdirSync(auditDir, { recursive: true });

const baseURL = process.env.AUDIT_BASE_URL ?? 'https://lerugray.github.io';

const pages = [
  { path: '/', name: '01-home' },
  { path: '/about/', name: '02-about' },
  { path: '/writing/', name: '03-writing-index' },
  { path: '/writing/hammerstein/', name: '04-essay-hammerstein' },
  { path: '/conflict-simulations-llc/', name: '05-csl-umbrella' },
  {
    path: '/conflict-simulations-llc/veridian-contraption/',
    name: '06-csl-veridian',
  },
  {
    path: '/conflict-simulations-llc/death-of-an-empire/',
    name: '07-csl-doae',
  },
  { path: '/catalogdna/', name: '08-catalogdna' },
  { path: '/retrogaze/', name: '09-retrogaze' },
  { path: '/devforge/', name: '10-devforge' },
  { path: '/auftragstaktik/', name: '11-auftragstaktik' },
  { path: '/buddies/', name: '12-buddies' },
  { path: '/music/', name: '13-music' },
];

const mobilePagesToShoot = new Set([
  '01-home',
  '05-csl-umbrella',
  '06-csl-veridian',
]);

console.log(`Auditing ${baseURL}`);
console.log(`Output: ${auditDir}`);

const browser = await chromium.launch();
const desktop = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const mobile = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
});

for (const p of pages) {
  const url = `${baseURL}${p.path}`;
  const page = await desktop.newPage();
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.screenshot({
      path: resolve(auditDir, `${p.name}-desktop.png`),
      fullPage: true,
    });
    console.log(`  desktop  ${p.name}`);
  } catch (err) {
    console.log(`  FAILED   ${p.name}: ${err.message}`);
  } finally {
    await page.close();
  }

  if (mobilePagesToShoot.has(p.name)) {
    const mPage = await mobile.newPage();
    try {
      await mPage.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      await mPage.screenshot({
        path: resolve(auditDir, `${p.name}-mobile.png`),
        fullPage: true,
      });
      console.log(`  mobile   ${p.name}`);
    } catch (err) {
      console.log(`  FAILED M ${p.name}: ${err.message}`);
    } finally {
      await mPage.close();
    }
  }
}

await browser.close();
console.log('Done.');
