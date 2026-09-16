import React from 'react';
import { CalendarCheckIcon } from 'lucide-react';
import { Seo } from './Seo';
import { PageHero } from './PageHero';
import { Section, SectionHeading } from './Section';
import { ChipGrid, Highlight } from './ChipGrid';
import { ButtonLink } from './Button';
import { LeadCTA } from './LeadCTA';
import { WhatsAppIcon } from './WhatsAppIcon';
import { whatsappLink } from '../../data/site';

export type ServicePageProps = {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  intro: React.ReactNode;
  image: string;
  imageAlt: string;
  areasTitle: string;
  areasIntro?: React.ReactNode;
  areas: string[];
  highlight: React.ReactNode;
  ctaLabel: string;
  whatsappMessage: string;
  children?: React.ReactNode;
};

export function ServicePageTemplate({
  seoTitle,
  seoDescription,
  eyebrow,
  h1,
  intro,
  image,
  imageAlt,
  areasTitle,
  areasIntro,
  areas,
  highlight,
  ctaLabel,
  whatsappMessage,
  children
}: ServicePageProps) {
  return (
    <>
      <Seo title={seoTitle} description={seoDescription} />
      <PageHero
        eyebrow={eyebrow}
        title={h1}
        intro={intro}
        image={image}
        imageAlt={imageAlt}
        actions={
        <>
            <ButtonLink
            to="/contact"
            variant="accent"
            size="lg"
            icon={<CalendarCheckIcon className="h-5 w-5" strokeWidth={2} />}>
            
              {ctaLabel}
            </ButtonLink>
            <ButtonLink
            href={whatsappLink(whatsappMessage)}
            external
            variant="ghost"
            size="lg"
            icon={<WhatsAppIcon className="h-5 w-5" variant="inverse" />}>
            
              WhatsApp PARC
            </ButtonLink>
          </>
        } />
      

      <Section tone="white">
        <SectionHeading eyebrow="What We Support" title={areasTitle} description={areasIntro} />
        <div className="mt-10">
          <ChipGrid
            items={areas}
            note="Services and areas of support may include the above, depending on the child's age, assessment findings and functional needs." />
          
        </div>
        <div className="mt-12">
          <Highlight>{highlight}</Highlight>
        </div>
      </Section>

      {children}

      <LeadCTA primaryLabel={ctaLabel} whatsappMessage={whatsappMessage} />
    </>);

}