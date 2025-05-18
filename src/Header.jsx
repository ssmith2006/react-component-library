import CloseButton from "react-bootstrap/CloseButton";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">LeShant Rene Designs</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#about2">Why Choose Us?</Nav.Link>
              <NavDropdown title="Gallery" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#apparel">Apparel</NavDropdown.Item>
                <NavDropdown.Item href="#art">Art</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#socialMedia">
                  Facebook
                </NavDropdown.Item>
              </NavDropdown><CloseButton />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
}
