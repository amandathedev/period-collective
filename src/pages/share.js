import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';

const SharePage = () => {
  return (
    <>
      <Header />
      <main className="site-wrap">
        <PageNameHeader pageName="Spread the Word" />
      </main>
      <Footer />
    </>
  );
};

export default SharePage;
