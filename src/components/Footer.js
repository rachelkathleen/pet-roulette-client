import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/rachelkathleen" target="blank">
        {" "}
        <i className="fab fa-github fa-lg"></i>
      </a>

      <a href="https://medium.com/@rachel.hawa" target="blank">
        {" "}
        <i className="fab fa-medium fa-lg"></i>
      </a>

      <a href="https://www.linkedin.com/in/rachelhawa/" target="blank">
        <i className="fab fa-linkedin fa-lg"></i>
      </a>
    </footer>
  );
}
