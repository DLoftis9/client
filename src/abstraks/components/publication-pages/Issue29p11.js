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
  rex: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue29p10',
  next: '/Publication/Issue29p12',
  rex:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/chanimation_brothers/mC_Rex_Cardstock_2014.jpg',
  titleDescription1: 'Rex - Cardstock, 2014',
  company: 'Abstraks',
  pageNumber: 21,

  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p11 = props => (
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
                src={props.rex}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              The Chan brothers have become their own version of super heroes. They’ve proven
              themselves loyal to the cause. Like shrines erected to honor the dead, their
              sculptures are made to celebrate the lives of the world’s favorite fictional heroes.
              Chanimation is spreading that joy to people all over the world. Their Facebook page is
              filled with inspirational messages, lines of gratitude and memos of support. Matt and
              Andrew are giving back to the community that has already given them so much in return.
              If you love machine gun wielding robots, anime pop divas, and real-life Pikmin, then
              you’ve come to the right place. All are welcome in the land of Chanimation.
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

Issue29p11.propTypes = propTypes;
Issue29p11.defaultProps = defaultProps;

export default Issue29p11;
