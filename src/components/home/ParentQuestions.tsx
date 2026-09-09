import React, { useState } from 'react';
import { HelpCircleIcon } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { parentQuestions } from '../../data/services';

export function ParentQuestions() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Parent-First"
        title="You Know Your Child Best. We Help You Understand What Comes Next."
        align="center" />
      

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {parentQuestions.map((question, index) =>
        <Reveal as="li" key={question} delay={Math.min(index * 0.04, 0.28)}>
            <button
            type="button"
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(index)}
            onBlur={() => setActive(null)}
            className={`flex h-full w-full items-start gap-4 rounded-panel border p-6 text-left transition-[transform,box-shadow,border-color,background-color] duration-200 ease-premium hover:-translate-y-1 ${
            active === index ?
            'border-brand-300 bg-brand-100 shadow-lift' :
            'border-brand-100 bg-brand-50 shadow-ring'}`
            }>
            
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-500 shadow-ring">
                <HelpCircleIcon className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="font-display text-base font-bold leading-snug text-brand-700">
                {question}
              </span>
            </button>
          </Reveal>
        )}
      </ul>

      <Reveal delay={0.1}>
        <div className="mt-12 rounded-panel border-l-4 border-accent-500 bg-accent-50 p-7 sm:p-9">
          <p className="font-display text-xl font-bold leading-snug text-brand-700 sm:text-2xl">
            At PARC, we believe the first step is not to label the child.
            <br />
            The first step is to understand the child.
          </p>
        </div>
      </Reveal>
    </Section>);

}