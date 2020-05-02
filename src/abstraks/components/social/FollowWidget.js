import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { follow, unfollow } from '../../../base/social/utils/auth';

export default class FollowWidget extends Component {
  static propTypes = {
    componentName: PropTypes.string,
  };

  static defaultProps = {
    componentName: 'follow-widget',
  };

  followClick = () => {
    this.props.onButtonClick(follow);
  };

  unfollowClick = () => {
    this.props.onButtonClick(unfollow);
  };

  render() {
    const { componentName } = this.props;

    return (
      <div className={componentName}>
        {!this.props.following ? (
          <button onClick={this.followClick} className="button follow_button" aria-label="follow">
            <span className="follow_text">Follow</span>
          </button>
        ) : (
          <button
            onClick={this.unfollowClick}
            className="button unfollow_button"
            aria-label="unfollow"
          >
            <span className="unfollow_text">UnFollow</span>
          </button>
        )}
      </div>
    );
  }
}
