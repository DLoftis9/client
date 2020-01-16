import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue28Modal from '../../containers/publication-issue/Issue28Modal';

const issue28Modal = <Issue28Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  amongTheClover: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  titleDescription2: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p30',
  next: '/Publication/Issue28p32',
  amongTheClover:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/allison_bamcat/ab_AmongTheClover_Gouache_2015.jpg',
  titleDescription1: 'Among The Clover, Gouache, 2015',
  titleDescription2: 'Pepper Of The Pumpkin Patch, Gouache, 2015',
  pageNumber: 61,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p31 = props => (
  <div className="issue-28">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.amongTheClover}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              “The handcrafted movement and the makers movement here in Boston inspired me to start
              making my own pieces. I just wanted people to have art that’s useful and they could
              interact with in their daily life that expresses some part of them that didn’t just
              hang on a wall.
            </p>

            <p className="page_paragraph">
              “But...it’s kind of nice to still be learning when you’re 5 years out of college. You
              need a new adventure. You also learn how much stuff costs, because it’s not just a
              nice hobby. I think next year I’ll break even, but there was definitely a lot of trial
              and error along the way.”
            </p>

            <p className="page_paragraph">
              But what’s craziest about the whole situation is that Bamcat loves being this busy.
              She thrives on it, actually. She can talk about any of her lives with the same level
              of enthusiasm. And as someone with three full time professions running simultaneously,
              she has a pretty good idea of how to keep herself steady.
            </p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6 page_column--right">
            <p className="titleDescription titleDescription__right">{props.titleDescription1}</p>

            <p className="titleDescription titleDescription__right">{props.titleDescription2}</p>

            <p className="titleDescription titleDescription__right">
              {props.company} <strong>{props.pageNumber}</strong>
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

Issue28p31.propTypes = propTypes;
Issue28p31.defaultProps = defaultProps;

export default Issue28p31;
