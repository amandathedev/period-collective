import React from 'react';

import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './index.scss';

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top" id="site-header" className='site-container'>
      <Container className="nav-container">
        <Navbar.Brand href="/">The Period Collective</Navbar.Brand>
        <Navbar.Toggle aria-controls="site-header" />
        <Navbar.Collapse className="nav-links">
          <Nav>
            <Nav.Link href="about">
              About<span className="nav-divider">|</span>
            </Nav.Link>
            <Nav.Link href="get-involved">
              Get Involved<span className="nav-divider">|</span>
            </Nav.Link>
            {/* <Nav.Link href="partners">Partners</Nav.Link> */}
            <Nav.Link href="news">
              News & Events<span className="nav-divider">|</span>
            </Nav.Link>
            <Nav.Link href="contact">
              Contact Us<span className="nav-divider"></span>
            </Nav.Link>
            <Button className='yellow-button'>Donate</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
