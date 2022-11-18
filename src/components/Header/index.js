import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">The Period Collective</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="get-involved">Get Involved</Nav.Link>
            {/* <Nav.Link href="partners">Partners</Nav.Link> */}
            <Nav.Link href="news">News & Events</Nav.Link>
            <Nav.Link href="contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
