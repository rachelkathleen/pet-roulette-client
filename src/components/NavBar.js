import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => (
  <span className="navbar">
    <div className="nav">
      <Link to="/">Pet Roulette!</Link>
    </div>

    <div className="ml-auto navlink">
      <Link to="/pets">GALLERY&emsp;</Link>
      <Link to="/about">ABOUT&emsp;</Link>
    </div>
  </span>
);

export default NavBar;
