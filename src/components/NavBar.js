import React from 'react'
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    return (
      <Navbar sticky="top" bg="dark" variant="dark" >
        <Navbar.Brand className="nav"><Link to="/">Pet Roulette!</Link></Navbar.Brand>
        <Nav className="navlink">
          <Nav.Link><Link to="/about">ABOUT</Link></Nav.Link>
          <Nav.Link><Link to="/Pets">PETS</Link></Nav.Link>
        </Nav>
      </Navbar>
    )
}
