import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";

const NavBar = () => (
  <nav className="topnav">
    <Row className="row">
      <Link className="navlink" to="/pets">
        GALLERY
      </Link>
      <Link className="nav" to="/">
        Pet Roulette!
      </Link>
      <Link className="navlink" to="/about">
        ABOUT
      </Link>
    </Row>
  </nav>
);

export default NavBar;
