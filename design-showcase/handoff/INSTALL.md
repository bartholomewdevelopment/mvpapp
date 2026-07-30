# Visual assets — installation instructions

**Read this whole file before editing anything.** It is written for an AI coding agent working
in `bartholomewdevelopment/mvpapp`, branch `site-redesign-2027`.

These five assets replace `VisualSlot` placeholders. They were built directly against the
repo's own tokens in `src/index.css` — do not restyle, recolor, or re-typeset them.

---

## 1. Manifest

| File | Size | Ratio | Destination | Load as |
| --- | --- | --- | --- | --- |
| `process-timeline.svg` | 1600×700 | 16:7 | `src/components/Process.tsx` — **existing slot** | inline (has text) |
| `hero-evidence.svg` | 1200×1500 | 4:5 | `src/components/Hero.tsx` — **existing slot** | inline or `<img>` (no text) |
| `validation-thresholds.svg` | 1600×900 | 16:9 | methodology section — **slot does not exist yet** | inline (has text) |
| `validation-checklist.svg` | 1000×720 | 25:18 | FAQ section — **slot does not exist yet** | inline (has text) |
| `portrait-joseph.jpeg` | 1024×1024 | 1:1 | about / founder section — **slot does not exist yet** | `<img>` |

Two of the five have a slot waiting. Three do not — see §5.

---

## 2. Where to put the files

```
src/assets/visuals/process-timeline.svg
src/assets/visuals/hero-evidence.svg
src/assets/visuals/validation-thresholds.svg
src/assets/visuals/validation-checklist.svg
public/images/portrait-joseph.jpeg
```

The SVGs go in `src/` because they are imported. The photograph goes in `public/` because it is
referenced by URL.

---

## 3. How to load the SVGs — this matters

**The three text-bearing SVGs must be inlined, not referenced with `<img>`.** An SVG inside an
`<img>` is a secure static context: the webfonts named in the file (Instrument Sans, Inter,
JetBrains Mono) cannot load there, so the type silently falls back to system fonts and the
CSS animation never runs.

Vite's `?raw` import handles this with no plugin and no JSX conversion:

```tsx
import timelineSvg from '@/assets/visuals/process-timeline.svg?raw';

<div
  className="w-full [&>svg]:h-auto [&>svg]:w-full"
  dangerouslySetInnerHTML={{ __html: timelineSvg }}
/>
```

`dangerouslySetInnerHTML` is safe here — the content is a static local file in our own repo, not
user input.

Do **not** convert these to `.tsx` components by hand. The files contain `style="..."` attributes
and hyphenated SVG attributes that need conversion, and hand-editing is how the coordinates drift.
Keep the `.svg` files as the single source of truth.

`hero-evidence.svg` has no text, so `<img>` is acceptable for it — but its beam and halo
animation only plays when inlined. Prefer inlining it too.

---

## 4. Replacing the two existing slots

### Process.tsx

Find this call (around line 131) and replace the whole `<VisualSlot ... />` element:

```tsx
<VisualSlot
  kind="Diagram"
  ratio="aspect-[16/7]"
  label="The validation → build timeline"
  ...
/>
```

The asset is authored at exactly 16:7, so it fills the slot with no letterboxing. Keep the
surrounding layout and spacing untouched. Remove the now-unused `VisualSlot` import only if no
other slot remains in that file.

### Hero.tsx

Same procedure, around line 96:

```tsx
<VisualSlot
  kind="Illustration"
  ratio="aspect-[4/5]"
  label="Hero visual — the validation-to-build sequence"
  ...
/>
```

The hero is authored at 4:5 and matches.

---

## 5. The three slots that do not exist

`validation-thresholds.svg`, `validation-checklist.svg` and `portrait-joseph.jpeg` have no
destination in the branch yet. **Do not invent placements.** Add a slot in the appropriate
section, matching the ratios in the manifest:

- base rate → methodology section, `aspect-[16/9]`
- checklist → FAQ section, `aspect-[25/18]`
- portrait → about / founder section, `aspect-square`

Consult `VISUAL_ASSETS_RECOMMENDATIONS.md` in the repo root, which catalogues every intended
slot, before choosing a location. If the correct section is ambiguous, stop and ask rather than
guessing.

---

## 6. Rules — do not break these

1. **Backgrounds are transparent by design.** All four SVGs omit a background rect so the page's
   `.aurora` and `.grain` layers show through. Do not add a background fill, a card, a `.surface`
   wrapper, a border, or a `rounded-*` class around them.
2. **Do not re-crop or change any `viewBox`.** Each is cut to its slot's ratio. Changing one
   re-letterboxes the asset.
3. **Do not recolor.** Every value already comes from `src/index.css`: `--ink` `#f8fafc`,
   `--ink-muted` `#cbd5e1`, `--ink-subtle` `#94a3b8`, `--accent` `#fd6a62`, and `--accent-ink`
   `#ffb4ae` for coral at small sizes. If a token changes, update these files deliberately.
4. **Do not shrink the display width.** Small type is 16px in a 1600px canvas. Rendering the
   timeline or base-rate graphic below about 1100px CSS width pushes labels under 11px. They are
   full-width section graphics, not thumbnails or cards.
5. **The portrait ships as shot** — square, uncropped, no gradient, no duotone, and **never
   desaturated**. The warm brick is intentional: it sits beside the brand coral on the wheel.
   Do not run it through the design system's duotone treatment.
6. **Do not add `opacity-0` reveal animations.** Every element is visible without JS or CSS.
   Scroll-entrance classes on the *wrapper* are fine; do not put them on elements inside the SVG.
7. Motion inside the SVGs is already gated behind `prefers-reduced-motion`. Leave it alone.

---

## 7. Verification after installing

- [ ] No console errors, no 404s on the asset paths.
- [ ] With devtools, confirm SVG text computes to `Instrument Sans` / `Inter` / `JetBrains Mono`,
      **not** a system fallback. If it falls back, the SVG is in an `<img>` — fix per §3.
- [ ] No text clipped at any edge. Check the right edge of the timeline specifically
      (the `~1 WEEK · +30 DAYS SUPPORT` line is right-anchored to the axis end).
- [ ] Nothing letterboxes or crops: each wrapper's ratio matches the manifest.
- [ ] Page aurora is visible through the asset backgrounds.
- [ ] Contrast: all label greys should measure ≥4.5:1 against `--canvas` `#020617`.
      `--ink-faint` `#64748b` is decorative only — it must not appear as body or label text.
- [ ] With "reduce motion" enabled at OS level, graphics render fully and statically.

---

## 8. Not included — still needs a camera

The `aspect-[21/9]` slot in `src/components/WhatIDo.tsx`, labelled *"Deliverables, photographed
flat-lay"*, is unfilled. It needs a real photograph, not a vector. Leave the `VisualSlot`
placeholder in place until that shoot happens — a labelled empty frame communicates intent
better than a substitute.

Portfolio re-captures and the looping product screen recording named in
`VISUAL_ASSETS_RECOMMENDATIONS.md` are likewise outstanding.
