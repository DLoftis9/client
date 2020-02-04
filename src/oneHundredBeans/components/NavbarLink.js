import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  path: PropTypes.string,
  activeClassName: PropTypes.string,
  pageName: PropTypes.string,
};

const NavbarLink = props => (
  <div className="navbar__button">
    <Link to={props.path} activeClassName={props.activeClassName} className="anchor anchor__navbar">
      {props.pageName}
    </Link>
  </div>
);

NavbarLink.propTypes = propTypes;

export default NavbarLink;
