// Behaviour + landing checks for the field-notes work. Not part of the build.
import { chromium } from 'playwright';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = dirname(fileURLToPath(import.meta.url));
const base = process.env.BASE_URL ?? 'http://localhost:4321';
const browser = await chromium.launch();
const out = {};

// --- 1. Drawer expands, and does so WITHOUT javascript ---------------------
for (const js of [true, false]) {
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    javaScriptEnabled: js,
  });
  const page = await ctx.newPage();
  await page.goto(`${base}/games/`, { waitUntil: 'domcontentloaded' });
  const first = page.locator('#field-notes details.fn-group').first();
  await first.scrollIntoViewIfNeeded();
  const rowsBefore = await first.locator('.fn-group-row').first().isVisible();
  await first.locator('summary').click();
  await page.waitForTimeout(200);
  const rowsAfter = await first.locator('.fn-group-row').first().isVisible();
  const rowCount = await first.locator('.fn-group-row').count();
  out[js ? 'expand_js' : 'expand_nojs'] = {
    hiddenWhenClosed: rowsBefore === false,
    visibleWhenOpen: rowsAfter === true,
    rowsInDrawer: rowCount,
  };
  if (!js) {
    await page.locator('#field-notes').screenshot({
      path: resolve(outDir, 'after-nojs-expanded.png'),
    });
  } else {
    await page.locator('#field-notes').screenshot({
      path: resolve(outDir, 'after-desktop-expanded.png'),
    });
    // --- 2. "See the cartridge" link actually lands on a cartridge ---------
    const link = first.locator('.fn-cart-link');
    const href = await link.getAttribute('href');
    await link.click();
    await page.waitForTimeout(500);
    const targetId = href.slice(1);
    const target = page.locator(`#${targetId}`);
    out.cartridge_link = {
      href,
      targetExists: (await target.count()) === 1,
      targetInViewport: await target.isVisible(),
      targetSelected: (await target.getAttribute('aria-pressed')) === 'true',
    };
  }
  await ctx.close();
}

// --- 3. The /field-trials/ landing page ------------------------------------
for (const [label, w, h] of [
  ['desktop', 1280, 900],
  ['mobile', 390, 844],
]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h } });
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', (e) => errs.push(String(e)));
  const res = await page.goto(`${base}/field-trials/`, { waitUntil: 'networkidle' });
  await page.screenshot({
    path: resolve(outDir, `after-field-trials-root-${label}.png`),
    fullPage: true,
  });
  const links = await page.locator('ol.builds a.name').evaluateAll((as) =>
    as.map((a) => ({ text: a.textContent.trim(), href: a.getAttribute('href') }))
  );
  out[`landing_${label}`] = { status: res.status(), builds: links.length, errors: errs };
  if (label === 'desktop') out.landing_links = links;
  await ctx.close();
}

// --- 4. Every listed local build resolves ----------------------------------
const ctx = await browser.newContext();
const page = await ctx.newPage();
const checks = [];
for (const l of out.landing_links) {
  if (!l.href.startsWith('/')) continue;
  const r = await page.request.get(`${base}${l.href}`);
  checks.push({ href: l.href, status: r.status() });
}
out.local_build_links = checks;
await ctx.close();

console.log(JSON.stringify(out, null, 1));
await browser.close();
