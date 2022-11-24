import React from 'react';

import { Button } from 'react-bootstrap';

import './index.scss';

const LandingQuote = () => {
  return (
    <div className='landing-quote'>
      <h3>
        There are more than 65,000 people experiencing houselessness in Chicago,
        40% of those can menstruate.
      </h3>
      <Button className="yellow-button">Donate</Button>
    </div>
  );
};

export default LandingQuote;
