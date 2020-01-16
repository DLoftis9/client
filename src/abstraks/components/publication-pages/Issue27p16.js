import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue27Modal from '../../containers/publication-issue/Issue27Modal';

const issue27Modal = <Issue27Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  lookingForAClue: PropTypes.string.isRequired,
  titleDescription: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p15',
  next: '/Publication/Issue27p17',
  lookingForAClue:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/anne_johnstone/looking-for-a-Clue%2C-Mixed-Media%2C-28x20--2014.jpg',
  titleDescription: 'Looking for a Clue, Mixed Media, 2014, 28” x 20”',
  pageNumber: 30,
  company: 'Abstraks',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p16 = props => (
  <div className="issue-27">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <p className="page_paragraph">
              poles and Mexican Folk Art. Her influences are many. The boundaries of her imagination
              are far and wide reaching. A handful of painters could be responsible for the work on
              the wall, each with their own niche of fanciful beasts.
            </p>

            <p className="page_paragraph">
              Paintings cover every inch of wall space in her Somerville home studio. A bit
              reserved, she seems slighted by the creatures on the wall. Eyes, disembodied heads,
              and tarnished souls all seem to be begging for her attention. Just being in their
              presence brought on a sudden wave of guilt. I felt like I needed to apologize to them
              for some wrong I don’t remember committing. Johnstone seems taken aback as well, not
              knowing what they want from her. Animal faces work like masks, concealing the true
              subjects’ innermost pain. Akin to an adult Halloween party or a B horror movie where
              the killer wears a panda mask, the dark side of these paintings has yet to be
              revealed.
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.lookingForAClue}
                className="artist-work__image image"
                alt={props.titleDescription1}
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

Issue27p16.propTypes = propTypes;
Issue27p16.defaultProps = defaultProps;

export default Issue27p16;
