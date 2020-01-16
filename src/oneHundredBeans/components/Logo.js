import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  logo: PropTypes.string.isRequired,
};

const defaultProps = {
  logo: 'https://s3-us-west-1.amazonaws.com/100beans.com/assets/logo_orange.svg',
};

const Logo = props => (
  <div className="logo">
    <div className="logo__container col__container">
      <Link to="/" className="anchor anchor__navbar" target="_top">
        <img src={props.logo} className="logo__image" alt="Logo" />
      </Link>
    </div>
  </div>
);

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
