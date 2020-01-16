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
  myParentsBeforeIKnewThem: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p23',
  next: '/Publication/Issue26p25',
  titleDescription: 'My Parents Before I Knew Them - Oil',
  myParentsBeforeIKnewThem:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/rick_berry/rb_my_parents_before_i_knew_them_oil_08.jpg',
  pageNumber: 46,
  company: 'Abstraks',
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p24 = props => (
  <div className="issue-26">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <p className="page_paragraph">
              takes on its own reality with its central subject lost amid a frightening and
              treacherous world.
            </p>
            <p className="page_paragraph">
              Berry introduces several works in progress grouped together in a small circle. Like
              many artists, he remarks that he finds comfort in working on several pieces
              simultaneously. Swapping images helps him gain clarity and allows him to refresh his
              perspective after spending time on a different work. Berry runs over his set of tools
              laid out on a nearby drafting table. Paint muddled scrappers, knives, rubber spatulas,
              and steel brushes cover the surface. Berry requires a variety of tools to apply the
              paint as a way of distorting the image. Fine lines, jagged marks, and swirling
              blotches of color appear in almost every painting. Berry adds tattered clothing to the
              list including worn jeans, zippers, and intricate sewing patterns that leave a range
              of designs on the canvas.
            </p>
            <p className="page_paragraph">
              Anything within reach Berry sees as a potential tool to control the paint in new ways.
              In a similar fashion, he reminisces about having a pupil at one point. The student
              wanted to paint a fish. Without hesitation,
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.myParentsBeforeIKnewThem}
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

Issue26p24.propTypes = propTypes;
Issue26p24.defaultProps = defaultProps;

export default Issue26p24;
