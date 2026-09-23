import React from 'react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';

type PolicyProps = {
  sections: {heading: string;body: string;}[];
};

function PolicyBody({ sections }: PolicyProps) {
  return (
    <Section tone="white">
      <div className="max-w-3xl space-y-8">
        {sections.map((section) =>
        <div key={section.heading}>
            <h2 className="font-display text-xl font-bold text-brand-700">{section.heading}</h2>
            <p className="mt-3 text-base leading-relaxed text-brand-800/75">{section.body}</p>
          </div>
        )}
        <p className="rounded-card border border-brand-100 bg-brand-50 p-5 text-sm text-brand-800/65">
          This information is provided to help families understand how PARC communicates and supports care.
        </p>
      </div>
    </Section>);

}

export function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy | PARC Nashik"
        description="Privacy policy for PARC – Pediatric Audiological Rehabilitation Center, Nashik." />
      
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy Policy"
        intro={
        <p>
            How PARC handles the information families share with us through this website and our
            enquiry channels.
          </p>
        } />
      
      <PolicyBody
        sections={[
        {
          heading: 'Information We Collect',
          body: 'Details you choose to share through the enquiry form or WhatsApp, such as your name, your child’s name and age, your mobile number and your main concern.'
        },
        {
          heading: 'How Information Is Used',
          body: 'Information shared with us is used to respond to your enquiry, arrange appointments and provide relevant clinical information.'
        },
        {
          heading: 'Sharing',
          body: 'Information is not sold or shared for marketing purposes.'
        }]
        } />
      
    </>);

}

export function Terms() {
  return (
    <>
      <Seo
        title="Terms & Conditions | PARC Nashik"
        description="Terms and conditions for use of the PARC – Pediatric Audiological Rehabilitation Center website." />
      
      <PageHero
        eyebrow="Terms & Conditions"
        title="Terms & Conditions"
        intro={<p>Terms for the use of this website and the information published on it.</p>} />
      
      <PolicyBody
        sections={[
        {
          heading: 'Information on This Website',
          body: 'Content on this website is general information about the services offered at PARC. It is not a substitute for individual clinical assessment or advice.'
        },
        {
          heading: 'Appointments and Enquiries',
          body: 'Enquiries submitted through this website are a request for contact. Appointments are confirmed by the PARC team.'
        },
        {
          heading: 'Changes',
          body: 'Services, content and these terms may be updated from time to time.'
        }]
        } />
      
    </>);

}