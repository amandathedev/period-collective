import React from 'react';

import PropTypes from 'prop-types';

import { useSiteSettings } from '../../context/SiteSettingsContext';
import './index.scss';

const ConsiderDonating = ({ pageName }) => {
  const settings = useSiteSettings();
  const donationLink = settings.donationLink || 'https://donate.stripe.com/28ocNSdyd0G0dgIaEE';

  return (
    <div className="consider-donating">
      {pageName === 'about' ? (
        <>
          <h2>We rely on donations and help from people like you.</h2>
          <p>Join the movement.</p>
          <div className="button-container">
            <a
              href={donationLink}
              target="_blank"
              className="yellow-button"
              rel="noreferrer"
              aria-label="Donate (opens in new tab)"
            >
              Donate <img src="./images/black-heart-drop.svg" alt="" aria-hidden="true" />
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
            href={donationLink}
            target="_blank"
            className="yellow-button"
            rel="noreferrer"
          >
            Donate <img src="./images/black-heart-drop.svg" alt="" aria-hidden="true" />
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
