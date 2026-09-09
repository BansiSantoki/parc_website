import React from 'react';
import { ClipboardListIcon } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { ButtonLink } from '../ui/Button';
import { assessmentAreas } from '../../data/services';

export function AssessmentSection() {
  return (
    <Section tone="soft" id="assessment">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Child Development Assessment"
            title="Understand Before You Intervene."
            description={
            <>
                <p>Parents often ask:</p>
                <p className="font-display text-xl font-bold text-brand-500">
                  &ldquo;Is my child&apos;s development on track?&rdquo;
                </p>
                <p>Instead of guessing, start with an appropriate assessment.</p>
                <p>At PARC, assessment may explore multiple developmental areas.</p>
              </>
            } />
          
          <Reveal delay={0.1}>
            <ButtonLink
              to="/child-development-assessment"
              size="lg"
              className="mt-8"
              icon={<ClipboardListIcon className="h-5 w-5" strokeWidth={2} />}>
              
              Book a Child Development Assessment
            </ButtonLink>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {assessmentAreas.map((area, index) =>
            <Reveal as="li" key={area} delay={Math.min(index * 0.03, 0.3)}>
                <div className="flex h-full flex-col justify-between rounded-card border border-brand-100 bg-white p-4 shadow-ring transition-[transform,box-shadow] duration-200 ease-premium hover:-translate-y-0.5 hover:shadow-soft">
                  <span className="font-display text-sm font-bold leading-snug text-brand-700">
                    {area}
                  </span>
                  <span aria-hidden="true" className="mt-4 block h-1 w-6 rounded-full bg-brand-200" />
                </div>
              </Reveal>
            )}
          </ul>
          <p className="mt-5 text-sm text-brand-800/60">
            Assessment areas may include the above, depending on the child&apos;s age, presentation and
            parent concerns.
          </p>
        </div>
      </div>
    </Section>);

}