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
  tinyGoodbyes: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  titleDescription2: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p34',
  next: '/Publication/Issue28p36',
  tinyGoodbyes:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/allison_bamcat/ab_TinyGoodbyes_Gouache_2015.jpg',
  titleDescription1: 'Safe Hiding Place, Gouache, 2015',
  titleDescription2: 'Tiny Goodbyes, Gouache, 2015',
  pageNumber: 69,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p35 = props => (
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
                src={props.tinyGoodbyes}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              “One thing I’ve realized recently is that everything you put into your personal art,
              it’s all for you. The only benefits that come out of it are for you, and it’s kind of
              wonderful that you’re putting that much effort into yourself over anyone else. Same
              thing with going to the gym or meditating, you’re spending time on you, and that’s
              amazing self care; to realize that I’m practicing a skill that I like, and the only
              thing that’s going to happen if I keep doing it is I’m going to get better at it and
              understand more and be able to do bigger and greater things as I go on.”
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

Issue28p35.propTypes = propTypes;
Issue28p35.defaultProps = defaultProps;

export default Issue28p35;
