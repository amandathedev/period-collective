import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';

const ContactPage = () => {
  return (
    <>
      <div className="site-wrap">
        <Header />
        <PageNameHeader pageName="Contact Us" />
        <div className="donate-supplies-callout">
          <div className="left">
            <h2>Our Mailing Address</h2>
            <address>
              The Period Collective Donations<br></br>
              4256 W Diversey Ave<br></br>
              Chicago, IL 60639
            </address>
            <p>
              If you have products you&apos;d like to drop off, please contact
              us at{' '}
              <a href="mailto:contact@theperiodcollective.org" className="link">
                contact@theperiodcollective.org
              </a>
            </p>
          </div>
          <div>
            <img src="./images/supplies.jpg" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
