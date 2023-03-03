import React from 'react';

import './index.scss';

const ConsiderDonating = () => {
  return (
    <div className="consider-donating">
      <h2>Our number one need is funds. Consider donating today.</h2>
      <p>Just $35 can keep a menstruator supplied for an entire year.</p>
      <a
        href="https://donate.stripe.com/28ocNSdyd0G0dgIaEE"
        target="_blank"
        className="yellow-button"
        rel="noreferrer"
      >
        Donate <img src="./images/black-heart-drop.svg" />
      </a>
    </div>
  );
};

export default ConsiderDonating;
