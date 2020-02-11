import React from 'react';

import PropTypes from 'prop-types';
export default class Settings extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    containerName: 'settings',
  };
  render() {
    const { containerName } = this.props;
    return (
      <div className={containerName}>
        <div className="grid-100">
          <h1>The Settings page</h1>
        </div>
      </div>
    );
  }
}
