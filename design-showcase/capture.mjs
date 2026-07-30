/**
 * Headless-Chromium capture of the site-redesign-2027 branch.
 *
 * Uses the system Chrome via puppeteer-core (installed with --no-save, so the
 * branch's package.json stays clean). The in-app browser pane was unreliable
 * below the fold, so every screenshot here comes from real headless Chrome at
 * deviceScaleFactor 2.
 */
import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.env.BASE_URL || 'http://localhost:5200';
const OUT = resolve(process.argv[2] || './screens');
mkdirSync(OUT, { recursive: true });

/* Sections to capture as their own crops. `anchor` is the wrapper id in
   AppLayout; `pad` trims the generous section padding so the crop is tight. */
const SECTIONS = [
  { id: 'what-i-do', name: 'services-package', pad: 40 },
  { id: 'process', name: 'process', pad: 40 },
  { id: 'portfolio', name: 'portfolio', pad: 40 },
  { id: 'about', name: 'about', pad: 40 },
  { id: 'faq', name: 'faq', pad: 40 },
];

/** Settle the page: kill the cookie banner, reveal scroll animations, freeze motion. */
async function prepare(page) {
  // The cookie-consent widget is a third-party CDN overlay — remove it so it
  // doesn't sit across the bottom of every screenshot.
  await page.evaluate(() => {
    document
      .querySelectorAll('.cc-window, .cc-banner, .cc-revoke, #aiappbuilder-badge')
      .forEach((el) => el.remove());
  });

  // Walk the page so IntersectionObserver fires naturally, then belt-and-braces
  // force the reveal classes for anything that didn't trigger.
  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.6);
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 90));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 200));
    document
      .querySelectorAll(
        '.scroll-fade-up,.scroll-fade-left,.scroll-fade-right,.scroll-fade-in,.scroll-scale-in,.stagger-children'
      )
      .forEach((el) => el.classList.add('visible'));
  });

  // Freeze the aurora drift and any transitions so captures are crisp and
  // repeatable rather than caught mid-tween.
  await page.addStyleTag({
    content: `*,*::before,*::after{animation-play-state:paused!important;transition:none!important}`,
  });

  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 600));
}

async function capture({ label, width, height, isMobile }) {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    defaultViewport: { width, height, deviceScaleFactor: 2, isMobile, hasTouch: isMobile },
    args: ['--force-color-profile=srgb', '--hide-scrollbars', '--font-render-hinting=none'],
  });

  try {
    const page = await browser.newPage();
    await page.goto(BASE, { waitUntil: 'networkidle2', timeout: 90_000 });
    await prepare(page);

    // Above-the-fold hero
    await page.screenshot({ path: `${OUT}/${label}-hero.png` });
    console.log(`  ✓ ${label}-hero.png`);

    // Full page
    await page.screenshot({ path: `${OUT}/${label}-fullpage.png`, fullPage: true });
    console.log(`  ✓ ${label}-fullpage.png`);

    // Per-section crops
    for (const s of SECTIONS) {
      const box = await page.evaluate(
        (id, pad) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const r = el.getBoundingClientRect();
          return {
            x: 0,
            y: Math.max(0, r.top + window.scrollY + pad),
            width: document.documentElement.clientWidth,
            height: Math.max(200, r.height - pad * 2),
          };
        },
        s.id,
        s.pad
      );
      if (!box) {
        console.log(`  – ${label}-${s.name}: #${s.id} not found`);
        continue;
      }
      // Very tall sections get trimmed so the crop stays legible in the PDF.
      const clip = { ...box, height: Math.min(box.height, isMobile ? 2400 : 1700) };
      await page.screenshot({ path: `${OUT}/${label}-${s.name}.png`, clip, captureBeyondViewport: true });
      console.log(`  ✓ ${label}-${s.name}.png  (${Math.round(clip.height)}px tall)`);
    }
  } finally {
    await browser.close();
  }
}

console.log(`Capturing ${BASE} -> ${OUT}`);
console.log('desktop 1440:');
await capture({ label: 'desktop', width: 1440, height: 900, isMobile: false });
console.log('mobile 390:');
await capture({ label: 'mobile', width: 390, height: 844, isMobile: true });
console.log('done');
