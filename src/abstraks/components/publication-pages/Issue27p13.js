import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue27Modal from '../../containers/publication-issue/Issue27Modal';

const issue27Modal = <Issue27Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  allInTheFamily: PropTypes.string.isRequired,
  bubble: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  titleDescription2: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p12',
  next: '/Publication/Issue27p14',
  allInTheFamily:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/anne_johnstone/all-in-the-Family%2C-Mixed-Media%2C-38x34--2013.jpg',
  bubble:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/anne_johnstone/bubble%2C-Mixed-Media-18x17--2013.jpg',
  titleDescription1: 'All In The Family, Mixed Media, 38" x 34", 2013',
  titleDescription2: 'Bubble, Mixed Media, 18" x 17", 2013',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p13 = props => (
  <div className="issue-27">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.allInTheFamily}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.bubble}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">{props.titleDescription1}</p>
          </div>

          <div className="page_column-6 page_column--right">
            <p className="titleDescription titleDescription__right">{props.titleDescription2}</p>
          </div>
        </div>
      </article>

      <PageNav
        prev={props.prev}
        next={props.next}
        modalTitle={props.modalTitle}
        modalContent={props.modalContent()}
      />
    </div>
  </div>
);

Issue27p13.propTypes = propTypes;
Issue27p13.defaultProps = defaultProps;

export default Issue27p13;
