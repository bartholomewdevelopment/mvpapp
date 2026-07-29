import React from 'react';
import AnimatedSection from './AnimatedSection';

interface SectionHeaderProps {
  /** Mono micro-label above the heading. Replaces the old dot-dash divider. */
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: 'center' | 'left';
  className?: string;
}

/**
 * One heading treatment for every section: mono eyebrow → display heading → lede.
 * Consistency here is most of what separates a 2027 page from a 2024 one — the old
 * design repeated a five-element animated divider ornament in seven places.
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  lede,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <AnimatedSection
      animation="fade-up"
      className={`${isCenter ? 'text-center' : 'text-left'} ${className}`}
    >
      <div
        className={`flex items-center gap-2.5 mb-5 ${isCenter ? 'justify-center' : 'justify-start'}`}
      >
        <span className="h-1 w-1 rounded-full bg-accent2027" aria-hidden="true" />
        <span className="eyebrow">{eyebrow}</span>
      </div>

      <h2 className="display-2 text-ink">{title}</h2>

      {/* Short brand-gradient underscore beneath every section heading — the
          through-line that used to be the animated dot-dash divider, reduced to
          one confident mark. */}
      <div
        className={`mt-5 h-[3px] w-16 rounded-full bg-brand-grad ${isCenter ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />

      {lede && <p className={`lede mt-5 ${isCenter ? 'mx-auto' : ''}`}>{lede}</p>}
    </AnimatedSection>
  );
};

export default SectionHeader;
