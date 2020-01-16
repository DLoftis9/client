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
  theAscent: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p9',
  next: '/Publication/Issue28p11',
  theAscent:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/michelle_dugan/md_THE__ASCENT_Etching_2014.jpg',
  titleDescription1: 'The Ascent - Etching, 2014',
  company: 'Abstraks',
  pageNumber: 19,
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p10 = props => (
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
                src={props.theAscent}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              Michelle is an aspiring tattoo artist at Eridanos in Central Square. Her creations are
              frightening to say the least; a goat head with five spinning legs, the grim reaper
              come to collect his due. She talks about applying her aestheticism to human skin. So
              many details would mean a world of pain for some ambitious tattoo bearer. Turning your
              skin into a piece of artwork is the ultimate form of devotion. But for the artist,
              this obsession goes deeper than sick designs and rad marks. Making art requires a
              great deal of introspection. You have to hand it someone that spends their time
              drafting elaborate scenes from a world that exists primarily in their imagination.
              It’s a way of rejecting the world around you, choosing instead to create a world of
              your own. That’s where you’ll find Michelle Dugan, sketching her place at the Devil’s
              side.
            </p>

            <p className="page_paragraph">
              She’s included one self-portrait in a bundle of images. It’s not a happy expression
              that greets you, but one of malice and caution, Lisbeth-Salander-style. Striped white
              lines illuminate her face against a drizzling black background. Without them, she
              would be invisible. She emerges
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

Issue28p10.propTypes = propTypes;
Issue28p10.defaultProps = defaultProps;

export default Issue28p10;
