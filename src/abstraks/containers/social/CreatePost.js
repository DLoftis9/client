import React from 'react';
import PropTypes from 'prop-types';

import { isAuthenticated } from '../../../base/social/utils/auth';

import PostWidget from '../../components/social/PostWidget';
import MenuSlideIn from '../../../base/scripts/MenuSlideIn';
import HeaderContent from '../../components/social/HeaderContent';

export default class CreatePost extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
    authUserName: PropTypes.object,
    extraClassName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'create-post',
  };
  render() {
    const {
      // context,
      containerName,
    } = this.props;

    return (
      <>
        <MenuSlideIn
          extraClassName={containerName}
          bodyContent={<HeaderContent authUserName={isAuthenticated().user.name} />}
        />
        <div className={containerName}>
          <div className={containerName + `_container container`}>
            <div className={containerName + `_row row`}>
              <h1>CreatePost</h1>
              <PostWidget authUserName={isAuthenticated().user.name} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
