import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../Navbar';

const propTypes = {
  componentName: PropTypes.string,

  dribbleHref: PropTypes.string,
  dribbleText: PropTypes.string,
  dribbbleIcon: PropTypes.string,

  instagramHref: PropTypes.string,
  instagramText: PropTypes.string,
  instagramicon: PropTypes.string,
};

const defaultProps = {
  componentName: 'info',
};

const InfoContent = props => (
  <main className={props.componentName}>
    <div className={props.componentName + `__content`}>
      <p className="links">Info</p>
      <Navbar />
    </div>
  </main>
);

InfoContent.propTypes = propTypes;
InfoContent.defaultProps = defaultProps;

export default InfoContent;
