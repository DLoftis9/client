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
  introNumber: PropTypes.string.isRequired,
  artistsFirstName: PropTypes.string.isRequired,
  artistsLastName: PropTypes.string.isRequired,
  interviewerName: PropTypes.string.isRequired,
  owneLindersIntro: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p2',
  next: '/Publication/Issue26p4',
  introNumber: '04',
  artistsFirstName: 'Owen',
  artistsLastName: 'Linders',
  interviewerName: 'Ian Sanity',
  owneLindersIntro:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/owen_linders/owen_linders-intro.jpg',

  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p3 = props => (
  <div className="issue-26">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <PublicationHome />
        <div className="artists-intro">
          <img
            src={props.owneLindersIntro}
            className="artists-intro__image image"
            alt="Owen Linders Intro"
          />
        </div>
        <div className="intro-box">
          <p className="intro-number">{props.introNumber}</p>
          <h1 className="intro__first-name first-name">{props.artistsFirstName}</h1>
          <h1 className="intro__first-name last-name">{props.artistsLastName}</h1>
          <p className="intro__first-name writter">Written by {props.interviewerName}</p>
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

Issue26p3.propTypes = propTypes;
Issue26p3.defaultProps = defaultProps;

export default Issue26p3;
