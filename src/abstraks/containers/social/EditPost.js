import React from 'react';
import PropTypes from 'prop-types';

import MenuSlideIn from '../../../base/scripts/MenuSlideIn';
import HeaderContent from '../../components/social/HeaderContent';

export default class EditPost extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
    authUserName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'edit-post',
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
              <h1>Edit Post</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}
