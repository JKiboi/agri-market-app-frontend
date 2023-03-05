import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          FarmConnect
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link" to="/farmer-dashboard">
                Farmer Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/farmers-resources">
                Farmers Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/consumer-dashboard">
                Consumer Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/consumer-profile">
                Consumer Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/weather">
                Weather
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
