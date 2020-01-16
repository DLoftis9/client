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
  michelleDuganIntro: PropTypes.string.isRequired,
  introNumber: PropTypes.string.isRequired,
  artistsFirstName: PropTypes.string.isRequired,
  artistsLastName: PropTypes.string.isRequired,
  interviewerName: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p3',
  next: '/Publication/Issue28p5',
  michelleDuganIntro:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/michelle_dugan/michelle__dugan--site-cover.jpg',
  introNumber: '06',
  artistsFirstName: 'Michelle',
  artistsLastName: 'Dugan',
  interviewerName: 'Steven Briggs',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p4 = props => (
  <div className="issue-28">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <PublicationHome />
        <div className="artists-intro">
          <img
            src={props.michelleDuganIntro}
            className="artists-intro__image artists-intro__image--dugan image"
            alt="Michelle Dugan Intro"
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

Issue28p4.propTypes = propTypes;
Issue28p4.defaultProps = defaultProps;

export default Issue28p4;
