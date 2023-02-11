import React from 'react';

import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import './index.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="d-flex flex-row space-between">
        <div className="d-flex flex-column">
          <p className="footer-header org-name">The Period Collective</p>
          <p>(312) 620-9959</p>
          <p>contact@theperiodcollective.org</p>
        </div>
        <div className="d-flex flex-column">
          <p className="footer-header we-serve">
            We proudly serve<br></br> the Chicago Community
            <img src="./images/white-heart-drop.svg" />
          </p>
          <p className="mt-2">Stay Connected</p>
          <div className="d-flex flex-row space-evenly social-icons">
            <a href="https://www.facebook.com/Periodcoll">
              <BsFacebook size={'3rem'} />
            </a>
            <a href="https://www.instagram.com/periodcoll/">
              <BsInstagram size={'3rem'} />
            </a>
            <a href="https://www.linkedin.com/company/the-period-collective/">
              <BsLinkedin size={'3rem'} />
            </a>
          </div>
        </div>
        <div className="affiliate">
          <p>Proud Affiliate of</p>
          <img src="./images/alliance.svg" alt="alliance for period supplies" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
