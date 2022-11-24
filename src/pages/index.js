import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import HowWeWork from '../components/HowWeWork';
import LandingQuote from '../components/LandingQuote';
import WhoWeAre from '../components/WhoWeAre';

import '../scss/index.scss';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <WhoWeAre />
      <HowWeWork />
      <LandingQuote />
    </div>
  );
};

export default LandingPage;
