import React from 'react';
import { CalendarCheckIcon } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { Section, SectionHeading } from '../components/ui/Section';
import { ChainFlow } from '../components/ui/StepFlow';
import { ChipGrid } from '../components/ui/ChipGrid';
import { ButtonLink } from '../components/ui/Button';
import { LeadCTA } from '../components/ui/LeadCTA';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import { images, whatsappLink } from '../data/site';

const flow = [
'Hearing',
'Auditory Skills',
'Speech Perception',
'Language',
'Communication',
'Learning'];


const servicesList = [
'Pediatric Hearing Aid Evaluation',
'Hearing Aid Selection Support',
'Hearing Aid Fitting and Programming',
'Hearing Aid Follow-Up',
'Hearing Aid Orientation',
'Auditory Training',
'Listening Skill Development',
'Speech and Language Support',
'Cochlear Implant Rehabilitation',
'Parent Counselling',
'School-Related Hearing Support'];


const whatsappMessage =
'Hello PARC, I would like to enquire about hearing aid and cochlear implant rehabilitation for my child.';

export function HearingRehabilitation() {
  return (
    <>
      <Seo
        title="Cochlear Implant & Hearing Aid Rehabilitation in Nashik | PARC"
        description="Pediatric hearing aid and cochlear implant rehabilitation in Nashik at PARC: hearing aid evaluation, fitting and programming, auditory training, listening skill development and parent counselling." />
      
      <PageHero
        eyebrow="Hearing Rehabilitation"
        title="From Hearing Technology to Meaningful Communication"
        intro={
        <>
            <p>
              A hearing aid or cochlear implant gives a child access to sound. Learning to use that
              sound for listening, speech, language and learning is the rehabilitation journey that
              follows.
            </p>
            <p>
              At PARC, audiology and speech-language therapy work alongside each other so that device
              management and communication development are part of one plan.
            </p>
          </>
        }
        image={images.audiology}
        imageAlt="A child during a hearing assessment session with an audiologist in a bright clinic room"
        actions={
        <>
            <ButtonLink
            to="/contact"
            variant="accent"
            size="lg"
            icon={<CalendarCheckIcon className="h-5 w-5" strokeWidth={2} />}>
            
              Book a Hearing Rehabilitation Consultation
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
        <SectionHeading
          eyebrow="The Rehabilitation Journey"
          title="Hearing Is the Beginning, Not the Destination"
          align="center"
          description={
          <p>
              Each stage builds on the one before it. Progress is monitored so goals can be reviewed as
              the child develops.
            </p>
          } />
        
        <div className="mt-12">
          <ChainFlow steps={flow} />
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Services" title="Hearing Aid & Cochlear Implant Rehabilitation Services" />
        <div className="mt-10">
          <ChipGrid
            items={servicesList}
            note="Services may include the above, depending on the child's hearing status, device and communication goals." />
          
        </div>
      </Section>

      <LeadCTA
        title="Supporting a Child Who Uses Hearing Devices?"
        body={
        <p>
            Whether you are considering a hearing aid, preparing for an implant or already using a
            device, rehabilitation support helps turn hearing into communication.
          </p>
        }
        primaryLabel="Book a Hearing Rehabilitation Consultation"
        whatsappMessage={whatsappMessage} />
      
    </>);

}