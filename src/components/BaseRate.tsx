import React from 'react';
import InlineVisual from './InlineVisual';
import baseRateSvg from '@/assets/visuals/validation-thresholds.svg?raw';

/**
 * The validation methodology's one piece of data, per §5 of
 * VISUAL_ASSETS_RECOMMENDATIONS.md. There was no methodology section to hang it
 * on, so it gets its own band immediately ahead of Process: the graphic's closing
 * line ("the gate exists to decide which side of this grid you land on") reads as
 * the setup for the decision gate in the timeline below.
 *
 * No header, no card. The graphic carries its own eyebrow and headline, and its
 * background is transparent so the page aurora shows through. Its small type is
 * 16px in a 1600px canvas, so narrow viewports scroll it rather than shrink it.
 */
const BaseRate: React.FC = () => (
  <section className="relative py-16 sm:py-20">
    <div className="container relative mx-auto px-6">
      <div className="-mx-6 overflow-x-auto px-6 sm:mx-0 sm:px-0">
        <InlineVisual markup={baseRateSvg} className="min-w-[1100px]" />
      </div>
    </div>
  </section>
);

export default BaseRate;
