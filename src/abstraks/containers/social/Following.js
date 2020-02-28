import React from 'react';
import PropTypes from 'prop-types';

import MenuSlideIn from '../../../base/scripts/MenuSlideIn';
import HeaderContent from '../../components/social/HeaderContent';

export default class Following extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    containerName: 'following',
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
              <h1>Following</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}
