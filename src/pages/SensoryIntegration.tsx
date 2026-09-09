import React from 'react';
import { ServicePageTemplate } from '../components/ui/ServicePageTemplate';
import { Section, SectionHeading } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';
import { images } from '../data/site';

const areas = [
'Sensory Modulation',
'Sensory Seeking Behaviours',
'Sensory Sensitivity',
'Body Awareness',
'Motor Planning',
'Movement Processing',
'Attention During Activities',
'Classroom Participation',
'Dressing and Grooming',
'Play',
'Transitions Between Activities'];


const everydayExamples = [
{
  title: 'At home',
  text: 'A child may resist certain clothing textures, hair brushing, nail cutting or particular food textures.'
},
{
  title: 'In play',
  text: 'A child may constantly seek movement, spinning and crashing, or may avoid swings, slides and messy play.'
},
{
  title: 'At school',
  text: 'A busy classroom can feel overwhelming, making it harder to sit, listen, organise materials or complete work.'
}];


export function SensoryIntegration() {
  return (
    <ServicePageTemplate
      seoTitle="Sensory Integration Therapy in Nashik | Pediatric Sensory OT | PARC"
      seoDescription="Sensory integration and sensory processing support in Nashik at PARC. Occupational therapy-based intervention for sensory modulation, body awareness, motor planning and classroom participation."
      eyebrow="Sensory Integration"
      h1="Sensory Integration & Sensory Processing Support"
      intro={
      <>
          <p>
            Our senses give us information all day long — what we see, hear, touch, taste and smell,
            along with information about movement and body position.
          </p>
          <p>
            Most of the time this information is organised automatically. For some children, processing
            and responding to it is harder, and that can show up as discomfort, avoidance, restlessness
            or difficulty settling into an activity.
          </p>
          <p>
            Sensory integration support at PARC is an occupational therapy-based approach that looks at
            how sensory processing may be affecting a child&apos;s everyday participation.
          </p>
        </>
      }
      image={images.sensory}
      imageAlt="A smiling child swinging on a platform swing in a bright pediatric sensory integration gym"
      areasTitle="Areas We May Address"
      areas={areas}
      highlight={
      <>
          We don&apos;t aim to simply make a child tolerate sensory input.
          <br />
          We aim to help the child participate more comfortably and effectively in meaningful everyday
          activities.
        </>
      }
      ctaLabel="Book a Sensory Processing Assessment"
      whatsappMessage="Hello PARC, I would like to enquire about sensory integration support for my child.">
      
      <Section tone="soft">
        <SectionHeading
          eyebrow="What Parents Often Notice"
          title="How Sensory Processing Can Show Up in Daily Life"
          align="center" />
        
        <ul className="mt-10 grid gap-5 sm:grid-cols-3">
          {everydayExamples.map((item, index) =>
          <Reveal as="li" key={item.title} delay={Math.min(index * 0.06, 0.2)}>
              <article className="flex h-full flex-col rounded-panel border border-brand-100 bg-white p-7 shadow-ring">
                <h3 className="font-display text-lg font-bold text-brand-700">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-800/70">{item.text}</p>
              </article>
            </Reveal>
          )}
        </ul>
      </Section>
    </ServicePageTemplate>);

}