import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  componentName: PropTypes.string
};

const defaultProps = {
  componentName: 'logged-out_links',
};

const LoggedOutLinks = props => (
  <div className={props.componentName}>
    <Link className="anchor signup" to="/signup">
      Sign Up
    </Link>
    <Link className="anchor signin" to="/signin">
      Sign In
    </Link>
  </div>
);

LoggedOutLinks.propTypes = propTypes;
LoggedOutLinks.defaultProps = defaultProps;

export default LoggedOutLinks;
