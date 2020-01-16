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
  issue28_cover: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '#',
  next: '/Publication/issue28p2',
  issue28_cover: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/issue28_1.jpg',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p1 = props => (
  <div className="issue-28">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page intro">
      <article className="issue-page__container container">
        <PublicationHome />
        <div className="issue-page__imageContainer">
          <img src={props.issue28_cover} className="issue-page__image image" alt="Issue 28 Cover" />
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

Issue28p1.propTypes = propTypes;
Issue28p1.defaultProps = defaultProps;

export default Issue28p1;
