import React from 'react';

import PropTypes from 'prop-types';
export default class Profile extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    containerName: 'profile',
  };
  render() {
    const { containerName } = this.props;
    return (
      <div className={containerName}>
        <div className="grid-100">
          <h1>The Profile page</h1>
        </div>
      </div>
    );
  }
}
