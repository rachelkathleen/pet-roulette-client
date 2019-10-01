import React from 'react'
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    return (
      <Navbar sticky="top" bg="dark" variant="dark">
        <Navbar.Brand className="nav" href="/">Pet Roulette!</Navbar.Brand>
           
      </Navbar>
    )
}
