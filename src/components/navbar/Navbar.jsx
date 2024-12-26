import React from "react";
import "./Navbar.css";
import dlogo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src={dlogo} alt="" />
      </div>

      <div className="nav-menu">
        <p>Sessions</p>
        <Link to="/speakers" style={{ textDecoration: "none", color: "black" }}>
          <p>Speakers</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
