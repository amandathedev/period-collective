import React from 'react';

import { Button } from 'react-bootstrap';

const WhoWeAre = () => {
  return (
    <div className='who-we-are site-container'>
      <h2>Who we are</h2>
      <p>
        The Period Collective is a 501(3)c Nonprofit in Chicago that provides
        period products to local charity centers to help provide dignity to all
        Chicagoans.
      </p>
      <Button className="blue-button">Learn more</Button>
    </div>
  );
};

export default WhoWeAre;
