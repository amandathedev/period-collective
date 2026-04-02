import React from 'react';

import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

import { useSiteSettings } from '../../context/SiteSettingsContext';
import './index.scss';

const Footer = () => {
  const settings = useSiteSettings();

  const contactEmail = settings.contactEmail || 'contact@theperiodcollective.org';
  const facebookUrl = settings.facebookUrl || 'https://www.facebook.com/Periodcoll';
  const instagramUrl = settings.instagramUrl || 'https://www.instagram.com/periodcoll/';
  const linkedinUrl = settings.linkedinUrl || 'https://www.linkedin.com/company/the-period-collective/';

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="d-flex flex-column">
          <p className="footer-header org-name">The Period Collective</p>
          <p>{contactEmail}</p>
          <p>Chicago, IL</p>
          <p className="attribution">Website developed by Amanda Treutler</p>
        </div>
        <div className="d-flex flex-column">
          <p className="footer-header we-serve">
            We proudly serve<br /> the Chicago Community
            <img src="./images/white-heart-drop.svg" alt="" aria-hidden="true" />
          </p>
          <p className="mt-2">Stay Connected</p>
          <div className="d-flex flex-row space-evenly social-icons">
            <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Follow us on Facebook (opens in new tab)">
              <BsFacebook aria-hidden="true" />
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Follow us on Instagram (opens in new tab)">
              <BsInstagram aria-hidden="true" />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="Follow us on LinkedIn (opens in new tab)">
              <BsLinkedin aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="d-flex flex-column affiliate">
          <p>Proud Affiliate of</p>
          <img src="./images/alliance.svg" alt="Alliance for Period Supplies" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
