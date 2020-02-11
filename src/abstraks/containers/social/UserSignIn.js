import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/social/Form';

export default class UserSignIn extends Component {
  state = {
    username: '',
    password: '',
    errors: [],
  };

  render() {
    const { username, password, errors } = this.state;

    return (
      <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign In</h1>
          <Form
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Sign In"
            elements={() => (
              <React.Fragment>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={this.change}
                  placeholder="User Name"
                />
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={this.change}
                  placeholder="Password"
                />
              </React.Fragment>
            )}
          />
          <p>
            Don't have a user account? <Link to="/signup">Click here</Link> to sign up!
          </p>
        </div>
      </div>
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
    const { from } = this.props.location.state || { from: { pathname: '/authenticated' } };
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

  cancel = () => {
    this.props.history.push('/');
  };
}
