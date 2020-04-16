import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class UserSignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    error: '',
  };

  static propTypes = {
    containerName: PropTypes.string,
    extraClassName: PropTypes.string,
    bodyContent: PropTypes.object,
  };

  static defaultProps = {
    containerName: 'user-sign-up',
  };

  handleChange = name => {};

  render() {
    const { containerName } = this.props;
    const { name, username, password, errors } = this.state;

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
                        onChange={this.handleChange('name')}
                        placeholder="Name"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input_user-name">
                      <label className="label">Email</label>
                      <input
                        className="input"
                        id="username"
                        name="username"
                        type="text"
                        value={username}
                        onChange={this.handleChange('email')}
                        placeholder="User Name"
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
                        onChange={this.handleChange('password')}
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
