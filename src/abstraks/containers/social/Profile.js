import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '../../../base/scripts/Tabs';
import PostResponse from '../../components/social/PostResponse';
import FollowLayout from '../../components/social/FollowLayout';
import Avatar from '../../components/social/Avatar';

export default class Profile extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string,
    buttonText: PropTypes.string,
    buttonClassName: PropTypes.string,
    // userName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'profile',
  };
  render() {
    const {
      context,
      containerName,
      // userName,
      // buttonText,
      // buttonClassName
    } = this.props;
    const authUser = context.authenticatedUser;
    return (
      <div className={containerName}>
        <div className={containerName + `_container container`}>
          <div className={containerName + `_row row`}>
            <h1>The Profile page</h1>
            <Avatar userName={authUser.name} />

            {/*  */}

            {/*  */}
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
