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
  issue26_1: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '#',
  next: '/Publication/issue26p2',
  issue26_1: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/issue26_1.jpg',

  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p1 = props => (
  <div className="issue-26">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page intro">
      <div className="issue-page__container container">
        <PublicationHome />
        <main className="issue-page__imageContainer">
          <img src={props.issue26_1} className="issue-page__image image" alt="Issue 26 Cover" />
        </main>
      </div>

      <PageNav
        prev={props.prev}
        next={props.next}
        modalTitle={props.modalTitle}
        modalContent={props.modalContent()}
      />
    </div>
  </div>
);

Issue26p1.propTypes = propTypes;
Issue26p1.defaultProps = defaultProps;

export default Issue26p1;
