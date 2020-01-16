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
  titleDescription1: PropTypes.string.isRequired,
  titleDescription2: PropTypes.string.isRequired,
  doodle2: PropTypes.string.isRequired,
  ballSoHard: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p4',
  next: '/Publication/Issue26p6',
  titleDescription1: 'Doodle 2 - Mixed Media on Paper - 2013',
  titleDescription2: 'Ball so Hard - Linoleum Block Print - 2014',
  doodle2:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/owen_linders/ol_doodle2_mixed_media_on_paper_0213.jpg',
  ballSoHard:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/owen_linders/ol_ball_so_hard_linoleum_block_print_2014.jpg',

  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p5 = props => (
  <div className="issue-26">
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
                src={props.doodle2}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.ballSoHard}
                className="artist-work__image image"
                alt={props.titleDescription2}
              />
            </div>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">{props.titleDescription1}</p>
            <p className="titleDescription">{props.titleDescription2}</p>
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

Issue26p5.propTypes = propTypes;
Issue26p5.defaultProps = defaultProps;

export default Issue26p5;
