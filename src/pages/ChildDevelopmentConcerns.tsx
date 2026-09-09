import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CalendarCheckIcon } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { Section, SectionHeading } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';
import { ButtonLink } from '../components/ui/Button';
import { LeadCTA } from '../components/ui/LeadCTA';
import { ServiceIcon } from '../components/ui/ServiceIcon';
import { concerns, services } from '../data/services';
import { whatsappLink } from '../data/site';

const whatsappMessage =
'Hello PARC, I have a concern about my child’s development and would like to know where to start.';

export function ChildDevelopmentConcerns() {
  return (
    <>
      <Seo
        title="Child Development Concerns We Support in Nashik | PARC"
        description="PARC Nashik supports children with hearing loss, speech and language delay, communication difficulties, developmental delays, sensory processing difficulties, motor difficulties and learning difficulties." />
      
      <PageHero
        eyebrow="Concerns We Support"
        title="Child Development Concerns We Support"
        intro={
        <>
            <p>
              Parents come to PARC with many different starting points. Sometimes the concern is
              specific, and sometimes it is simply a feeling that something needs a closer look.
            </p>
            <p>
              Below are areas of concern that families commonly bring to us. If yours is not listed,
              you are still welcome to ask.
            </p>
          </>
        } />
      

      <Section tone="white">
        <SectionHeading eyebrow="Areas of Concern" title="Where Families Often Start" align="center" />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {concerns.map((concern, index) =>
          <Reveal as="li" key={concern} delay={Math.min(index * 0.03, 0.28)}>
              <div className="flex h-full flex-col justify-between rounded-card border border-brand-100 bg-brand-50 p-5 shadow-ring transition-[transform,box-shadow,border-color] duration-200 ease-premium hover:-translate-y-0.5 hover:border-brand-200 hover:bg-white hover:shadow-soft">
                <p className="font-display text-base font-bold leading-snug text-brand-700">
                  {concern}
                </p>
                <span aria-hidden="true" className="mt-5 block h-1 w-8 rounded-full bg-accent-500" />
              </div>
            </Reveal>
          )}
        </ul>
      </Section>

      <Section tone="soft">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Where to Begin"
              title="Not Sure Where to Start?"
              description={
              <p>
                  You do not need a diagnosis before contacting us. Start with an assessment and we will
                  help you understand which areas may require support.
                </p>
              } />
            
            <Reveal delay={0.08}>
              <ButtonLink
                to="/child-development-assessment"
                size="lg"
                className="mt-8"
                icon={<CalendarCheckIcon className="h-5 w-5" strokeWidth={2} />}>
                
                Book a Child Development Assessment
              </ButtonLink>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-3 sm:grid-cols-2">
              {services.map((service, index) =>
              <Reveal as="li" key={service.title} delay={Math.min(index * 0.04, 0.24)}>
                  <Link
                  to={service.to}
                  className="group flex h-full items-center gap-4 rounded-card border border-brand-100 bg-white p-5 shadow-ring transition-[transform,box-shadow,border-color] duration-200 ease-premium hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft">
                  
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 transition-colors duration-200 ease-premium group-hover:bg-brand-500 group-hover:text-white">
                      <ServiceIcon name={service.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-display text-base font-bold text-brand-700">
                      {service.title}
                    </span>
                    <ArrowRightIcon
                    className="ml-auto h-4 w-4 shrink-0 text-brand-300 transition-transform duration-200 ease-premium group-hover:translate-x-1 group-hover:text-brand-500"
                    strokeWidth={2.25} />
                  
                  </Link>
                </Reveal>
              )}
            </ul>
          </div>
        </div>
      </Section>

      <LeadCTA whatsappMessage={whatsappMessage} />
    </>);

}