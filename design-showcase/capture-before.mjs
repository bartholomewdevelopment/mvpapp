/** Captures the CURRENT LIVE design (main branch) for the before/after comparison. */
import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE_URL || 'http://localhost:5200';
const OUT = resolve(process.argv[2] || './screens');
mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 },
  args: ['--force-color-profile=srgb', '--hide-scrollbars', '--font-render-hinting=none'],
});

const page = await browser.newPage();
await page.goto(BASE, { waitUntil: 'networkidle2', timeout: 90_000 });
await page.evaluate(() => {
  document.querySelectorAll('.cc-window,.cc-banner,.cc-revoke,#aiappbuilder-badge').forEach((e) => e.remove());
});
await page.evaluate(async () => {
  const step = Math.round(window.innerHeight * 0.6);
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 80));
  }
  window.scrollTo(0, 0);
  await new Promise((r) => setTimeout(r, 200));
  document
    .querySelectorAll('.scroll-fade-up,.scroll-fade-left,.scroll-fade-right,.scroll-fade-in,.scroll-scale-in,.stagger-children')
    .forEach((e) => e.classList.add('visible'));
});
await page.addStyleTag({ content: `*,*::before,*::after{animation-play-state:paused!important;transition:none!important}` });
await page.evaluate(() => document.fonts.ready);
await new Promise((r) => setTimeout(r, 500));

await page.screenshot({ path: `${OUT}/before-hero.png` });
console.log('  ✓ before-hero.png');

const box = await page.evaluate(() => {
  const el = document.getElementById('what-i-do');
  const r = el.getBoundingClientRect();
  return { x: 0, y: r.top + window.scrollY + 30, width: document.documentElement.clientWidth, height: 1500 };
});
await page.screenshot({ path: `${OUT}/before-services.png`, clip: box, captureBeyondViewport: true });
console.log('  ✓ before-services.png');

await browser.close();
