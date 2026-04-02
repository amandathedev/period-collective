import React from 'react';

import ConsiderDonating from '../components/ConsiderDonating';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';
import VolunteerQuote from '../components/VolunteerQuote';
import WaysToHelp from '../components/WaysToHelp';

const GetInvolvedPage = () => {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageNameHeader pageName="Get Involved" />
        <div className="site-wrap">
          <VolunteerQuote />
          <WaysToHelp />
        </div>
        <ConsiderDonating />
      </main>
      <Footer />
    </>
  );
};

export default GetInvolvedPage;
