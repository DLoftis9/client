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
  pepperOfThePumpkinPatch: PropTypes.string.isRequired,
  sleepyGarden: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  titleDescription2: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p31',
  next: '/Publication/Issue28p33',
  pepperOfThePumpkinPatch:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/allison_bamcat/ab_PepperOfThePumpkinPatch_Gouache_2015.jpg',
  sleepyGarden:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/allison_bamcat/ab_SleepyGarden-Witch_Gouache_2015.jpg',
  titleDescription1: 'Pepper Of The Pumpkin Patch, Gouache, 2015',
  titleDescription2: 'Sleepy Garden-Witch, Gouache, 2015',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p32 = props => (
  <div className="issue-28">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.pepperOfThePumpkinPatch}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.sleepyGarden}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
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

Issue28p32.propTypes = propTypes;
Issue28p32.defaultProps = defaultProps;

export default Issue28p32;
