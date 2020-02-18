import React from 'react';
import PropTypes from 'prop-types';
import DiscoverLayout from '../../components/social/DiscoverLayout';

export default class Discover extends React.PureComponent {
  static propTypes = {
    containerName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    containerName: 'discover',
  };
  render() {
    const { containerName } = this.props;
    return (
      <div className={containerName}>
        <div className={containerName + `_container container`}>
          <div className={containerName + `_row row`}>
            <h1>The Discover page</h1>
            <DiscoverLayout
              userName="Joe"
              viewLinkClassName="anchor anchor_view"
              viewLinkText="View"
              followButtonClassName="button unfollow_button"
              followButtonText="UnFollow"
            />

            <DiscoverLayout
              userName="Anna"
              viewLinkClassName="anchor anchor_view"
              viewLinkText="View"
              followButtonClassName="button follow_button"
              followButtonText="Follow"
            />

            <DiscoverLayout
              userName="Matt"
              viewLinkClassName="anchor anchor_view"
              viewLinkText="View"
              followButtonClassName="button follow_button"
              followButtonText="Follow"
            />

            <DiscoverLayout
              userName="John"
              viewLinkClassName="anchor anchor_view"
              viewLinkText="View"
              followButtonClassName="button unfollow_button"
              followButtonText="UnFollow"
            />

            <DiscoverLayout
              userName="Smith"
              viewLinkClassName="anchor anchor_view"
              viewLinkText="View"
              followButtonClassName="button follow_button"
              followButtonText="Follow"
            />
          </div>
        </div>
      </div>
    );
  }
}