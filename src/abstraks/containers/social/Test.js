import React from 'react';
import PropTypes from 'prop-types';

import MenuSlideIn from '../../../base/scripts/MenuSlideIn';
import HeaderContent from '../../components/social/HeaderContent';

export default class Test extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
    extraClassName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'test',
  };
  render() {
    const { context, containerName } = this.props;
    const authUser = context.authenticatedUser;
    return (
      <>
        <MenuSlideIn
          extraClassName={containerName}
          bodyContent={<HeaderContent authUserName={authUser.username} />}
        />
        <div className={containerName}>
          <div className={containerName + `_container container`}>
            <div className={containerName + `_row row`}>
              <h1>test</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}
