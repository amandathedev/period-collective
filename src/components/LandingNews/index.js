import React, { useEffect, useState } from 'react';

import './index.scss';
import { fetchEntries } from '../../services/contentfulClient';

const FALLBACK_ARTICLES = [
  {
    image: './images/news1.png',
    url: 'https://illatinonews.com/period-poverty-in-illinois-community-driven-solutions-fighting-against-the-issue/',
    title: 'Period Poverty In Illinois: Community-Driven Solutions'
  },
  {
    image: './images/news2.png',
    url: 'https://centerforhealthjournalism.org/fellowships/projects/what-state-menstrual-equity-illinois',
    title: 'What is the state of menstrual equity in Illinois?'
  },
  {
    image: './images/news3.png',
    url: 'http://blog.chicagoideas.com/futuretoday/period-poverty-justice/',
    title: 'The Impact of Period Poverty on Youth'
  }
];

const LandingNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchEntries('newsArticle', { order: 'fields.order' }).then(items => {
      if (items && items.length > 0) {
        setArticles(
          items.map((item, index) => ({
            image: item.fields.image?.fields?.file?.url
              ? `https:${item.fields.image.fields.file.url}`
              : FALLBACK_ARTICLES[index]?.image || null,
            url: item.fields.url,
            title: item.fields.title
          }))
        );
      }
    });
  }, []);

  const displayArticles = articles.length > 0 ? articles : FALLBACK_ARTICLES;

  return (
    <div className="site-wrap landing-news">
      <div className="header-container d-flex">
        <h2 className="main-h2 landing-header">News & Events</h2>
      </div>
      <div className="d-flex news-container">
        {displayArticles.map(article => (
          <div key={article.url} className="d-flex flex-column news-card">
            {article.image && <img src={article.image} alt={article.title} />}
            <a href={article.url} className="link" target="_blank" rel="noreferrer" aria-label={`${article.title} (opens in new tab)`}>
              <span aria-hidden="true">🗞 </span>{article.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingNews;
