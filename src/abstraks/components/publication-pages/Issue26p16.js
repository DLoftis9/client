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
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  popAmok: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p15',
  next: '/Publication/Issue26p17',
  titleDescription1: 'Pop Amok - Painting|Drawing - 2012',
  pageNumber: 30,
  company: 'Abstraks',
  popAmok:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/richard_heckert/RAH_Pop_Amok_painting_drawing_2012.jpg',

  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p16 = props => (
  <div className="issue-26">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <p className="page_paragraph">
              I attach importance to the drafting of different reasons. In many ways it makes me
              happy when I can realize a fleeting moment or a fleeting thought in an apparently
              clear image. At first glance, everything appears clearly. A colorful and detailed
              image. On closer examination, the work takes on a different character. Many people
              stated in interviews that on closer inspection they felt confusion, discomfort, and
              anxiety. My works create an extraordinary interaction between optics, aesthetics and
              emotions. The connection between clean lines and chaotic elements corresponds to the
              eternal and universal forces of chaos and order.
            </p>

            <p className="page_paragraph">
              The composition of an image is formed through experimentation. One remembers some
              interesting elements, and other details are generated or arise from the dynamics of
              the work process. Many aspects remain unexplained and arise during the drafting in
              surprising ways. The relationship between compositional and experimental planning is
              difficult to know for certain. Between the initial ignition and completion of the work
              come unconscious aspects
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              that lend the works of Pop Amok an idiosyncratic dynamic. Where to begin? It is the
              recurring spark of a mental image as an unspeakable thought. This spark is the
              starting signal and the result comes out more involved than originally anticipated.
            </p>

            <p className="page_paragraph">
              Text seems crucial to your work, even if it isn’t the central focus of your
              compositions. Where does the text come from and what effect do you intend or hope it
              to have on your works’ interpretation? How do you feel about the pieces without text
              in relationship to the pieces with it?
            </p>

            <p className="page_paragraph">
              The text emphasizes different elements, and also amplifies states and emotions. This
              can be both subjective and general. The culture of television, headlines and
              superlative advertising slogans are synthetic elements of my work. Often these word
              fragments are formed only in the process of drafting the image, and can be
              unreflected. The textual supplements are not postulations but resonance amplifiers. I
              understand my work like a snapshot of the conditions in us and around us.
            </p>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.popAmok}
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

Issue26p16.propTypes = propTypes;
Issue26p16.defaultProps = defaultProps;

export default Issue26p16;
