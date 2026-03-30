import React from 'react';

import './index.scss';

const LandingNews = () => {
  return (
    <section className="site-wrap landing-news">
      <div className="header-container d-flex">
        <h2 className="main-h2 landing-header">News & Events</h2>
      </div>
      <div className="d-flex news-container">
        <div className="d-flex flex-column news-card">
          <img src="./images/news1.png" alt="Period Poverty In Illinois article" />
          <a
            href="https://illatinonews.com/period-poverty-in-illinois-community-driven-solutions-fighting-against-the-issue/"
            className="link"
          >
            <span>🗞 </span>Period Poverty In Illinois: Community-Driven
            Solutions
          </a>
        </div>
        <div className="d-flex flex-column news-card">
          <img src="./images/news2.png" alt="Menstrual equity in Illinois article" />
          <a
            href="https://centerforhealthjournalism.org/fellowships/projects/what-state-menstrual-equity-illinois"
            className="link"
          >
            <span>🗞 </span>What is the state of menstrual equity in Illinois?
          </a>
        </div>
        <div className="d-flex flex-column news-card">
          <img src="./images/news3.png" alt="Impact of period poverty on youth article" />
          <a
            href="http://blog.chicagoideas.com/futuretoday/period-poverty-justice/"
            className="link"
          >
            <span>🗞 </span>The Impact of Period Poverty on Youth
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingNews;
