import React from 'react';

import { Link } from 'react-router-dom';

import { useSiteSettings } from '../../context/SiteSettingsContext';
import './index.scss';

const WaysToHelp = () => {
  const settings = useSiteSettings();
  const amazonLink = settings.amazonWishlistLink || 'https://www.amazon.com/hz/wishlist/ls/1EVIC1E58SZ4G?ref=cm_sw_em_r_un_un_gkRzhGwD7pKrD';
  const donateSuppliesDescription = settings.donateSuppliesDescription || 'Donate period products, run a period supply drive, or order off of our Amazon Wishlist.';
  const donateFundsDescription = settings.donateFundsDescription || 'Help us buy period products in bulk and get them to people in need.';
  const volunteerDescription = settings.volunteerDescription || 'Help us deliver donations, run events, and get it all done! Or are you a videographer, graphic designer, or have another skill you can contribute? Join us!';

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
            <p>{donateSuppliesDescription}</p>
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
            <p>{donateFundsDescription}</p>
            <a href="/donate" className="blue-button">
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
            <p>{volunteerDescription}</p>
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
