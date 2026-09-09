import React from 'react';
import { ServicePageTemplate } from '../components/ui/ServicePageTemplate';
import { images } from '../data/site';

const areas = [
'Fine Motor Skills',
'Gross Motor Coordination',
'Handwriting Readiness',
'Visual-Motor Integration',
'Self-Care Skills',
'Dressing Skills',
'Feeding-Related Functional Skills',
'Attention and Participation',
'Motor Planning',
'Bilateral Coordination',
'School Readiness',
'Functional Independence',
'Developmental Skill Delays'];


export function OccupationalTherapy() {
  return (
    <ServicePageTemplate
      seoTitle="Pediatric Occupational Therapy in Nashik | Child OT Centre | PARC"
      seoDescription="Pediatric occupational therapy in Nashik at PARC supporting fine motor skills, handwriting readiness, self-care, motor planning, attention and school participation for children."
      eyebrow="Occupational Therapy"
      h1="Pediatric Occupational Therapy in Nashik"
      intro={
      <>
          <p>
            Occupational therapy for children focuses on helping them participate more successfully in
            the activities that matter in everyday life.
          </p>
          <p>
            These may include playing, learning, dressing, eating, writing, interacting and
            participating at school.
          </p>
        </>
      }
      image={images.ot}
      imageAlt="A child concentrating on a fine motor activity with an occupational therapist supporting nearby"
      areasTitle="Areas of Occupational Therapy Support"
      areas={areas}
      highlight="Helping Children Participate, Not Just Perform Exercises."
      ctaLabel="Book an Occupational Therapy Assessment"
      whatsappMessage="Hello PARC, I would like to enquire about pediatric occupational therapy for my child." />);


}