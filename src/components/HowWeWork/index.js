import React from 'react';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.scss';

const HowWeWork = () => {
  return (
    <div className="site-container how-we-work">
      <h2 className="main-h2">How we work</h2>
      <div className="d-flex flex-row row">
        <div className="d-flex flex-column column">
          <h3>ONE</h3>
          <img src="./images/one-big.png" className="circle" />
          <p>We get period products from donors (regular people like you!)</p>
          <Link className="blue-button" to="/donate">
            See Donations
          </Link>
        </div>
        <div className="d-flex flex-column column">
          <h3>TWO</h3>
          <img src="./images/two-big.png" className="circle" />
          <p>Volunteers throw Period Parties to create kits.</p>
          <Link className="blue-button" to="/get-involved">
            See Volunteering
          </Link>
        </div>
        <div className="d-flex flex-column column">
          <h3>THREE</h3>
          <img src="./images/three-big.png" className="circle" />
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
