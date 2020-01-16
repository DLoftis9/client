import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PublicationHome from '../PublicationHome';
import PageNav from '../PageNav';

import Issue29Modal from '../../containers/publication-issue/Issue29Modal';

const issue29Modal = <Issue29Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  aTomorrowKingEDORedCommander: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue29p6',
  next: '/Publication/Issue29p8',
  aTomorrowKingEDORedCommander:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/chanimation_brothers/aC_3ATomorrowKingEDORedCommander_Cardstock_2015.jpg',
  titleDescription1: 'A Tomorrow King EDO Red Commander - Cardstock, 2015',
  company: 'Abstraks',
  pageNumber: 12,

  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p7 = props => (
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
              Pooh Bears, and the dour moons. His colors are as soft on the eyes as his brush is to
              the paper. He knows when to leave things as they are. Fields of color stop and start
              in the most surprising of places. Empty corners make everything feel intentional. You
              can see the artist’s delicate hand pushing soft shades of pink and blue across the
              page.
            </p>

            <p className="page_paragraph">
              Matt takes things one step further by incorporating the 3-D qualities of the
              superheroes into his paintings. Petals of a flower spring off the page like a pop-out
              book. There’s something inescapably familiar about these humble works. It’s as if I’ve
              seen them hanging above the children’s department at Barnes & Noble or on a child’s
              mobile as it spins in the air. Matt’s work is inspired by his favorite artists such as
              Ernest Howard Shepard of the Winnie the Pooh series or the infantile animals of Coarse
              Toys. They exist as tributes to a simpler time, the youngest years of our lives when
              the world was full of mystery, adventure, and possibility.
            </p>

            <p className="page_paragraph">
              Andrew easily sets himself apart from his brother, choosing instead to sculpt
              geometrical robots and
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.aTomorrowKingEDORedCommander}
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

Issue29p7.propTypes = propTypes;
Issue29p7.defaultProps = defaultProps;

export default Issue29p7;
