import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import compose from 'recompose/compose';
import { loginUser } from '../../../base/social/actions/authActions';

const propTypes = {
  containerName: PropTypes.string.isRequired,
  errors: PropTypes.object,
  history: PropTypes.object.isRequired,
  signInUser: PropTypes.func.isRequired,
};

const defaultProps = {
  containerName: 'login',
  errors: {},
};

const mapStateToProps = state => ({
  auth: state.authReducer,
  errors: state.errorReducer,
});

const mapDispatchToProps = dispatch => ({
  signInUser: user => dispatch(loginUser(user)),
});

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  /* eslint-disable react/destructuring-assignment, react/prop-types */
  componentDidMount = () => {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  };

  UNSAFE_componentWillReceiveProps = nextProps => {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/');
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  };
  /* eslint-enable react/destructuring-assignment, react/prop-types */

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };
    const { signInUser } = this.props;
    signInUser(user);
  };

  render() {
    const { errors } = this.state;

    return (
      <main className={this.props.containerName}>
        <div className="login_form">
          <div className="icon_wrapper">
            <p className="icon">Sign Up Icon</p>
          </div>
          <h3 className="header-3">Log In</h3>
          <form className="form" onSubmit={this.handleSubmit} noValidate>
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
                autoFocus
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

            <button className="button submit" type="submit">
              Log In
            </button>
          </form>
          <h3 className="reroute">
            {"Don't have an account? "}
            <NavLink to="/signup" className="reroute_link">
              Sign Up
            </NavLink>
          </h3>
        </div>
      </main>
    );
  }
}

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(LoginPage);
