import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  componentName: PropTypes.string.isRequired,
};

const defaultProps = {
  componentName: 'post-response-comments',
};

const PostResponseComments = props => (
  <React.Fragment>
    <div className="post-response-user">
      <div className="avatar">
        <div className="avatar-image">
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
      </div>
      <textarea
        className="input post_input"
        id={props.componentName}
        name={props.componentName}
        type="text"
        placeholder="What's on your mind?"
      />
      <button className="button button-primary submit post_button">Post</button>
    </div>
    <div className={props.componentName}>
      <div className={props.componentName + `_container`}>
        <div className="avatar">
          <div className="avatar-image">
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <div className="avatar-name">
            <p className="user-name">User Name</p>
          </div>
        </div>
        <div className="post">
          <p className="post-paragraph paragraph">
            Appropriately architect optimal meta-services vis-a-vis parallel infomediaries.
            Synergistically drive e-business manufactured products with client-centric experiences.
            Synergistically strategize functional portals vis-a-vis distributed e-markets.
            Compellingly facilitate market-driven.
          </p>
          <p className="post-timestamp paragraph">Mon Dec 16 2019</p>
        </div>
      </div>
    </div>
  </React.Fragment>
);

PostResponseComments.propTypes = propTypes;
PostResponseComments.defaultProps = defaultProps;

export default PostResponseComments;
