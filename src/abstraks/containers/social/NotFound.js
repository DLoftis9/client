import React from 'react';
import PropTypes from 'prop-types';
import PublicationHome from '../../components/PublicationHome';

const propTypes = {
  path: PropTypes.string,
  navbarButton: PropTypes.string,
  containerName: PropTypes.string,
  navbarButtonIcon: PropTypes.string,
  iconClass: PropTypes.string,
};

const NotFound = props => (
  <div className="not-found">
    <h1 className="header">Not Found</h1>
    <p className="paragraph">Sorry! We couldn't find the page you're looking for.</p>
    <PublicationHome />
  </div>
);

NotFound.propTypes = propTypes;

export default NotFound;
