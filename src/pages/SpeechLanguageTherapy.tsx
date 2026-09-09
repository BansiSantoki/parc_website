import React from 'react';
import { ServicePageTemplate } from '../components/ui/ServicePageTemplate';
import { images } from '../data/site';

const areas = [
'Speech Delay',
'Language Delay',
'Late Talking',
'Articulation Difficulties',
'Speech Sound Disorders',
'Receptive Language Difficulties',
'Expressive Language Difficulties',
'Social Communication',
'Pragmatic Language',
'Fluency Difficulties',
'Voice-Related Concerns',
'Communication Difficulties Associated With Developmental Conditions',
'AAC / Alternative Communication Support Where Appropriate',
'Auditory-Verbal Communication Support for Children With Hearing Loss'];


export function SpeechLanguageTherapy() {
  return (
    <ServicePageTemplate
      seoTitle="Child Speech Therapy in Nashik | Pediatric Speech & Language Therapy | PARC"
      seoDescription="Pediatric speech and language therapy in Nashik at PARC for speech delay, language delay, articulation, fluency, social communication and communication support for children with hearing loss."
      eyebrow="Speech & Language Therapy"
      h1="Pediatric Speech & Language Therapy in Nashik"
      intro={
      <>
          <p>
            When a child has difficulty communicating, early support can make an important difference.
          </p>
          <p>
            At PARC, speech-language intervention begins with understanding how the child communicates,
            what they understand, what they can express and what may be affecting their communication
            development.
          </p>
        </>
      }
      image={images.speech}
      imageAlt="A speech-language therapist using picture cards with an engaged toddler"
      areasTitle="Areas of Speech & Language Support"
      areas={areas}
      highlight="Communication is more than speaking."
      ctaLabel="Book a Speech & Language Evaluation"
      whatsappMessage="Hello PARC, I would like to enquire about pediatric speech and language therapy for my child." />);


}