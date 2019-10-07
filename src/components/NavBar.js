import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => (
  <Navbar sticky="top" bg="dark" variant="dark">
    <Navbar.Brand className="nav">
      <Link to="/">Pet Roulette!</Link>
    </Navbar.Brand>

    <Nav className="ml-auto navlink">
      <Nav.Link>
        <Link to="/pets">GALLERY&emsp;</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/about">ABOUT&emsp;</Link>
      </Nav.Link>
    </Nav>
  </Navbar>
);

export default NavBar;
