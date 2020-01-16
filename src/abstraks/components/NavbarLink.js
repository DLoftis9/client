import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  path: PropTypes.string,
  navbarButton: PropTypes.string,
  containerName: PropTypes.string,
  navbarButtonIcon: PropTypes.string,
  iconClass: PropTypes.string,
};

const NavbarLink = props => (
  <div className={props.navbarButton}>
    <NavLink to={props.path} className="anchor anchor__navbar" target="_top">
      {props.containerName}
      <span className={props.navbarButtonIcon}>
        <i className={props.iconClass} />
      </span>
    </NavLink>
  </div>
);

NavbarLink.propTypes = propTypes;

export default NavbarLink;
