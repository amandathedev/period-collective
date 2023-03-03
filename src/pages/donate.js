import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';

const DonatePage = () => {
  return (
    <>
      <div className="site-wrap">
        <Header />
        <PageNameHeader pageName="Donate" />
        <div className="container">
          <div className="row">
            <h3>Donate with your credit or debit card</h3>
            <a href="https://donate.stripe.com/28ocNSdyd0G0dgIaEE">Stripe</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DonatePage;
