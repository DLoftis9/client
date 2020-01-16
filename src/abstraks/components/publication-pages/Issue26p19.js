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
  imgageAltAttr: PropTypes.string.isRequired,
  interviewerName: PropTypes.string.isRequired,
  rickBerryIntro: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p18',
  next: '/Publication/Issue26p20',

  introNumber: 36,
  artistsFirstName: 'Rick',
  artistsLastName: 'Berry',
  imgageAltAttr: 'Rick Berry Intro',
  interviewerName: 'Steven Briggs',
  rickBerryIntro:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/rick_berry/rick_berry-intro.jpg',

  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p19 = props => (
  <div className="issue-26">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <PublicationHome />
        <div className="artists-intro">
          <img
            src={props.rickBerryIntro}
            className="artists-intro__image artists-intro__image--rickBerry image"
            alt={props.imgageAltAttr}
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

Issue26p19.propTypes = propTypes;
Issue26p19.defaultProps = defaultProps;

export default Issue26p19;
