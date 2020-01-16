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
  laMalinche: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p40',
  next: '/Publication/Issue26p42',
  titleDescription: 'Bay-La Malinche sin Querer - Mixed Media - 2014',
  laMalinche:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/raul_gonzalez/gonzalez-bay-la_malinche_sin_querer-mixed_media-2014.jpg',
  pageNumber: 80,
  company: 'Abstraks',
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p41 = props => (
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
              irked, that she didn’t have many books that her young Latino readers could relate to,
              save for one—a book on low rider cars.
            </p>

            <p className="page_paragraph">
              Before she knew it, Camper was dreaming up the story of three friends who build a low
              rider with the hopes of winning a competition that will give them the cash they need
              to build their own garage. When Lupe Impala (an antelope), Elirio Malaria (a
              mosquito), and Flapjack (a funny, little Octopus) get their hands on some rocket
              parts, they build a car that’s literally out of this world. Before they know it,
              they’re shooting into outer space for an interstellar adventure.
            </p>

            <p className="page_paragraph">
              The charming story about fulfilling your dreams is made all the more wonderful by Raul
              the Third’s illustrations, which are done entirely in ballpoint pen and sharpie…on
              paper splashed with coffee. When Camper approached Raul with the story and described
              her three characters, he knew exactly what to draw. “Within thirty minutes, I was
              scanning images and sending them to her.”
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.laMalinche}
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

Issue26p41.propTypes = propTypes;
Issue26p41.defaultProps = defaultProps;

export default Issue26p41;
