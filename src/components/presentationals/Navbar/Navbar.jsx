import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getToken } from '../../../api/helpers';
import './Navbar.css';

import { logout } from '../../../store/actions/auth';
export class Navbar extends Component {
  logOut = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
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

          {getToken() ? (
            <ul className="navbar-nav mt-2 mt-lg-0">
              <li className="nav-item">
                <button onClick={this.logOut} className="btn btn-dark">
                  Logout
                </button>
              </li>
            </ul>
          ) : (
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
          )}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
});

export default connect(
  mapStateToProps,
  { logout },
)(Navbar);
