import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class UserSignUp extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
      error: '',
    };
  }

  // state = {
  //   name: '',
  //   email: '',
  //   password: '',
  //   error: [],
  // };

  static propTypes = {
    containerName: PropTypes.string,
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
  };

  clickSubmit = event => {
    event.preventDefault();
    // const { context } = this.props;
    const { name, email, password } = this.state;

    const user = {
      name,
      email,
      password,
    };

    // console.log(user);

    // context.data.createUser(user).then(console.log('signed in'))
    fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json;',
      },
      body: JSON.stringify(user),
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

  render() {
    const { containerName } = this.props;
    const { name, email, password, errors } = this.state;

    return (
      <>
        <div className={containerName}>
          <div className={containerName + `_wrapper`}>
            <div className={containerName + `_container container`}>
              <div className={containerName + `_row row`}>
                <div className={containerName + `_content`}>
                  <h2>Socinet Signup</h2>
                  <div className="form-group">
                    <div className="input_name">
                      <label className="label">Name</label>
                      <input
                        className="input"
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={this.change}
                        placeholder="Name"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input_user-name">
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
                  </div>

                  <div className="form-group">
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
                  </div>

                  <div className="form">
                    <form className="form-element">
                      <div className="form-element_inputs"></div>
                      <button
                        className="button button-primary submit"
                        type="submit"
                        onClick={this.clickSubmit}
                      >
                        Submit
                      </button>
                    </form>
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
