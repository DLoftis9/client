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
  issue27_1: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  issueNumber: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '#',
  next: '/Publication/issue27p2',
  issue27_1: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/issue27_1.jpg',
  imageAlt: 'Issue 27 Cover',
  issueNumber: 'issue-27',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p1 = props => (
  <div className={props.issueNumber}>
    <div className="header">
      <Header />
    </div>
    <div className="issue-page intro">
      <article className="issue-page__container container">
        <PublicationHome />
        <div className="issue-page__imageContainer">
          <img src={props.issue27_1} className="issue-page__image image" alt={props.imageAlt} />
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

Issue27p1.propTypes = propTypes;
Issue27p1.defaultProps = defaultProps;

export default Issue27p1;
