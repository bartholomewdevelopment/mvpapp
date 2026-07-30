# Graphics, Illustrations & Photography — Per-Section Recommendations

Where visuals would strengthen the page, in priority order. The site is currently
**almost entirely type, icons, and product screenshots** — the lucide icon tiles are
doing work that real artwork should be doing.

`VisualSlot` (`src/components/VisualSlot.tsx`) renders a labelled dashed frame so a
planned visual is visible in the layout before the asset exists. Three are live now;
the rest of this list is where to add more.

## Art direction (applies to everything below)

- **Dark-native.** Assets must sit on `#020617` (slate-950, the existing brand dark).
  Ask for transparent PNG/SVG or dark-background exports — light-background stock will
  punch a hole in the page.
- **Monochrome + one coral accent** (`#fd6a62`). If a visual needs three colours to
  work, it's the wrong visual.
- **Evidence, not aspiration.** The whole pitch is "we measure before we build."
  Charts, interview notes, thresholds, and timelines are on-message; rocket ships,
  lightbulbs, and 3D gradient blobs are actively off-message.
- **Formats.** SVG for diagrams/illustrations, AVIF+WebP with `<picture>` for photos,
  `width`/`height` set to prevent layout shift, `loading="lazy"` below the fold.
- Photography of real people beats illustration for trust; illustration beats stock
  photography for process. Never use generic "team at a whiteboard" stock.

---

## 1. Hero — **highest impact** · slot live

**Illustration / animated diagram, 4:5 portrait.**
Evidence converging into a product: interview tally marks, a pricing-test chart, and
signed commitment cards flowing into a single shipped app screen. Spare technical line
work, coral only on the "shipped" end.
*Why:* the hero currently has no image at all. This is the one visual that has to
communicate the entire positioning before anyone scrolls.
*Cheaper alternative:* a real screenshot of a delivered MVP in a dark browser frame,
with two or three annotated callouts.

## 2. Process — the validation → build timeline · slot live

**Diagram, 16:7.**
Horizontal timeline: Discovery → Validation → Design → Build → Handoff, with
durations, and a prominent **go / pivot / kill decision gate** after validation.
Annotate the gate with the actual thresholds (60% severity 8/10+, 50% already
spending, 5–10 paying commitments).
*Why:* this is the most persuasive and most differentiating thing the business does,
and right now it's five paragraphs of text. A diagram makes it graspable at a glance.

## 3. Services — deliverables, made physical · slot live

**Photo, 21:9 flat-lay.**
Shot from above on a dark surface: the printed PDF manual, a laptop showing the
staging build, a tablet with Figma wireframes.
*Why:* "100% code ownership + 30 days support + PDF manual" is abstract. Showing the
artefacts makes the package feel like a real object you receive.

## 4. About / founder — biggest trust win after the hero

Currently a single studio-style portrait. Recommended additions:
- **Environmental portrait (4:5)** — Joseph at an actual desk, real light, working.
  Reads far more credible than a headshot on a gradient.
- **Two or three candid work photos** for a small strip: a whiteboard mid-session, a
  screen-share during a coaching call, notes from a customer interview.
- **Logo lockup row** — the existing MVP Applications / Bartholomew Development marks
  need a proper monochrome dark-mode variant, not opacity-70 colour PNGs.

## 5. Validation methodology — a data visualisation

**Chart, 16:9.** The one legitimately quantitative claim on the page ("90% of startups
fail") plus the interview thresholds deserve a real chart: a simple funnel or a
threshold bar chart showing where an idea passes or fails. Understated, gridless, one
coral series.
*Why:* a company selling data-driven decisions should show one piece of data
graphically. Adds evidence without adding claims.

## 6. Portfolio — mostly in good shape

The browser-framed screenshots and the gallery thumb pattern are the strongest visual
system already on the site. Improvements:
- **Consistent capture standard** — same viewport width, same zoom, dark UI where the
  product supports it. The current set is visibly mixed.
- **Mobile companion shot** for each project (a phone frame beside the desktop frame)
  to demonstrate responsive work.
- **One short screen-recording** (muted, looping, 8–12s, `prefers-reduced-motion`
  respected) of a core flow. Motion of a real product is worth more than three
  screenshots.
- **Retina exports** — several current screenshots look soft when scaled up.

## 7. Testimonials / social proof — the real gap

There is no photographic social proof anywhere. When permission allows:
- Headshots beside quotes (even small, circular, 96px).
- Client logos in a single-row monochrome strip.
- Until then, the existing "Full Transparency" disclaimer is the right call — don't
  fabricate proof to fill the slot.

## 8. FAQ — one explanatory graphic

The "is my idea validated?" checklist answer would work better as a small **checklist
graphic** than as a bulleted paragraph. Everything else in the FAQ should stay text.

## 9. Footer / closing CTA — restraint

No artwork. Keep it type and space. Do commission a **proper dark-mode SVG** of both
logos to replace the current opacity-reduced raster versions.

---

## Suggested production order

| # | Asset | Section | Effort | Impact |
|---|-------|---------|--------|--------|
| 1 | Validation → build timeline diagram | Process | Low (SVG, in-house) | **Very high** |
| 2 | Hero illustration | Hero | Medium (commission) | **Very high** |
| 3 | Environmental founder portrait | About | Low (half-day shoot) | High |
| 4 | Deliverables flat-lay | Services | Low (same shoot) | High |
| 5 | Dark-mode logo SVGs | Nav / Footer | Low | Medium |
| 6 | Screenshot re-capture standard | Portfolio | Low | Medium |
| 7 | Product screen recording | Portfolio | Medium | Medium |
| 8 | Validation threshold chart | Methodology | Low | Medium |
| 9 | Client headshots / logos | Testimonials | Blocked on permission | High when unblocked |

Items 1, 3, and 4 are cheap, in-house, and cover most of the gap — worth doing before
commissioning anything.
