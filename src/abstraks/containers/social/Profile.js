import React from 'react';
import PropTypes from 'prop-types';

export default class Profile extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    containerName: 'profile',
  };
  render() {
    const { context, containerName } = this.props;
    const authUser = context.authenticatedUser;
    return (
      <div className={containerName}>
        <div className={containerName + `_container container`}>
          <div className={containerName + `_row row`}>
            <h1>The Profile page</h1>
            <div className="avatar">
              <div className="avatar-image">
                <i class="fa fa-user" aria-hidden="true"></i>
              </div>
              <div className="avatar-name">
                <p className="user-name">{authUser.name}</p>
              </div>
            </div>
            <div className="edit">
              <i class="fa fa-pencil" aria-hidden="true">
                <p className="icon-text">Edit</p>
              </i>
            </div>

            {/* Implement tabs */}
          </div>
        </div>
      </div>
    );
  }
}
