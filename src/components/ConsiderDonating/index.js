import React from 'react';

import { Link } from 'react-router-dom';
import './index.scss';

const ConsiderDonating = () => {
  return (
    <div className="consider-donating">
      <h2>Our number one need is funds. Consider donating today.</h2>
      <p>Just $35 can keep a menstruator supplied for an entire year.</p>
      <Link to="/donate" className="yellow-button">
        Donate <img src="./images/black-heart-drop.svg" />
      </Link>
    </div>
  );
};

export default ConsiderDonating;
