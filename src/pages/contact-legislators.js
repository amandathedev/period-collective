import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';

const ContactLegislatorsPage = () => {
  return (
    <>
      <div className="site-wrap">
        <Header />
        <PageNameHeader pageName="Contact Legislators" />
      </div>
      <Footer />
    </>
  );
};

export default ContactLegislatorsPage;
