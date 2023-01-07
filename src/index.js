import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import GetInvolvedPage from './pages/get-involved';
import NewsPage from './pages/news';
import PartnersPage from './pages/partners';
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
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
