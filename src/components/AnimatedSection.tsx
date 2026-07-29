import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type Animation = 'fade-up' | 'fade-left' | 'fade-right' | 'fade-in' | 'scale-in' | 'stagger';

const classMap: Record<Animation, string> = {
  'fade-up': 'scroll-fade-up',
  'fade-left': 'scroll-fade-left',
  'fade-right': 'scroll-fade-right',
  'fade-in': 'scroll-fade-in',
  'scale-in': 'scroll-scale-in',
  'stagger': 'stagger-children',
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: Animation;
  className?: string;
  delay?: number;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-up',
  className = '',
  delay = 0,
  threshold = 0.1,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  return (
    <div
      ref={ref}
      className={`${classMap[animation]} ${isVisible ? 'visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
