import React from 'react';

import ConsiderDonating from '../components/ConsiderDonating';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';

const GetInvolvedPage = () => {
  return (
    <>
      <div className="site-wrap">
        <Header />
        <PageNameHeader pageName="Get Involved" />
        {/* <VolunteerQuote /> */}
        {/* <WaysToHelp /> */}
        <ConsiderDonating />
      </div>
      <Footer />
    </>
  );
};

export default GetInvolvedPage;
