import React from 'react';

import { Link } from 'react-router-dom';

import { useSiteSettings } from '../../context/SiteSettingsContext';
import './index.scss';

const WaysToHelp = () => {
  const settings = useSiteSettings();
  const amazonLink = settings.amazonWishlistLink || 'https://www.amazon.com/hz/wishlist/ls/1EVIC1E58SZ4G?ref=cm_sw_em_r_un_un_gkRzhGwD7pKrD';
  const donationLink = settings.donationLink || 'https://donate.stripe.com/28ocNSdyd0G0dgIaEE';

  return (
    <section className="ways-to-help">
      <h2 className="main-h2">Ways to get involved</h2>
      <div className="ways-to-help-content">
        <div className="help-group">
          <div className="ways-to-help-content-item">
            <img
              src="./images/donate-supplies.png"
              alt="Pile of packages of period supplies"
            />
            <h3>Donate Supplies</h3>
            <p>
              Donate period products, run a period supply drive, or order off of{' '}
              <a
                href={amazonLink}
                className="link"
                target="_blank"
                rel="noreferrer"
                aria-label="our Amazon Wishlist (opens in new tab)"
              >
                our Amazon Wishlist
              </a>
              .
            </p>
            <Link className="blue-button" to="/donate-supplies">
              Donate Supplies
            </Link>
          </div>
          <div className="ways-to-help-content-item">
            <img
              src="./images/donate-funds.png"
              alt="Pallets of boxes of period supplies"
            />
            <h3>Donate Funds</h3>
            <p>
              Help us buy period products in bulk and get them to people in
              need.
            </p>
            <a
              href={donationLink}
              target="_blank"
              className="blue-button"
              rel="noreferrer"
              aria-label="Donate funds (opens in new tab)"
            >
              Donate
            </a>
          </div>
        </div>
        <div className="help-group">
          <div className="ways-to-help-content-item">
            <img
              src="./images/volunteer.png"
              alt="Two volunteers carrying boxes of period product donations"
            />
            <h3>Volunteer Time & Skills</h3>
            <p>
              Help us deliver donations, run events, and get it all done! Or are
              you a videographer, graphic designer, or have another skill you
              can contribute? Join us!
            </p>
            <Link className="blue-button" to="/volunteer-signup">
              Volunteer Signup
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaysToHelp;
