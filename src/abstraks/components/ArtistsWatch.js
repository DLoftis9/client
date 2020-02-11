import React from 'react';
import PropTypes from 'prop-types';

// It's the design for the entire grid design that
// displays all the featured artists to be on the
// look out for - this is a section in a issue
const ArtistsWatch = props => (
  <div className="content-preview">
    <h2 className="content-preview__header">{props.title}</h2>
    <a
      className="anchor content-preview__image"
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="image content-preview__image--img" src={props.coverImage} alt={props.title} />
    </a>
    <div className="content-preview__artists">
      <h3 className="content-preview__features">Artist:</h3>
      <div className="content-preview__artists--single">{props.artists}</div>
    </div>
    <a
      className="anchor content-preview__anchor"
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="button button-primary content-preview__button content-preview__button--next">
        Learn More!
      </button>
    </a>
  </div>
);

ArtistsWatch.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  coverImage: PropTypes.string,
  artists: PropTypes.string,
};

export default ArtistsWatch;
