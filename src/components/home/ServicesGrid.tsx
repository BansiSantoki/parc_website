import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { ServiceIcon } from '../ui/ServiceIcon';
import { services } from '../../data/services';

export function ServicesGrid() {
  return (
    <Section tone="white" id="services">
      <SectionHeading
        eyebrow="Our Core Services"
        title="Comprehensive Pediatric Development & Rehabilitation Services"
        align="center" />
      

      {/* Swipeable on mobile, grid from tablet up */}
      <ul className="parc-hide-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
        {services.map((service, index) =>
        <Reveal
          as="li"
          key={service.title}
          delay={Math.min(index * 0.05, 0.3)}
          className="min-w-[82%] snap-center sm:min-w-0">
          
            <Link
            to={service.to}
            className="group flex h-full flex-col rounded-panel border border-brand-100 bg-white p-7 shadow-ring transition-[transform,box-shadow,border-color] duration-200 ease-premium hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
            
              <div className="flex items-start justify-between">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 text-white transition-colors duration-200 ease-premium group-hover:bg-brand-700">
                  <ServiceIcon name={service.icon} className="h-7 w-7" />
                </span>
                <span className="font-display text-3xl font-extrabold text-brand-100 transition-colors duration-200 ease-premium group-hover:text-accent-500">
                  {service.number}
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-brand-700">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-800/70">{service.description}</p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-500">
                Explore {service.title}
                <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-200 ease-premium group-hover:translate-x-1"
                strokeWidth={2.25} />
              
              </span>
            </Link>
          </Reveal>
        )}
      </ul>
    </Section>);

}