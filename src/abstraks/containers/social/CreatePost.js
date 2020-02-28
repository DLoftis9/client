import React from 'react';
import PropTypes from 'prop-types';

import PostWidget from '../../components/social/PostWidget';
import MenuSlideIn from '../../../base/scripts/MenuSlideIn';
import HeaderContent from '../../components/social/HeaderContent';

export default class CreatePost extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
    authUserName: PropTypes.object,
  };

  static defaultProps = {
    containerName: 'create-post',
  };
  render() {
    const { context, containerName } = this.props;
    const authUser = context.authenticatedUser;

    return (
      <>
        <MenuSlideIn bodyContent={<HeaderContent authUserName={authUser.name} />} />
        <div className={containerName}>
          <div className={containerName + `_container container`}>
            <div className={containerName + `_row row`}>
              <h1>CreatePost</h1>
              <PostWidget authUserName={authUser.name} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
