import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  componentName: PropTypes.string,
};

const defaultProps = {
  componentName: 'like-widget',
};

const LikeWidget = props => (
  <div className={props.componentName}>
    {!props.following ? (
      <button className="button_like" aria-label="Like">
        <i className="icon_unlike fa fa-heart-o" aria-hidden="true"></i>
      </button>
    ) : (
      <button className="button_like" aria-label="Like">
        <i className="icon_like fa fa-heart" aria-hidden="true"></i>
      </button>
    )}
  </div>
);

LikeWidget.propTypes = propTypes;
LikeWidget.defaultProps = defaultProps;

export default LikeWidget;
