import React from 'react';
import PropTypes from 'prop-types';

import { forgotPassword } from '../../../base/social/utils/auth';
import ErrorDisplay from '../../components/social/ErrorDisplay';

export default class ForgotPassword extends React.PureComponent {
  state = {
    email: '',
    message: '',
    error: '',
  };

  forgotPassword = e => {
    e.preventDefault();

    this.setState({
      message: '',
      error: '',
    });

    forgotPassword(this.state.email).then(data => {
      if (data.error) {
        console.log(data.error);
        this.setState({ error: data.error });
      } else {
        console.log(data.message);
        this.setState({ message: data.message });
      }
    });
  };

  static propTypes = {
    containerName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'forgot-password',
  };

  render() {
    const { containerName } = this.props;
    const { error } = this.state;

    return (
      <div className={containerName}>
        <div className={containerName + `_wrapper`}>
          <div className={containerName + `_container container`}>
            <div className={containerName + `_row row`}>
              <div className={containerName + `_content`}>
                {this.state.message && (
                  <div
                    className="success form-success"
                    // style={{ display: this.state.message ? '' : 'none' }}
                  >
                    <h3 className="header-three">{this.state.message}</h3>
                  </div>
                )}

                {/* {this.state.error && (
                  <div
                    className="error form-error"
                    style={{ display: this.state.error ? '' : 'none' }}
                  >
                    <h3 className="listItem">{this.state.error}</h3>
                  </div>
                )} */}

                <form className="form">
                  <div className="input_email">
                    <input
                      className="input"
                      type="email"
                      placeholder="Please enter your email address"
                      value={this.state.email}
                      name="email"
                      onChange={e =>
                        this.setState({
                          email: e.target.value,
                          message: '',
                          error: '',
                        })
                      }
                      autoFocus
                    />
                  </div>
                </form>

                <button onClick={this.forgotPassword} className="button button-primary submit">
                  Reset Password
                </button>

                <div className="error form-error" style={{ display: error ? '' : 'none' }}>
                  <ul className="unordered-list">
                    <ErrorDisplay errors={error} />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
