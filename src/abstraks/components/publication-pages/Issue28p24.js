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
  madameButterfly: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p23',
  next: '/Publication/Issue28p25',
  madameButterfly:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/camilla_derrico/cdE_Madame-Butterfly2015.jpg',
  titleDescription1: 'Madame-Butterfly, 2015',
  pageNumber: 47,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p24 = props => (
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
                src={props.madameButterfly}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              Helmetgirls, which definitely show more of the manga influence, as the contrast
              between black and white plays a huge role and line work is perfectly hefty; Camilla
              sneaks a in few color explosions as well, for good measure. The Helmetgirls website
              has this to say:“Wide-eyed, otherworldly girls as only Camilla d’Errico can imagine
              them; that is the unifying characteristic behind each one of the Helmetgirls. Camilla
              breathes life into each Helmetgirl by giving her unique traits and qualities, thus
              making every girl extraordinary and mystifying in her own right.”
            </p>

            <p className="page_paragraph">
              Beautiful illustrations (which are all actually paintings) of ladies all who each have
              their own personality, attitude, and of course awesome headgear. “Helmetgirls are one
              of my dearest creations,” Camilla says. “I started working on them close to a decade
              ago. It’s a way for me to stretch my creative legs in a dystopian post apocalyptic
              world. I want to defy logic and physics while exploring crazy steampunk machines that
              could actually work in a functioning capacity. The Helmetgirls came from a time when I
              was very into steampunk,
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

Issue28p24.propTypes = propTypes;
Issue28p24.defaultProps = defaultProps;

export default Issue28p24;
