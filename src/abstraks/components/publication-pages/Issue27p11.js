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
  johnstoneIntro: PropTypes.string.isRequired,
  introNumber: PropTypes.number.isRequired,
  artistsFirstName: PropTypes.string.isRequired,
  artistsLastName: PropTypes.string.isRequired,
  interviewerName: PropTypes.string.isRequired,
  imageAltText: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p10',
  next: '/Publication/Issue27p12',
  johnstoneIntro:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/anne_johnstone/johnstoneIntro.jpg',
  introNumber: 20,
  artistsFirstName: 'Anne',
  artistsLastName: 'Johntone',
  interviewerName: 'Steven Briggs',
  imageAltText: 'Anne Johnstone Intro',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p11 = props => (
  <div className="issue-27">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <PublicationHome />
        <div className="artists-intro">
          <img
            src={props.johnstoneIntro}
            className="artists-intro__image image"
            alt={props.imageAltText}
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

Issue27p11.propTypes = propTypes;
Issue27p11.defaultProps = defaultProps;

export default Issue27p11;
