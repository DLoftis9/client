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
  tar04: PropTypes.string.isRequired,
  articleTitle: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p29',
  next: '/Publication/Issue26p31',
  titleDescription: 'Taner Tumkaya',
  tar04: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/taner_tumkaya/tar04.jpg',
  articleTitle: 'Rebel Against Me',
  pageNumber: 58,
  company: 'Abstraks',
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p30 = props => (
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
              <strong className="page_paragraph--title">{props.articleTitle}</strong>
            </p>
            <p className="page_paragraph">
              Taner Tumkaya jacks around in all trades. Starting his own production company in Los
              Angeles in 2011, Tar Films creates a range of photography and video including
              narrative, experimental, music and fashion videos, and works for various commercial
              enterprises. Deeply rooted in fine art and its many contradictions, Taner has a long
              history of working in other mediums including sculpture, animation, sound scape, and
              graphic design. As an artist, Taner stands restless and difficult to pin down as he
              eagerly explores one idea after the next. With nearly every project, a feeling of
              resistance emerges. Resistance to consensus opinions, orderly execution and non-linear
              narratives.
            </p>
            <p className="page_paragraph">
              Early on, Taner focused his creative sensibilities on fine art. In 1997, Taner began
              his education with a B.A in sculpture at Hecettepe University in Ankara, the capital
              of Turkey. With a year in between, he went on to get his M.F.A in Interdisciplinary
              Arts at Städelschule, a contemporary fine arts academy in Frankfurt am Main, Germany.
              During this time and in the years following
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.tar04}
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

Issue26p30.propTypes = propTypes;
Issue26p30.defaultProps = defaultProps;

export default Issue26p30;
