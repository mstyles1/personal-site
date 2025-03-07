import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

export function NavMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand as={Link} to="/">
  <img
    src="./images/actual-logo.png"  // Change to your logo path
    alt="Logo"
    width="100"  // Adjust size as needed
    height="auto"
    style={{ cursor: "pointer" }} // Optional: Changes cursor on hover
  />
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/coding">Coding</Nav.Link>
            <Nav.Link as={Link} to="/comics">Comics</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

