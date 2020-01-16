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
  myrinx: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p24',
  next: '/Publication/Issue26p26',
  titleDescription: 'Myrinx - Oil',
  myrinx:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/rick_berry/rb_myrinx_oil_13.jpg',
  pageNumber: 48,
  company: 'Abstraks',
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p25 = props => (
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
              Berry suggested that they go to the nearby farmer’s market and buy a fish, cover it in
              paint and press it into the canvas. A bit alarmed, the student made wide eyes at Berry
              and asked, “Can we do that?” As Berry remembers, the painting turned out surprisingly
              well.
            </p>
            <p className="page_paragraph">
              Berry continues to stress his lack of formal training. He believes many young artists
              go to art school, learn so-called “proper technique,” and spend the next ten years
              unlearning everything they have been taught. Fortunately for Berry, there has never
              been anything to unlearn. He believes that an artist has to form his or her own unique
              vision for the world. He continues by illustrating how every child explores the
              surreal, the nonsense, through drawing and doodling. Once the artist matures, they
              must rehabilitate their child-like sensibilities to find their own set of rules for
              making images. Berry sees fun as a learning engine and personal experimentation as the
              ultimate path to originality and creative genius.
            </p>
            <p className="page_paragraph">
              As a part of deconstructing the image, Berry chips away at the familiar aspects of the
              figure to
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.myrinx}
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

Issue26p25.propTypes = propTypes;
Issue26p25.defaultProps = defaultProps;

export default Issue26p25;
