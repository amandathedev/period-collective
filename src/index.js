import React, { Suspense, lazy } from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SiteSettingsProvider } from './context/SiteSettingsContext';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage = lazy(() => import('./pages'));
const AboutPage = lazy(() => import('./pages/about'));
const ContactPage = lazy(() => import('./pages/contact'));
const ContactLegislatorsPage = lazy(() => import('./pages/contact-legislators'));
const DonatePage = lazy(() => import('./pages/donate'));
const DonateSuppliesPage = lazy(() => import('./pages/donate-supplies'));
const GetInvolvedPage = lazy(() => import('./pages/get-involved'));
const NewsPage = lazy(() => import('./pages/news'));
const PackingPartyPage = lazy(() => import('./pages/packing-party'));
const PartnersPage = lazy(() => import('./pages/partners'));
const SharePage = lazy(() => import('./pages/share'));
const DonateSuccessPage = lazy(() => import('./pages/donate-success'));
const DonateCancelPage = lazy(() => import('./pages/donate-cancel'));
const VolunteerSignupPage = lazy(() => import('./pages/volunteer-signup'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SiteSettingsProvider>
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="get-involved" element={<GetInvolvedPage />} />
          <Route path="partners" element={<PartnersPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="donate" element={<DonatePage />} />
          <Route path="donate-success" element={<DonateSuccessPage />} />
          <Route path="donate-cancel" element={<DonateCancelPage />} />
          <Route path="donate-supplies" element={<DonateSuppliesPage />} />
          <Route path="volunteer-signup" element={<VolunteerSignupPage />} />
          <Route path="packing-party" element={<PackingPartyPage />} />
          <Route path="contact-legislators" element={<ContactLegislatorsPage />} />
          <Route path="spread-the-word" element={<SharePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </SiteSettingsProvider>
);

reportWebVitals();
