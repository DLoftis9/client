import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { follow } from '../../../base/social/utils/auth';

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

  render() {
    const { componentName } = this.props;

    return (
      <div className={componentName}>
        {!this.props.following ? (
          <button onClick={this.followClick} className="button follow_button" aria-label="follow">
            <span>Follow</span>
          </button>
        ) : (
          <button className="button unfollow_button" aria-label="follow">
            <span>UnFollow</span>
          </button>
        )}
      </div>
    );
  }
}
