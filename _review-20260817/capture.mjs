// Field-notes review capture. Not part of the site build.
// Usage: node _review-20260817/capture.mjs before|after
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname);
mkdirSync(outDir, { recursive: true });

const tag = process.argv[2] ?? 'shot';
const base = process.env.BASE_URL ?? 'http://localhost:4321';

const browser = await chromium.launch();

async function shoot(label, width, height, opts = {}) {
  const ctx = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(m.text());
  });
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.goto(`${base}/games/`, { waitUntil: 'networkidle' });
  if (opts.noJs !== true) {
    await page.waitForSelector('#field-notes:not([hidden])', { timeout: 8000 }).catch(() => {});
  }
  await page.waitForTimeout(400);

  const section = page.locator('#field-notes');
  const count = await section.count();
  let box = null;
  if (count > 0) {
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    box = await section.boundingBox();
    await section.screenshot({ path: resolve(outDir, `${tag}-${label}-section.png`) });
  }

  // Everything visible below the fold at the section's top edge, for scale.
  await page.screenshot({
    path: resolve(outDir, `${tag}-${label}-viewport.png`),
  });

  const rows = await page.locator('#field-notes li').count();
  const details = await page.locator('#field-notes details').count();
  console.log(
    JSON.stringify({
      label,
      sectionPresent: count > 0,
      sectionHeightPx: box ? Math.round(box.height) : null,
      listItems: rows,
      detailsGroups: details,
      consoleErrors: errors,
    })
  );
  await ctx.close();
}

await shoot('desktop', 1280, 900);
await shoot('mobile', 390, 844);

// No-JS pass: the section must still carry every note.
const ctx = await browser.newContext({
  viewport: { width: 1280, height: 900 },
  javaScriptEnabled: false,
});
const page = await ctx.newPage();
await page.goto(`${base}/games/`, { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(300);
const njSection = page.locator('#field-notes');
const njPresent = (await njSection.count()) > 0;
let njVisible = false;
if (njPresent) {
  njVisible = await njSection.isVisible();
  if (njVisible) {
    await njSection.scrollIntoViewIfNeeded();
    await njSection.screenshot({ path: resolve(outDir, `${tag}-nojs-section.png`) });
  }
}
console.log(
  JSON.stringify({
    label: 'nojs',
    sectionPresent: njPresent,
    sectionVisible: njVisible,
    listItems: njPresent ? await page.locator('#field-notes li').count() : 0,
  })
);
await ctx.close();
await browser.close();
