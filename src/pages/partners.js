import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';

const PartnersPage = () => {
  return (
    <>
      <Header />
      <main className="site-wrap">
        <PageNameHeader pageName="Partner with us" />
        <iframe
          title="Partner Application Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdYDrpRif1_7RwMHhwH8klZMMBqVJTKXnmv7yYsN6HY8vCgAA/viewform?embedded=true"
          width="1220"
          height="2363"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
        >
          Loading…
        </iframe>
      </main>
      <Footer />
    </>
  );
};

export default PartnersPage;
