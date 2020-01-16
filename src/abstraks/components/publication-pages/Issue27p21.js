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
  xazminGarza: PropTypes.string.isRequired,
  titleDescription: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p20',
  next: '/Publication/Issue27p22',
  xazminGarza: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/sweeTree/xazminGarza.jpg',
  titleDescription: 'xazminGarza',
  company: 'Abstraks',
  pageNumber: 41,
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p21 = props => (
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
                src={props.xazminGarza}
                className="artist-work__image image"
                alt={props.titleDescription}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              participate, SweeTree is interested. This is not the type of gallery you will see
              written about in normal papers or art magazines, though it’s absolutely worthy of
              mention. It’s a little hole in the wall. It’s the speakeasy of the Boston art scene;
              where artists can escape from the pressure of the commercialized art world, chill out
              with some brews, and just party together, in a wildly artistic atmosphere, often with
              small live bands or even some stand-up comedy.
            </p>

            <p className="page_paragraph">
              SweeTree is virtually a surreal, slightly grotesque cartoon. The artwork has so much
              energy it throbs and pulsates. The painted eyes watch over the audience and the
              characters speak. Backgrounds shift and paintings slowly ooze universes of hue.
              Painted guitars pluck themselves, and carved, colorful skulls hum along. Even the
              people who attend SweeTree’s openings have a cartoonish quality to them, “I’m so used
              to the weirdest of the weird showing up. 13 years of definitely supporting weird, full
              on.” They slink about, ecstatically pointing out creatures they love, or bobbing up
              and down to the anti-pop tunes. It’s a
            </p>
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

Issue27p21.propTypes = propTypes;
Issue27p21.defaultProps = defaultProps;

export default Issue27p21;
