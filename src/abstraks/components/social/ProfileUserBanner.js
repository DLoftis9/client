import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  componentName: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  buttonClassName: PropTypes.string.isRequired,
};

const defaultProps = {
  componentName: 'follow-layout',
};

const FollowLayout = props => (
  <div className={props.componentName}>
    <div className="avatar">
      <i className="fa fa-user" aria-hidden="true"></i>
    </div>
    <div className="user-name">
      <p className="name">User Name</p>
    </div>

    <div className="follow">
      <button className={props.buttonClassName}>{props.buttonText}</button>
    </div>
  </div>
);

FollowLayout.propTypes = propTypes;
FollowLayout.defaultProps = defaultProps;

export default FollowLayout;
