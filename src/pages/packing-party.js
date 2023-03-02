import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';
import '../scss/packing-party.scss';

const PackingPartyPage = () => {
  return (
    <>
      <div className="site-wrap packing-parties">
        <Header />
        <PageNameHeader pageName="Packing Parties" />
        <div className="info">
          <h2 className="main-h2">What is it?</h2>
          <p>
            It&apos;s a party! Gather supplies and some friends or coworkers and
            pack up period supplies in individual kits. A kit lasts each
            menstruator about 3 months and contains a variety of pads, tampons,
            and other supplies to get them through their period.
          </p>
        </div>
        <h3 className="main-h3">Past packing parties</h3>
        <div className="d-flex photo-row">
          <img src="./images/period-party1.png" className="photo" />
          <img src="./images/period-party2.png" className="photo" />
          <img src="./images/period-party3.png" className="photo" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PackingPartyPage;
