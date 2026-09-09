import React from 'react';
import { ServicePageTemplate } from '../components/ui/ServicePageTemplate';
import { images } from '../data/site';

const areas = [
'Early Academic Skills',
'Pre-Literacy',
'Pre-Numeracy',
'Reading',
'Writing',
'Mathematics',
'Attention to Learning',
'Classroom Readiness',
'Learning Strategies',
'Individualised Educational Planning',
'Functional Academics',
'School Participation',
'Study Skills'];


export function SpecialEducation() {
  return (
    <ServicePageTemplate
      seoTitle="Special Education Centre in Nashik | Individualised Learning Support | PARC"
      seoDescription="Special education and individualised learning support in Nashik at PARC covering pre-literacy, reading, writing, mathematics, classroom readiness and individualised educational planning."
      eyebrow="Special Education"
      h1="Special Education & Learning Support"
      intro={
      <>
          <p>Every child learns differently.</p>
          <p>
            Special education at PARC focuses on identifying the child&apos;s learning profile and
            developing structured educational support around their abilities and needs.
          </p>
        </>
      }
      image={images.education}
      imageAlt="A special educator working one-to-one with a child on a structured reading and writing activity"
      areasTitle="Areas of Learning Support"
      areas={areas}
      highlight="Different learning needs require different learning approaches."
      ctaLabel="Book a Learning Support Assessment"
      whatsappMessage="Hello PARC, I would like to enquire about special education and learning support for my child." />);


}