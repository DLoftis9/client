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
  aNablerGuy: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue29p5',
  next: '/Publication/Issue29p7',
  aNablerGuy:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/chanimation_brothers/aC_3ANablerGuy_Cardstock_2014.jpg',
  titleDescription1: 'A Nabler Guy - Cardstock, 2014',
  company: 'Abstraks',
  pageNumber: 10,

  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p6 = props => (
  <div className="issue-29">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <p className="page_paragraph">
              Every piece begins with a sketch, usually a combination of pencils to paper and
              digital marks on Adobe Sketchbook. The 3-D sculptures are designed from all angles as
              the Chans carefully weave one layer on top of another. The rigidness of the work gives
              each figure a pixelated look, as if the character leapt out of the TV to join the real
              world. Matt describes the joyous sensation of watching his favorite superheroes move
              from the page to a lone-standing figurine. It’s the dimensions of real life that give
              these fantasy players their prominence and their place. The Chan brothers are not
              interested in fan boy musings or detailed drawings; they want the real thing.
            </p>

            <p className="page_paragraph">
              Matt and Andrew are not the same person. Much of the time, they work apart from one
              another, occasionally comparing notes or sharing ideas. They each have a different
              style and technique. Matt, the eldest of the two, focuses on the more fluid, painterly
              aspects of image-making. His latest venture is the delicate art of watercolor. He’s
              responsible for the pastel-colored orchids, the vibrant portraits of emotions, the
              wandering
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.aNablerGuy}
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

Issue29p6.propTypes = propTypes;
Issue29p6.defaultProps = defaultProps;

export default Issue29p6;
