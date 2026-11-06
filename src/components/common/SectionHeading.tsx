import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  isMainH1?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  isMainH1 = false,
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  return (
    <div className={`flex flex-col ${alignClass} max-w-3xl mb-6 sm:mb-8 lg:mb-10 ${className}`}>
      {eyebrow && (
        <span className="font-jost text-primary font-bold text-[11px] sm:text-xs uppercase tracking-[0.22em] mb-1.5 sm:mb-2 flex items-center gap-2">
          <span className="inline-block w-3.5 sm:w-4 h-0.5 bg-gold/70"></span>
          {eyebrow}
          <span className="inline-block w-3.5 sm:w-4 h-0.5 bg-gold/70"></span>
        </span>
      )}
      {isMainH1 ? (
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-deep-brown font-normal tracking-tight leading-[1.18]">
          {title}
        </h1>
      ) : (
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-deep-brown font-normal tracking-tight leading-snug">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-2 sm:mt-2.5 text-muted-text text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl px-1 sm:px-0">
          {subtitle}
        </p>
      )}
      <div className="w-12 h-0.5 bg-primary mt-2.5 sm:mt-3" />
    </div>
  );
};
