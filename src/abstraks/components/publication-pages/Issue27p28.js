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
  seer: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p27',
  next: '/Publication/Issue27p29',
  seer: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/john_guthrie/seer.jpg',
  titleDescription1: 'Seer',
  pageNumber: 54,
  company: 'Abstraks',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p28 = props => (
  <div className="issue-27">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <p className="page_paragraph">
              My attention turns to a group of black and white watercolors. Definitively, Guthrie
              describes them as his period of “zero color.” Highlighted by rows of gradient shades
              from light to black in abstract shapes, the work touches a familiar note. Guthrie
              admits that his inspiration for the work came from the infamous Rorschach inkblots, a
              psychological test used to examine a person’s underlying thought process. Each image
              features a hard line of symmetry down the middle. White circles meet in the center,
              providing some contrast to the blackest blacks. Guthrie describes how the small areas
              of white developed naturally as he would add washes to the drawing. So, he decided to
              exploit it, carving out perfect circles to create a zipper-like pattern.
            </p>

            <p className="page_paragraph">
              Just like Rorschach, Guthrie’s images conjure an infinite number of possible meanings.
              Mirrored shapes reminisce private parts, human torsos, fetish objects, and masks.
              Guthrie tells me that the work tends to evoke a strong reaction from viewers as they
              eagerly guess at the true identity
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.seer}
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

Issue27p28.propTypes = propTypes;
Issue27p28.defaultProps = defaultProps;

export default Issue27p28;
