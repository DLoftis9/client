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
  blueBirches: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue29p13',
  next: '/Publication/Issue29p15',
  blueBirches:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/emilie_beadle/eb_blue_birches_oil_on_canvas_2016.jpg',
  titleDescription1: 'Blue birches - oil on canvas, 2016',
  company: 'Abstraks',
  pageNumber: 26,

  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p14 = props => (
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
              scenes. They’re reconstructed with memory, stitching together the traces of where
              she’s been. Some details get their due while others are left by the wayside.
            </p>

            <p className="page_paragraph">
              But it’s the abstract work that will lure the audience in. Without the need to depict
              anything in particular, Beadle’s impressive use of color shines through. Tri-colored
              squares congregate in the center of the frame like a game of Tetris that’s about to
              disappear into a hazy oblivion. Beadle speckles the frame with off-black tones that
              break up the space, producing a scattered, allover effect that keeps the viewer
              guessing. An abstract shoreline turns into a fragmented mass of sea foam blue with
              shades you’d expect to see in a lakeside resort.
            </p>

            <p className="page_paragraph">
              Her decision to split up the space with groups of squares brings the work into the
              digital age. She thinks of them as pixels, individualized frames within the frame.
              Every painting is a gentle reminder of how we tend to look at the world; focusing more
              on the pixelated images of our Instagram feed than the physical objects around us. But
              Beadle isn’t interested in a
            </p>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.blueBirches}
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

Issue29p14.propTypes = propTypes;
Issue29p14.defaultProps = defaultProps;

export default Issue29p14;
