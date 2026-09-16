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
  const maxHeight = Math.max(36, height);
  const maxWidth = Math.max(120, maxHeight * 1.85);

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden ${className}`}
      style={{
        height: `clamp(42px, 7.5vw, ${maxHeight}px)`,
        width: `clamp(116px, 15vw, ${maxWidth}px)`
      }}>
      
      <img
        src={LOGO_URL}
        alt="PARC – Pediatric Audiological Rehabilitation Center logo"
        className="h-full w-full object-cover scale-[1.24] sm:scale-[1.14]"
        loading="eager"
        decoding="async"
        style={{ objectFit: 'cover', objectPosition: 'center center', transformOrigin: 'center' }} />
      
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