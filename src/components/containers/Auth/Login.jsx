import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SimpleReactValidator from 'simple-react-validator';
import { Link, withRouter } from 'react-router-dom';

import Input from '../../presentationals/Input/Input';
import Button from '../../presentationals/Button/Button';
import Loader from '../../presentationals/Loader/Loader';

//Reducer
import { loginUser } from '../../../store/actions/auth';

import './Auth.css';
export class Login extends Component {
  state = {
    userDetails: {
      email: '',
      password: '',
    },
    errorMessage: '',
  };

  validator = new SimpleReactValidator({
    element: message => <div>{message}</div>,
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
    const { userDetails } = this.state;
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

    // let redirectUrl;

    // state ? (redirectUrl = state.from.pathname) : (redirectUrl = '/');

    const {
      history,
      // location: { state },
    } = this.props;

    await this.props.loginUser(this.state.userDetails, history);
    this.setState({
      errorMessage: this.props.auth.errorResponse[0],
    });
    this.setState({
      userDetails: {
        ...userDetails,
        password: '',
      },
    });
  };
  render() {
    const {
      auth: { isLoading },
    } = this.props;

    return (
      <div>
        <div id="login-form" className="login--section">
          <h1 className="login--section__header">Login</h1>
          <form onSubmit={this.formSubmitHandler} className="custom--form">
            <div className="form--group">
              <Input
                type="email"
                className="form--control"
                placeholder="E-mail"
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
                type="password"
                className="form--control last"
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
            <div className="validation--requirement--last">
              {this.state.errorMessage}
            </div>

            <Button
              className="btn-dark submit--button"
              type="submit"
              value={isLoading ? <Loader /> : 'Login'}
            />
          </form>
          <div className="instruction">
            <p className="instruction__acount">Don't have an account?</p>
            <Link className="instruction__signup" to="/signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  isLoading: state.auth.isLoading,
});

export default connect(
  mapStateToProps,
  { loginUser },
)(withRouter(Login));
