import React from "react";
import Button from "./Button";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar" >
      <div className="left">
        <h2>Geekster</h2>
      </div>
      <div className="middle">
        <Link to="/"  className="link">
          <h3>Home</h3>
        </Link>
        <Link to="/contact" className="link">
          <h3>Contact</h3>
        </Link>
        <Link to="/service" className="link">
          <h3>Service</h3>
        </Link>
      </div>
      <div className="right">
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
