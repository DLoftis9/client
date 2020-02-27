import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  authUserName: PropTypes.string.isRequired,
  componentName: PropTypes.string.isRequired,
};

const defaultProps = {
  componentName: 'post-widget',
};

const PostWidget = props => (
  <div className={props.componentName}>
    <div className={props.componentName + `_container`}>
      <div className="avatar">
        <div className="avatar-image">
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
        <div className="avatar-name">
          <p className="user-name">{props.authUserName}</p>
        </div>
      </div>
      <div className="post">
        <textarea
          className="input post_input"
          id={props.componentName}
          name={props.componentName}
          type="text"
          placeholder="What's on your mind?"
        />
        <div className="camera-post">
          <i className="fa fa-camera" aria-hidden="true"></i>
          <button className="button button-primary submit post_button">Post</button>
        </div>
      </div>
    </div>
  </div>
);

PostWidget.propTypes = propTypes;
PostWidget.defaultProps = defaultProps;

export default PostWidget;
