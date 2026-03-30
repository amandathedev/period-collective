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
      <main className="site-wrap">
        <PageNameHeader pageName="Get Involved" />
        <VolunteerQuote />
        <WaysToHelp />
      </main>
      <ConsiderDonating />
      <Footer />
    </>
  );
};

export default GetInvolvedPage;
