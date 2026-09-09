import React from 'react';
import { CalendarCheckIcon, MessageCircleIcon } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { Section, SectionHeading } from '../components/ui/Section';
import { ChipGrid, Highlight } from '../components/ui/ChipGrid';
import { ButtonLink } from '../components/ui/Button';
import { LeadCTA } from '../components/ui/LeadCTA';
import { EnquiryForm } from '../components/home/EnquiryForm';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { assessmentAreas } from '../data/services';
import { images, whatsappLink } from '../data/site';

const whatsappMessage =
'Hello PARC, I would like to book a child development assessment for my child.';

export function ChildDevelopmentAssessment() {
  return (
    <>
      <Seo
        title="Child Development Assessment in Nashik | PARC"
        description="Child development assessment in Nashik at PARC. Assessment may explore hearing, speech, language, communication, learning, motor skills, sensory processing, self-care and school readiness." />
      
      <PageHero
        eyebrow="Child Development Assessment"
        title="Understand Before You Intervene."
        intro={
        <>
            <p>Parents often ask:</p>
            <p className="font-display text-xl font-bold text-accent-500">
              &ldquo;Is my child&apos;s development on track?&rdquo;
            </p>
            <p>Instead of guessing, start with an appropriate assessment.</p>
            <p>At PARC, assessment may explore multiple developmental areas.</p>
          </>
        }
        image={images.about}
        imageAlt="A bright, welcoming pediatric assessment and therapy room at PARC"
        actions={
        <>
            <ButtonLink
            to="/contact"
            variant="accent"
            size="lg"
            icon={<CalendarCheckIcon className="h-5 w-5" strokeWidth={2} />}>
            
              Book a Child Development Assessment
            </ButtonLink>
            <ButtonLink
            href={whatsappLink(whatsappMessage)}
            external
            variant="ghost"
            size="lg"
            icon={<MessageCircleIcon className="h-5 w-5" strokeWidth={2} />}>
            
              WhatsApp PARC
            </ButtonLink>
          </>
        } />
      

      <Section tone="white">
        <SectionHeading
          eyebrow="Areas of Assessment"
          title="Developmental Areas an Assessment May Explore"
          description={
          <p>
              Which areas are assessed depends on your child&apos;s age, your concerns and what the
              initial discussion suggests may be relevant.
            </p>
          } />
        
        <div className="mt-10">
          <ChipGrid
            items={assessmentAreas}
            columns={4}
            note="Assessment may include the above areas. Findings are explained to parents in plain language along with the recommended next steps." />
          
        </div>
        <div className="mt-12">
          <Highlight>
            An assessment is not a label. It is a clear starting point for the right kind of support.
          </Highlight>
        </div>
      </Section>

      <ProcessTimeline />
      <EnquiryForm />
      <LeadCTA primaryLabel="Book a Child Development Assessment" whatsappMessage={whatsappMessage} />
    </>);

}