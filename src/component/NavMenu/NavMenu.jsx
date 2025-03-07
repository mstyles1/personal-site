import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

export function NavMenu() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src="./images/actual-logo.png"
            alt="Logo"
            width="100"
            height="auto"
            style={{ cursor: "pointer" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/coding">Coding</Nav.Link>
            <Nav.Link as={Link} to="/comics">Comics</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
