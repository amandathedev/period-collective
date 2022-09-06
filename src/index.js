import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about";
import LandingPage from "./pages";
import PartnersPage from "./pages/partners";
import GetInvolvedPage from "./pages/get-involved";
import NewsPage from "./pages/news";
import EventsPage from "./pages/events";
import ContactPage from "./pages/contact";
import DonatePage from "./pages/donate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="get-involved" element={<GetInvolvedPage />} />
      <Route path="partners" element={<PartnersPage />} />
      <Route path="news" element={<NewsPage />} />
      <Route path="events" element={<EventsPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="donate" element={<DonatePage />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
