import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';

const NewsPage = () => {
  return (
    <div className="site-wrap">
      <Header />
      <PageNameHeader pageName="News & Events" />
      <Footer />
    </div>
  );
};

export default NewsPage;
