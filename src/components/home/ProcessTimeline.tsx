import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeading } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { processSteps } from '../../data/services';

const EASE = [0.23, 1, 0.32, 1] as const;

export function ProcessTimeline() {
  const [active, setActive] = useState(0);

  return (
    <Section tone="white" id="approach">
      <SectionHeading
        eyebrow="Our Approach"
        title="One Child. One Team. One Coordinated Approach."
        description={
        <>
            <p>Every child develops at their own pace.</p>
            <p>
              Some children may need support with hearing. Others may experience difficulties with
              speech, language, communication, attention, sensory processing, motor skills, learning or
              classroom participation.
            </p>
            <p>At PARC, we look beyond a single symptom.</p>
            <p>
              Our multidisciplinary pediatric team works across different developmental areas to
              understand the child&apos;s strengths, challenges and functional needs.
            </p>
          </>
        } />
      

      <div className="mt-14">
        {/* Desktop: horizontal interactive timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            <div aria-hidden="true" className="absolute left-0 right-0 top-6 h-0.5 bg-brand-100" />
            <motion.div
              aria-hidden="true"
              className="absolute left-0 top-6 h-0.5 origin-left bg-brand-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE }}
              style={{ right: 0 }} />
            
            <ul className="relative grid grid-cols-6 gap-4">
              {processSteps.map((step, index) => {
                const isActive = index === active;
                return (
                  <li key={step.label}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onClick={() => setActive(index)}
                      aria-pressed={isActive}
                      className="group block w-full text-left">
                      
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-full border-4 border-white font-display text-sm font-extrabold transition-colors duration-200 ease-premium ${
                        isActive ?
                        'bg-brand-500 text-white shadow-lift' :
                        'bg-brand-100 text-brand-600 group-hover:bg-brand-200'}`
                        }>
                        
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`mt-4 block font-display text-base font-bold uppercase tracking-wide transition-colors duration-200 ${
                        isActive ? 'text-brand-700' : 'text-brand-800/60'}`
                        }>
                        
                        {step.label}
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-brand-800/65">
                        {step.detail}
                      </span>
                    </button>
                  </li>);

              })}
            </ul>
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <ol className="relative space-y-6 border-l-2 border-brand-100 pl-6 lg:hidden">
          {processSteps.map((step, index) =>
          <Reveal as="li" key={step.label} delay={Math.min(index * 0.05, 0.25)}>
              <span
              aria-hidden="true"
              className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full border-4 border-white bg-brand-500" />
            
              <h3 className="font-display text-base font-bold uppercase tracking-wide text-brand-700">
                {step.label}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-800/70">{step.detail}</p>
            </Reveal>
          )}
        </ol>
      </div>
    </Section>);

}