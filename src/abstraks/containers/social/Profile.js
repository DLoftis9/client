import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '../../../base/scripts/Tabs';
import PostResponse from '../../components/social/PostResponse';
import FollowLayout from '../../components/social/FollowLayout';
import Avatar from '../../components/social/Avatar';
import EditProfile from '../../components/social/EditProfile';

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

            <EditProfile />
            {/*  */}
            <div className="website">
              <h3 className="header-3">Website</h3>
              <a href="http://localhost:3000/profile" className="anchor website_anchor">
                <p className="website_user">www.testsite.com</p>
              </a>
            </div>
            {/*  */}
            <div className="profile_bio">
              <h3 className="header-3">Bio</h3>
              <textarea
                className="input post_input"
                id={containerName + `_bio-textarea`}
                name={containerName + `_bio-textarea`}
                type="text"
                placeholder="What's on your mind?"
              />
            </div>
            {/*  */}
            <div className="profile_email">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="email"
                className="input email_input"
              />
            </div>
            <div className="profile_number">
              <input
                id="number"
                name="number"
                type="number"
                placeholder="number"
                className="input number_input"
              />
            </div>
            <div className="profile_gender">
              <input
                id="gender"
                name="gender"
                type="gender"
                placeholder="gender"
                className="input gender_input"
              />
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
