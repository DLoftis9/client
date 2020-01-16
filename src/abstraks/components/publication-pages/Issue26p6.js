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
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  abstraks: PropTypes.string.isRequired,
  paintItRed1: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p5',
  next: '/Publication/Issue26p7',
  titleDescription1: 'Paint it Red 1 - Mixed Media on Paper - 2011',
  pageNumber: 10,
  abstraks: 'Abstraks',
  paintItRed1:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/owen_linders/ol_paint_it_red_1_mixed_media_on_paper_2011.jpg',

  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p6 = props => (
  <div className="issue-26">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <p className="page_paragraph">
              great master ever began an interview by what can only be described as ‘making it rain’
              many small pieces of art onto his interviewer, which of course, was an honor.
            </p>

            <p className="page_paragraph">
              Owen’s studio, where we talk, is warm, and very clearly loved. It almost has a magic
              to it, a life of its own. Milk crates full of random supplies in the corners that
              almost open their mouths to speak out, tubs full of things like broken Gundam toys
              still attempting to wiggle the limbs they’ve lost as artistic sacrifices, singing
              paint cans, knives, and scraps that I swear are swaying in the non existent breeze. At
              center stage is a proud farm style table, who’s legs bear the weight of a thousand
              projects and a million ideas; that’s been Owen’s main studio surface, and perhaps best
              friend, since high school. His space is a beautiful, welcoming mess.
            </p>

            <p className="page_paragraph">
              I always try to start at the beginning. I want the history of Owen Linders. “When I
              was young my parents introduced me early to Lego and Duplo,” Owen explains. It’s funny
              how many of my friends and colleagues point to Legos being a large factor in their
              early stages of creativity. “I
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.paintItRed1}
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
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">
              <strong>{props.pageNumber}</strong> {props.abstraks}
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

Issue26p6.propTypes = propTypes;
Issue26p6.defaultProps = defaultProps;

export default Issue26p6;
