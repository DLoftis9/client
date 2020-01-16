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
  chanimationBrothersIntro: PropTypes.string.isRequired,
  introNumber: PropTypes.string.isRequired,
  artistsFirstName: PropTypes.string.isRequired,
  artistsLastName: PropTypes.string.isRequired,
  interviewerName: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue29p3',
  next: '/Publication/Issue29p5',
  chanimationBrothersIntro:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/chanimation_brothers/chanimation_brothers-intro.jpg',
  introNumber: '06',
  artistsFirstName: 'Chanimation',
  artistsLastName: 'Brothers',
  interviewerName: 'Steven Briggs',

  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p4 = props => (
  <div className="issue-29">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <PublicationHome />
        <div className="artists-intro">
          <img
            src={props.chanimationBrothersIntro}
            className="artists-intro__image artists-intro__image--chanimation image"
            alt="Chanimation Brothers Intro"
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
        modalTitle={props.modalTitle}
        modalContent={props.modalContent()}
        next={props.next}
      />
    </div>
  </div>
);

Issue29p4.propTypes = propTypes;
Issue29p4.defaultProps = defaultProps;

export default Issue29p4;
