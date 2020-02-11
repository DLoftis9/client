import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  logo: PropTypes.string.isRequired,
};

const defaultProps = {
  logo: 'https://d173eg0xl75rn9.cloudfront.net/assets/logo--white.svg',
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
