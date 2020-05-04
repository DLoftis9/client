import React from 'react';
import PropTypes from 'prop-types';
import { isAuthenticated } from '../../../base/social/utils/auth';

import MenuSlideIn from '../../../base/scripts/MenuSlideIn';
import HeaderContent from '../../components/social/HeaderContent';
import Tabs from '../../../base/scripts/Tabs';

export default class Following extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
    extraClassName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'following',
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
              <h1>Following</h1>
              <Tabs>
                <div className="following" label="Following">
                  <h2>Following</h2>
                </div>
                <div className="followers" label="Followers">
                  <h2>Followers</h2>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </>
    );
  }
}
