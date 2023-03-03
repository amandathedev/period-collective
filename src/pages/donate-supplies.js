import React from 'react';

import { Link } from 'react-router-dom';

import ConsiderDonating from '../components/ConsiderDonating';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';

import '../scss/donate-supplies.scss';

const DonateSuppliesPage = () => {
  return (
    <>
      <div className="site-wrap">
        <Header />
        <PageNameHeader pageName="Donate Supplies" />
        {/* TODO combine with consider donating, quotes into one reusable component */}
        <div className="amazon-callout">
          <h2>Order directly off of our Amazon Wishlist</h2>
          <p>
            Hassle free, ship directly to us, and we&apos;ll handle the rest!
          </p>
          <Link to="/donate" className="white-button">
            Let&apos;s do it
          </Link>
        </div>

        <div className="shipping-callout">
          <h2>Ship unopened boxes of menstrual supplies directly to us</h2>
          <address>
            The Period Collective Donations<br></br>
            PO Box 31401<br></br>
            Chicago, IL 60631
          </address>
          <p>
            If you have products you&apos;d like to drop off, please contact us
            at{' '}
            <a href="mailto:contact@theperiodcollective.org" className="link">
              contact@theperiodcollective.org
            </a>
          </p>
        </div>

        <div className="donate-supplies-callout">
          <div className="left">
            <h2>Supplies we need</h2>
            <ul>
              <li>Pads (all sizes)</li>
              <li>Tampons (all sizes)</li>
              <li>Liners</li>
              <li>Wipes</li>
              <li>Incontinence products</li>
              <li>Menstrual cups</li>
              <li>Period underwear</li>
              <li>Reusable pads</li>
              <li>
                Bags for period bags (
                <a
                  href="https://www.purlsoho.com/create/2009/03/15/easy-drawstring-bag/"
                  className="link"
                >
                  See DIY instructions to make simple bags
                </a>
                )
              </li>
              <li>Fabric and ribbon to make bags</li>
            </ul>
          </div>
          <div>
            <img src="./images/supplies.jpg" />
          </div>
        </div>
      </div>
      <ConsiderDonating />
      <Footer />
    </>
  );
};

export default DonateSuppliesPage;
