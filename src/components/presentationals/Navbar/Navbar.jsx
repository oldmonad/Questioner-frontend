import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import Button from '../Button/Button';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Questioner
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="mr-auto" />
        <ul className="navbar-nav mt-2 mt-lg-0">
          <li className="nav-item">
            <Link to="/login" className="btn btn-dark">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="btn btn-light signup-btn">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
