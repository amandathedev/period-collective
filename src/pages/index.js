import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';

import '../scss/index.scss';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <WhoWeAre />
    </div>
  );
};

export default LandingPage;
