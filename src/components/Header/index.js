import React from 'react';

import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './index.scss';

const Header = () => {
  return (
    <Navbar fixed="top" expand="lg" id="site-header">
      <Container className="nav-container">
        <Navbar.Brand href="/">
          <Image src="./images/tpc.png" className="nav-logo" />
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
            <a
              href="https://donate.stripe.com/28ocNSdyd0G0dgIaEE"
              target="_blank"
              className="yellow-button"
              rel="noreferrer"
            >
              Donate <img src="./images/black-heart-drop.svg" />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
