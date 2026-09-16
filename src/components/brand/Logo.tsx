import { Link } from 'react-router-dom';
import { LOGO_URL, site } from '../../data/site';

type LogoProps = {
  /** Height of the logo tile in px. */
  height?: number;
  className?: string;
  showWordmark?: boolean;
  invert?: boolean;
};

/**
 * The supplied PARC logo artwork has a solid dark background baked into the file,
 * so it is presented unmodified inside a dark brand tile.
 */
export function LogoMark({ height = 48, className = '' }: {height?: number;className?: string;}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden ${className}`}
      style={{ height: Math.max(36, height), width: Math.max(140, height * 2.2) }}>
      
      <img
        src={LOGO_URL}
        alt="PARC – Pediatric Audiological Rehabilitation Center logo"
        className="h-full w-full object-cover"
        loading="eager"
        decoding="async"
        style={{ objectFit: 'cover', objectPosition: 'center center' }} />
      
    </span>);

}

export function LogoLink({ height = 48, className = '', showWordmark = false, invert = false }: LogoProps) {
  return (
    <Link
      to="/"
      className={`flex items-center ${showWordmark ? 'gap-3' : ''} ${className}`}
      aria-label="PARC home">
      
      <LogoMark height={height} />
      {showWordmark ?
      <span className="hidden leading-tight sm:block">
          <span
          className={`block font-display text-lg font-extrabold tracking-tight ${
          invert ? 'text-white' : 'text-brand-700'}`
          }>
          
            {site.name}
          </span>
          <span
          className={`block text-[11px] font-medium ${invert ? 'text-brand-100' : 'text-brand-500'}`}>
          
            Pediatric Audiological Rehabilitation Center
          </span>
        </span> :
      null}
    </Link>);

}