import React from 'react';

import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.scss';

const WhoWeAre = () => {
  return (
    <div className="who-we-are site-wrap">
      <h2 className="main-h2">Who we are</h2>
      <div className="who-we-are-content">
        <Image src="./images/tpc.png" />
        <p>
          The Period Collective is a 501(3)c Nonprofit in Chicago that provides
          period products to local shelters, transitional housing facilities,
          schools, and food banks to help provide dignity to all Chicagoans.{' '}
          <br></br> <br></br> We are a grassroots organization that is run
          entirely by volunteers.
        </p>
      </div>
      <Link className="blue-button" to="/about">
        Learn more
      </Link>
    </div>
  );
};

export default WhoWeAre;
