import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';

const ContactLegislatorsPage = () => {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageNameHeader pageName="Contact Legislators" />
      </main>
      <Footer />
    </>
  );
};

export default ContactLegislatorsPage;
