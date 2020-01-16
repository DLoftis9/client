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
  titleDescription1: PropTypes.string.isRequired,
  titleDescription2: PropTypes.string.isRequired,
  duality: PropTypes.string.isRequired,
  heartsOfSupervision: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p12',
  next: '/Publication/Issue26p14',
  titleDescription1: 'Duality - Painting|Drawing - 2009',
  titleDescription2: 'Hearts of Supervision - Painting|Drawing - 2014',
  duality:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/richard_heckert/RAH_Duality_painting_drawing_2009.jpg',
  heartsOfSupervision:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/richard_heckert/RAH_Hearts_of_Supervision_painting_drawing_2014.jpg',

  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p13 = props => (
  <div className="issue-26">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.duality}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.heartsOfSupervision}
                className="artist-work__image image"
                alt={props.titleDescription2}
              />
            </div>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">{props.titleDescription1}</p>
            <p className="titleDescription">{props.titleDescription2}</p>
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

Issue26p13.propTypes = propTypes;
Issue26p13.defaultProps = defaultProps;

export default Issue26p13;
