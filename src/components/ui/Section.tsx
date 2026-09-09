import React from 'react';

type Tone = 'white' | 'soft' | 'sky' | 'deep';

const toneClasses: Record<Tone, string> = {
  white: 'bg-white',
  soft: 'bg-brand-50',
  sky: 'bg-brand-100',
  deep: 'bg-brand-700 text-white'
};

type SectionProps = {
  children: React.ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  ariaLabel?: string;
  compact?: boolean;
};

export function Section({
  children,
  tone = 'white',
  id,
  className = '',
  ariaLabel,
  compact = false
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`${toneClasses[tone]} ${compact ? 'py-14 sm:py-16' : 'py-16 sm:py-20 lg:py-28'} ${className}`}>
      
      <div className="mx-auto w-full max-w-content px-5 sm:px-8 lg:px-10">{children}</div>
    </section>);

}

type HeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  level?: 'h1' | 'h2';
  invert?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  level = 'h2',
  invert = false,
  className = ''
}: HeadingProps) {
  const Tag = level;
  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      
      {eyebrow ?
      <p
        className={`mb-3 text-sm font-semibold ${invert ? 'text-accent-500' : 'text-brand-500'}`}>
        
          {eyebrow}
        </p> :
      null}
      <Tag
        className={`font-display font-extrabold leading-[1.1] ${
        level === 'h1' ?
        'text-3xl sm:text-4xl lg:text-[3.25rem]' :
        'text-2xl sm:text-3xl lg:text-[2.5rem]'} ${
        invert ? 'text-white' : 'text-brand-700'}`}>
        
        {title}
      </Tag>
      {description ?
      <div
        className={`mt-5 space-y-4 text-base leading-relaxed sm:text-lg ${
        invert ? 'text-brand-100' : 'text-brand-800/75'}`
        }>
        
          {description}
        </div> :
      null}
    </div>);

}