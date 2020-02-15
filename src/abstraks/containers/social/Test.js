import React from 'react';
import PropTypes from 'prop-types';

import EditInputElement from '../../../base/scripts/EditInputElement';

export default class Test extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    containerName: 'test',
  };

  state = {
    isFiltered: false,
    pendingGuest: '',
    guests: [],
  };

  render() {
    const { containerName } = this.props;
    return (
      <div className={containerName}>
        <div className={containerName + ` container`}>
          <div className={containerName + ` row`}>
            <h1>Test page</h1>
            <EditInputElement />
          </div>
        </div>
      </div>
    );
  }
}
