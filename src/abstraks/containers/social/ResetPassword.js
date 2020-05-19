import React from 'react';
import PropTypes from 'prop-types';

import { resetPassword } from '../../../base/social/utils/auth';
import ErrorDisplay from '../../components/social/ErrorDisplay';

export default class ResetPassword extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      message: '',
      error: '',
    };
  }

  resetPassword = e => {
    e.preventDefault();
    this.setState({ message: '', error: '' });

    resetPassword({
      newPassword: this.state.newPassword,
      resetPasswordLink: this.props.match.params.resetPasswordToken,
    }).then(data => {
      if (data.error) {
        console.log(data.error);
        this.setState({ error: data.error });
      } else {
        console.log(data.message);
        this.setState({ message: data.message, newPassword: '' });
      }
    });
  };

  static propTypes = {
    containerName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'reset-password',
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
                  <div className="success form-success">
                    <h3 className="header-three">{this.state.message}</h3>
                  </div>
                )}

                <form className="form">
                  <div className="input_password">
                    <input
                      className="input"
                      type="password"
                      placeholder="Please enter your NEW password"
                      value={this.state.nePassword}
                      name="newPassword"
                      onChange={e =>
                        this.setState({
                          newPassword: e.target.value,
                          message: '',
                          error: '',
                        })
                      }
                      autoFocus
                    />
                  </div>
                </form>

                <button onClick={this.resetPassword} className="button button-primary submit">
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
