import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, BookOpenIcon } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { Section, SectionHeading } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';
import { Highlight } from '../components/ui/ChipGrid';
import { ButtonLink } from '../components/ui/Button';
import { LeadCTA } from '../components/ui/LeadCTA';
import { ParentQuestions } from '../components/home/ParentQuestions';
import { blogPosts, parentGuidanceAreas } from '../data/blog';

export function ParentResources() {
  const highlights = blogPosts.slice(19, 23);

  return (
    <>
      <Seo
        title="Parent Resources & Guidance | PARC Nashik"
        description="Parent guidance from PARC Nashik on supporting your child's development through everyday routines, play, mealtimes, communication opportunities, reading and school preparation." />
      
      <PageHero
        eyebrow="Parent Resources"
        title="Therapy Works Best When Parents Are Part of the Team."
        intro={
        <>
            <p>Children spend most of their time outside the therapy room.</p>
            <p>That&apos;s why parent involvement matters.</p>
          </>
        }
        actions={
        <ButtonLink
          to="/blog"
          variant="accent"
          size="lg"
          icon={<BookOpenIcon className="h-5 w-5" strokeWidth={2} />}>
          
            Visit the Parent Education Centre
          </ButtonLink>
        } />
      

      <Section tone="white">
        <SectionHeading
          eyebrow="Everyday Opportunities"
          title="Where Parent Guidance Can Fit Into Daily Life"
          align="center"
          description={
          <p>
              Guidance is practical and tailored to your child&apos;s goals, so it can be built into
              routines you already have.
            </p>
          } />
        
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {parentGuidanceAreas.map((area, index) =>
          <Reveal as="li" key={area} delay={Math.min(index * 0.04, 0.28)}>
              <article className="flex h-full items-center gap-4 rounded-panel border border-brand-100 bg-brand-50 p-6 transition-[transform,box-shadow,background-color] duration-200 ease-premium hover:-translate-y-1 hover:bg-white hover:shadow-lift">
                <span className="font-display text-2xl font-extrabold text-brand-200">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-base font-bold leading-snug text-brand-700">
                  {area}
                </h3>
              </article>
            </Reveal>
          )}
        </ul>

        <div className="mt-12">
          <Highlight>
            Small Everyday Interactions Can Create Meaningful Learning Opportunities.
          </Highlight>
        </div>
      </Section>

      <ParentQuestions />

      <Section tone="soft">
        <SectionHeading eyebrow="Reading for Parents" title="Start With These Articles" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((post, index) =>
          <Reveal as="li" key={post.id} delay={Math.min(index * 0.05, 0.2)}>
              <article className="group flex h-full flex-col rounded-panel border border-brand-100 bg-white p-6 shadow-ring transition-[transform,box-shadow] duration-200 ease-premium hover:-translate-y-1 hover:shadow-lift">
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold text-brand-600 self-start">
                  {post.category}
                </span>
                <h3 className="mt-4 font-display text-base font-bold leading-snug text-brand-700">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-800/70">{post.excerpt}</p>
                <Link
                to="/blog"
                className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold uppercase tracking-wide text-brand-500">
                
                  Read More
                  <ArrowRightIcon
                  className="h-4 w-4 transition-transform duration-200 ease-premium group-hover:translate-x-1"
                  strokeWidth={2.25} />
                
                </Link>
              </article>
            </Reveal>
          )}
        </ul>
      </Section>

      <LeadCTA />
    </>);

}