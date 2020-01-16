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
  logoBrand: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue29p23',
  next: '/Publication/Issue29p24',
  titleDescription: 'Abstraks Logo',
  logoBrand: 'https://d173eg0xl75rn9.cloudfront.net/assets/logo_brand--blue.svg',

  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p24 = props => (
  <div className="issue-27">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page outro">
      <article className="issue-page__container container">
        <PublicationHome />
        <div className="issue-page__row row">
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

Issue29p24.propTypes = propTypes;
Issue29p24.defaultProps = defaultProps;

export default Issue29p24;
