import React from 'react';

// import { Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './index.scss';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text-container">
        <h1 className="hero-text">
          PERIOD PRODUCTS <br></br>
          <span className="hero-span">FOR ALL IN </span>CHICAGO.
        </h1>
        <Link to="/get-involved" className="blue-button">
          Get Involved
        </Link>
      </div>
    </div>
  );
};

export default Hero;
