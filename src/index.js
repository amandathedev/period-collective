import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import ContactLegislatorsPage from './pages/contact-legislators';
import DonatePage from './pages/donate';
import DonateSuppliesPage from './pages/donate-supplies';
import GetInvolvedPage from './pages/get-involved';
import NewsPage from './pages/news';
import PartnersPage from './pages/partners';
import PrepareKitsPage from './pages/prepare-kits';
import SharePage from './pages/share';
import VolunteerSignupPage from './pages/volunteer-signup';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="get-involved" element={<GetInvolvedPage />} />
      <Route path="partners" element={<PartnersPage />} />
      <Route path="news" element={<NewsPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="donate" element={<DonatePage />} />
      <Route path="donate-supplies" element={<DonateSuppliesPage />} />
      <Route path="volunteer-signup" element={<VolunteerSignupPage />} />
      <Route path="prepare-kits" element={<PrepareKitsPage />} />
      <Route path="contact-legislators" element={<ContactLegislatorsPage />} />
      <Route path="spread-the-word" element={<SharePage />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
