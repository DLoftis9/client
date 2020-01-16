import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  title: PropTypes.string,
  coverImage: PropTypes.string,
  artists: PropTypes.array,
  url: PropTypes.string,
};

const IssuePreview = props => (
  <div className="issue-preview content-preview">
    <h2 className="issue-preview__header content-preview__header">{props.title}</h2>
    <Link className="anchor issue-preview__image content-preview__image" to={props.url}>
      <img
        className="image issue-preview__image--img content-preview__image--img"
        src={props.coverImage}
        alt={props.title}
      />
    </Link>
    <div className="issue-preview__artists content-preview__artists">
      <h3 className="issue-preview__features content-preview__features">Features:</h3>
      <div className="issue-preview__artists--single content-preview__artists--single">
        {props.artists}
      </div>
    </div>
    <Link className="anchor issue-preview__anchor content-preview__anchor" to={props.url}>
      <button className="button button-primary issue-preview__button content-preview__button issue-preview__button--next content-preview__button--next">
        {props.title}
      </button>
    </Link>
  </div>
);

IssuePreview.propTypes = propTypes;

export default IssuePreview;
