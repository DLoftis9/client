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
  theDreamMelt: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p25',
  next: '/Publication/Issue28p27',
  theDreamMelt:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/camilla_derrico/cdE_The-Dream-Melt2012.jpg',
  titleDescription1: 'The Dream Melt, 2012',
  pageNumber: 51,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p26 = props => (
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
                src={props.theDreamMelt}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              Rainbow Children is the next installment in my art book series with DH and will
              feature most of my gallery work over the past few years. People have been clamouring
              for a collection of my rainbow themed work for a while, so I can’t wait to debut this
              book. We’ll be launching a fun contest with the release to make it extra special.
            </p>

            <p className="page_paragraph">
              “In February I’m launching my first ever series of sunglasses and reading glasses in
              collaboration with Coastal.com and Derek Cardigan. There are six distinct pairs that
              people can choose from. They are a limited edition release of only 500 each, and come
              with a beautiful cleaning cloth that has my artwork printed on it. I’m a big fan of
              sunglasses and these are some pretty wonderful pairs that are really comfortable and
              very fun!
            </p>

            <p className="page_paragraph">
              “I have a solo exhibition opening at Corey Helford Gallery April 23rd, so right now
              I’m painting like mad to get this new series finished. I have a very cool theme of
              rainbows and heterochromia.
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

Issue28p26.propTypes = propTypes;
Issue28p26.defaultProps = defaultProps;

export default Issue28p26;
