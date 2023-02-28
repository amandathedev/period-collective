import React from 'react';

import { Image } from 'react-bootstrap';
import './index.scss';

const WhoWeAre = () => {
  return (
    <div className="who-we-are site-wrap">
      <h2 className="main-h2">Who we are</h2>
      <div className="who-we-are-content">
        <Image src="./images/tpc.png" />
        <p>
          The Period Collective is a 501(3)c Nonprofit in Chicago that provides
          period products to local charity centers to help provide dignity to
          all Chicagoans.
        </p>
      </div>
      <button className="blue-button">Learn more</button>
    </div>
  );
};

export default WhoWeAre;
