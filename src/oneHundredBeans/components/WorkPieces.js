import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  coverImage: PropTypes.string,
};

const WorkPieces = props => (
  <div className="section">
    <Link
      to={props.url}
      className="section__work anchor anchor__section expand-image"
      target="_top"
    >
      <div className="section__overlay">
        <div className="work__image">
          <img src={props.coverImage} className="image" alt={props.title} />
        </div>

        <div className="work__title">
          <h3 className="section__title">{props.title}</h3>
        </div>
      </div>
    </Link>
  </div>
);

WorkPieces.propTypes = propTypes;

export default WorkPieces;
