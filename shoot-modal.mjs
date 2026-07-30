import puppeteer from 'puppeteer-core';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT = '/private/tmp/claude-501/-Users-conta-Documents-bartholomew-development-Code-mvpapp/94ad55f3-fc06-490c-9596-302b75d06cc1/scratchpad/shots';
const W = Number(process.argv[2] || 1200), H = Number(process.argv[3] || 950), TAG = process.argv[4] || 'd';

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
const errs = [];
page.on('pageerror', e => errs.push(String(e)));
page.on('console', m => { if (m.type() === 'error' || /warn/i.test(m.type())) errs.push(m.type() + ': ' + m.text().slice(0, 160)); });
await page.setViewport({ width: W, height: H, deviceScaleFactor: 2 });
await page.goto('http://localhost:8080/', { waitUntil: 'networkidle0' });
await page.evaluate(() => { const b = document.querySelector('[id*="cookie" i], .cc-window'); if (b) b.remove(); });
await page.evaluate(() => [...document.querySelectorAll('button')].find(b => /start with validation|get started/i.test(b.textContent)).click());
await new Promise(r => setTimeout(r, 700));

const shot = async (n) => {
  const el = await page.$('[role="dialog"]');
  await el.screenshot({ path: `${OUT}/gsm-${TAG}${n}.png` });
};

await shot(1);
await page.type('#email', 'founder@example.com', { delay: 10 });
await new Promise(r => setTimeout(r, 200));

for (let n = 2; n <= 10; n++) {
  await page.evaluate(() => {
    const d = document.querySelector('[role="dialog"]');
    const btn = [...d.querySelectorAll('button')].find(b => /continue|book my call/i.test(b.textContent) && !b.disabled);
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 500));
  // pick an option on the new step (2nd one, so selection styling is visible mid-list)
  const radios = await page.$$('[role="dialog"] [role="radio"]');
  if (radios.length) { await radios[Math.min(1, radios.length - 1)].click(); await new Promise(r => setTimeout(r, 350)); }
  await shot(n);
}
console.log('errors:', [...new Set(errs)].slice(0, 8));
await browser.close();
