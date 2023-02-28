import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';

const GetInvolvedPage = () => {
  return (
    <>
      <div className="site-wrap">
        <Header />
        <PageNameHeader pageName="Get Involved" />
      </div>
      <Footer />
    </>
  );
};

export default GetInvolvedPage;
