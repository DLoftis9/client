import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import compose from 'recompose/compose';

import { registerUser } from '../../../base/social/actions/authActions';

const propTypes = {
  containerName: PropTypes.string.isRequired,
  createUser: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

const defaultProps = {
  containerName: 'sign-up',
  errors: {},
};

const mapStateToProps = state => ({
  auth: state.authReducer,
  errors: state.errorReducer,
});

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(registerUser(user)),
});

class SignupPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    errors: {},
    successfulSignup: false,
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors.success) {
      this.setState({
        successfulSignup: true,
      });
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, password, passwordConfirm } = this.state;
    const user = {
      name,
      email,
      password,
      passwordConfirm,
    };
    const { createUser } = this.props;
    createUser(user);
  };

  render() {
    const { errors, successfulSignup } = this.state;

    return (
      <main className={this.props.containerName}>
        <div className="sign-up_form">
          <div className="icon_wrapper">
            <p className="icon">Sign Up Icon</p>
          </div>
          <h3 className="header-3">Sign Up</h3>
          {successfulSignup && (
            <NavLink to="/login" className="success-text">
              Successfully signed up! Click here to log in.
            </NavLink>
          )}
          <form className="form" onSubmit={this.handleSubmit} noValidate>
            <div className="form-control" required>
              <label className="label" htmlFor="name">
                Name
              </label>
              <input
                className="input-text"
                onChange={this.handleInputChange}
                id="name"
                name="name"
                autoComplete="name"
                autoFocus
                error={!!errors.name}
              />
              <span className="error_text">{errors.name}</span>
            </div>

            <div className="form-control" required>
              <label className="label" htmlFor="email">
                Email Address
              </label>
              <input
                className="input-text"
                onChange={this.handleInputChange}
                id="email"
                name="email"
                autoComplete="email"
                error={!!errors.email}
              />
              <span className="error_text">{errors.email}</span>
            </div>

            <div className="form-control" required>
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                className="input-text"
                onChange={this.handleInputChange}
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={!!errors.password}
              />
              <span className="error_text">{errors.password}</span>
            </div>

            <div className="form-control" required>
              <label className="label" htmlFor="password">
                Confirm Password
              </label>
              <input
                className="input-text"
                onChange={this.handleInputChange}
                name="passwordConfirm"
                type="password"
                id="passwordConfirm"
                autoComplete="current-password-confirm"
                error={!!errors.passwordConfirm}
              />
              <span className="error_text">{errors.passwordConfirm || errors.error}</span>
            </div>

            <button type="submit" className="button submit">
              Create Account
            </button>
          </form>
          <h3 className="reroute">
            {'Already have an account? '}
            <NavLink to="/login" className="reroute_link">
              Log In
            </NavLink>
          </h3>
        </div>
      </main>
    );
  }
}

SignupPage.propTypes = propTypes;
SignupPage.defaultProps = defaultProps;

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(SignupPage);
