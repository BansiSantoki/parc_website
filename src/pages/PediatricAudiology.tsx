import React from 'react';
import { ServicePageTemplate } from '../components/ui/ServicePageTemplate';
import { images } from '../data/site';

const areas = [
'Newborn and infant hearing assessment',
'Pediatric hearing evaluation',
'Behavioural audiometry',
'Play audiometry',
'OAE',
'Tympanometry',
'ABR / BERA',
'Hearing aid evaluation',
'Hearing aid fitting and programming',
'Hearing aid verification and follow-up',
'Cochlear implant rehabilitation support',
'Auditory skill development',
'Listening and communication support',
'School-age hearing assessment'];


export function PediatricAudiology() {
  return (
    <ServicePageTemplate
      seoTitle="Pediatric Audiologist in Nashik | Child Hearing Assessment | PARC"
      seoDescription="Pediatric audiology in Nashik at PARC: age-appropriate child hearing assessment, hearing aid fitting, cochlear implant rehabilitation support and ongoing audiological monitoring."
      eyebrow="Pediatric Audiology"
      h1="Pediatric Audiology & Child Hearing Care in Nashik"
      intro={
      <>
          <p>
            Hearing plays an important role in communication, speech and language development and
            learning.
          </p>
          <p>
            At PARC, pediatric audiology focuses on age-appropriate hearing assessment, interpretation,
            rehabilitation and ongoing monitoring.
          </p>
          <p>
            Our approach considers not only whether a child can hear, but how hearing may be affecting
            communication and everyday participation.
          </p>
        </>
      }
      image={images.audiology}
      imageAlt="A young child wearing soft headphones during a playful hearing assessment with an audiologist"
      areasTitle="Pediatric Audiology Services at PARC"
      areasIntro={
      <p>
          Which tests are used depends on the child&apos;s age, developmental stage and the reason for
          referral. Our audiologist will explain what each step involves.
        </p>
      }
      areas={areas}
      highlight="Hearing is not only about detecting sound. It is about how a child uses sound to communicate, learn and take part in everyday life."
      ctaLabel="Book a Pediatric Hearing Assessment"
      whatsappMessage="Hello PARC, I would like to book a pediatric hearing assessment for my child." />);


}