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
  caged: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p20',
  next: '/Publication/Issue28p22',
  caged:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/camilla_derrico/cdE_Caged_2015.jpg',
  titleDescription1: 'Caged, 2015',
  pageNumber: 41,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p21 = props => (
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
                src={props.caged}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              and at conventions. The one thing I’d love to have is a cloning machine. I’d love a
              couple of clones so that maybe I could actually get a full night’s sleep someday
              soon.”
            </p>

            <p className="page_paragraph">
              Man, I’d love it if Camilla had some clones too. More Camillas means more paintings
              and I could endlessly scroll through the web looking at the paintings of her signature
              ageless beauties. Big eyed, supple-lipped girls with big hair, animal friends, and
              subtle pale coloring. It’s no doubt that manga has influenced Camilla’s stylistic
              journey, but that’s obvious. Where manga mostly uses dots and contrast to help focus
              and move the eye, Camilla has a more gentle approach. Thin lines. Soft shading. Smooth
              values. Camilla even allows details to melt into areas where there is barely much more
              than a brush stroke. Perhaps the influence that comic books and animation have had on
              her paintings is slightly less visible. “I always thought I wanted to be an animator.
              (Thank you Saturday morning cartoons!) I took a 3D animation program shortly after
              high school and quickly realized that I did NOT want to animate.” Though the influence
              is pretty clear. Her characters excel
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

Issue28p21.propTypes = propTypes;
Issue28p21.defaultProps = defaultProps;

export default Issue28p21;
