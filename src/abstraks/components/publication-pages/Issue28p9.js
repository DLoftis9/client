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
  mountedOnHisScapeGoat: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p8',
  next: '/Publication/Issue28p10',
  mountedOnHisScapeGoat:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/michelle_dugan/md_MOUNTED__ON__HIS__SCAPEGOAT_Silkscreen_2013.jpg',
  titleDescription1: 'Mounted On His Scape Goat - Silkscreen, 2013',
  company: 'Abstraks',
  pageNumber: 17,
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p9 = props => (
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
                src={props.mountedOnHisScapeGoat}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              on the closest victim, some unattainable force that no one dares to question.
            </p>

            <p className="page_paragraph">
              Instead of hiding her demons in the closet, Michelle wants to celebrate their
              existence. And why shouldn’t she? With all the preaching politicians making the
              rounds, we could use a little more devil in our lives. No good intentions, he’s just
              plain bad, through and through. Michelle seems to revel in these merits. It’s where
              she feels most at home. Her email address says it all, smokeweedanddrawSatan. It
              sounds appealing in a cathartic sort of way. Illustrating Satan and his henchmen over
              and over again is probably a great way to relieve stress. Not having to worry about
              what other people think of you, or rather what God thinks of you, frees up a lot of
              extra time. The way Michelle aligns herself so closely with the prince of darkness is
              like a child peeking under the bed. We’re not afraid of what we can see. It’s the
              space between the lines, the darkness over our heads that keeps us up at night.
              Michelle isn’t afraid of hell; she sees it as a well-deserved retreat from all this
              bullshit we’re supposed to call life.
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

Issue28p9.propTypes = propTypes;
Issue28p9.defaultProps = defaultProps;

export default Issue28p9;
