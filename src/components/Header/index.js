import React from 'react';

import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useSiteSettings } from '../../context/SiteSettingsContext';
import './index.scss';

const Header = () => {
  const settings = useSiteSettings();
  const donationLink = settings.donationLink || 'https://donate.stripe.com/28ocNSdyd0G0dgIaEE';

  return (
    <>
    <a href="#main-content" className="skip-nav">Skip to main content</a>
    <Navbar fixed="top" expand="lg" id="site-header">
      <Container className="nav-container">
        <Navbar.Brand href="/">
          <Image src={settings.logoUrl || './images/tpc.png'} className="nav-logo" alt="The Period Collective" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="nav-links">
          <Nav>
            <Nav.Link href="about">
              About<span className="nav-divider">|</span>
            </Nav.Link>
            <Nav.Link href="get-involved">
              Get Involved<span className="nav-divider">|</span>
            </Nav.Link>
            <Nav.Link href="contact">
              Contact Us<span className="nav-divider"></span>
            </Nav.Link>
            {/*<Nav.Link href="blog">*/}
            {/*  Blog<span className="nav-divider"></span>*/}
            {/*</Nav.Link>*/}
            <a
              href={donationLink}
              target="_blank"
              className="yellow-button"
              rel="noreferrer"
              aria-label="Donate (opens in new tab)"
            >
              Donate <img src="./images/black-heart-drop.svg" alt="" aria-hidden="true" />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
