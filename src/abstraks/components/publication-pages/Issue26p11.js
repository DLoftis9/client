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
  introNumber: PropTypes.number.isRequired,
  artistsFirstName: PropTypes.string.isRequired,
  artistsLastName: PropTypes.string.isRequired,
  interviewerName: PropTypes.string.isRequired,
  heckertIntro: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p10',
  next: '/Publication/Issue26p12',
  introNumber: 20,
  artistsFirstName: 'Richard',
  artistsLastName: 'Heckert',
  interviewerName: 'Tim McCool',
  heckertIntro:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/richard_heckert/richard_heckert-intro.jpg',

  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p11 = props => (
  <div className="issue-26">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <PublicationHome />
        <div className="artists-intro">
          <img
            src={props.heckertIntro}
            className="artists-intro__image image"
            alt="Richard Heckert Intro"
          />
        </div>
        <div className="intro-box">
          <p className="intro-number">{props.introNumber}</p>
          <h1 className="intro__title first-name">{props.artistsFirstName}</h1>
          <h1 className="intro__title last-name">{props.artistsLastName}</h1>
          <p className="intro__title writter">Interview by {props.interviewerName}</p>
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

Issue26p11.propTypes = propTypes;
Issue26p11.defaultProps = defaultProps;

export default Issue26p11;
