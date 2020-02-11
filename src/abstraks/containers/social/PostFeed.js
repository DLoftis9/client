import React from 'react';

import PropTypes from 'prop-types';
export default class PostFeed extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    containerName: 'post-feed',
  };
  render() {
    const { containerName } = this.props;
    return (
      <div className={containerName}>
        <div className="grid-100">
          <h1>The PostFeed page</h1>
        </div>
      </div>
    );
  }
}
