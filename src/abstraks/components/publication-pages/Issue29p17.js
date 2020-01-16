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
  colorfulHarbor: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue29p16',
  next: '/Publication/Issue29p18',
  colorfulHarbor:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/emilie_beadle/eb_colorful_harbor_oil_on_canvas_2016.jpg',
  titleDescription1: 'Colorful harbor - oil on canvas, 2016',
  company: 'Abstraks',
  pageNumber: 33,

  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p17 = props => (
  <div className="issue-29">
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
                src={props.colorfulHarbor}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              They thrive in the quiet, delighting those with peace of mind.
            </p>

            <p className="page_paragraph">
              It’s Beadle’s memoires that we see, the forests of her childhood home, her visit to
              neighboring Chicago, or the coast along Lake Erie. Just as her paintings blur the line
              between the digital world and our own, her memory becomes pixelated. We choose to
              Google rather than draw a mental picture. That’s life in the 21st century. Beadle
              can’t help but confuse her own experiences with the countless images she sees online.
              We’re left with what’s in between, a mix of HD quality with the fuzziness of the past.
            </p>

            <p className="page_paragraph">
              Beadle never went to art school. She grew up in Hawaii surrounded by lush tropical
              plants and hundred-year old trees stitched together in tunnels. She didn’t have much
              of an interest in art until she saw the work of painter Giorgio Naranjo in a gallery.
              Naranjo took Beadle under his wing, teaching her the ways of the palate knife. It’s
              easy to see Naranjo’s influence on Beadle. They share the same aesthetics, thick slabs
              of colorful paint, sunsets and sunflowers, saturation and the sea. They share the same
              love of
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

Issue29p17.propTypes = propTypes;
Issue29p17.defaultProps = defaultProps;

export default Issue29p17;
