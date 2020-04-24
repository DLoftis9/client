import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  componentName: PropTypes.string,
  userName: PropTypes.string,
};

const defaultProps = {
  componentName: 'avatar',
};

const Avatar = props => (
  <div className={props.componentName}>
    <div className="avatar-image">
      <i className="fa fa-user" aria-hidden="true"></i>
    </div>
    <div className="avatar-name">
      <h2 className="user-name">{props.userName}</h2>
    </div>
  </div>
);

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
