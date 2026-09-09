import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { faqs } from '../../data/services';

const EASE = [0.23, 1, 0.32, 1] as const;

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section tone="soft" id="faq">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="FAQs"
            title="Questions Parents Ask Us"
            description={
            <p>
                General information to help you decide where to begin. For advice specific to your
                child, an assessment is the right starting point.
              </p>
            } />
          
        </div>

        <div className="lg:col-span-8">
          <ul className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = open === index;
              return (
                <Reveal as="li" key={faq.question} delay={Math.min(index * 0.03, 0.2)}>
                  <div className="overflow-hidden rounded-card border border-brand-100 bg-white shadow-ring">
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${index}`}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-150 hover:bg-brand-50">
                        
                        <span className="font-display text-base font-bold text-brand-700 sm:text-lg">
                          {faq.question}
                        </span>
                        <span
                          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-[transform,background-color,color] duration-200 ease-premium ${
                          isOpen ? 'rotate-45 bg-brand-500 text-white' : 'bg-brand-100 text-brand-600'}`
                          }>
                          
                          <PlusIcon className="h-4 w-4" strokeWidth={2.5} />
                        </span>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen ?
                      <motion.div
                        id={`faq-panel-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24, ease: EASE }}
                        className="overflow-hidden">
                        
                          <p className="px-6 pb-6 text-sm leading-relaxed text-brand-800/75 sm:text-base">
                            {faq.answer}
                          </p>
                        </motion.div> :
                      null}
                    </AnimatePresence>
                  </div>
                </Reveal>);

            })}
          </ul>
        </div>
      </div>
    </Section>);

}