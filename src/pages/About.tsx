import React from 'react';
import { CalendarCheckIcon, CompassIcon, TargetIcon } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { Section, SectionHeading } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';
import { ButtonLink } from '../components/ui/Button';
import { LeadCTA } from '../components/ui/LeadCTA';
import { MultidisciplinaryModel } from '../components/home/MultidisciplinaryModel';
import { missionPillars, parcDifference } from '../data/services';
import { images, site } from '../data/site';

export function About() {
  return (
    <>
      <Seo
        title="About PARC | Pediatric Rehabilitation Centre in Nashik"
        description="PARC – Pediatric Audiological Rehabilitation Center is a multidisciplinary pediatric rehabilitation centre in Nashik built around one coordinated, child-centred model of care." />
      
      <PageHero
        eyebrow="About PARC"
        title="PARC – Pediatric Audiological Rehabilitation Center"
        intro={
        <>
            <p>
              PARC is a multidisciplinary pediatric rehabilitation centre in Nashik created around one
              simple idea:
            </p>
            <p className="font-display text-xl font-bold text-accent-500">
              Children do not develop in separate departments. Their development is interconnected.
            </p>
          </>
        }
        image={images.about}
        imageAlt="A bright, welcoming multidisciplinary pediatric therapy space with organised learning materials"
        actions={
        <ButtonLink
          to="/contact"
          variant="accent"
          size="lg"
          icon={<CalendarCheckIcon className="h-5 w-5" strokeWidth={2} />}>
          
            Book an Assessment
          </ButtonLink>
        } />
      

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Our Thinking"
              title="Development Is Connected. Care Should Be Too."
              description={
              <p>
                  Therefore, our approach brings different professionals and developmental areas
                  together, so a child is understood as a whole rather than as a series of separate
                  referrals.
                </p>
              } />
            
          </div>
          <div className="lg:col-span-6">
            <ul className="space-y-3">
              {[
              'Hearing affects communication.',
              'Communication affects learning.',
              'Sensory processing can affect participation.',
              'Motor skills influence everyday independence.',
              'Learning influences school participation.'].
              map((line, index) =>
              <Reveal as="li" key={line} delay={Math.min(index * 0.05, 0.25)}>
                  <div className="flex items-center gap-4 rounded-card border border-brand-100 bg-brand-50 px-5 py-4">
                    <span className="font-display text-sm font-extrabold text-brand-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="font-display text-base font-bold text-brand-700">{line}</p>
                  </div>
                </Reveal>
              )}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col rounded-panel bg-brand-700 p-8 text-white sm:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500 text-brand-700">
                <CompassIcon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h2 className="mt-6 font-display text-2xl font-extrabold sm:text-3xl">Our Vision</h2>
              <p className="mt-4 text-base leading-relaxed text-brand-100 sm:text-lg">
                To create a child-centred environment where every child receives the opportunity to
                hear, communicate, learn, participate and grow.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.06}>
            <article className="flex h-full flex-col rounded-panel border border-brand-100 bg-white p-8 shadow-ring sm:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                <TargetIcon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h2 className="mt-6 font-display text-2xl font-extrabold text-brand-700 sm:text-3xl">
                Our Mission
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-800/75 sm:text-lg">
                To provide accessible, evidence-informed and individualised pediatric rehabilitation
                services through a coordinated multidisciplinary approach.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {missionPillars.map((pillar) =>
                <li
                  key={pillar}
                  className="rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-700">
                  
                    {pillar}
                  </li>
                )}
              </ul>
            </article>
          </Reveal>
        </div>
      </Section>

      <MultidisciplinaryModel />

      <Section tone="white">
        <SectionHeading eyebrow="The PARC Difference" title="Six Principles That Shape Our Care" align="center" />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {parcDifference.map((item, index) =>
          <Reveal as="li" key={item.number} delay={Math.min(index * 0.05, 0.3)}>
              <article className="flex h-full flex-col rounded-panel border border-brand-100 bg-brand-50 p-7 transition-[transform,box-shadow,background-color] duration-200 ease-premium hover:-translate-y-1 hover:bg-white hover:shadow-lift">
                <span className="font-display text-4xl font-extrabold text-brand-200">
                  {item.number}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-700">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-800/70">{item.description}</p>
              </article>
            </Reveal>
          )}
        </ul>
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-brand-800/60">
            {site.name} is based in {site.city}. Team member profiles and qualifications will be added
            here once provided.
          </p>
        </Reveal>
      </Section>

      <LeadCTA />
    </>);

}