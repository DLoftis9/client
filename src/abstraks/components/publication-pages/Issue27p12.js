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
  cowboyChickens: PropTypes.string.isRequired,
  titleDescription: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p11',
  next: '/Publication/Issue27p13',
  cowboyChickens:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/anne_johnstone/cowboy-Chickens%2C-Mixed-Media-36x28--2013.jpg',
  titleDescription: 'Cowboy-Chickens, Mixed-Media 36x28, 2013',
  pageNumber: 22,
  company: 'Abstraks',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p12 = props => (
  <div className="issue-27">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <h3 className="page_paragraph__author">Anne Johnstone | Life in Space</h3>

            <p className="page_paragraph">
              You can see it in their eyes. These creatures have secrets to hide. Don’t bother to
              ask. They won’t answer you. They’re too busy grumbling and gawping to care.
            </p>

            <p className="page_paragraph">
              There’s something painfully familiar about Anne Johnstone’s work. Nickelodeon could
              make dozens of animated series about her Cowboy Chickens, king horses, and
              mad-hatters. The animal-human hybrids recall the most inventive toons and picture
              books of my childhood. But her clowns don’t cook up crazy schemes or play cat and
              mouse. Instead, they mope through life, turning away from the world to conceal their
              shame. Anne uses color like a defense mechanism. The sense of joy we feel gazing at
              royal blues, festive pinks, and soothing lemons only masks the problem. Life for these
              fiends is a pill too coarse to swallow.
            </p>

            <p className="page_paragraph">
              Johnstone uses acrylic, wax and cut up supermarket sale ads to create intricate
              collage-like paintings. Rich veins of texture cut through the surface. The looking
              comes in stages.
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.cowboyChickens}
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

Issue27p12.propTypes = propTypes;
Issue27p12.defaultProps = defaultProps;

export default Issue27p12;
