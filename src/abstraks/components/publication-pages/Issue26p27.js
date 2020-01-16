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
  proveIt: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p26',
  next: '/Publication/Issue26p28',
  titleDescription: 'Prove It - Oil',
  proveIt:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/rick_berry/rb_prove_it_oil_15.jpg',
  pageNumber: 52,
  company: 'Abstraks',
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p27 = props => (
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
              the teachings of Francis Bacon hold profound power over Berry. As with both Bacon and
              Caravaggio as artistic influences, the figures twist and contort their bodies as if
              the very nature of being human is the cause of their struggle. The flesh pulls against
              the subject with fervor, desperate to remove itself from the suffering of mankind.
              Without any visible threat in the frame, each figure seems to be its own worst enemy,
              inciting its own misery.
            </p>
            <p className="page_paragraph">
              Some works have been deconstructed so much so that they drift entirely into the realm
              of the unknown. Hints of cubism and Picasso’s blue period seep through the frame as
              blocks of color completely distort sections of the figure. These works feel
              unanimously alive with crude streaks of paint and strange lines that keep the viewer
              asking questions. The most powerful images in Berry’s portfolio are the ones that
              provoke the most fear. The masked figures and gruesome monsters will keep you up at
              night and solidify Berry as a powerful creative talent.
            </p>
            <p className="page_paragraph">
              Berry states that he strives to destroy certain academic tropes by
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.proveIt}
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

Issue26p27.propTypes = propTypes;
Issue26p27.defaultProps = defaultProps;

export default Issue26p27;
