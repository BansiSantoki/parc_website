import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'accent' | 'outline' | 'ghost' | 'white';
type Size = 'md' | 'lg';

const base =
'group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[transform,background-color,color,border-color,box-shadow] duration-200 ease-premium hover:-translate-y-0.5 active:translate-y-0';

const variants: Record<Variant, string> = {
  primary: 'bg-brand-500 text-white shadow-soft hover:bg-brand-600 hover:shadow-lift',
  accent: 'bg-accent-500 text-brand-700 shadow-soft hover:bg-accent-300 hover:shadow-lift',
  outline:
  'border-2 border-brand-500 bg-white text-brand-600 hover:bg-brand-50 hover:border-brand-600',
  ghost: 'border border-white/40 text-white hover:bg-white/10',
  white: 'bg-white text-brand-700 shadow-soft hover:bg-brand-50 hover:shadow-lift'
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-[0.96rem]'
};

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: React.ReactNode;
};

type ButtonLinkProps = CommonProps & {
  to?: string;
  href?: string;
  external?: boolean;
  ariaLabel?: string;
};

export function ButtonLink({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  external = false,
  ariaLabel
}: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const content =
  <>
      {icon}
      <span>{children}</span>
    </>;


  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>);

  }

  return (
    <a
      href={href}
      className={classes}
      aria-label={ariaLabel}
      {...external ? { target: '_blank', rel: 'noreferrer noopener' } : {}}>
      
      {content}
    </a>);

}

type ActionButtonProps = CommonProps & {
  onClick?: () => void;
  type?: 'button' | 'submit';
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
};

export function ActionButton({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  ariaLabel,
  ariaExpanded,
  ariaControls
}: ActionButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      
      {icon}
      <span>{children}</span>
    </button>);

}