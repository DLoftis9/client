import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  componentName: PropTypes.string,
  viewLinkText: PropTypes.string.isRequired,
  viewLinkClassName: PropTypes.string.isRequired,
  followButtonClassName: PropTypes.string.isRequired,
  followButtonText: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

const defaultProps = {
  componentName: 'discover-layout',
};

const DiscoverLayout = props => (
  <div className={props.componentName}>
    <div className={props.componentName + `_items`}>
      <div className="avatar">
        <div className="avatar-image">
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
      </div>
      <div className="user-name">
        <p className="name">{props.userName}</p>
      </div>

      <div className="view">
        <Link to="/discover" className={props.viewLinkClassName}>
          {props.viewLinkText}
        </Link>
      </div>

      <div className="follow">
        <button className={props.followButtonClassName}>{props.followButtonText}</button>
      </div>
    </div>
  </div>
);

DiscoverLayout.propTypes = propTypes;
DiscoverLayout.defaultProps = defaultProps;

export default DiscoverLayout;
