import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue27Modal from '../../containers/publication-issue/Issue27Modal';

const issue27Modal = <Issue27Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  leftFortuneTeller: PropTypes.string.isRequired,
  titleDescription: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p23',
  next: '/Publication/Issue27p25',
  leftFortuneTeller:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/john_guthrie/leftFortuneTeller.jpg',
  titleDescription: 'Fortune Teller, 2012, 30” x 22” acrylic on paper',
  pageNumber: 46,
  company: 'Abstraks',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p24 = props => (
  <div className="issue-27">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <h3 className="page_intro__header">Prim Puzzles – John Guthrie</h3>

            <p className="page_paragraph">
              John Guthrie knows what he wants. His meticulous attention to detail is the result of
              a well-ordered plan. The measure of an angle. The shade of his blue. His studio in
              Boston’s South End is everything I ever imagined an artist’s studio to be. Cement
              floors encompass aisles of finished paintings, drawers of drawings, and a small
              gallery space with plenty of natural light. Brightly colored geometric shapes line the
              wall. Perfectly composed edges tap and touch one another in empty space. Reds,
              orange-browns, and fierce blues glisten in the soft gray light. Instantly, the studio
              presents a befitting portrait of Guthrie’s life as an artist: ordered, spare and
              dotted with surprising moments of color.
            </p>

            <p className="page_paragraph">
              Guthrie wasn’t always the artist type. He grew up in the small town of Lima, Ohio. He
              eventually enrolled at the University of Cincinnati for Aerospace Engineering. Over
              the next ten years, Guthrie spent his time drafting detailed charts with exact
              measurements in which efficiency and functionality were key. “There was no room for
              error. Everything
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.leftFortuneTeller}
                className="artist-work__image image"
                alt={props.titleDescription}
              />
            </div>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">{props.titleDescription}</p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
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

Issue27p24.propTypes = propTypes;
Issue27p24.defaultProps = defaultProps;

export default Issue27p24;
