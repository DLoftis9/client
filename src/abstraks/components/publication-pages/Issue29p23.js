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
  sentry1: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue29p22',
  next: '/Publication/Issue29p24',
  sentry1:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/regina_valluzzi/sentry1-Valluzzi-in-Newburyport.jpg',
  titleDescription1: 'Sentry1',
  company: 'Abstraks',
  pageNumber: 45,

  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p23 = props => (
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
                src={props.sentry1}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              “The most important thing to do is to figure out what your unique personal style is
              and not feel afraid to be creative. There are a lot of cookie cutter artists, and I
              wonder if they’re afraid to do things they don’t think will be as marketable. There is
              no magic formula. It’s about something authentic and original—it’s you, immediately.
            </p>

            <p className="page_paragraph">
              “Figure out what you can do that challenges the ideas you learned in school, that’s
              really you. You’ll have better luck doing that than what people expect of you.”
            </p>

            <p className="page_paragraph">
              Nerd. Artist. Chemist. For Valluzzi, her accomplishments are not what is expected of
              her, but rather, what she chooses to accomplish.
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

Issue29p23.propTypes = propTypes;
Issue29p23.defaultProps = defaultProps;

export default Issue29p23;
