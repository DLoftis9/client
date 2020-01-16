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
  safeHidingPlace: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p33',
  next: '/Publication/Issue28p35',
  safeHidingPlace:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/allison_bamcat/ab_SafeHidingPlace_Gouache_2015.jpg',
  titleDescription1: 'Safe Hiding Place, Gouache, 2015',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p34 = props => (
  <div className="issue-28">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-12">
            <div className="artist-work">
              <img
                src={props.safeHidingPlace}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
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

Issue28p34.propTypes = propTypes;
Issue28p34.defaultProps = defaultProps;

export default Issue28p34;
