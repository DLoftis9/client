import React from 'react';

import PropTypes from 'prop-types';
export default class Users extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    containerName: 'users',
  };
  render() {
    const { containerName } = this.props;
    return (
      <div className={containerName}>
        <div className="grid-100">
          <h1>The Users page</h1>
        </div>
      </div>
    );
  }
}
