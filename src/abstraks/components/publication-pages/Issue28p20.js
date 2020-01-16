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
  bubbleBubble: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p19',
  next: '/Publication/Issue28p21',
  bubbleBubble:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/camilla_derrico/cdE_Bubble__Bubble__Toil__and__Trouble_2015.jpg',
  titleDescription1: 'Bubble Bubble Toil & Trouble, 2015',
  pageNumber: 39,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p20 = props => (
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
                src={props.bubbleBubble}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              right places. It displayed amazing amounts of detail while at the same time containing
              very little concrete visual information.
            </p>

            <p className="page_paragraph">
              Cha ching! Camilla d’Errico made some money off me that day.
            </p>

            <p className="page_paragraph">
              Ever since that day I’ve been a bit of an internet stalker, crushing link after link
              trying to find out about her newest pieces. Or which Con she’s doing next. Or check
              the status of any of her multiple comics or books. When’s this out? When will that be
              done? Staying up to date on d’Errico’s work is hardly an easy task though. Camilla is
              a machine. Perhaps she is a cyborg. Perhaps she herself has some headgear or some
              cable connections that increase her productivity to those incredible levels. Some
              helmet that allows her to super focus her mind on achieving goals. Perhaps she’s got
              some other secrets.
            </p>

            <p className="page_paragraph">
              “There is no secret here.” Damn. “I work more than I sleep. I have a supportive team
              behind me that are like family to me, (some of them are family) who work really hard.
              We work in sync so that fans get to enjoy my art on merchandise
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

Issue28p20.propTypes = propTypes;
Issue28p20.defaultProps = defaultProps;

export default Issue28p20;
