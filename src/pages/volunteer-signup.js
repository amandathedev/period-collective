import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';
import '../scss/volunteer-signup.scss';

const VolunteerSignupPage = () => {
  return (
    <>
      <Header />
      <main className="site-wrap volunteer-signup">
        <PageNameHeader pageName="Volunteer" />
        <iframe
          title="Volunteer Signup Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLScVCswUCORgL3WFNCGhQBPQQ4Zu-tQiIv8O3oo16yGPUOhoAA/viewform?embedded=true"
          width="1020"
          height="1523"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
        >
          Loading…
        </iframe>
      </main>
      <Footer />
    </>
  );
};

export default VolunteerSignupPage;
