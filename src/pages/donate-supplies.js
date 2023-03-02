import React from 'react';

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
      <Footer />
    </>
  );
};

export default DonateSuppliesPage;
