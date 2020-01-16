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
  theHighPriestess: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p10',
  next: '/Publication/Issue28p12',
  theHighPriestess:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/michelle_dugan/md_THE__HIGH__PRIESTESS_Woodcut_2013.jpg',
  titleDescription1: 'The High Priestess - Woodcut, 2013',
  company: 'Abstraks',
  pageNumber: 21,
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p11 = props => (
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
                src={props.theHighPriestess}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              just enough to give us an idea of her appearance. The rest is hidden away from
              judgmental eyes and meaningless opinions. She seems averse to the idea of replicating
              her appearance at all. Then, why is it here, hanging around with this vile crew? They
              all live together, of course, on a mound in Satan’s sandlot. It takes balls to be so
              committed to a cause, especially one that gives the world a collective chill. It sends
              you somewhere new. There’s a community there, filled with friendly faces and demons
              like you.
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

Issue28p11.propTypes = propTypes;
Issue28p11.defaultProps = defaultProps;

export default Issue28p11;
