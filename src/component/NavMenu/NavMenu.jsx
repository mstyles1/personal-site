import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function NavMenu() {
  return (
    <Container fluid className="d-flex align-items-center py-0 p-0 m-0 custom-navbar">
      <img src="/images/actual-logo.png" alt="Site Logo" width="232" />
      <div className="d-flex flex-grow-1">
        <Button 
          variant="outline-info" 
          size="lg" 
          className="flex-grow-1 py-5 mb-0 m-0 button-text no-round" 
          style={{ height: "100%" }}
        >
          CODING
        </Button>
        <Button 
          variant="outline-success" 
          size="lg" 
          className="flex-grow-1 py-5 mb-0 m-0 button-text no-round" 
          style={{ height: "100%" }}
        >
          COMICS
        </Button>
        <Button 
          variant="outline-danger" 
          size="lg" 
          className="flex-grow-1 py-5 mb-0 m-0 button-text no-round" 
          style={{ height: "100%" }}
        >
          CONTACT
        </Button>
      </div>
    </Container>
  );
}

export default NavMenu;
