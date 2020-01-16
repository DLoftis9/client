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
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  consumeYourself: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p11',
  next: '/Publication/Issue26p13',
  titleDescription1: 'Consume Yourself - Painting|Drawing - 2013',
  pageNumber: 22,
  company: 'Abstraks',
  consumeYourself:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/richard_heckert/RAH_Consume_Yourself_painting_drawing_2013.jpg',

  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p12 = props => (
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
              Richard Heckert’s artwork is a visual assault. Vibrating colors and dynamic shapes and
              figures are compressed into tightly packed compositions. One piece extols the viewer
              to “STOP THE BLOB”. Another screams “LOVE TECHNO”. Others ring the alarm, telling
              tales of the impending Barbie Wars, urging people to shop and consume, warning of
              alien sacrifice. It is, in a word, chaos. In two words, utter chaos. It is, as Heckert
              puts it, POP AMOK.
            </p>

            <p className="page_paragraph">
              While the subject matter of Heckert’s work is chaotic and messy, his style is exactly
              the opposite. Heckert uses a crisp and clean line to describe the hustle and bustle of
              our culture. Every curve, every angle is expertly outlined on paper. Heckert is an
              expert draftsman who counts both Bosch and Mucha among his inspirations, and it shows.
              The Garden of Earthly Delights, full of action and detail, is a good starting point
              from which to conceptually approach this particular body of Heckert’s work.
            </p>

            <p className="page_paragraph">
              Heckert draws on our rapid-fire culture, technological necessities, and consumerist
              obsessions for
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.consumeYourself}
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

Issue26p12.propTypes = propTypes;
Issue26p12.defaultProps = defaultProps;

export default Issue26p12;
