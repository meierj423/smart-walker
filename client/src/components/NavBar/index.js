import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";

function MainNav() {
  return (
    <Navbar className="Navbar" expand="lg">
      <Navbar.Brand href="/home">
        <div className="brand">Smart Walker</div>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className="link" href="/about">
          <div className="link">About</div>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default MainNav;
