import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FormSign from '../../components/social/FormSign';
import MenuSlideIn from '../../../base/scripts/MenuSlideIn';

export default class UserSignIn extends Component {
  state = {
    username: '',
    password: '',
    errors: [],
  };

  static propTypes = {
    containerName: PropTypes.string,
    extraClassName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'user-sign-in',
  };

  render() {
    const { containerName } = this.props;
    const { username, password, errors } = this.state;

    return (
      <>
        <MenuSlideIn extraClassName={containerName} />
        <div className={containerName}>
          <div className={containerName + `_wrapper`}>
            <div className={containerName + `_container container`}>
              <div className={containerName + `_row row`}>
                <div className={containerName + `_content`}>
                  <h1 className="header-one">Sign In</h1>
                  <FormSign
                    errors={errors}
                    submit={this.submit}
                    submitButtonText="Sign In"
                    elements={() => (
                      <React.Fragment>
                        <div className="input_user-name">
                          <label className="label">User Name</label>
                          <input
                            className="input"
                            id="username"
                            name="username"
                            type="text"
                            value={username}
                            onChange={this.change}
                            placeholder="User Name"
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
                      </React.Fragment>
                    )}
                  />
                  <p className="account-redirect">
                    Don't have a user account?{' '}
                    <Link className="anchor account-redirect_link" to="/signup">
                      Click here
                    </Link>{' '}
                    to sign up!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  change = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value,
      };
    });
  };

  submit = () => {
    const { context } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/profile' } };
    const { username, password } = this.state;

    // signIn() is an asynchronous operation that calls the getUser API
    // method (written in Data.js) and returns a promise. The resolved
    // value of the promise is either an object holding the authenticated
    // user's name and username values (sent from the API if the response
    // is 201), or null (if the response is a 401 Unauthorized HTTP status code).
    context.actions
      .signIn(username, password)
      .then(user => {
        if (user === null) {
          // If the returned promise value is null, set the errors state of the
          // UserSignIn class to an array which holds the string 'Sign-in was
          // unsuccessful' (this will be the validation message displayed to the user).
          this.setState(() => {
            return { errors: ['Sign-in was unsuccessful'] };
          });
        } else {
          // If the response returns the user object (response status is 201), history
          // and the push() method will navigate the user from the /signin route to the
          // /authenticated (from variable) route, which will render the "Authenticated"
          // view to let them know sign-in was successful.
          this.props.history.push(from);
          // If the user is redirected to /signin from a previous route, submit() should
          // navigate them back to the original route once they authenticate.

          // The from variable passed to history.push(from) contains information about the
          // pathname an unauthenticated user redirected from (via this.props.location.state).
          // For example, if a user redirects to the sign up page from /settings, from will
          // be equal to pathname: "/settings". If a user submits the sign in form without
          // previously visiting a protected route, they will navigate to /authenticated by default.
        }
      })
      .catch(error => {
        console.error(error);
        // In the event of an error, use history and the push() method to navigate
        // the user from /signin to /error, providing a user-friendly way to let them
        // know that something went wrong
        this.props.history.push('/error');
      });
  };
}
