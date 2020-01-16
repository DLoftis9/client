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
  ribbonsOfWater: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue29p20',
  next: '/Publication/Issue29p22',
  ribbonsOfWater:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/regina_valluzzi/ribbons_of_water-Valluzzi-in-Rockport.jpg',
  titleDescription1: 'Ribbons of water',
  company: 'Abstraks',
  pageNumber: 41,

  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p21 = props => (
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
                src={props.ribbonsOfWater}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              Her work varies from tight, geometric ink drawings of circuits to loose, swirling
              clouds of color, her interpretation of fluid dynamics; Learning circuits, relating to
              AI, fluid dynamics, relating to a field of engineering and physics. She is largely
              self-taught, having minored in visual studies undergrad, but then turning to her main
              focus, chemistry. But her visual studies never entirely gone from her mind: “Boston
              and Cambridge are very nerd-heavy. In the arts in general, you don’t see that imagery
              very often. Instead of spending years in studio art classes, I spent years looking
              through electron microscopes, and whether I like it or not, that’s going to inform my
              aesthetic.”
            </p>

            <p className="page_paragraph">
              It’s not just her subject matters that are of a scientific nature though. Her very use
              of the materials, specifically, what she can accomplish with acrylic paint, is
              something only a scientist would consider: “Most advances in painting have gone hand
              in hand with advances in material sciences and chemistry—they went from very weak and
              unstable pigments in suspensions to much more stable materials. Now, you can string
              them out like elastic gel, and
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

Issue29p21.propTypes = propTypes;
Issue29p21.defaultProps = defaultProps;

export default Issue29p21;
