import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';

const PrepareKitsPage = () => {
  return (
    <>
      <div className="site-wrap">
        <Header />
        <PageNameHeader pageName="Prepare Kits" />
      </div>
      <Footer />
    </>
  );
};

export default PrepareKitsPage;
