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
  logoBrand: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p43',
  next: '/Publication/Issue26p44',
  titleDescription: 'Abstraks Logo',
  logoBrand: 'https://d173eg0xl75rn9.cloudfront.net/assets/logo_brand--green.svg',
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p44 = props => (
  <div className="issue-26">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page outro">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-12">
            <div className="page_end">
              <img
                src={props.logoBrand}
                className="page_end__image image"
                alt={props.titleDescription}
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

Issue26p44.propTypes = propTypes;
Issue26p44.defaultProps = defaultProps;

export default Issue26p44;
