import React from 'react';
import PropTypes from 'prop-types';
import { isAuthenticated } from '../../../base/social/utils/auth';

import MenuSlideIn from '../../../base/scripts/MenuSlideIn';
import HeaderContent from '../../components/social/HeaderContent';

export default class Settings extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
    extraClassName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'terms-of-use',
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
              <h1>Terms Of Use</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}
