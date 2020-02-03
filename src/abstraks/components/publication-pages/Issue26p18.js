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
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  emailRef: PropTypes.string.isRequired,
  urlValue: PropTypes.string.isRequired,
  urlRef: PropTypes.string.isRequired,
  stopTheBlob: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p16',
  next: '/Publication/Issue26p19',
  titleDescription1: 'Stop the Blob - Painting|Drawing - 2014',
  pageNumber: 34,
  company: 'Abstraks',
  emailValue: 'richard@heckertart.com',
  emailRef: 'mailto:richard@heckertart.com',
  urlValue: 'mailto:richard@heckertart.com',
  urlRef: 'http://heckertart.com/',
  stopTheBlob:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/richard_heckert/RAH_Stop_the_Blob_painting_drawing_2014.jpg',

  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p18 = props => (
  <div className="Issue-26">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.stopTheBlob}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              I admire works by Frank Kozik and Joe Coleman, love the Viennese School and the master
              of Art Nouveau, Alphonse Mucha. From deeper in the history books, there is also
              Hieronymus Bosch, and many more artists. I am inspired by TV, movies, books and music,
              and I collect fragments. The moment where the drop brings the bucket to overflow, a
              new idea is born.
            </p>

            <p className="page_paragraph">
              What formative elements in your background led you to develop this style of working?
            </p>

            <p className="page_paragraph">
              In our fast-paced and volatile daily routines, we recognize only the restricted
              elements of reality.
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              Cameras, traffic lights, mobile phones, escalators, screens, transportation, traffic
              jams, TVs, satellites, or queues. Everything has a different effect upon second glance
              and interpersonal relationships look like small islands in a great ocean. Instruments
              and tools with a variety of functions that have not yet really been discovered because
              we have no distance. We are in the middle and involved. For me, these are also symbols
              of our time. There are symbols that tell us something about ourselves. For me, it
              starts to get interesting at this point.
            </p>

            <p className="page_paragraph">
              <strong>Contact:</strong>
              <a
                className="page_credits__anchor anchor"
                href={props.emailRef}

                rel="noopener noreferrer"
              >
                {props.emailValue}
              </a>
              <a
                className="page_credits__anchor anchor"
                href={props.urlRef}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.urlValue}}
              </a>
            </p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6 page_column--right">
            <p className="titleDescription titleDescription__right">{props.titleDescription1}</p>

            <p className="titleDescription titleDescription__right">
              <strong>{props.number}</strong> {props.company}
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

Issue26p18.propTypes = propTypes;
Issue26p18.defaultProps = defaultProps;

export default Issue26p18;
