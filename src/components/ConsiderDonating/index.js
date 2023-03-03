import React from 'react';

import PropTypes from 'prop-types';
import './index.scss';

const ConsiderDonating = ({ pageName }) => {
  return (
    <div className="consider-donating">
      {pageName === 'about' ? (
        <>
          <h2>We rely on donations and help from people like you.</h2>
          <p>Join the movement.</p>
          <div className="button-container">
            <a
              href="https://donate.stripe.com/28ocNSdyd0G0dgIaEE"
              target="_blank"
              className="yellow-button"
              rel="noreferrer"
            >
              Donate <img src="./images/black-heart-drop.svg" />
            </a>
            <a className="white-button" href="/volunteer-signup">
              Volunteer Signup
            </a>
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

ConsiderDonating.propTypes = {
  pageName: PropTypes.string
};

export default ConsiderDonating;
