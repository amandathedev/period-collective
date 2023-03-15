import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';

const PartnersPage = () => {
  return (
    <div className="site-wrap">
      <Header />
      <PageNameHeader pageName="Partner with us" />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdYDrpRif1_7RwMHhwH8klZMMBqVJTKXnmv7yYsN6HY8vCgAA/viewform?embedded=true"
        width="1220"
        height="2363"
      >
        Loading…
      </iframe>
      <Footer />
    </div>
  );
};

export default PartnersPage;
