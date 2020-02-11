import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  componentName: PropTypes.string.isRequired,
};

const defaultProps = {
  componentName: 'post-response',
};

const PostResponse = props => (
  <div className={props.componentName}>
    <div className={props.componentName + `_container`}>
      <div className="avatar">
        <div className="avatar-image">
          <i class="fa fa-user" aria-hidden="true"></i>
        </div>
        <div className="avatar-name">
          <p className="user-name">User Name</p>
        </div>
      </div>
      <div className="post">
        <p>
          Uniquely cultivate premium supply chains after world-class leadership skills. Completely
          implement installed base models with global e-markets. Efficiently foster high-quality
          bandwidth and strategic value. Globally.
        </p>
        <i class="fa fa-heart" aria-hidden="true">
          <p className="post-heart-number">9</p>
        </i>
        <i class="fa fa-comment-o" aria-hidden="true">
          <p className="post-comment-number">11</p>
        </i>
      </div>
    </div>
  </div>
);

PostResponse.propTypes = propTypes;
PostResponse.defaultProps = defaultProps;

export default PostResponse;
