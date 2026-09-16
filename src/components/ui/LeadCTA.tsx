import React from 'react';
import { CalendarCheckIcon } from 'lucide-react';
import { ButtonLink } from './Button';
import { Reveal } from './Reveal';
import { WhatsAppIcon } from './WhatsAppIcon';
import { whatsappLink } from '../../data/site';

type LeadCTAProps = {
  title?: string;
  body?: React.ReactNode;
  primaryLabel?: string;
  whatsappMessage?: string;
};

export function LeadCTA({
  title = "Concerned About Your Child's Development?",
  body =
  <>
      <p>You don&apos;t have to figure everything out alone.</p>
      <p>
        If you have concerns about your child&apos;s hearing, speech, language, communication,
        learning, sensory processing, motor skills or development, start with an assessment.
      </p>
    </>,

  primaryLabel = 'Book an Assessment',
  whatsappMessage
}: LeadCTAProps) {
  return (
    <section className="relative overflow-hidden bg-brand-500 py-16 text-white sm:py-20 lg:py-24">
      <SoundPattern />
      <div className="relative mx-auto w-full max-w-content px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl lg:text-[2.6rem]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-5 space-y-3 text-base leading-relaxed text-brand-100 sm:text-lg">
              {body}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink
                to="/contact"
                variant="accent"
                size="lg"
                icon={<CalendarCheckIcon className="h-5 w-5" strokeWidth={2} />}>
                
                {primaryLabel}
              </ButtonLink>
              <ButtonLink
                href={whatsappLink(whatsappMessage)}
                external
                variant="ghost"
                size="lg"
                icon={<WhatsAppIcon className="h-5 w-5" variant="inverse" />}>
                
                Chat with PARC on WhatsApp
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}

function SoundPattern() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.16]"
      viewBox="0 0 1200 400"
      preserveAspectRatio="none">
      
      <defs>
        <pattern id="parc-dots" width="36" height="36" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="#ffffff" />
        </pattern>
      </defs>
      <rect width="1200" height="400" fill="url(#parc-dots)" />
      <g stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.7">
        <path d="M-40 300 Q 100 240 240 300 T 520 300 T 800 300 T 1080 300 T 1360 300" />
        <path d="M-40 340 Q 120 290 280 340 T 600 340 T 920 340 T 1240 340" />
      </g>
    </svg>);

}