import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.scss';

const ConsiderDonating = ({ pageName }) => {
  return (
    <section className="consider-donating">
      {pageName === 'about' ? (
        <>
          <h2>We rely on donations and help from people like you.</h2>
          <p>Join the movement.</p>
          <div className="button-container">
            <Link className="yellow-button" to="/donate">
              Donate <img src="./images/black-heart-drop.svg" alt="" aria-hidden="true" />
            </Link>
            <Link className="white-button" to="/volunteer-signup">
              Volunteer Signup
            </Link>
          </div>
        </>
      ) : (
        <>
          <h2>Our number one need is funds. Consider donating today.</h2>
          <p>Just $35 can keep a menstruator supplied for an entire year.</p>
          <Link className="yellow-button" to="/donate">
            Donate <img src="./images/black-heart-drop.svg" alt="" aria-hidden="true" />
          </Link>
        </>
      )}
    </section>
  );
};

ConsiderDonating.propTypes = {
  pageName: PropTypes.string
};

export default ConsiderDonating;
