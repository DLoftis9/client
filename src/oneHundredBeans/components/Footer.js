import React from 'react';
import PropTypes from 'prop-types';

import ContactContent from './containerContents/ContactContent';
import SocialContent from './containerContents/SocialContent';
import InfoContent from './containerContents/InfoContent';

const propTypes = {
  componentName: PropTypes.string.isRequired,
  date: PropTypes.objectOf(PropTypes.func).isRequired,
};

const defaultProps = {
  componentName: 'footer',
  date: new Date(),
};

function formatDate(date) {
  return date.getFullYear();
}

const Footer = props => (
  <div className={props.componentName + `__container container`}>
    <div className={props.componentName + `__row row`}>
      <ContactContent />
      <div className={props.componentName + `__content`}>
        <SocialContent />
        <InfoContent />
      </div>

      <div className={props.componentName + `__credits`}>
        <p className={props.componentName + `__paragraph paragraph`}>
          &copy; {formatDate(props.date)} 100 Beans. All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
);

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
