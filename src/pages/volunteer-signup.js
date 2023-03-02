import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';

const VolunteerSignupPage = () => {
  return (
    <>
      <div className="site-wrap">
        <Header />
        <PageNameHeader pageName="Volunteer" />
      </div>
      <Footer />
    </>
  );
};

export default VolunteerSignupPage;
