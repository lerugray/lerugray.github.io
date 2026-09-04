import { chromium } from 'playwright';
const base = 'http://localhost:4321';
const b = await chromium.launch();
const out = {};
for (const h of ['#cart-shoeleather', '#cart-alkahest', '#shoeleather', '#cart-office-of-the-road', '']) {
  const ctx = await b.newContext({ viewport:{width:1280,height:900} }); // fresh doc each time
  const p = await ctx.newPage();
  await p.goto(`${base}/games/${h}`, { waitUntil: 'networkidle' });
  await p.waitForTimeout(400);
  const id = h.replace('#','').replace(/^cart-/,'') || 'chapel-perilous';
  out[h||'(no hash)'] = {
    pressed: await p.locator(`#cart-${id}`).getAttribute('aria-pressed'),
    panelVisible: await p.locator(`#panel-${id}`).isVisible(),
  };
  await ctx.close();
}
console.log(JSON.stringify(out,null,1));
await b.close();
