import React from 'react';

import { Button } from 'react-bootstrap';

import './index.scss';

const HowWeWork = () => {
  return (
    <div className="site-container how-we-work">
      <h2 className="main-h2">How we work</h2>
      <div className="d-flex flex-row">
        <div className="d-flex flex-column">
          <h3>ONE</h3>
          <img src="./images/one.jpg" />
          <p>We get period products from donors (regular people like you!)</p>
          <Button className="blue-button">See Donations</Button>
        </div>
        <div className="d-flex flex-column">
          <h3>TWO</h3>
          <img src="./images/two.jpg" />
          <p>Volunteers throw Period Parties to create kits.</p>
          <Button className="blue-button">See Volunteering</Button>
        </div>
        <div className="d-flex flex-column">
          <h3>THREE</h3>
          <img src="./images/three.jpg" />
          <p>
            The supplies get distributed by local community centers to people in
            need
          </p>
          <Button className="blue-button">See Who We Help</Button>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
