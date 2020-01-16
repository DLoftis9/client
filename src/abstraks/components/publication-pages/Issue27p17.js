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
  oneMoment: PropTypes.string.isRequired,
  titleDescription: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p16',
  next: '/Publication/Issue27p18',
  oneMoment:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/anne_johnstone/one-Moment%2C-Please%2C-Mixed-Media-14.25x10.75--2014.jpg',
  titleDescription: 'One Moment, Please, Mixed Media, 2014, 14.25” x 10.75”',
  company: 'Abstraks',
  pageNumber: 33,
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p17 = props => (
  <div className="issue-27">
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
                src={props.oneMoment}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              Johnstone wears the same mask as her pets. Cautious of new friends, she exhibits the
              smallest fraction of her feelings. Her cosmic inner world welters below a carefully
              curated exterior. Her artist statement affirms, “I am at play in the picture plane.”
              It’s her grief laid bare on the walls. Themes of isolation rule the room. Loneliness
              seems to be a prerequisite for making a painting. Long faces with sullen eyes and
              drooping mouths wallow under the weight of their own desires. Figures turn away from
              each other in hopes of finding their true home. Solo pioneers explore their own
              personal playgrounds, free from the cruelty of a world long left behind. It’s these
              stories that resonate with optimism, giving hope to those of us aliens still stuck on
              earth. With her meek exterior, Johnstone doesn’t seem capable of creating some of the
              more demonic disfigurements. But there are angels too. Godlike ghosts and passing
              spirits govern the sky. It reads like dozens of great epic novels, ruminating on sad
              stories, religious quests, and interstellar travels.
            </p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6 page_column--right">
            <p className="titleDescription titleDescription__right">{props.titleDescription}</p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6 page_column--right">
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

Issue27p17.propTypes = propTypes;
Issue27p17.defaultProps = defaultProps;

export default Issue27p17;
