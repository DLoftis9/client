import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue28Modal from '../../containers/publication-issue/Issue28Modal';

const issue28Modal = <Issue28Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  merkThoseIntro: PropTypes.string.isRequired,
  introNumber: PropTypes.number.isRequired,
  artistsFirstName: PropTypes.string.isRequired,
  artistsLastName: PropTypes.string.isRequired,
  interviewerName: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p11',
  next: '/Publication/Issue28p13',
  merkThoseIntro:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/merk_those/merk__those--site-cover.jpg',
  introNumber: 22,
  artistsFirstName: 'Merk',
  artistsLastName: 'Those',
  interviewerName: 'Pete Cosmos',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p12 = props => (
  <div className="issue-28">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <PublicationHome />
        <div className="artists-intro">
          <img
            src={props.merkThoseIntro}
            className="artists-intro__image artists-intro__image--merkThose image"
            alt="Merk Those Intro"
          />
        </div>
        <div className="intro-box">
          <p className="intro-number">{props.introNumber}</p>
          <h1 className="intro__first-name first-name">{props.artistsFirstName}</h1>
          <h1 className="intro__first-name last-name">{props.artistsLastName}</h1>
          <p className="intro__first-name writter">Interview by {props.interviewerName}</p>
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

Issue28p12.propTypes = propTypes;
Issue28p12.defaultProps = defaultProps;

export default Issue28p12;
