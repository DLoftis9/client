import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// This component is shown when the modal appears
// It's the design for the entire grid design that
// displays all the featured pages in an issue
const ModalShowContent = props => (
  <Link className="modal__anchor anchor" to={props.url}>
    <img className="modal__image image" src={props.thumbNail} alt={props.title} />
    <p className="modal__text">{props.title}</p>
  </Link>
);

ModalShowContent.propTypes = {
  url: PropTypes.string,
  thumbNail: PropTypes.string,
  title: PropTypes.string,
};

export default ModalShowContent;
