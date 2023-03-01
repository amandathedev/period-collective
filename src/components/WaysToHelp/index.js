import React from 'react';
import './index.scss';

const WaysToHelp = () => {
  return (
    <div className="ways-to-help">
      <h2 className="main-h2">Ways to get involved</h2>
      <div className="ways-to-help-content">
        <div className="help-group">
          <div className="ways-to-help-content-item">
            <img src="./images/donate-supplies.png" />
            <h3>Donate</h3>
            <p>
              Donate period products, run a period supply drive, or order off of{' '}
              <a
                href="https://www.amazon.com/hz/wishlist/ls/1EVIC1E58SZ4G?ref=cm_sw_em_r_un_un_gkRzhGwD7pKrD"
                className="link"
              >
                our Amazon Wishlist
              </a>
              . Or sew period kit bags and we&apos;ll use them to distribute
              period products with dignity.
            </p>
            <button className="blue-button">Donate Supplies</button>
          </div>
          <div className="ways-to-help-content-item">
            <img src="./images/donate-funds.png" />
            <h3>Donate Funds</h3>
            <p>
              Help us buy period products in bulk and get them to people in
              need.
            </p>
            <button className="blue-button">Donate Funds</button>
          </div>
        </div>
        <div className="help-group">
          <div className="ways-to-help-content-item">
            <img src="./images/volunteer.png" />
            <h3>Volunteer Time & Skills</h3>
            <p>
              Help us deliver, run events, and get it all done! Videographer?
              Graphic designer? Fill out our form and we&apos;ll contact you
              with volunteer opportunities.
            </p>
            <button className="blue-button">Volunteer Signup</button>
          </div>
          <div className="ways-to-help-content-item">
            <img src="./images/packing-party.png" />
            <h3>Host a Packing Party</h3>
            <p>
              Have a group ready to make some kits? Host a packing party using
              our <a>instructions</a>!
            </p>
            <button className="blue-button">Packing Party Information</button>
          </div>
        </div>
        <div className="help-group">
          <div className="ways-to-help-content-item">
            <img src="./images/contact-legislators.png" />
            <h3>Make Your Voice Heard</h3>
            <p>
              Help us advocate for period equity! Contact your local
              representatives and let them know that period equity is important
              to you.
            </p>
            <button className="blue-button">Contact Legislators</button>
          </div>
          <div className="ways-to-help-content-item">
            <img src="./images/spread-the-word.png" />
            <h3>Spread the Word</h3>
            <p>
              Tell your friends, family, and coworkers about us! Share our
              social media and website.
            </p>
            <button className="blue-button">Share on Social Media</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaysToHelp;
