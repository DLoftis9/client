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
  articleTitle: PropTypes.string.isRequired,
  babyCanIChangeMyMind: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p19',
  next: '/Publication/Issue26p21',
  titleDescription: 'Baby Can I Change My Mind? - Oil',
  articleTitle: 'The Black Magician',
  babyCanIChangeMyMind:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/rick_berry/rb_baby_can_i_change_my_mind_oil_15.jpg',
  pageNumber: 38,
  company: 'Abstraks',
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p19 = props => (
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
              <strong className="page_paragraph--title">{props.articleTitle}</strong>
            </p>
            <p className="page_paragraph">
              Crumpled forms incite anguish and rage. Darkness looms in every corner of the frame.
              From an initial glimpse, the artist Rick Berry hides in a scattered web of tragedy and
              malignant obscurity. To look at the work compares itself to a prick of the finger,
              something rotting before your eyes. Bodies writhe against the black to the point of
              near incomprehensibility. Every painting seems to exist as an eternal struggle between
              the light and the dark.
            </p>
            <p className="page_paragraph">
              Rick Berry works in a studio on the third floor of a restored mill, one of the oldest
              buildings in Arlington, Massachusetts just North of Cambridge and Boston. Once inside,
              plush hazy green carpet fills the packed space. Rows of oil paintings huddled together
              lean against the aging walls. Rick, a joyful man with infectious enthusiasm, offers a
              warm greeting as he introduces himself. Coming out of a 36-hour block of work, he
              visibly adjusts to having company. With one question, Berry takes off on a whirlwind
              of life experiences, passionate projects, long-lived friendships, and his child-like
              tendencies.
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.babyCanIChangeMyMind}
                className="artist-work__image image"
                alt={props.titleDescription}
              />
            </div>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">{props.titleDescription}</p>
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

Issue26p19.propTypes = propTypes;
Issue26p19.defaultProps = defaultProps;

export default Issue26p19;
