import React from 'react';
import { CalendarCheckIcon } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { Section, SectionHeading } from '../components/ui/Section';
import { StepPathway } from '../components/ui/StepFlow';
import { Highlight } from '../components/ui/ChipGrid';
import { ButtonLink } from '../components/ui/Button';
import { LeadCTA } from '../components/ui/LeadCTA';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import { images, whatsappLink } from '../data/site';

const pathway = [
'Developmental Assessment',
'Hearing Assessment',
'Speech & Language Evaluation',
'Occupational Therapy Assessment',
'Sensory Processing Assessment',
'Individualised Intervention Plan',
'Parent Guidance',
'Progress Monitoring'];


const whatsappMessage =
'Hello PARC, I would like to enquire about early intervention support for my child.';

export function EarlyIntervention() {
  return (
    <>
      <Seo
        title="Early Intervention Centre in Nashik | Infant & Toddler Development | PARC"
        description="Early intervention at PARC Nashik: development-focused assessment and support for infants and young children across hearing, communication, sensory processing and functional skills." />
      
      <PageHero
        eyebrow="Early Intervention"
        title="Early Intervention: Start Early. Support Development."
        intro={
        <>
            <p>
              The early years are a period of rapid development in hearing, communication, movement,
              play and learning.
            </p>
            <p>
              When a concern is identified early, support can begin while these skills are still
              developing. Early identification and timely intervention can provide children with
              greater opportunities to develop communication, learning and functional skills.
            </p>
            <p>
              Early intervention at PARC starts with understanding the child — not with a fixed
              programme.
            </p>
          </>
        }
        image={images.early}
        imageAlt="A therapist offering a colourful toy to a smiling toddler sitting on their mother's lap"
        actions={
        <>
            <ButtonLink
            to="/contact"
            variant="accent"
            size="lg"
            icon={<CalendarCheckIcon className="h-5 w-5" strokeWidth={2} />}>
            
              Book an Early Intervention Assessment
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
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The Pathway"
              title="A Step-by-Step Early Intervention Pathway"
              description={
              <p>
                  Not every child needs every step. The pathway is shaped by parent concerns, the
                  child&apos;s age and what the assessments show.
                </p>
              } />
            
            <div className="mt-8">
              <Highlight tone="blue">
                Small, consistent support during the early years can create meaningful developmental
                opportunities.
              </Highlight>
            </div>
          </div>
          <div className="lg:col-span-7">
            <StepPathway steps={pathway} />
          </div>
        </div>
      </Section>

      <LeadCTA
        title="Have a Concern About Your Baby or Toddler?"
        body={
        <p>
            If something does not feel quite right with your child&apos;s hearing, communication,
            movement or play, an assessment is a practical first step.
          </p>
        }
        primaryLabel="Book an Early Intervention Assessment"
        whatsappMessage={whatsappMessage} />
      
    </>);

}