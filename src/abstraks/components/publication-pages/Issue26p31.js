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
  pe02: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p30',
  next: '/Publication/Issue26p32',
  titleDescription: 'Taner Tumkaya',
  pe02: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/taner_tumkaya/pe02.jpg',
  company: 'Abstraks',
  pageNumber: 61,
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p31 = props => (
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
                src={props.pe02}
                className="artist-work__image image"
                alt={props.titleDescription}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              Taner created several large sculptural works: interactive and off limits, silent or
              loud, moving and still, public and private. As seen in many of these pieces, Taner
              explored his fascination of the cone, a simple three-dimensional shape that spurs
              countless possibilities.
            </p>

            <p className="page_paragraph">
              In one of his earlier works, “common sense is not common,” from 2007, Taner erected a
              massive yellow cone near the edge of a river in the small town of Askeaton, Ireland.
              Ten meters high with its bright uniform color, the structure could be seen from far
              distances. Its presence visibly disrupts the cozy town with its pattern of green
              foliage and gray stone buildings. The modern minimal design contrasts the aged
              architecture as some structures crumble to ruins in the background. Any photograph of
              the scene appears as if a section was merely Photoshopped out and replaced with a
              solid yellow block. Playful and stoic, the simplicity of the piece adds to its
              dramatic effect.
            </p>

            <p className="page_paragraph">
              In a similar work titled “A CONE” from 2006, a long sculptural reflective cone hangs
              in the middle of an open interior. The tip of the cone
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

Issue26p31.propTypes = propTypes;
Issue26p31.defaultProps = defaultProps;

export default Issue26p31;
