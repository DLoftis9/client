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
  courtside: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p20',
  next: '/Publication/Issue26p22',
  titleDescription: 'Courtside - Oil',
  courtside:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/rick_berry/rb_courtside_oil_13.jpg',
  pageNumber: 40,
  company: 'Abstraks',
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p21 = props => (
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
              Berry recounts his time as a young man traveling around the country with his family.
              He enrolled in eleven different schools as they constantly moved from one location to
              the next. He quickly became disinterested in a formal education and eventually dropped
              out at the age of seventeen. During his younger years, Berry knew nothing of permanent
              possessions. Always on the go, he spent his time scribbling and doodling for hours.
              Drawings became his only treasure, “portable things” that could travel as easily and
              as often as he did.
            </p>
            <p className="page_paragraph">
              As a self-taught artist, Berry created his own approach to drawing without being bound
              by conventional standards or rules. One day as he was casually browsing a collection
              of comic books, an idea flickered above his head. He could use his burgeoning creative
              talent to spawn a career in comics and illustration. Berry hitchhiked to the East
              Coast and quickly learned the trade. For the young artist, illustration held limitless
              possibilities, allowing him to freely explore the deep recesses of his imagination.
              His doodles and drawings were not bound by the surface of life but instead flowed
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.courtside}
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

Issue26p21.propTypes = propTypes;
Issue26p21.defaultProps = defaultProps;

export default Issue26p21;
