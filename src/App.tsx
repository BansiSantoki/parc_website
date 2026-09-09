import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { PediatricAudiology } from './pages/PediatricAudiology';
import { SpeechLanguageTherapy } from './pages/SpeechLanguageTherapy';
import { OccupationalTherapy } from './pages/OccupationalTherapy';
import { SensoryIntegration } from './pages/SensoryIntegration';
import { SpecialEducation } from './pages/SpecialEducation';
import { EarlyIntervention } from './pages/EarlyIntervention';
import { HearingRehabilitation } from './pages/HearingRehabilitation';
import { ChildDevelopmentAssessment } from './pages/ChildDevelopmentAssessment';
import { ChildDevelopmentConcerns } from './pages/ChildDevelopmentConcerns';
import { ParentResources } from './pages/ParentResources';
import { Blog } from './pages/Blog';
import { BlogArticle } from './pages/BlogArticle';
import { Contact } from './pages/Contact';
import { PrivacyPolicy, Terms } from './pages/Legal';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pediatric-audiology" element={<PediatricAudiology />} />
          <Route path="/speech-language-therapy" element={<SpeechLanguageTherapy />} />
          <Route path="/occupational-therapy" element={<OccupationalTherapy />} />
          <Route path="/sensory-integration" element={<SensoryIntegration />} />
          <Route path="/special-education" element={<SpecialEducation />} />
          <Route path="/early-intervention" element={<EarlyIntervention />} />
          <Route
            path="/hearing-aids-cochlear-implant-rehabilitation"
            element={<HearingRehabilitation />} />
          
          <Route path="/child-development-assessment" element={<ChildDevelopmentAssessment />} />
          <Route path="/child-development-concerns" element={<ChildDevelopmentConcerns />} />
          <Route path="/parent-resources" element={<ParentResources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>);

}