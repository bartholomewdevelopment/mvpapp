import React from 'react';
import { ImageIcon } from 'lucide-react';

interface VisualSlotProps {
  /** What belongs here, e.g. "Founder portrait — environmental, desk, natural light". */
  label: string;
  /** Photo | Illustration | Diagram | Motion — shown as the slot's category chip. */
  kind: 'Photo' | 'Illustration' | 'Diagram' | 'Motion';
  /** Tailwind aspect ratio class, e.g. "aspect-video", "aspect-[4/5]". */
  ratio?: string;
  /** Production notes for whoever sources or commissions the asset. */
  note?: string;
  className?: string;
}

/**
 * A visible, intentional placeholder for artwork that has not been produced yet.
 *
 * These are meant to ship in the redesign branch and be swapped one at a time as
 * real assets arrive — a labelled empty frame communicates the design intent far
 * better than a stock image that will need replacing anyway. Every slot in the
 * codebase is catalogued in VISUAL_ASSETS_RECOMMENDATIONS.md.
 */
const VisualSlot: React.FC<VisualSlotProps> = ({
  label,
  kind,
  ratio = 'aspect-video',
  note,
  className = '',
}) => (
  <div
    className={`relative ${ratio} w-full overflow-hidden rounded-card border border-dashed border-hairline-strong bg-white/[0.015] ${className}`}
    role="img"
    aria-label={`Placeholder for ${kind.toLowerCase()}: ${label}`}
  >
    {/* Faint diagonal hatch so the slot reads as deliberately empty, not broken */}
    <div
      className="absolute inset-0 opacity-[0.5]"
      style={{
        backgroundImage:
          'repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 11px)',
      }}
      aria-hidden="true"
    />
    <div className="relative flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
      <div className="flex items-center gap-2 rounded-full border border-hairline bg-white/[0.04] px-3 py-1">
        <ImageIcon className="h-3 w-3 text-accent2027" aria-hidden="true" />
        <span className="eyebrow !text-[0.625rem]">{kind}</span>
      </div>
      <p className="max-w-sm text-sm font-medium text-ink-muted">{label}</p>
      {note && <p className="max-w-md text-xs leading-relaxed text-ink-faint">{note}</p>}
    </div>
  </div>
);

export default VisualSlot;
