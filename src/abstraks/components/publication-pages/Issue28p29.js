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
  dirtCupDelight: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p28',
  next: '/Publication/Issue28p30',
  dirtCupDelight:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/allison_bamcat/ab_DirtCupDelight_Screenprint_2015.jpg',
  titleDescription1: 'Dirt Cup Delight, Screen Print, 2014',
  pageNumber: 56,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p29 = props => (
  <div className="issue-28">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <p className="page_paragraph">
              “I’m now one of the senior members on the footwear graphics team that they developed
              around me and another illustrator there, so I got to help the company figure out that
              portion—what they wanted it to be. It’s definitely been a roller coaster. There was a
              lot of trial error—trying and failing and trying and blowing the expectations out of
              the water.”
            </p>

            <p className="page_paragraph">
              She is a professionally trained artist and illustrator, working on her own gallery
              pieces…
            </p>

            <p className="page_paragraph">
              “I think I had work in 5 different galleries just this month. Just this
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              month! And I’ve been doing at least 2 gallery shows every month for at least the last
              6 months, and working towards future ones. I really wanted this year to be when I
              pushed my limits to see where I can take things if I really tried. I think I exceeded
              my expectations in a lot of ways, and I learned a lot, and I have a great body of work
              to look back on. It’s kind of great.
            </p>

            <p className="page_paragraph">
              “In 2014 I only made 2 or 3 paintings, but in 2015 I made like 15, and this whole line
              of bags, and I branded that, and the marketing and all of that, and I did freelance
              work, and I did my day job on top of that.”
            </p>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.dirtCupDelight}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">{props.titleDescription1}</p>

            <p className="titleDescription">
              <strong>{props.pageNumber}</strong> {props.company}
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

Issue28p29.propTypes = propTypes;
Issue28p29.defaultProps = defaultProps;

export default Issue28p29;
