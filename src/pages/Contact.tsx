import React from 'react';
import { MailIcon, MapPinIcon, NavigationIcon, PhoneIcon } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { Section, SectionHeading } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';
import { ButtonLink } from '../components/ui/Button';
import { EnquiryForm } from '../components/home/EnquiryForm';
import { FaqSection } from '../components/home/FaqSection';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import { site, whatsappLink } from '../data/site';

export function Contact() {
  return (
    <>
      <Seo
        title="Contact PARC | Pediatric Therapy Centre in Nashik"
        description="Contact PARC – Pediatric Audiological Rehabilitation Center in Nashik to book a child development assessment, ask a question on WhatsApp or get directions to the centre." />
      
      <PageHero
        eyebrow="Contact"
        title="Let's Take the Next Step Together."
        intro={
        <p>
            Tell us what you are noticing at home and our team will help you understand the right
            starting point for your child.
          </p>
        }
        actions={
        <>
            <ButtonLink
            href={site.phoneHref}
            variant="accent"
            size="lg"
            icon={<PhoneIcon className="h-5 w-5" strokeWidth={2} />}>
            
              Call PARC
            </ButtonLink>
            <ButtonLink
            href={whatsappLink()}
            external
            variant="ghost"
            size="lg"
            icon={<WhatsAppIcon className="h-5 w-5" variant="inverse" />}>
            
              WhatsApp PARC
            </ButtonLink>
          </>
        } />
      

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Centre Details" title="PARC in Nashik" />

            <Reveal delay={0.06}>
              <div className="mt-8 rounded-panel border border-brand-100 bg-brand-50 p-7 shadow-ring">
                <p className="font-display text-lg font-extrabold text-brand-700">{site.name}</p>
                <p className="text-sm font-semibold text-brand-500">{site.fullName}</p>

                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex gap-3">
                    <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" strokeWidth={2} />
                    <span className="text-brand-800/80">
                      {site.addressLines.map((line) =>
                      <span key={line} className="block">
                          {line}
                        </span>
                      )}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" strokeWidth={2} />
                    <a
                      href={site.phoneHref}
                      className="font-semibold text-brand-800/80 transition-colors duration-150 hover:text-brand-500">
                      
                      {site.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0" />
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-semibold text-brand-800/80 transition-colors duration-150 hover:text-brand-500">
                      
                      WhatsApp: {site.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" strokeWidth={2} />
                    <a
                      href={site.emailHref}
                      className="break-all font-semibold text-brand-800/80 transition-colors duration-150 hover:text-brand-500">
                      
                      {site.emailDisplay}
                    </a>
                  </li>
                </ul>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink
                    href={site.phoneHref}
                    icon={<PhoneIcon className="h-4 w-4" strokeWidth={2} />}>
                    
                    Call PARC
                  </ButtonLink>
                  <ButtonLink
                    href={site.mapsHref}
                    external
                    variant="outline"
                    icon={<NavigationIcon className="h-4 w-4" strokeWidth={2} />}>
                    
                    Get Directions
                  </ButtonLink>
                </div>

                <p className="mt-6 text-xs leading-relaxed text-brand-800/55">
                  We are here to help you understand the next step for your child with thoughtful,
                  family-focused guidance.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-panel border border-brand-100 bg-brand-100 shadow-ring">
                <div className="flex h-72 flex-col justify-between bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(217,234,255,0.75)_35%,_rgba(191,219,254,0.55)_100%)] p-6 sm:h-[26rem] sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-500 shadow-soft">
                      <MapPinIcon className="h-7 w-7" strokeWidth={1.75} />
                    </span>
                    <span className="rounded-full border border-brand-200 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600">
                      Nashik
                    </span>
                  </div>

                  <div className="max-w-md">
                    <p className="font-display text-2xl font-extrabold text-brand-700">
                      Visit PARC in Nashik
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-brand-800/70">
                      We welcome families seeking support for hearing, speech, language, learning,
                      sensory and developmental concerns.
                    </p>
                  </div>

                  <div className="rounded-card border border-brand-100 bg-white/75 p-4 shadow-soft">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500">
                      Address
                    </p>
                    <p className="mt-2 text-sm font-semibold text-brand-800/80">
                      {site.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>

                  <ButtonLink
                    href={site.mapsHref}
                    external
                    variant="white"
                    icon={<NavigationIcon className="h-4 w-4" strokeWidth={2} />}>
                    Open in Google Maps
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <EnquiryForm />
      <FaqSection />
    </>);

}