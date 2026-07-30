import React from 'react';

interface InlineVisualProps {
  /** Raw SVG markup, imported with Vite's `?raw` suffix. */
  markup: string;
  className?: string;
}

/**
 * Inlines one of the section graphics in `src/assets/visuals/`.
 *
 * These must be inlined rather than referenced with `<img>`: an SVG inside an
 * `<img>` is a secure static context, so the webfonts the files name (Instrument
 * Sans, Inter, JetBrains Mono) never load and the type silently falls back to
 * system faces. The markup is a static local file in this repo, not user input,
 * so `dangerouslySetInnerHTML` is safe here. The `.svg` files stay the single
 * source of truth — do not hand-convert them to JSX.
 *
 * Backgrounds are transparent by design so the page aurora shows through: no
 * card, border, or radius belongs around them.
 */
const InlineVisual: React.FC<InlineVisualProps> = ({ markup, className = '' }) => (
  <div
    className={`w-full [&>svg]:h-auto [&>svg]:w-full ${className}`}
    dangerouslySetInnerHTML={{ __html: markup }}
  />
);

export default InlineVisual;
