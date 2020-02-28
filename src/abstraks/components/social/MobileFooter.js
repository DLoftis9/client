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
    const { componentName } = this.props;
    return (
      <div className={componentName}>
        <div className={componentName + `_container `}>
          <Link className="anchor anchor_feed" to="/postfeed">
            <div className="tab feed_tab">
              <i className="tab_icon fa fa-home" aria-hidden="true"></i>
              <p className="tab_text">Feed</p>
            </div>
          </Link>
          <Link className="anchor anchor_discover" to="/discover">
            <div className="tab discover_tab">
              <i className="tab_icon fa fa-search" aria-hidden="true"></i>
              <p className="tab_text">Discover</p>
            </div>
          </Link>
          <Link className="anchor anchor_post" to="/createpost">
            <div className="tab post_tab">
              <i className="tab_icon fa fa-plus" aria-hidden="true"></i>
              <p className="tab_text">Post</p>
            </div>
          </Link>
          <Link className="anchor anchor_tools" to="/tools">
            <div className="tab tools_tab">
              <i className="fa fa-wrench" aria-hidden="true"></i>
              <p className="tab_text">Tools</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
