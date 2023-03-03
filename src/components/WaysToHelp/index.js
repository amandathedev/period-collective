import React from 'react';
import './index.scss';

const WaysToHelp = () => {
  return (
    <div className="ways-to-help">
      <h2 className="main-h2">Ways to get involved</h2>
      <div className="ways-to-help-content">
        <div className="help-group">
          <div className="ways-to-help-content-item">
            <img
              src="./images/donate-supplies.png"
              alt="pile of packages of period supplies"
            />
            <h3>Donate Supplies</h3>
            <p>
              Donate period products, run a period supply drive, or order off of{' '}
              <a
                href="https://www.amazon.com/hz/wishlist/ls/1EVIC1E58SZ4G?ref=cm_sw_em_r_un_un_gkRzhGwD7pKrD"
                className="link"
              >
                our Amazon Wishlist
              </a>
              .
            </p>
            <a className="blue-button" href="/donate-supplies">
              Donate Supplies
            </a>
          </div>
          <div className="ways-to-help-content-item">
            <img
              src="./images/donate-funds.png"
              alt="pallets of boxes of period supplies"
            />
            <h3>Donate Funds</h3>
            <p>
              Help us buy period products in bulk and get them to people in
              need.
            </p>
            <a className="blue-button" href="/donate">
              Donate Funds
            </a>
          </div>
        </div>
        <div className="help-group">
          <div className="ways-to-help-content-item">
            <img
              src="./images/volunteer.png"
              alt="two volunteers carrying boxes of period product donations"
            />
            <h3>Volunteer Time & Skills</h3>
            <p>
              Help us deliver donations, run events, and get it all done! Or are
              you a videographer, graphic designer, or have another skill you
              can contribute? Fill out our form and we&apos;ll contact you with
              volunteer opportunities.
            </p>
            <a className="blue-button" href="/volunteer-signup">
              Volunteer Signup
            </a>
          </div>
          <div className="ways-to-help-content-item">
            <img
              src="./images/packing-party.png"
              alt="people in an office packaging kits of period supplies"
            />
            <h3>Prepare Bags</h3>
            <p>
              Have a group ready to pack some bags? Host a packing party! Or sew
              period bags at home and we&apos;ll use them to distribute period
              products with dignity.{' '}
              <a
                href="https://www.purlsoho.com/create/2009/03/15/easy-drawstring-bag/"
                className="link"
              >
                See some great sewing instructions here.
              </a>
            </p>
            <a className="blue-button" href="/packing-party">
              Packing Party Information
            </a>
          </div>
        </div>
        {/* TODO Add after MVP */}
        {/* <div className="help-group">
          <div className="ways-to-help-content-item">
            <img
              src="./images/contact-legislators.png"
              alt="period poverty slideshow presentation"
            />
            <h3>Take a Stand</h3>
            <p>
              Help us advocate for period equity! Contact your local
              representatives and let them know that period equity is important
              to you.
            </p>
            <a className="blue-button" href="/contact-legislators">
              Contact Legislators
            </a>
          </div>
          <div className="ways-to-help-content-item">
            <img
              src="./images/spread-the-word.png"
              alt="table of packaged period kits"
            />
            <h3>Spread the Word</h3>
            <p>
              Tell your friends, family, and coworkers about us! Share our
              social media and website.
            </p>
            <a className="blue-button" href="/spread-the-word">
              Share on Social Media
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default WaysToHelp;
