import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">
          <h3>Mentor Finder</h3>
        </Link>
      </div>
      <div className="d-flex justify-content-around" style={{ width: "200px" }}>
        <Link to="/about">
          <span className="text-light">About</span>
        </Link>
        <Link to="/contact">
          <span className="text-light">Contact</span>
        </Link>
      </div>
    </nav>
  );
}
