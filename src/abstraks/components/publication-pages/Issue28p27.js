import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue28Modal from '../../containers/publication-issue/Issue28Modal';

const issue28Modal = <Issue28Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  unpredictable: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  artistsURL: PropTypes.string.isRequired,
  artistsText: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p26',
  next: '/Publication/Issue28p28',
  unpredictable:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/camilla_derrico/cdE_Unpredictable-Gravity_2014.jpg',
  titleDescription1: 'Unpredictable-Gravity, 2014',
  pageNumber: 53,
  company: 'Abstraks',
  artistsURL: 'https://www.instagram.com/camilladerrico/?hl=en',
  artistsText: '@camilladerrico',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p27 = props => (
  <div className="issue-28">
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
                src={props.unpredictable}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              “I also have another book release through Random House / Watson Guptill Books that
              will debut in July called Pop Manga Coloring Book. That will be my very first
              full-length adult coloring book and I couldn’t be more excited. I’ve created many new
              images for this book as well as revisiting some of my previous art and adding wild
              patterns to them.”
            </p>

            <p className="page_paragraph">
              I highly recommend you follow along with Camilla d’Errico on her Instagram:{' '}
              <a
                className="anchor"
                href={props.artistsURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.artistsText}
              </a>
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

Issue28p27.propTypes = propTypes;
Issue28p27.defaultProps = defaultProps;

export default Issue28p27;
