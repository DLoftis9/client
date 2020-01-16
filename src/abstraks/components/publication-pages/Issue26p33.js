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
  titleDescription: PropTypes.string.isRequired,
  tar02: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p32',
  next: '/Publication/Issue26p34',
  titleDescription: 'Taner Tumkaya',
  tar02: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/taner_tumkaya/tar02.jpg',
  company: 'Abstraks',
  pageNumber: 65,
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p33 = props => (
  <div className="issue-26">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.tar02}
                className="artist-work__image image"
                alt={props.titleDescription}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              architecture, human anatomy, and The Coneheads. The artist’s intention was that viewer
              participates as a co-author of the material, mixing and matching the pages as he or
              she sees fit. As Taner writes, “This aspect provides a cinematic viewing of
              perspectives that are challenging each other while contemplating on social structures,
              on time and on production.” Random and concise, the group of images reflects a popular
              magazine as the viewer quickly sorts through the stack.
            </p>

            <p className="page_paragraph">
              Throughout the piece, pages highlight the axioms of the cone; specifically it’s
              inherent geometrical qualities that Taner finds most attractive. Axiom 1 demonstrates
              that a right-angle cone will maintain the same proportions with each circular cut.
              Axiom 2 creates a scenario in which a video camera zooms in straight down on the tip
              of a cone centered in the frame. The zoom can continue eternally to the point that the
              viewer could no longer distinguish between a moving image and a still one. Finally,
              Taner acknowledges that a cone has a will to perform: to move in a particular
              direction, to penetrate, to project, to accelerate, to select,
            </p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6 page_column--right">
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

Issue26p33.propTypes = propTypes;
Issue26p33.defaultProps = defaultProps;

export default Issue26p33;
