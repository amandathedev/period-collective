import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { fetchEntries } from '../../services/contentfulClient';
import './index.scss';

const Hero = () => {
  const [content, setContent] = useState({});

  useEffect(() => {
    fetchEntries('homePage').then(items => {
      if (items && items.length > 0) setContent(items[0].fields);
    });
  }, []);

  const line1 = content.heroLine1 || 'PERIOD PRODUCTS';
  const line2 = content.heroLine2 || 'FOR ALL IN CHICAGO';
  const ctaText = content.heroCtaText || 'Join our mission';

  return (
    <div className="hero-container">
      <img
        src="https://images.unsplash.com/photo-1545153485-e3bf87d59682"
        alt="Period supplies including tampons and pads"
        className="hero-image"
      />
      <div className="hero-image-overlay"></div>
      <div className="hero-text-container">
        <h1 className="hero-text">
          {line1}
          <br />
          <span>{line2}</span><span className="period">.</span>
        </h1>
        <Link className="blue-button" to="/get-involved">
          {ctaText}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
