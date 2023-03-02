import React from 'react';

import { Link } from 'react-router-dom';
import './index.scss';

const HowWeWork = () => {
  return (
    <div className="site-wrap how-we-work">
      <h2 className="main-h2">How we work</h2>
      <div className="d-flex row">
        <div className="d-flex flex-column column">
          <div className="image-header-wrapper">
            <img src="./images/one-big.png" className="circle" />
            <h3>ONE</h3>
          </div>
          <p>
            We get period products from donors (regular people like you!) and
            purchase supplies in bulk with monetary donations.
          </p>
          <Link className="blue-button" to="/donate">
            See Donations
          </Link>
        </div>
        <div className="d-flex flex-column column">
          <div className="image-header-wrapper">
            <img src="./images/two-big.png" className="circle" />
            <h3>TWO</h3>
          </div>
          <p>
            Volunteers create period kits so the supplies can be distributed
            with dignity in mind.
          </p>
          <Link className="blue-button" to="/get-involved">
            See Volunteering
          </Link>
        </div>
        <div className="d-flex flex-column column">
          <div className="image-header-wrapper">
            <img src="./images/three-big.png" className="circle" />
            <h3>THREE</h3>
          </div>
          <p>
            The supplies get distributed by local community centers to people in
            need.
          </p>
          <Link className="blue-button" to="/about">
            See Who We Help
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
