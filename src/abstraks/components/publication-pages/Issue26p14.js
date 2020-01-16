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
  narkotikaChaotika: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p13',
  next: '/Publication/Issue26p15',
  titleDescription1: 'Narkotika Chaotika - Painting|Drawing - 2009',
  pageNumber: 26,
  company: 'Abstraks',
  narkotikaChaotika:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/richard_heckert/RAH_Narkotika_Chaotika_painting_drawing_2009.jpg',

  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p14 = props => (
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
              his subject matter. But he doesn’t condemn so much as acknowledge that there are
              certain inevitabilities in our lives that are unlikely to change, and that our
              reliance on technology can cut both ways. Heckert prefers to be stuck right in the
              middle, observing and commenting with his fineliner pen. He is ready to cut cleanly
              through the chaos so that he can create even more.
            </p>

            <p className="page_paragraph">
              Richard Heckert is an artist working in the city of Essen, Germany. He has exhibition
              credits in Germany, Spain, and the UK, among others. The following interview took
              place between Richard and myself over email. The answers have been lightly edited.
            </p>

            <p className="page_paragraph">
              The most immediate thing I noticed about your work is its maximal quality -- every
              inch of the page is covered in detail. But while it’s visually chaotic, the technique
              is sharp, the lines are crisp, it’s very skillful. How much of your composition is
              planned and how much is worked out on the page? In other words, where do you get
              started?
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.narkotikaChaotika}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">{props.titleDescription1}</p>
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

Issue26p14.propTypes = propTypes;
Issue26p14.defaultProps = defaultProps;

export default Issue26p14;
