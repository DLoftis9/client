import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  componentName: PropTypes.string.isRequired,
  toggleLike: PropTypes.bool.isRequired,
  likeMethod: PropTypes.func.isRequired,
};

const defaultProps = {
  componentName: 'post-response',
};

const PostResponse = props => (
  <React.Fragment>
    <div className={props.componentName}>
      <div className={props.componentName + `_container`}>
        <div className="avatar">
          <div className="avatar-image">
            <i className="image fa fa-user" aria-hidden="true"></i>
          </div>
          <div className="avatar-name">
            <p className="user-name">Posted User</p>
          </div>
        </div>
        <div className="post">
          <div className="post-image">
            <i className="image fa fa-picture-o" aria-hidden="true"></i>
          </div>
          <p className="post-paragraph paragraph">
            Uniquely cultivate premium supply chains after world-class leadership skills. Completely
            implement installed base models with global e-markets. Efficiently foster high-quality
            bandwidth and strategic value. Globally.
          </p>
          <div className="response-info">
            <div className="like-widget">
              <button onClick={props.likeMethod} className="button_like" aria-label="Like">
                {props.toggleLike ? (
                  <i className="icon_unlike fa fa-heart-o" aria-hidden="true"></i>
                ) : (
                  <i className="icon_like fa fa-heart" aria-hidden="true"></i>
                )}
              </button>
            </div>
            <p className="post-heart-number">{props.totalLikes}</p>

            <i className="fa fa-comment-o" aria-hidden="true">
              <p className="post-comment-number">11</p>
            </i>
            <div className="post-time">
              <p className="post-timestamp paragraph">Mon Dec 16 2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

PostResponse.propTypes = propTypes;
PostResponse.defaultProps = defaultProps;

export default PostResponse;
