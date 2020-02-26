import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class MobileFooter extends React.PureComponent {
  static propTypes = {
    componentName: PropTypes.string,
  };

  static defaultProps = {
    componentName: 'mobile-footer',
  };

  render() {
    // const getHeaderContent = <HeaderContent />;
    const { componentName } = this.props;
    return (
      <div className={componentName}>
        <div className={componentName + `_container `}>
          <div className="tab feed">
            <i class="tab_icon fa fa-home" aria-hidden="true"></i>
            <p className="tab_text">Feed</p>
          </div>
          <div className="tab discover">
            <i class="tab_icon fa fa-search" aria-hidden="true"></i>
            <p className="tab_text">Discover</p>
          </div>
          <div className="tab create-post">
            <i class="tab_icon fa fa-plus" aria-hidden="true"></i>
            <p className="tab_text">Post</p>
          </div>
          <div className="tab tools">
            <i class="fa fa-wrench" aria-hidden="true"></i>
            <p className="tab_text">Tools</p>
          </div>
        </div>
      </div>
    );
  }
}
