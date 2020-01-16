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
  logoBrand: PropTypes.string.isRequired,
  titleDescription: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p31',
  next: '/Publication/Issue27p32',
  logoBrand: 'https://d173eg0xl75rn9.cloudfront.net/logo_brand--green.svg',
  titleDescription: 'Abstraks Logo',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p32 = props => (
  <div className="issue-27">
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

Issue27p32.propTypes = propTypes;
Issue27p32.defaultProps = defaultProps;

export default Issue27p32;
