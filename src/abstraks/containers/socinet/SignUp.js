import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import FormSubmit from '../../components/social/FormSubmit';
import ErrorDisplay from '../../components/social/ErrorDisplay';
import MenuSlideIn from '../../../base/scripts/MenuSlideIn';

export default class SignUp extends Component {
  state = {
    email: '',
    name: '',
    password: '',
    errors: [],
  };

  static propTypes = {
    containerName: PropTypes.string,
    extraClassName: PropTypes.string,
    bodyContent: PropTypes.object,
  };

  static defaultProps = {
    containerName: 'user-sign-up',
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

  // The submit function that creates a new user and sends their
  // credentials to the Express server. A new user will be created
  // using the state initialized in the UserSignUp class and the
  // createUser() method defined in Data.js. The UserSignUp
  // component is a component "with context", meaning it's subscribed
  // to the application context – the data is passed to the component
  // via a prop named context.
  submit = () => {
    const { context } = this.props;
    const { email, name, password } = this.state;

    // Create user
    const user = {
      email,
      name,
      password,
    };

    // The createUser() method, which can be accessed via the destructured
    // context variable. Context itself is an object which currently has
    // only one property, data. In Context.js, passed Context.Provider
    // a value prop whose value was an object with a data property. The
    // authentication API utilities provided to app are available via the
    // context.data property.

    // createUser() is an asynchronous operation that returns a promise.
    // The resolved value of the promise is either an array of errors
    // (sent from the API if the response is 400), or an empty array
    // (if the response is 201).
    context.data
      .signUpUser(user)
      .then(errors => {
        // check if the returned PromiseValue is an array of errors.
        // If it is, we will set the errors state of the UserSignUp
        // class to the returned errors.
        if (errors) {
          this.setState({ errors });
        } else {
          this.props.history.push('/');
          console.log('user created');
        }
      })
      .catch(err => {
        // The catch() method chained to the promise sequence handles
        // a rejected promise returned by createUser(). For example,
        // if there's an issue with the /users endpoint, the API is down,
        // or there's a network connectivity issue, the function passed
        // to catch() will get called.
        console.log(err);
        // In the event of an error, router will change the current URL from
        // /signup to /error. Redirecting the user to another route.
        // Navigating to the /error route will display a "Not Found" message
        // in the browser, providing a user-friendly way to let users know
        // that something went wrong.

        // /error does not match any URL path defined inside the <Switch>
        // component of App.js. Because of this, when the URL path changes
        // to /error, the router is going to render the NotFound component
        // written in components/NotFound.js.

        this.props.history.push('/error');
      });
  };

  render() {
    const { containerName } = this.props;
    const { email, name, password, errors } = this.state;

    return (
      <>
        <MenuSlideIn extraClassName={containerName} />
        <div className={containerName}>
          <div className={containerName + `_wrapper`}>
            <div className={containerName + `_container container`}>
              <div className={containerName + `_row row`}>
                <div className={containerName + `_content`}>
                  <h1 className="header-one">Sign Up</h1>
                  <FormSubmit
                    submit={this.submit}
                    submitButtonText="Sign Up"
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
                        <div className="input_user-name">
                          <label className="label">User Name</label>
                          <input
                            className="input"
                            id="name"
                            name="name"
                            type="text"
                            value={name}
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

                  <div className="error form-error" style={{ display: errors ? '' : 'none' }}>
                    <ul className="unordered-list">
                      <ErrorDisplay errors={errors} />
                    </ul>
                  </div>

                  <p className="account-redirect">
                    Already have a user account?{' '}
                    <Link className="anchor account-redirect_link" to="/signup">
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
