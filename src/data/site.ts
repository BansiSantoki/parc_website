export const LOGO_URL = "/logo1.png";


export const site = {
  name: 'PARC',
  fullName: 'Pediatric Audiological Rehabilitation Center',
  tagline: 'Hear Better. Communicate Better. Learn Better. Live Better.',
  city: 'Nashik',
  /* Contact details are placeholders until confirmed by PARC. */
  phoneDisplay: '+91 XXXXX XXXXX',
  phoneHref: 'tel:+910000000000',
  whatsappNumber: '910000000000',
  emailDisplay: 'info@parcnashik.com',
  emailHref: 'mailto:info@parcnashik.com',
  addressLines: ['PARC – Pediatric Audiological Rehabilitation Center', 'Nashik, Maharashtra, India'],
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Nashik+Maharashtra'
};

export function whatsappLink(message?: string): string {
  const text = message ?? 'Hello PARC, I would like to know more about a child development assessment.';
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export type NavItem = {label: string;to: string;};

export const navItems: NavItem[] = [
{ label: 'About PARC', to: '/about' },
{ label: 'Pediatric Audiology', to: '/pediatric-audiology' },
{ label: 'Speech & Language Therapy', to: '/speech-language-therapy' },
{ label: 'Occupational Therapy', to: '/occupational-therapy' },
{ label: 'Sensory Integration', to: '/sensory-integration' },
{ label: 'Special Education', to: '/special-education' },
{ label: 'Early Intervention', to: '/early-intervention' },
{
  label: 'Hearing Aids & Cochlear Implant Rehabilitation',
  to: '/hearing-aids-cochlear-implant-rehabilitation'
},
{ label: 'Child Development Assessment', to: '/child-development-assessment' },
{ label: 'Parent Resources', to: '/parent-resources' },
{ label: 'Blogs', to: '/blog' }];


/* Condensed set shown inline on desktop; the rest live in the "Services" menu. */
export const primaryNav: NavItem[] = [
{ label: 'About', to: '/about' },
{ label: 'Assessment', to: '/child-development-assessment' },
{ label: 'Concerns', to: '/child-development-concerns' },
{ label: 'Parent Resources', to: '/parent-resources' },
{ label: 'Blogs', to: '/blog' }];


export const serviceNav: NavItem[] = [
{ label: 'Pediatric Audiology', to: '/pediatric-audiology' },
{ label: 'Speech & Language Therapy', to: '/speech-language-therapy' },
{ label: 'Occupational Therapy', to: '/occupational-therapy' },
{ label: 'Sensory Integration', to: '/sensory-integration' },
{ label: 'Special Education', to: '/special-education' },
{ label: 'Early Intervention', to: '/early-intervention' },
{
  label: 'Hearing Aids & Cochlear Implant Rehabilitation',
  to: '/hearing-aids-cochlear-implant-rehabilitation'
}];


export const images = {
  hero: "/9f794922-019a-4bed-99b8-6ba0867e8377.jpg",
  about: "/0ee51f32-44af-4f0a-8ae6-1a528a4da87d.jpg",
  audiology: "/e5f3bc45-7df4-4122-9f99-4edfbd5bb439.jpg",

  speech: "/1d2a2d76-d936-4ae7-a1ad-ef5df34aab98.jpg",
  ot: "/b46b75e3-a31c-46e5-8f29-acd99546d5f3.jpg",
  sensory: "/283c30d5-5a34-40d7-a45e-cd25820d870f.jpg",

  education: "/e2e6aed2-4f43-4199-8e5f-797cf3955f52.jpg",

  early: "/52d9c0cd-e52d-4742-8af7-fcd1d817f474.jpg"
};