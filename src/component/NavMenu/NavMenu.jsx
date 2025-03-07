import { Link } from 'react-router-dom'; // Import Link for routing
import Container from 'react-bootstrap/Container';

function NavMenu() {
  return (
    <Container fluid className="d-flex align-items-center py-0 p-0 m-0 custom-navbar">
      <img src="/images/actual-logo.png" alt="Site Logo" width="232" />
      <div className="d-flex flex-grow-1">
        <Link to="/coding" className="flex-grow-1 py-5 mb-0 m-0">
          CODING
        </Link>
        <Link to="/comics" className="flex-grow-1 py-5 mb-0 m-0">
          COMICS
        </Link>
        <Link to="/contact" className="flex-grow-1 py-5 mb-0 m-0">
          CONTACT
        </Link>
      </div>
    </Container>
  );
}

export default NavMenu;

