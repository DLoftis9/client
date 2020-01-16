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
  pe03: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p33',
  next: '/Publication/Issue26p35',
  titleDescription: 'Taner Tumkaya',
  pe03: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/taner_tumkaya/pe03.jpg',
  pageNumber: 66,
  company: 'Abstraks',
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p34 = props => (
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
              to transgress. Taner transforms the cone before your eyes. Its cultural and structural
              importance becomes undeniable and endlessly fascinating.
            </p>

            <p className="page_paragraph">
              Taner has a knack for transporting ordinary objects to new realms, infusing their
              natural properties with a fresh perspective in an atypical environment. In the same
              fashion, his video and photography works reexamine the familiar with startling
              results. Manipulating light and sound, Taner can take on complex ideas with either
              subtle nuance or electric ferocity.
            </p>

            <p className="page_paragraph">
              In one of his earlier video pieces, Taner responded to a group exhibition at the
              Fredericianum Museum in Germany with a group demonstration and a documentary to record
              it. “MAYDAY” from 2005 follows Taner and four of his friends as they embark on an
              eight-day pilgrimage from Frankfurt, where Taner was going to school, to Kassel.
              Calling themselves “Sindacato della Scuola di Städel,” the group sleeps only outdoors
              as they struggle to find their way to the museum along wooden paths and residential
              streets. Time and time again, the group must ask locals for directions.
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.pe03}
                className="artist-work__image image"
                alt={props.titleDescription}
              />
            </div>
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

Issue26p34.propTypes = propTypes;
Issue26p34.defaultProps = defaultProps;

export default Issue26p34;
