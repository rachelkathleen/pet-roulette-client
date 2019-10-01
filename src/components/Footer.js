import React from 'react'
import { Nav, Navbar, NavItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
      <Navbar fixed="bottom" bg="dark" variant="dark">
        <Navbar.Brand className="nav" href="/">footer</Navbar.Brand>
        <a href="https://medium.com/@rachel.hawa" target="blank"> <FontAwesomeIcon icon={faCoffee} /></a>
      </Navbar>
    )
}



