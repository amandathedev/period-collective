import React from 'react';

import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';

import '../scss/contact.scss';

const ContactPage = () => {
  return (
    <>
      <div className="site-wrap contact-page">
        <Header />
        <PageNameHeader pageName="Contact Us" />
        <div className="donate-supplies-callout mt-3">
          <div className="left">
            <h2>Our Warehouse Address</h2>
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
        <h3 className="main-h3 mt-4">
          Do you represent an organization interested in partnering with us?
        </h3>
        <p className="center">
          We&apos;re always looking for new partners to help us reach more
          people. Please visit{' '}
          <Link to="/partners" className="link">
            our partner page
          </Link>{' '}
          to learn more about how we can work together.
        </p>
        <h3 className="main-h3 mt-4 mb-0">
          Interested in volunteering with us?
        </h3>
        <p className="center">
          Please visit our{' '}
          <a href="/volunteer-signup" className="link">
            volunteer signup page
          </a>{' '}
          to learn sign up for our volunteer newsletter.
        </p>
        <h3 className="main-h3 mt-4 mb-0">
          Do you have a question or comment for us?
        </h3>
        <p className="center contact-us">
          Please reach out to us at{' '}
          <a href="mailto:contact@theperiodcollective.org" className="link">
            contact@theperiodcollective.org
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
