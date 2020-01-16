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
  elCamuflaje: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p39',
  next: '/Publication/Issue26p41',
  titleDescription: 'El camuflaje - Mixed Media - 2014',
  elCamuflaje:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/raul_gonzalez/gonzalez-el_camuflaje-mixed_media-2014.jpg',
  pageNumber: 78,
  company: 'Abstraks',
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p40 = props => (
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
              After a few years of looking for a publisher, the Andrea Brown Literary Agency picked
              up their book. It’s unusual for a writer to bring in an illustrator on her own, but
              there weren’t any qualms. In fact, after expanding their book from 32 pages to 75,
              their literary agent, Jennifer Laughran, told Gonzalez to make it as many pages as he
              wanted. “She said, ‘I want you to breathe Raul!’”
            </p>

            <p className="page_paragraph">
              What’s especially cool about the book is that it’s drawn in simple ballpoint pen. The
              story might be about an extraordinary space adventure, but the materials that make up
              the artwork are exceptionally ordinary—BIC pens.
            </p>

            <p className="page_paragraph">And that was Raul’s intention.</p>

            <p className="page_paragraph">
              “Kids can read it and say, ‘I know what these marks are made with.’” It makes art less
              intimidating and more inviting, especially since art is so often closed off to
              minorities. “And if comic books weren’t around,” Gonzalez adds, “There are probably a
              lot of important artists that wouldn’t have become artists.”
            </p>

            <p className="page_paragraph">
              While it took several years to get this first book out, the second book will be coming
              much quicker. “We want to get them out at a pretty
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.elCamuflaje}
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

Issue26p40.propTypes = propTypes;
Issue26p40.defaultProps = defaultProps;

export default Issue26p40;
