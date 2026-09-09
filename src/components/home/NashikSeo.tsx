import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CalendarCheckIcon } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { ButtonLink } from '../ui/Button';
import { ServiceIcon } from '../ui/ServiceIcon';
import { services } from '../../data/services';

export function NashikSeo() {
  return (
    <Section tone="soft">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Pediatric Therapy in Nashik"
            title="Looking for the Right Child Therapy in Nashik?"
            description={
            <>
                <p>
                  Whether your child needs support with hearing, speech, language, communication,
                  sensory processing, occupational skills or learning, knowing where to begin can be
                  difficult.
                </p>
                <p>
                  At PARC, you can start with an appropriate assessment and understand which areas may
                  require support.
                </p>
              </>
            } />
          
          <Reveal delay={0.08}>
            <p className="mt-8 font-display text-2xl font-extrabold leading-snug text-brand-500">
              One Centre. Multiple Specialities. A Connected Plan.
            </p>
            <ButtonLink
              to="/contact"
              size="lg"
              className="mt-6"
              icon={<CalendarCheckIcon className="h-5 w-5" strokeWidth={2} />}>
              
              Book Your Child&apos;s Assessment
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
    </Section>);

}