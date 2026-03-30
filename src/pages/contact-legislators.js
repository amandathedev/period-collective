import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';

const ContactLegislatorsPage = () => {
  return (
    <>
      <Header />
      <main className="site-wrap">
        <PageNameHeader pageName="Contact Legislators" />
      </main>
      <Footer />
    </>
  );
};

export default ContactLegislatorsPage;
