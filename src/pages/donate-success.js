import React from 'react';

import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';

const DonateSuccessPage = () => {
  return (
    <>
      <Header />
      <main id="main-content">
        <div className="site-wrap" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
          <h1 className="main-h2">Thank you!</h1>
          <p style={{ fontSize: '18px', maxWidth: '520px', margin: '1rem auto 2rem', lineHeight: '1.7' }}>
            Your donation means the world to us — and to the people in our community who depend on access to menstrual products. We&apos;re so grateful for your support.
          </p>
          <Link to="/" className="blue-button" style={{ margin: '0 auto' }}>
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DonateSuccessPage;
