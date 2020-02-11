import React from 'react';
import PropTypes from 'prop-types';

// It's the design for the entire grid design that
// displays all the featured issues on Publication
const ContentPreview = props => (
  <div className="content-preview">
    <h2 className="content-preview__header">{props.title}</h2>
    <a className="anchor content-preview__image" href={props.url}>
      <img className="image content-preview__image--img" src={props.coverImage} alt={props.title} />
    </a>
    <div className="content-preview__artists">
      <h3 className="content-preview__features">Features:</h3>
      <div className="content-preview__artists--single">{props.artists}</div>
    </div>
    <a className="anchor content-preview__anchor" href={props.url}>
      <button className="button button-primary content-preview__button content-preview__button--next">
        {props.title}
      </button>
    </a>
  </div>
);

ContentPreview.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  coverImage: PropTypes.string,
  artists: PropTypes.array,
};

export default ContentPreview;
