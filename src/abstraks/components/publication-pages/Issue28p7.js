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
  nineOfSwords: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p6',
  next: '/Publication/Issue28p8',
  nineOfSwords:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/michelle_dugan/md_NINE__OF__SWORDS_Woodcut_2013.jpg',
  titleDescription1: 'Nine Of Swords - Woodcut, 2013',
  pageNumber: 12,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p7 = props => (
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
              its shell. In some cases, you’d need insider information to find anything sacrilegious
              at all. Take Mounted on His Scapegoat for instance. Put the piece by itself and it’s
              easy to draw up a new set of conclusions. The lone rider looks like a standup guy.
              Nothing about him screams agent of evil. His steed, on the other hand, seems to be
              lacking skin, an arrow through the eye, snakes coiled around his legs. Maybe they’ve
              just been through the battle of a lifetime and this is all that’s left. Overall, it’s
              easy to give these guys the benefit of the doubt. Behind him, a merry steeple shines
              atop the hillside. Gravestones aside, this could be a bountiful place of worship and
              piety. It’s not immediately clear which side our rider is on. Is he protecting this
              holy land from a sinister threat on the horizon, or has he been rejected from his home
              in the sky, forced to trot away and find some moist cave to inhabit?
            </p>

            <p className="page_paragraph">
              Speaking to Michelle over the phone shed some light on the matter. She talked about
              how these demons were used in medieval folklore as a form of escapism. Humans blamed
              incarnate demons for their crimes, using religious
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.nineOfSwords}
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

Issue28p7.propTypes = propTypes;
Issue28p7.defaultProps = defaultProps;

export default Issue28p7;
