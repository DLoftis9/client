import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue26Modal from '../../containers/publication-issue/Issue26Modal';

const issue26Modal = <Issue26Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  titleDescription: PropTypes.string.isRequired,
  tar03: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p31',
  next: '/Publication/Issue26p33',
  titleDescription: 'Taner Tumkaya',
  tar03: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/taner_tumkaya/tar03.jpg',
  pageNumber: 62,
  company: 'Abstraks',
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p32 = props => (
  <div className="issue-26">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <p className="page_paragraph">
              is made available to viewers on the second-story balcony in which they are invited to
              look through the opening to watch a 24-minute video. Footage inside the cone depicts
              certain parts of Taner’s body as if each body part acted as a “separate and
              autonomous” body. Taner explains his reasoning for installing the video in a
              conic-viewer. Only one viewer is allowed to look through the cone at a time, creating
              a personal one-on-one “peep” experience for each participant. The simple structure
              allowed for fragmented parts that correspond to the idea of the original video piece.
              The elongated shape of the sculpture has a phallus quality that relates back to the
              body, combining themes of power and productivity. Acting as a kaleidoscope of human
              anatomy, the piece creates a personal approach to physical assessment. Each viewer
              must overanalyze the contents of Taner’s body as if it were their own.
            </p>

            <p className="page_paragraph">
              Cultivating all of his conic interests, Taner then created “The Book of Cone,” (2007),
              a box that contains an unbound group of pages. Each page or image refers to the cone
              in some way including household objects
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.tar03}
                className="artist-work__image image"
                alt={props.titleDescription}
              />
            </div>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">
              <strong>{props.pageNumber}</strong> {props.company}
            </p>
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

Issue26p32.propTypes = propTypes;
Issue26p32.defaultProps = defaultProps;

export default Issue26p32;
