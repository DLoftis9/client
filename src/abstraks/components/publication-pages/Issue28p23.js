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
  laCapra: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p22',
  next: '/Publication/Issue28p24',
  laCapra:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/camilla_derrico/cdE_La-Capra_2015.jpg',
  titleDescription1: 'La-Capra, 2015',
  pageNumber: 44,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p23 = props => (
  <div className="issue-28">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <p className="page_paragraph">
              Not only is Camilla pumping out fresh paintings of her signature ageless beauties,
              being a dope illustrator, writing and drawing comics, but she’s also published. “Pop
              Manga and Pop Painting are books I’ve spent years to develop so that I can pass along
              my style and process in a way that is very approachable and easy to understand.” She’s
              got a class “through Skillshare.com so that is a great way for people to see my
              process in action.” AND she’s a comicon-pro.
            </p>

            <p className="page_paragraph">
              “I love cons! They can be a bit overwhelming at times, but I love meeting the fans and
              experiencing all the amazing art and energy of pop culture cons. One of the greatest
              honors is seeing fans dress up as some of my characters. I always applaud amazing
              cosplay. It takes so much work to make the costumes and you can really see the passion
              people have for the characters they bring to life.” She even describes the start of
              her art career as being “a long, long time ago in a galaxy far, far away.”
            </p>

            <p className="page_paragraph">
              One of Camilla’s larger bodies of work, influenced by the inspiration she finds in
              steampunk, is the
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.laCapra}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">{props.titleDescription1}</p>

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

Issue28p23.propTypes = propTypes;
Issue28p23.defaultProps = defaultProps;

export default Issue28p23;
