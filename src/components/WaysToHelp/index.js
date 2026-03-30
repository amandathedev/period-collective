import React from 'react';

import { Link } from 'react-router-dom';

import { AMAZON_WISHLIST_URL } from '../../constants';
import './index.scss';

const WaysToHelp = () => {
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
                href={AMAZON_WISHLIST_URL}
                target="_blank"
                rel="noreferrer"
                className="link"
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
            <Link className="blue-button" to="/donate">
              Donate
            </Link>
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
