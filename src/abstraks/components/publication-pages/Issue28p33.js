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
  fresh: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  titleDescription2: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p32',
  next: '/Publication/Issue28p34',
  fresh:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/allison_bamcat/ab_Fresh_Gouache_2015.jpg',
  titleDescription1: 'Sleepy Garden-Witch, Gouache, 2015',
  titleDescription2: 'Fresh, Gouache, 2015',
  pageNumber: 65,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p30 = props => (
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
                src={props.fresh}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              “I like having control over all of it. I do my own accounting and book keeping. I
              appreciate being organized now more than I ever did, just so I can schedule the time
              to do all the things that I want, and I can make it feasible and can budget things.
              Having all that stuff squared away makes it easy to wear this many hats. I know I’m
              going to be doing my job this amount of time every week, I can be 100% in my job, I
              don’t answer personal emails, when I’m there, I’m there, and when I go home, I know
              I’ll be wearing my handmade hat or my artist hat, which really depends on what’s due
              next. It’s definitely organized chaos, but the thing about it is I’m not going home to
              fill out Excel spreadsheets or collect data, I get to make art and paint and sew. It
              balances out all the stress of doing commercial design.
            </p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6 page_column--right">
            <p className="titleDescription titleDescription__right">{props.titleDescription1}</p>

            <p className="titleDescription titleDescription__right">{props.titleDescription2}</p>

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

Issue28p30.propTypes = propTypes;
Issue28p30.defaultProps = defaultProps;

export default Issue28p30;
