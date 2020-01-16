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
  puff: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p24',
  next: '/Publication/Issue28p26',
  puff:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/camilla_derrico/cdE_Puff_2015.jpg',
  titleDescription1: 'Puff, 2015',
  pageNumber: 48,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p25 = props => (
  <div className="issue-28">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <p className="page_paragraph">
              and exploring that world. For me, inspiration comes from what’s currently happening in
              my life as well as the amazing things I discover in nature. I love literature and find
              a lot of inspiration from reading. Whenever I paint a piece all the elements in the
              painting are a representation of their personalities or their own story.”
            </p>

            <p className="page_paragraph">
              Camilla combines fantastic artistic skills and excellent story telling to create a
              world that is all her own filled with wonderful, evolving characters whose beauty is
              only surpassed by their creator’s abilities. Her passion for the creation of these
              lives is clear. Creating her own mythology and history as she lays down her soft
              shapes of color. Plotting the past, present, and future of every character while
              cutting dark lines into the empty spaces. Investing in each creation by turning them
              all into apparel, accessories, and books that her fans can easily purchase, hug, and
              lose themselves in. She has plans for more as well:
            </p>

            <p className="page_paragraph">
              “My third art book with Dark Horse Comics is following closely on the heels of my
              first book release for the year. My book called
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.puff}
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

Issue28p25.propTypes = propTypes;
Issue28p25.defaultProps = defaultProps;

export default Issue28p25;
