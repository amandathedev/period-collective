import React from 'react';
import './index.scss';

const WaysToHelp = () => {
  return (
    <div className="ways-to-help">
      <h2 className="main-h2">Ways to get involved</h2>
      <div className="ways-to-help-content">
        <div className="help-group">
          <div className="ways-to-help-content-item">
            <h3>Donate</h3>
            <p>
              Donate period products. Run a period supply drive or order off of
              our Amazon Wishlist.
            </p>
            <button className="blue-button">Donate Supplies</button>
            <img />
          </div>
          <div className="ways-to-help-content-item">
            <h3>Donate Funds</h3>
            <p>
              Help us buy period products in bulk and get them to people in
              need.
            </p>
            <button className="blue-button">Donate Funds</button>
            <img />
          </div>
        </div>
        <div className="help-group">
          <div className="ways-to-help-content-item">
            <h3>Volunteer</h3>
            <p>
              Help us deliver, run events, and get it all done! Fill out our
              form and we&apos;ll contact you with volunteer opportunities.
            </p>
            <button className="blue-button">Volunteer Signup</button>
            <img />
          </div>
          <div className="ways-to-help-content-item">
            <h3>Host a Packing Party</h3>
            <p>
              Have a group ready to make some kits? Host a packing party using
              our <a>instructions</a>!
            </p>
            <button className="blue-button">Packing Party Information</button>
            <img />
          </div>
        </div>
        <div className="help-group">
          <div className="ways-to-help-content-item">
            <h3>Donate Skills</h3>
            <p>
              Videographer? Graphic designer? Have connections to vendors? We
              need your help! Get in touch!
            </p>
            <button className="blue-button">Volunteer Signup</button>
            <img />
          </div>
          <div className="ways-to-help-content-item">
            <h3>Spread the Word</h3>
            <p>
              Tell your friends, family, and coworkers about us! Share our
              social media and website.
            </p>
            <button className="blue-button">Share on Social Media</button>
            <img />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaysToHelp;
