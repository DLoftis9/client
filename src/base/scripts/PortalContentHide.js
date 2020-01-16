import React from 'react';
import PropTypes from 'prop-types';

const PortalContentHide = props => (
  <div className={props.divClass}>
    <button className={props.buttonClass} onClick={props.handleShow}>
      {props.buttonLabel}
      <i className={props.buttonIcon} />
    </button>
    {props.modal}
  </div>
);

PortalContentHide.propTypes = {
  divClass: PropTypes.string,
  buttonClass: PropTypes.string,
  handleShow: PropTypes.func,
  buttonLabel: PropTypes.string,
  buttonIcon: PropTypes.string,
  modal: PropTypes.element,
};

export default PortalContentHide;
