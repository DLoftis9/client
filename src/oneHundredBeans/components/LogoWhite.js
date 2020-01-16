import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  logo: PropTypes.string.isRequired,
};

const defaultProps = {
  logo: 'https://s3-us-west-1.amazonaws.com/100beans.com/assets/logo_white.svg',
};

const LogoWhite = props => (
  <div className="logo">
    <div className="logo__container col__container">
      <Link to="/" className="anchor anchor__navbar">
        <img src={props.logo} className="logo__image" alt="Logo" />
      </Link>
    </div>
  </div>
);

LogoWhite.propTypes = propTypes;
LogoWhite.defaultProps = defaultProps;

export default LogoWhite;
