import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';

const NewsPage = () => {
  return (
    <>
      <Header />
      <main className="site-wrap">
        <PageNameHeader pageName="News & Events" />
      </main>
      <Footer />
    </>
  );
};

export default NewsPage;
