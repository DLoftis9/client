import React from 'react';

import PropTypes from 'prop-types';
export default class EditPost extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    containerName: 'edit-post',
  };
  render() {
    const { containerName } = this.props;
    return (
      <div className={containerName}>
        <div className="grid-100">
          <h1>The EditPost page</h1>
        </div>
      </div>
    );
  }
}
