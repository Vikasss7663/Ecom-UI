import React from "react";
import { 
  Nav, 
  Navbar, 
  Container,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

function Header({ user, handleLoginBtn, handleSignUpBtn, handleLogout }) {

  return (
    <div>
      <Navbar bg="light" expand="lg" >
        <Container fluid>
          <Navbar.Brand href="/">Shop Cart</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
            { user.userId ? 
                <div>
                  <Button className="me-2 bg-danger text-light" variant="outline-danger" onClick={handleLogout}>Logout</Button>
                </div> :
                <div>
                  <Button className="me-2" variant="outline-success" onClick={handleLoginBtn}>Login</Button>
                  <Button className="me-2 bg-danger text-light" variant="outline-danger" onClick={handleSignUpBtn}>SignUp</Button>
                </div>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;