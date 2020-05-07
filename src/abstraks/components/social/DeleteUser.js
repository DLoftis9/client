import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { isAuthenticated, remove, signout } from '../../../base/social/utils/auth';

export default class DeleteUser extends React.PureComponent {
  state = {
    redirect: false,
  };

  static propTypes = {
    componentName: PropTypes.string,
  };

  static defaultProps = {
    componentName: 'delete_user',
  };

  deleteAccount = () => {
    const token = isAuthenticated().token;
    const userId = this.props.userId;
    remove(userId, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        // signout user
        signout(() => {
          console.log('User successfully signed out');
        });

        // redirect
        this.setState({ redirect: true });
      }
    });
  };

  /**
   * todo: refactor prompt to a component
   */
  deleteConfirmed = () => {
    let answer = window.confirm('Are you sure you want to delete your account?');

    if (answer) {
      this.deleteAccount();
    }
  };

  render() {
    const { componentName } = this.props;

    if (this.state.redirect) {
      return <Redirect to="/signin" />;
    }
    return (
      <button className={componentName + `button`} onClick={this.deleteConfirmed}>
        Delete Profile
      </button>
    );
  }
}
