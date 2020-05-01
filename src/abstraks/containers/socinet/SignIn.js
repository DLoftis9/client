import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { signin, authenticate } from '../../../base/social/utils/auth';
import ErrorDisplay from '../../components/social/ErrorDisplay';
import MenuSlideIn from '../../../base/scripts/MenuSlideIn';
import Loader from '../../../base/scripts/Loader';

export default class SignIn extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    redirectToReferer: false,
    loading: false,
  };

  static propTypes = {
    containerName: PropTypes.string,
    extraClassName: PropTypes.string,
    bodyContent: PropTypes.object,
  };

  static defaultProps = {
    containerName: 'user-sign-in',
  };

  change = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value,
      };
    });

    this.setState({ error: '' });
  };

  submit = event => {
    event.preventDefault();

    this.setState({ loading: true });
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };

    console.log(user);

    signin(user).then(data => {
      if (data.error) {
        this.setState({ error: data.error, loading: false });
      } else {
        // authenticate
        authenticate(data, () => {
          // redirect
          this.setState({ redirectToReferer: true });
        });
      }
    });
  };

  render() {
    const { containerName } = this.props;
    const { email, password, error, redirectToReferer, loading } = this.state;
    if (redirectToReferer) {
      return <Redirect to="/profile" />;
    }

    return (
      <>
        <MenuSlideIn extraClassName={containerName} />
        <div className={containerName}>
          <div className={containerName + `_wrapper`}>
            <div className={containerName + `_container container`}>
              <div className={containerName + `_row row`}>
                <div className={containerName + `_content`}>
                  <h1 className="header-one">Sign In</h1>

                  <form className="form">
                    <div className="input_email">
                      <label className="label">Email</label>
                      <input
                        className="input"
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={this.change}
                        placeholder="Email"
                      />
                    </div>

                    <div className="input_password">
                      <label className="label">Password</label>
                      <input
                        className="input"
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.change}
                        placeholder="Password"
                      />
                    </div>

                    <button
                      onClick={this.submit}
                      className="button button-primary submit"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </form>

                  <p className="account-redirect">
                    Don't have a user account?{' '}
                    <Link className="anchor account-redirect_link" to="/signup">
                      Click here
                    </Link>{' '}
                    to sign up!
                  </p>

                  <div className="error form-error" style={{ display: error ? '' : 'none' }}>
                    <ul className="unordered-list">
                      <ErrorDisplay errors={error} />
                    </ul>
                  </div>

                  {loading ? <Loader /> : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
