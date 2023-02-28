import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';

const ContactPage = () => {
  return (
    <div className="site-wrap">
      <Header />
      <PageNameHeader pageName="Contact Us" />
      <Footer />
    </div>
  );
};

export default ContactPage;
