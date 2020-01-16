import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';

import Issue29Modal from '../../containers/publication-issue/Issue29Modal';

const issue29Modal = <Issue29Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  issue29_cover: PropTypes.string.isRequired,
  altTagImage: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
};

const defaultProps = {
  prev: '#',
  next: '/Publication/issue29p2',
  issue29_cover: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/issue29_1.jpg',
  altTagImage: 'Issue 29 Cover',
  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p1 = props => (
  <div className="issue-29">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page intro">
      <article className="issue-page__container container">
        <PublicationHome />
        <div className="issue-page__imageContainer">
          <img src={props.issue29_cover} className="issue-page__image image" alt="Issue 29 Cover" />
        </div>
      </article>

      <PageNav
        prev={props.prev}
        modalTitle={props.modalTitle}
        modalContent={props.modalContent()}
        next={props.next}
      />
    </div>
  </div>
);

Issue29p1.propTypes = propTypes;
Issue29p1.defaultProps = defaultProps;

export default Issue29p1;
