import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => (
  <div className="navbar">
    <span className="nav">
      <Link to="/">Pet Roulette!</Link>
    </span>

    <span className="ml-auto navlink">
      <Link to="/pets">GALLERY&emsp;</Link>
      <Link to="/about">ABOUT&emsp;</Link>
    </span>
  </div>
);

export default NavBar;
