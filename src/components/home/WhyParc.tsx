import React from 'react';
import { Section, SectionHeading } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { ServiceIcon } from '../ui/ServiceIcon';
import { whyParc } from '../../data/services';

export function WhyParc() {
  return (
    <Section tone="soft">
      <SectionHeading
        eyebrow="Why PARC"
        title="More Than Therapy. A Complete Developmental Support System."
        align="center" />
      

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyParc.map((item, index) =>
        <Reveal as="li" key={item.title} delay={Math.min(index * 0.05, 0.3)}>
            <article className="group flex h-full flex-col rounded-panel border border-brand-100 bg-white p-7 shadow-ring transition-[transform,box-shadow] duration-200 ease-premium hover:-translate-y-1 hover:shadow-lift">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 transition-colors duration-200 ease-premium group-hover:bg-brand-500 group-hover:text-white">
                <ServiceIcon name={item.icon} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-brand-700">{item.title}</h3>
              <p className="mt-3 pb-6 text-sm leading-relaxed text-brand-800/70">{item.description}</p>
              <span
              aria-hidden="true"
              className="mt-auto block h-1 w-10 shrink-0 rounded-full bg-accent-500 transition-[width] duration-200 ease-premium group-hover:w-16" />
            
            </article>
          </Reveal>
        )}
      </ul>
    </Section>);

}