import React from 'react';

import { BsFacebook, BsInstagram } from 'react-icons/bs';

import './index.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="d-flex flex-row space-between">
        <div className="d-flex flex-column">
          <p className="org-name">The Period Collective</p>
          <p>123 Main St Chicago, Illinois, 00000</p>
          <p>(312) 620-9959</p>
          <p>contact@theperiodcollective.org</p>
        </div>
        <div className="d-flex flex-column">
          <p className="we-serve">
            We proudly serve<br></br> the Chicago Community
          </p>
          <p>Stay Connected</p>
          <div className="d-flex flex-row space-evenly">
            <BsFacebook />
            <BsInstagram />
          </div>
        </div>
        <div>
          <p>Proud Affiliate of</p>
          {/* <img src="./images/period.png" /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
