import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue29Modal from '../../containers/publication-issue/Issue29Modal';

const issue29Modal = <Issue29Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  theHerald: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue29p21',
  next: '/Publication/Issue29p23',
  theHerald:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/regina_valluzzi/the_Herald-Valluzzi-in-Newburyport.jpg',
  titleDescription1: 'The Herald',
  company: 'Abstraks',
  pageNumber: 43,

  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p22 = props => (
  <div className="issue-29">
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
                src={props.theHerald}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              they still dry clear. I know how hard it was for the engineers at the paint companies
              to get all this to work.”
            </p>

            <p className="page_paragraph">
              What I found most interesting in Regina though, was her demeanor. She was very
              straightforward when I asked her about her preference in materials: her cat was
              rolling around in the acrylic strings, so she had to switch over to inks and markers.
            </p>

            <p className="page_paragraph">
              So too, was she upfront when I asked her advice for artists trying to get into
              galleries: “There’s a huge amateur community. There’s a lot of things pretending to be
              resources, but they’re really for hobbyists. They’re not launching pads or
              stepping-stones for semi-professionals. They make a tremendous amount of noise and
              take up space…
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

Issue29p22.propTypes = propTypes;
Issue29p22.defaultProps = defaultProps;

export default Issue29p22;
