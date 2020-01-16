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
  paintedLakeshore: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue29p17',
  next: '/Publication/Issue29p19',
  paintedLakeshore:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/emilie_beadle/eb_painted_lakeshore_oil_on_canvas_2015.jpg',
  titleDescription1: 'Painted lakeshore - oil on canvas, 2015',
  company: 'Abstraks',
  pageNumber: 35,

  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p18 = props => (
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
                src={props.paintedLakeshore}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              nature, the light as it breaks through the trees, and the reflections of water.
            </p>

            <p className="page_paragraph">
              As a young artist, Beadle has decades to explore her craft, further exploring the
              boundaries between landscape and abstraction. Her main goal is to bring about some
              peace of mind in the world, offering up slices of a simpler time. If you’re growing
              weary of negative headlines and political unrest, turn to the birch trees of southeast
              Michigan or the tree tunnels of Hawaii. They might help you forget your troubles.
            </p>

            <p className="page_paragraph">
              The artist lives and works in Romulus, MI just outside of Detroit.
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

Issue29p18.propTypes = propTypes;
Issue29p18.defaultProps = defaultProps;

export default Issue29p18;
