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
  dreamAtYourOwnRisk: PropTypes.string.isRequired,
  letMeWhisperInYourEar: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  titleDescription2: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p14',
  next: '/Publication/Issue27p16',
  dreamAtYourOwnRisk:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/anne_johnstone/dream-at-Your-Own-Risk%2C-Mixed-Media-30x34--2014.jpg',
  letMeWhisperInYourEar:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/anne_johnstone/let-Me-Whisper-in-Your-Ear%2C-Mixed-Media-18x18--2011.jpg',
  titleDescription1: 'Dream at Your Own Risk, Mixed Media, 2014, 30” x 34”',
  titleDescription2: 'Let Me Whisper in Your Ear, Mixed Media, 2011, 18” x 18”',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p15 = props => (
  <div className="issue-27">
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
                src={props.dreamAtYourOwnRisk}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.letMeWhisperInYourEar}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">{props.titleDescription1}</p>
          </div>

          <div className="page_column-6 page_column--right">
            <p className="titleDescription titleDescription__right">{props.titleDescription2}</p>
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

Issue27p15.propTypes = propTypes;
Issue27p15.defaultProps = defaultProps;

export default Issue27p15;
