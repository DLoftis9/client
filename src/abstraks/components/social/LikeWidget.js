import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  componentName: PropTypes.string,
  likeMethod: PropTypes.bool.isRequired,
  toggleLike: PropTypes.func.isRequired,
};

const defaultProps = {
  componentName: 'like-widget',
};

const LikeWidget = props => (
  <div className={props.componentName}>
    <button onClick={props.likeMethod} className="button_like" aria-label="Like">
      {props.toggleLike ? (
        <i className="icon_unlike fa fa-heart-o" aria-hidden="true"></i>
      ) : (
        <i className="icon_like fa fa-heart" aria-hidden="true"></i>
      )}
    </button>
  </div>
);

LikeWidget.propTypes = propTypes;
LikeWidget.defaultProps = defaultProps;

export default LikeWidget;
