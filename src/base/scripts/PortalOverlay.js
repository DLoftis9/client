import React from 'react';
import PropTypes from 'prop-types';

const PortalOverlay = props => <div className={props.overlay} />;

PortalOverlay.propTypes = {
  overlay: PropTypes.string,
};

export default PortalOverlay;
