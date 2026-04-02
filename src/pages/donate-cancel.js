import React from 'react';

import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { useSiteSettings } from '../context/SiteSettingsContext';

const DonateCancelPage = () => {
  const settings = useSiteSettings();
  const donateCancelMessage = settings.donateCancelMessage || "Your donation was cancelled. If you'd like to try again or explore other ways to help, we'd love to have you.";

  return (
    <>
      <Header />
      <main id="main-content">
        <div className="site-wrap" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
          <h1 className="main-h2">No worries!</h1>
          <p style={{ fontSize: '18px', maxWidth: '520px', margin: '1rem auto 2rem', lineHeight: '1.7' }}>
            {donateCancelMessage}
          </p>
          <Link to="/donate" className="blue-button" style={{ margin: '0 auto' }}>
            Back to Donate
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DonateCancelPage;
