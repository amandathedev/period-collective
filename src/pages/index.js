import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowWeWork from '../components/HowWeWork';
import LandingNews from '../components/LandingNews';
import LandingQuote from '../components/LandingQuote';
import WhoWeAre from '../components/WhoWeAre';

import '../scss/index.scss';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* <WhoWeAre />
      <HowWeWork />
      <LandingQuote />
      <LandingNews />
      <Footer /> */}
    </div>
  );
};

export default LandingPage;
