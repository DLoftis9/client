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
  allisonBamcatIntro: PropTypes.string.isRequired,
  floralFiligree: PropTypes.string.isRequired,
  introNumber: PropTypes.number.isRequired,
  altImageTag: PropTypes.string.isRequired,
  artistsFirstName: PropTypes.string.isRequired,
  artistsLastName: PropTypes.string.isRequired,
  interviewerName: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p27',
  next: '/Publication/Issue28p29',
  allisonBamcatIntro:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/allison_bamcat/ab_Headshot.jpg',
  floralFiligree:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/allison_bamcat/ab_FloralFiligree_Gouache_2015.jpg',
  introNumber: 54,
  altImageTag: 'Allison Bamcat Intro',
  artistsFirstName: 'Allison',
  artistsLastName: 'Bamcat',
  interviewerName: 'Kendra Long',
  titleDescription1: 'Loral Filigree, Gouache, 2014',
  pageNumber: 55,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p28 = props => (
  <div className="issue-28">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <PublicationHome />
        <div className="page_column-6">
          <div className="artists-intro">
            <img
              src={props.allisonBamcatIntro}
              className="artists-intro__image image"
              alt={props.altImageTag}
            />
          </div>
          <div className="intro-box">
            <p className="intro-number">{props.introNumber}</p>
            <h1 className="intro__first-name first-name">{props.artistsFirstName}</h1>
            <h1 className="intro__first-name last-name">{props.artistsLastName}</h1>
            <p className="intro__first-name writter">Interview by {props.interviewerName}</p>
          </div>
        </div>
        <div className="issue-page__row row">
          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.floralFiligree}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>

            <h3 className="page_intro__header">
              Allison Bamcat: Designer, Illustrator, Painter, Seamstress, Super Busy Person
            </h3>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              Allison Bamcat wears a lot of hats. Like, a lot. She works for Converse as a Footwear
              Graphics Artist...
            </p>

            <p className="page_paragraph">
              “Working at Converse was what I call a happy accident, but my friends say I earned it
              and deserve it, so I’ll give them some credit. Converse is known to come to the senior
              reviews at MassArt, and they came when I was a senior, and they passed over my table
              completely, and went to my friend’s table. Her name is Lindsay Small-Butera.
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              She got hired on as a contractor doing graphics for footwear, but she really wanted to
              focus on animation, so when she gave up her spot 6 months later, she put in my name. I
              showed up with my portfolio with monsters and video game concept art, so totally
              nothing to do with fashion, nothing to do with product design, but I was pretty
              proficient with digital illustration, so they thought I could pick it up. So I just
              kind of winged it.
            </p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6 page_column--right">
            <p className="titleDescription titleDescription__right">{props.titleDescription1}</p>

            <p className="titleDescription titleDescription__right">
              {props.company} <strong>{props.pageNumber}</strong>
            </p>
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

Issue28p28.propTypes = propTypes;
Issue28p28.defaultProps = defaultProps;

export default Issue28p28;
