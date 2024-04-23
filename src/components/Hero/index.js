import React from 'react';

import { Link } from 'react-router-dom';

import './index.scss';

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-image-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1545153485-e3bf87d59682"
          alt="tampons"
          className="hero-image"
        />
        <div className="hero-text-container">
          <h1 className="hero-text">
            PERIOD PRODUCTS
            <br />
            <span>FOR ALL IN</span> CHICAGO<span className="period">.</span>
          </h1>
          <Link className="blue-button" to="/get-involved">
            Join our mission
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
