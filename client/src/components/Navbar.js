import React from "react";
import { Navbar as RbNavbar, Container, Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <RbNavbar bg="dark" variant="dark">
      <Container>
        <RbNavbar.Brand href="#home">Elkpro Cut</RbNavbar.Brand>
        <Nav className="me-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link> */}
          <Nav.Link href="#features">Appointments</Nav.Link>
          <Nav.Link href="#pricing">Login</Nav.Link>
        </Nav>
      </Container>
    </RbNavbar>
  );
};

export default Navbar;
