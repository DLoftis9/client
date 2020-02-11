import React from 'react';
import PropTypes from 'prop-types';

import PostWidget from '../../components/social/PostWidget';
import PostResponse from '../../components/social/PostResponse';

export default class PostFeed extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    containerName: 'post-feed',
  };
  render() {
    const { context, containerName } = this.props;
    const authUser = context.authenticatedUser;
    return (
      <div className={containerName}>
        <div className={containerName + `_container container`}>
          <div className={containerName + `_row row`}>
            <h1>The PostFeed page</h1>
            <PostWidget authUserName={authUser.name} />
            <PostResponse />
          </div>
        </div>
      </div>
    );
  }
}
