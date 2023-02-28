import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';

const AboutPage = () => {
  return (
    <>
      <div className="site-wrap">
        <Header />
        <PageNameHeader pageName="About" />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
