import React from 'react';

import PropTypes from 'prop-types';

import { useSiteSettings } from '../../context/SiteSettingsContext';
import './index.scss';

const ConsiderDonating = ({ pageName }) => {
  const settings = useSiteSettings();

  const considerDonatingHeading = settings.considerDonatingHeading || 'Our number one need is funds. Consider donating today.';
  const considerDonatingSubtext = settings.considerDonatingSubtext || 'Just $35 can keep a menstruator supplied for an entire year.';
  const aboutDonatingHeading = settings.aboutDonatingHeading || 'We rely on donations and help from people like you.';
  const aboutDonatingSubtext = settings.aboutDonatingSubtext || 'Join the movement.';

  return (
    <section className="consider-donating">
      {pageName === 'about' ? (
        <>
          <h2>{aboutDonatingHeading}</h2>
          <p>{aboutDonatingSubtext}</p>
          <div className="button-container">
            <a href="/donate" className="yellow-button">
              Donate <img src="./images/black-heart-drop.svg" alt="" aria-hidden="true" />
            </a>
            <a className="white-button" href="/volunteer-signup">
              Volunteer Signup
            </a>
          </div>
        </>
      ) : (
        <>
          <h2>{considerDonatingHeading}</h2>
          <p>{considerDonatingSubtext}</p>
          <a href="/donate" className="yellow-button">
            Donate <img src="./images/black-heart-drop.svg" alt="" aria-hidden="true" />
          </a>
        </>
      )}
    </section>
  );
};

ConsiderDonating.propTypes = {
  pageName: PropTypes.string
};

export default ConsiderDonating;
