import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

const EASE = [0.23, 1, 0.32, 1] as const;

/** Vertical pathway with animated connecting lines. */
export function StepPathway({ steps }: {steps: string[];}) {
  return (
    <ol className="relative">
      {steps.map((step, index) =>
      <li key={step} className="relative pb-6 pl-16 last:pb-0">
          {index < steps.length - 1 ?
        <motion.span
          aria-hidden="true"
          className="absolute left-[1.4rem] top-11 w-0.5 origin-top bg-brand-200"
          style={{ bottom: '0.25rem' }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: EASE, delay: Math.min(index * 0.06, 0.4) }} /> :

        null}
          <Reveal delay={Math.min(index * 0.06, 0.4)}>
            <span className="absolute left-0 top-1 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 font-display text-sm font-extrabold text-white shadow-soft">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="rounded-card border border-brand-100 bg-white px-5 py-4 shadow-ring transition-[transform,box-shadow] duration-200 ease-premium hover:-translate-y-0.5 hover:shadow-soft">
              <p className="font-display text-base font-bold text-brand-700">{step}</p>
            </div>
          </Reveal>
        </li>
      )}
    </ol>);

}

/** Horizontal chained flow (wraps on small screens). */
export function ChainFlow({ steps }: {steps: string[];}) {
  return (
    <ol className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
      {steps.map((step, index) =>
      <React.Fragment key={step}>
          <Reveal as="li" delay={Math.min(index * 0.06, 0.4)} className="sm:flex-1">
            <div className="flex h-full items-center justify-center rounded-card border-2 border-brand-200 bg-white px-4 py-4 text-center shadow-ring transition-[transform,border-color,box-shadow] duration-200 ease-premium hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-soft">
              <span className="font-display text-sm font-extrabold uppercase tracking-wide text-brand-700">
                {step}
              </span>
            </div>
          </Reveal>
          {index < steps.length - 1 ?
        <li aria-hidden="true" className="flex items-center justify-center">
              <motion.span
            className="block h-0.5 w-6 rounded-full bg-accent-500 sm:w-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease: EASE, delay: Math.min(index * 0.06 + 0.08, 0.45) }} />
          
            </li> :
        null}
        </React.Fragment>
      )}
    </ol>);

}