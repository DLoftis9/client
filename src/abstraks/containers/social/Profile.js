import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '../../../base/scripts/Tabs';
import PostResponse from '../../components/social/PostResponse';
import FollowLayout from '../../components/social/FollowLayout';

export default class Profile extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonClassName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    containerName: 'profile',
    buttonText: PropTypes.string.isRequired,
    buttonClassName: PropTypes.string.isRequired,
  };
  render() {
    const { context, containerName, buttonText, buttonClassName } = this.props;
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
                <h2 className="user-name">{authUser.name}</h2>
              </div>
            </div>
            <div className="edit">
              <i class="fa fa-pencil" aria-hidden="true"></i>
              <p className="icon-text">Edit</p>
            </div>

            <Tabs>
              <div className="posts" label="Posts">
                <PostResponse />
              </div>
              <div className="following" label="Following">
                <FollowLayout buttonText="UnFollow" buttonClassName="button unfollow_button" />
                <FollowLayout buttonText="UnFollow" buttonClassName="button unfollow_button" />
                <FollowLayout buttonText="UnFollow" buttonClassName="button unfollow_button" />
              </div>
              <div className="followers" label="Followers">
                <FollowLayout buttonText="Follow" buttonClassName="button follow_button" />
                <FollowLayout buttonText="Follow" buttonClassName="button follow_button" />
                <FollowLayout buttonText="Follow" buttonClassName="button follow_button" />
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
