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
  issue29_lfte: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,

  modalContent: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
};

const defaultProps = {
  prev: '/Publication/issue29p2',
  next: '/Publication/Issue29p4',
  issue29_lfte: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/issue29_lfte.jpg',
  company: 'Abstraks',
  pageNumber: 5,
  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p3 = props => (
  <div className="issue-page issue-29">
    <div className="header">
      <Header />
    </div>
    <article className="issue-page__container container">
      <div className="issue-page__row row">
        <PublicationHome />
        <div className="page_column-6">
          <img
            src={props.issue29_lfte}
            className="issue-page__image image"
            alt="Letter From The Editor 29 Cover"
          />
        </div>

        <h4 className="credits__header table-of-contents page_column-6">Letter From The Editor</h4>

        <div className="page_column-3">
          <p className="page_paragraph">
            No doubt 2016 has been a crazy year, but amidst the lunacy we’ve put together this issue
            to make sure we’re keeping you in the know. We’re going to clear away the fog here on
            four phenomenal artists.
          </p>

          <p className="page_paragraph">
            First we’re going to tell you the story of the Chanimation Brothers. A serious duo whose
            creations are nothing but super. These dudes have many mediums in their arsenal, what
            struck me first though, was their work made with paper. Layered paper sculptures with
            such an attention to detail, it’s almost mind blowing.
          </p>

          <p className="page_paragraph">
            Then we’ll talk about Regina Valluzzi. A scientist and an engineer. But also a painter.
            A rare user of both sides of her brain, not for separate tasks, but both sides for her
            art. Her abstract paintings are all inspired
          </p>
        </div>

        <div className="page_column-3">
          <p className="page_paragraph">
            by science, from Rube Goldberg machines to the intricacies of computer chips.
          </p>

          <p className="page_paragraph">
            Finally we have Emily Beadle and her colorful, explosive landscapes. Using only a
            palette knife and her skills with color, Emily is able to capture the essence of a
            scene. She creates a seriously unexpected depth.
          </p>

          <p className="page_paragraph">
            In the meantime, we’re making a ton of changes behind the scenes to make sure you’re
            always connected to the heart of the art world; local and global. Here’s to 2017 and the
            future of the creative evolution of the earth!
          </p>

          <p className="page_paragraph">-Ian S. Tartasky</p>
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
      modalTitle={props.modalTitle}
      modalContent={props.modalContent()}
      next={props.next}
    />
  </div>
);

Issue29p3.propTypes = propTypes;
Issue29p3.defaultProps = defaultProps;

export default Issue29p3;
