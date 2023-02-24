import React from 'react';

import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import './index.scss';

const Header = () => {
  return (
    <Navbar fixed="top" expand="lg" id="site-header">
      <Container className="nav-container">
        <Navbar.Brand href="/">
          <Image src="./images/tpc.png" className="nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="site-header" />
        <Navbar.Collapse className="nav-links">
          <Nav>
            <Nav.Link href="about">
              About<span className="nav-divider">|</span>
            </Nav.Link>
            <Nav.Link href="get-involved">
              Get Involved<span className="nav-divider">|</span>
            </Nav.Link>
            <Nav.Link href="news">
              News & Events<span className="nav-divider">|</span>
            </Nav.Link>
            <Nav.Link href="contact">
              Contact Us<span className="nav-divider"></span>
            </Nav.Link>
            <Link to="/donate" className="yellow-button">
              Donate <img src="./images/black-heart-drop.svg" />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
