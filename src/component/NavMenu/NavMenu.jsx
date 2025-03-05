import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function NavMenu() {
  return (
    <Container fluid className="d-flex align-items-center py-0 p-0 m-0 custom-navbar">
      <img src="/images/actual-logo.png" alt="Site Logo" width="232" />
      <div className="d-flex w-100">
        <Button variant="outline-info" size="lg" className="w-33 py-5 mb-0 m-0 button-text no-round">
          CODING
        </Button>
        <Button variant="outline-success" size="lg" className="w-33 py-5 mb-0 m-0 button-text no-round">
          COMICS
        </Button>
        <Button variant="outline-danger" size="lg" className="w-33 py-5 mb-0 m-0 button-text no-round">
          CONTACT
        </Button>
      </div>
    </Container>
  );
}

export default NavMenu;