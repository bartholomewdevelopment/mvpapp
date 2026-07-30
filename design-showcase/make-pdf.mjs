/** Renders showcase.html to a self-contained PDF via headless Chrome. */
import puppeteer from 'puppeteer-core';
import { resolve } from 'node:path';
import { statSync } from 'node:fs';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const HTML = resolve('./design-showcase/showcase.html');
const PDF = resolve('./design-showcase/MVP-Applications-2027-Design-Showcase.pdf');

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--force-color-profile=srgb', '--allow-file-access-from-files', '--font-render-hinting=none'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1123, height: 794, deviceScaleFactor: 2 });
await page.goto(`file://${HTML}`, { waitUntil: 'networkidle2', timeout: 120_000 });

// Wait for webfonts AND every screenshot to finish decoding, or the PDF gets
// fallback type and blank image boxes.
await page.evaluate(async () => {
  await document.fonts.ready;
  await Promise.all(
    [...document.images].map((img) =>
      img.complete && img.naturalWidth > 0
        ? Promise.resolve()
        : new Promise((res) => {
            img.addEventListener('load', res, { once: true });
            img.addEventListener('error', res, { once: true });
          })
    )
  );
});

const broken = await page.evaluate(() =>
  [...document.images].filter((i) => !i.naturalWidth).map((i) => i.getAttribute('src'))
);
if (broken.length) console.warn('⚠ images failed to load:', broken);

const pages = await page.evaluate(() => document.querySelectorAll('.page').length);
await new Promise((r) => setTimeout(r, 800));

await page.pdf({
  path: PDF,
  width: '1123px',
  height: '794px',
  printBackground: true,
  pageRanges: `1-${pages}`,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

await browser.close();
console.log(`✓ ${PDF}`);
console.log(`  pages: ${pages}   size: ${(statSync(PDF).size / 1048576).toFixed(2)} MB`);
