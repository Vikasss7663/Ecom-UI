import React from "react";
import { 
  Nav, 
  Navbar, 
  NavDropdown, 
  Container,
} from "react-bootstrap";

function Header() {

  return (
    <div>
      <Navbar bg="light" expand="lg" >
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">All</Nav.Link>
              <Nav.Link href="#action2">Laptops</Nav.Link>
              <Nav.Link href="#action2">Mobiles</Nav.Link>
              <Nav.Link href="#action2">Watches</Nav.Link>
              <NavDropdown title="Other Accessories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Keyboards</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Mouses</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Others
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;