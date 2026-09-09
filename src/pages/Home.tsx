import React from 'react';
import { Seo } from '../components/ui/Seo';
import { Hero } from '../components/home/Hero';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { WhyParc } from '../components/home/WhyParc';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { MultidisciplinaryModel } from '../components/home/MultidisciplinaryModel';
import { AssessmentSection } from '../components/home/AssessmentSection';
import { ParentQuestions } from '../components/home/ParentQuestions';
import { NashikSeo } from '../components/home/NashikSeo';
import { EnquiryForm } from '../components/home/EnquiryForm';
import { FaqSection } from '../components/home/FaqSection';
import { LeadCTA } from '../components/ui/LeadCTA';

export function Home() {
  return (
    <>
      <Seo
        title="Pediatric Audiology, Speech & OT Centre in Nashik | PARC"
        description="PARC Pediatric Audiological Rehabilitation Center is a multidisciplinary pediatric rehabilitation centre in Nashik offering audiology, speech therapy, occupational therapy, sensory integration, special education and early intervention." />
      
      <Hero />
      <ProcessTimeline />
      <WhyParc />
      <ServicesGrid />
      <MultidisciplinaryModel />
      <AssessmentSection />
      <ParentQuestions />
      <LeadCTA />
      <NashikSeo />
      <EnquiryForm />
      <FaqSection />
    </>);

}