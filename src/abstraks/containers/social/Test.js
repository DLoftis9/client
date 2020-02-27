import React from 'react';
import PropTypes from 'prop-types';

import MenuSlideIn from '../../../base/scripts/MenuSlideIn';

export default class Test extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string,
  };

  static defaultProps = {
    containerName: 'test',
  };

  render() {
    const { containerName } = this.props;
    return <div className={containerName}>{/* <MenuSlideIn /> */}</div>;
  }
}
