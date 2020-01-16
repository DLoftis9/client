import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  divClass: PropTypes.string,
  buttonClass: PropTypes.string,
  setShowMessage: PropTypes.func,
  buttonIcon: PropTypes.string,
  size: PropTypes.string,
};

const MobileMenuAnimatedHide = props => (
  <div className={props.divClass}>
    <div className={props.buttonClass} onClick={props.setShowMessage} size={props.size}>
      <i className={props.buttonIcon} />
    </div>
  </div>
);

MobileMenuAnimatedHide.propTypes = propTypes;

export default MobileMenuAnimatedHide;
