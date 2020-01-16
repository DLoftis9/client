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
  jacobLeidolfIntro: PropTypes.string.isRequired,
  introNumber: PropTypes.string.isRequired,
  artistsFirstName: PropTypes.string.isRequired,
  artistsLastName: PropTypes.string.isRequired,
  interviewerName: PropTypes.string.isRequired,
  photoCredit: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p3',
  next: '/Publication/Issue27p5',
  jacobLeidolfIntro:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/jacob_leidolf/jacob_leidolf-intro.jpg',
  introNumber: '06',
  artistsFirstName: 'Jacob',
  artistsLastName: 'Leidolf',
  interviewerName: 'Marita Spooner',
  photoCredit: 'Photo by Alberto Montalvo (BD3 Films)',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p4 = props => (
  <div className="issue-27">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <PublicationHome />
        <div className="artists-intro">
          <img
            src={props.jacobLeidolfIntro}
            className="artists-intro__image image"
            alt="Jacob Leidolf Intro"
          />
        </div>
        <div className="intro-box">
          <p className="intro-number">{props.introNumber}</p>
          <h1 className="intro__first-name first-name">{props.artistsFirstName}</h1>
          <h1 className="intro__first-name last-name">{props.artistsLastName}</h1>
          <p className="intro__first-name writter">Written by {props.interviewerName}</p>
          <p className="intro__first-name writter">{props.photoCredit}</p>
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

Issue27p4.propTypes = propTypes;
Issue27p4.defaultProps = defaultProps;

export default Issue27p4;
