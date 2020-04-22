import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import FormSubmit from '../../components/social/FormSubmit';
import ErrorDisplay from '../../components/social/ErrorDisplay';
import MenuSlideIn from '../../../base/scripts/MenuSlideIn';

export default class SignIn extends Component {
  state = {
    email: '',
    password: '',
    errors: [],
    redirectToReferer: false,
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

    this.setState({ errors: '' });
  };

  authenticate(jwt, next) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('jwt', JSON.stringify(jwt));
      next();
    }
  }

  submit = () => {
    const { context } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };

    // signIn() is an asynchronous operation that calls the getUser API
    // method (written in Data.js) and returns a promise. The resolved
    // value of the promise is either an object holding the authenticated
    // user's name and username values (sent from the API if the response
    // is 201), or null (if the response is a 401 Unauthorized HTTP status code).

    context.data
      .signInUser(user)
      .then(errors => {
        if (errors) {
          this.setState({ errors });
        } else {
          this.authenticate(context.data, () => {
            this.setState({ redirectToReferer: true });
          });

          this.props.history.push(from);
          console.log('logged from submit in SignIn: ', 'user logged-in');
          console.log('logging user: ', 'user logged-in');
        }
      })
      .catch(err => {
        console.log(err);

        this.props.history.push('/error');
      });
  };

  render() {
    const { containerName } = this.props;
    const { email, password, errors } = this.state;

    return (
      <>
        <MenuSlideIn extraClassName={containerName} />
        <div className={containerName}>
          <div className={containerName + `_wrapper`}>
            <div className={containerName + `_container container`}>
              <div className={containerName + `_row row`}>
                <div className={containerName + `_content`}>
                  <h1 className="header-one">Sign In</h1>
                  <FormSubmit
                    submit={this.submit}
                    submitButtonText="Sign In"
                    elements={() => (
                      <React.Fragment>
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
                      </React.Fragment>
                    )}
                  />

                  <div className="error form-error" style={{ display: errors ? '' : 'none' }}>
                    <ul className="unordered-list">
                      <ErrorDisplay errors={errors} />
                    </ul>
                  </div>

                  <p className="account-redirect">
                    Already have a user account?{' '}
                    <Link className="anchor account-redirect_link" to="/signin">
                      Click here
                    </Link>{' '}
                    to sign in!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
