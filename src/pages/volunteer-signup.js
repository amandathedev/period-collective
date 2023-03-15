import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';
import '../scss/volunteer-signup.scss';

const VolunteerSignupPage = () => {
  return (
    <>
      <div className="site-wrap volunteer-signup">
        <Header />
        <PageNameHeader pageName="Volunteer" />
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScVCswUCORgL3WFNCGhQBPQQ4Zu-tQiIv8O3oo16yGPUOhoAA/viewform?embedded=true"
          width="1020"
          height="1523"
        >
          Loading…
        </iframe>
      </div>
      <Footer />
    </>
  );
};

export default VolunteerSignupPage;
