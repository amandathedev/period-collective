import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';
import PartnerForm from '../components/PartnerForm';

const PartnersPage = () => {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageNameHeader pageName="Partner with us" />
        <div className="site-wrap">
          <PartnerForm />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PartnersPage;
