import React from 'react';
import PropTypes from 'prop-types';

import PostWidget from '../../components/social/PostWidget';
import PostResponse from '../../components/social/PostResponse';
import PostResponseComments from '../../components/social/PostResponseComments';
import MenuSlideIn from '../../../base/scripts/MenuSlideIn';
import HeaderContent from '../../components/social/HeaderContent';

export default class PostFeed extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
    authUserName: PropTypes.object,
    extraClassName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'post-feed',
  };

  toggleLikeClick = () => {
    const { context } = this.props;
    context.actions.handleLikeClick();
  };

  render() {
    const { context, containerName } = this.props;
    const authUser = context.authenticatedUser;
    const isToggleOn = context.isToggleOn;
    return (
      <>
        <MenuSlideIn
          extraClassName={containerName}
          bodyContent={<HeaderContent authUserName={authUser.username} />}
        />
        <div className={containerName}>
          <div className={containerName + `_container container`}>
            <div className={containerName + `_row row`}>
              <h1>PostFeed</h1>
              <PostWidget authUserName={authUser.name} />
              <PostResponse toggleLike={isToggleOn} likeMethod={this.toggleLikeClick} />
              <PostResponseComments toggleLike={isToggleOn} likeMethod={this.toggleLikeClick} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
