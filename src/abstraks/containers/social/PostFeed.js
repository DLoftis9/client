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
        <div className={containerName + `_container container`}>
          <div className={containerName + `_row row`}>
            <h1>The PostFeed page</h1>
            <div className="post-widget">
              <div className="post-widget_container">
                <div className="avatar">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
