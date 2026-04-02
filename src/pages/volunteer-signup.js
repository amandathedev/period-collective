import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';
import VolunteerForm from '../components/VolunteerForm';

const VolunteerSignupPage = () => {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageNameHeader pageName="Volunteer" />
        <div className="site-wrap">
          <VolunteerForm />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default VolunteerSignupPage;
