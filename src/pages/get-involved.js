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
      <div className="site-wrap">
        <Header />
        <PageNameHeader pageName="Get Involved" />
        <VolunteerQuote />
        <WaysToHelp />
      </div>
      <ConsiderDonating />
      <Footer />
    </>
  );
};

export default GetInvolvedPage;
