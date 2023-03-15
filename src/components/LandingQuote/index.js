import React from 'react';

import './index.scss';

const LandingQuote = () => {
  return (
    <div className="landing-quote">
      <h3>
        There are more than 65,000 people experiencing houselessness in Chicago,
        40% of whom can menstruate.
      </h3>
      <p className="quote-attr">
        - 2020 Study by{' '}
        <a href="https://www.chicagohomeless.org/">
          Chicago Coalition for the Homeless
        </a>
      </p>
      <h4>We believe everyone has the right to dignity.</h4>
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

export default LandingQuote;
