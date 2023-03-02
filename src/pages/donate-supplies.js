import React from 'react';

import ConsiderDonating from '../components/ConsiderDonating';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';

const DonateSuppliesPage = () => {
  return (
    <>
      <div className="site-wrap">
        <Header />
        <PageNameHeader pageName="Donate Supplies" />
      </div>
      <ConsiderDonating />
      <Footer />
    </>
  );
};

export default DonateSuppliesPage;
