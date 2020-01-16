import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar';

const propTypes = {
  date: PropTypes.objectOf(PropTypes.func).isRequired,
};

const defaultProps = {
  date: new Date(),
};

function formatDate(date) {
  return date.getFullYear();
}

const Footer = props => (
  <div className="footer">
    <div className="container footer__container">
      <div className="row footer__row">
        <div className="footer__content">
          <p className="footer__paragraph">
            &copy; {formatDate(props.date)} Abstraks. All Rights Reserved.
          </p>
          <Navbar />
        </div>
      </div>
    </div>
  </div>
);

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
