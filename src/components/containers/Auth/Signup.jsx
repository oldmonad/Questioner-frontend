import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SimpleReactValidator from 'simple-react-validator';
import { Link, withRouter } from 'react-router-dom';

import Input from '../../presentationals/Input/Input';
import Button from '../../presentationals/Button/Button';
import Loader from '../../presentationals/Loader/Loader';

//Reducer
import { signupUser } from '../../../store/actions/auth';

import './Auth.css';

export class Signup extends Component {
  state = {
    userDetails: {
      firstname: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
    errorMessage: '',
  };

  validator = new SimpleReactValidator({
    element: message => <div>{message}</div>,
    messages: {
      in: "The passwords don't match.",
    },
  });

  onChange = event => {
    this.setState({
      userDetails: {
        ...this.state.userDetails,
        [event.target.name]: event.target.value,
      },
    });
  };
  formSubmitHandler = async event => {
    event.preventDefault();
    this.validator.showMessages();
    this.setState({
      userDetails: {
        ...this.state.userDetails,
      },
    });

    if (!this.validator.allValid()) {
      return false;
    }

    let redirectUrl;

    state ? (redirectUrl = state.from.pathname) : (redirectUrl = '/');

    const {
      history,
      location: { state },
    } = this.props;

    await this.props.signupUser(this.state.userDetails, history, redirectUrl);
    this.setState({
      errorMessage: this.props.auth.errorResponse[0],
    });
  };

  render() {
    const { isLoading } = this.props.auth;
    return (
      <div>
        <div id="signup-form__wrapper" className="signup--section">
          <h1 className="signup--section__header">Sign up</h1>
          <form onSubmit={this.formSubmitHandler} className="custom--form">
            <div className="form--group">
              <Input
                type="text"
                className="form--control"
                placeholder="First name"
                onChange={this.onChange}
                value={this.state.userDetails.firstname}
                name="firstname"
              />
            </div>
            <div className="validation--requirement">
              {this.validator.message(
                'firstname',
                this.state.userDetails.firstname,
                'required|alpha_space',
              )}
            </div>
            <div className="form--group">
              <Input
                type="email"
                className="form--control"
                placeholder="Email"
                onChange={this.onChange}
                value={this.state.userDetails.email}
                name="email"
              />
            </div>
            <div className="validation--requirement">
              {this.validator.message(
                'email',
                this.state.userDetails.email,
                'required|email',
              )}
            </div>
            <div className="form--group">
              <Input
                type="text"
                className="form--control"
                placeholder="Username"
                onChange={this.onChange}
                value={this.state.userDetails.username}
                name="username"
              />
            </div>
            <div className="validation--requirement">
              {this.validator.message(
                'lastname',
                this.state.userDetails.username,
                'required|alpha_space',
              )}
            </div>
            <div className="form--group">
              <Input
                type="password"
                className="form--control"
                placeholder="Password"
                onChange={this.onChange}
                value={this.state.userDetails.password}
                name="password"
              />
            </div>
            <div className="validation--requirement">
              {this.validator.message(
                'password',
                this.state.userDetails.password,
                'required|min:6|alpha_num',
              )}
            </div>

            <div className="form--group">
              <Input
                type="password"
                className="form--control last"
                placeholder="Confirm Password"
                onChange={this.onChange}
                value={this.state.userDetails.confirmPassword}
                name="confirmPassword"
              />
              <div className="validation--requirement--last">
                {this.validator.message(
                  'confirmPassword',
                  this.state.userDetails.confirmPassword,
                  `required|in:${this.state.userDetails.password}`,
                )}
              </div>
              <div className="validation--requirement--last">
                {this.state.errorMessage}
              </div>
            </div>

            <Button
              className="submit--button"
              type="submit"
              value={isLoading ? <Loader /> : 'Sign up'}
            />
          </form>
          <div className="instruction">
            <p className="instruction__acount">Have an account?</p>
            <Link className="instruction__login" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(
  mapStateToProps,
  { signupUser },
)(withRouter(Signup));
