import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeading } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { ServiceIcon } from '../ui/ServiceIcon';
import { disciplines } from '../../data/services';

const EASE = [0.23, 1, 0.32, 1] as const;

export function MultidisciplinaryModel() {
  return (
    <Section tone="deep">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="The Multidisciplinary Model"
            title="When Professionals Work Together, Children Get a More Connected Plan."
            invert
            description={
            <>
                <p>
                  A child may have difficulty communicating because of hearing, language, speech,
                  developmental or other factors.
                </p>
                <p>
                  Similarly, classroom difficulties may involve learning, attention, communication,
                  sensory processing or motor skills.
                </p>
                <p>That is why PARC brings multiple disciplines together.</p>
              </>
            } />
          
        </div>

        <div className="lg:col-span-7">
          <div className="relative rounded-panel border border-white/15 bg-white/[0.06] p-6 sm:p-8">
            <ul className="space-y-3">
              {disciplines.map((item, index) =>
              <li key={item.title} className="relative">
                  <Reveal delay={Math.min(index * 0.07, 0.35)}>
                    <div className="flex items-center gap-4 rounded-card border border-white/15 bg-brand-800/50 p-4 transition-[transform,background-color] duration-200 ease-premium hover:-translate-y-0.5 hover:bg-brand-800/80">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-500 text-brand-700">
                        <ServiceIcon name={item.icon} className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <div>
                        <p className="font-display text-sm font-bold uppercase tracking-wide text-white">
                          {item.title}
                        </p>
                        <p className="text-sm text-brand-100/75">{item.subtitle}</p>
                      </div>
                    </div>
                  </Reveal>
                  {index < disciplines.length - 1 ?
                <motion.span
                  aria-hidden="true"
                  className="absolute -bottom-3 left-[2.1rem] block w-0.5 origin-top bg-accent-500/60"
                  style={{ height: '0.75rem' }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.24, ease: EASE, delay: Math.min(index * 0.07 + 0.1, 0.45) }} /> :

                null}
                </li>
              )}
            </ul>

            <Reveal delay={0.28}>
              <div className="mt-6 rounded-card bg-accent-500 p-6 text-center">
                <p className="font-display text-lg font-extrabold uppercase leading-snug tracking-wide text-brand-700 sm:text-xl">
                  A more connected view of the child.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>);

}