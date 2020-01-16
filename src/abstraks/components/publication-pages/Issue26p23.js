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
  medfix: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p22',
  next: '/Publication/Issue26p24',
  titleDescription: 'Med fix - Oil',
  medfix:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/rick_berry/rb_med_fix_oil_13.jpg',
  pageNumber: 44,
  company: 'Abstraks',
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p23 = props => (
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
              on a number of projects as Berry provided the cover art for Gaiman’s books. They
              continue to share a notable infatuation of the surreal, each creating worlds of
              blistering imagination and fantastical heights. Their creative partnership lead to a
              wide range of opportunities as both Gaiman’s work and Berry’s images garnered
              increasing notoriety. Berry eventually met Amanda Palmer, Gaiman’s fiancé, whose
              interest in Berry’s work sparked another creative partnership through the American
              Repertory Theater’s production of Cabaret, an imaginative retelling of the classic
              Broadway musical. As the signature artist for the production, Berry created sensuous
              paintings as a part of the mise en scène onstage adding to the performance’s visceral
              experience.
            </p>
            <p className="page_paragraph">
              Even today, Berry explores a variety of different outlets for making and showing work.
              From illustration and literature to live theater, Berry refuses to limit his images to
              a singular medium. Regardless of the final product, he strives to transport the viewer
              by creating a hybrid of known and unknown images. Menacing and detached, each painting
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.medfix}
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

Issue26p23.propTypes = propTypes;
Issue26p23.defaultProps = defaultProps;

export default Issue26p23;
