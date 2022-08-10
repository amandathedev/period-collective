import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import DonatePage from "./pages/donate";
import NewsPage from "./pages/news";
import PartnersPage from "./pages/partners";
import GetInvolvedPage from "./pages/get-involved";
import EventsPage from "./pages/events";

const App = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
