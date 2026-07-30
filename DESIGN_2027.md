# MVP Applications — 2027/2028 Design Direction

Branch: `site-redesign-2027`. This is a first-pass implementation of the direction
below, not a finished redesign. Pricing and copy are deliberately untouched here —
those live on `pricing-overhaul`.

---

## What made the old site read as "2024"

Worth naming precisely, because these are the things the redesign undoes:

1. **Seven stacked backgrounds.** Every section painted its own
   `bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900` and layered two or
   three `blur-3xl animate-pulse` coral blobs plus a 5–10% opacity grid on top.
   Scrolling felt like passing through a series of nearly-identical gradients.
2. **Gradient-filled headings.** `from-white via-gray-100 to-[#fd6a62] bg-clip-text
   text-transparent` on nearly every `h1`/`h2`. Instantly dates a page, and it costs
   real contrast at the coral end of the ramp.
3. **A repeated ornament.** A five-element "animated divider" (line, pulsing dot,
   line, pulsing dot, line) appeared under seven different headings.
4. **Idle motion everywhere.** `animate-pulse` on decorative blobs, `animate-ping`
   on badge dots, and a 1000ms shimmer sweep inside every CTA. Motion with no
   meaning attached to it.
5. **Colour-as-elevation.** Depth came from coloured glow shadows
   (`shadow-2xl shadow-[#fd6a62]/50`) rather than from a surface ramp.
6. **Centred everything.** Centred hero, centred headings, centred body copy at
   `max-w-4xl` — long centred measures are hard to read and read as template-y.

## The direction

**Super clean, quiet, and confident. Atmosphere once, not per section. One accent,
spent deliberately. Motion only where it carries information.**

### 1. One canvas
A single deep surface — the site's existing slate-950 (`--canvas: #020617`), with
slate-900 (`--canvas-raised: #0f172a`) above it — set on `html`, `body`, and the app
shell. Sections are transparent and separated by vertical rhythm alone. Atmosphere
is now a single **fixed** layer in `AppLayout`: one slow 38s coral aurora drift behind
the fold, a second glow anchored at the page base, plus a 3.5% grain overlay for a
filmic, non-flat feel. Depth comes from a surface ramp (`--surface` →
`--surface-hover`) and hairline borders (`--hairline: rgba(255,255,255,0.09)`), plus a
reserved coral glow tier for focal elements.

### 2. Type as the main event
- **Instrument Sans** for display, **Inter** for body, **JetBrains Mono** for
  micro-labels. A distinct display face is most of the "2027" signal.
- Fluid `clamp()` scale (`.display-1/2/3`) with real optical tracking: `-0.035em`
  at display sizes tightening as they grow. `text-wrap: balance` on headings,
  `pretty` on ledes.
- Body copy capped at a **62–68ch measure**. Ledes are left-aligned or centred, but
  never a full-width 4xl block of centred text.
- **Mono eyebrows replace the divider ornament.** `ENGAGEMENTS`, `HOW IT WORKS`,
  `SHIPPED SOFTWARE` — uppercase, `0.18em` tracked, with a single 4px accent dot.
  All of it now comes from one `SectionHeader` component, so headings can never
  drift apart again.

### 3. Accent discipline
Coral `#fd6a62` stays — it's the brand — but it is demoted from "fill the headline"
to "one focal point per section": the eyebrow dot, the primary CTA, the active nav
pill. Headings are solid `--ink`. A dedicated `--accent-ink` (`#ffb4ae`) exists for
the cases where coral has to carry small text and still clear AA.

### 4. Ink ramp with contrast built in
Four tokens, each checked against `--canvas`: `--ink` (~18:1, headings),
`--ink-muted` (~9:1, body), `--ink-subtle` (~5.4:1, captions), `--ink-faint`
(~3.4:1, **decorative only**). The old design used `text-gray-400/500` for real body
copy, which sat near or below the AA floor.

### 5. Motion: quiet and purposeful
- Every idle `animate-pulse` / `animate-ping` and every CTA shimmer sweep: removed.
- One signature easing (`cubic-bezier(0.16, 1, 0.3, 1)`) and three durations —
  140ms for hover, 220ms for transforms, 420ms for entrances.
- Scroll reveals stay (the existing `useScrollAnimation` observer is good), but fire
  once and travel a shorter distance.
- **`prefers-reduced-motion` is now honoured globally**, including a rule that forces
  every scroll-reveal class to its final visible state — previously a
  reduced-motion user could have been left with permanently invisible content.

### 6. Geometry
One radius family (`8/12/16/22px`) mapped to `rounded-sm/md/card/panel`, replacing
the ad-hoc mix of `rounded-lg/xl/2xl/3xl`. Two elevation tokens (`shadow-lift`,
`shadow-lift-high`) replace every coloured glow.

### 7. Accessibility & responsive polish
- Skip-to-content link; `<main>` landmark; single `h1`.
- Visible `:focus-visible` ring (2px accent, 3px offset) on every interactive element
  — the old build had none.
- `aria-current` on active nav items, `aria-expanded`/`aria-controls` on the mobile
  toggle, 44px minimum tap target on the menu button.
- Left-aligned two-column hero that collapses cleanly; nav becomes transparent over
  the hero and picks up a hairline + blur once scrolled.

## Where it stands

**Done:** token layer (`src/index.css`), Tailwind bridge (`tailwind.config.ts`),
`SectionHeader` + `VisualSlot` primitives, page shell (`AppLayout`), `Hero`,
`Navigation`, `Footer` CTA, and a systematic pass over the surfaces / ink / radii /
motion in `WhatIDo`, `Process`, `About`, `Portfolio`, `FAQ`, `FAQItem`,
`Testimonials`, `ScrollToTop`.

**Not yet done — the honest list:**
- The interiors of the pricing cards, process step cards, and portfolio project
  blocks still carry old-style inner gradients (`from-[#fd6a62] to-[#fc5951]` icon
  tiles, `bg-gradient-to-br from-gray-900 to-gray-700` screenshot frames). They read
  fine against the new canvas but aren't yet on-system.
- `GetStartedModal` / `GetStartedModalSteps` are untouched (still light-themed
  shadcn). The modal should get the same treatment.
- `Testimonials.tsx` was restyled but is **not rendered** — `Portfolio` replaced it.
  It's dead code and should probably be deleted.
- The shadcn `hsl()` variables were left alone on purpose, so form and dialog
  primitives keep working. A proper dark-token migration for those is a separate job.
- No real artwork yet — see `VISUAL_ASSETS_RECOMMENDATIONS.md`. Three `VisualSlot`
  placeholders are live (hero, process, deliverables).
