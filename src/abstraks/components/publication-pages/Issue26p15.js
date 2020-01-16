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
  oilOfPopDevil: PropTypes.string.isRequired,
  peoplesPopPenalty: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p14',
  next: '/Publication/Issue26p16',
  titleDescription1: 'Oil of Pop Devil - Painting|Drawing - 2012',
  titleDescription2: 'Peoples Pop Penalty - Painting|Drawing - 2014',
  oilOfPopDevil:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/richard_heckert/RAH_Oil_of_Pop_Devil_painting_drawing_2012.jpg',
  peoplesPopPenalty:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/richard_heckert/RAH_Peoples_Pop_Penalty_painting_drawing_2014.jpg',

  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p15 = props => (
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
                src={props.oilOfPopDevil}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.peoplesPopPenalty}
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

Issue26p15.propTypes = propTypes;
Issue26p15.defaultProps = defaultProps;

export default Issue26p15;
