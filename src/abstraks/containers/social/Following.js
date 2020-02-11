import React from 'react';

import PropTypes from 'prop-types';
export default class Following extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    containerName: 'following',
  };
  render() {
    const { containerName } = this.props;
    return (
      <div className={containerName}>
        <div className="grid-100">
          <h1>The Following page</h1>
        </div>
      </div>
    );
  }
}
