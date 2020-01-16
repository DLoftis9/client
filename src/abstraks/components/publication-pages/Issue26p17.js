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

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p16',
  next: '/Publication/Issue26p18',
  titleDescription1: 'Sacrifice Alien Pop - Painting|Drawing - 2013',
  pageNumber: 32,
  company: 'Abstraks',
  sacrificeAlienPop:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/richard_heckert/RAH_Sacrifice_Alien_Pop_painting_drawing_2013.jpg',
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p17 = props => (
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
              Both the text and the imagery seem to involve some themes of technology versus
              humanity. What is your relationship with technology? How does technology affect your
              work?
            </p>

            <p className="page_paragraph">
              I was born in a time in which the technical and technological changes transformed our
              lives substantially. From today’s perspective, we note that the desired balance
              between ecology and technology, which is also a social balance, has been irreparably
              damaged. The phenomenon of technology, understood in this way, affects my work and, in
              view of global changes, should be the subject of art.
            </p>

            <p className="page_paragraph">
              The influence of technology on life is one aspect of my art. Another aspect focuses on
              the question of influence of technology on art. The small and detailed work of Pop
              Amok emphasizes the important insight that the perception of art has changed in the
              era of reproduction-technology. The acceleration of art, fast made production lines,
              and unlimited reproducibility changed the idea of art - a volatility that can be found
              in our daily lives too. It is the culture of pop.
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              The preparation and development of my work requires a lot of time, indicating a
              counter-trend: Take your time! The interested viewer will take a long time for viewing
              the image too. My work calls for you to take more time for the things again, to take
              it slow, a slowing down of our restless life. Also, I speak of deliberately small,
              portable formats! The Anti-Pop does away with oversized images for the museum and
              excessive use of resources, and includes the hope that allows us a quiet moment to
              think.
            </p>

            <p className="page_paragraph">
              How long have you been working in this particular style, and what do you consider your
              influences to be? Do you look at any other artists while you’re working? And what
              about movies, books, television, music -- do you draw any inspirations from there?
            </p>

            <p className="page_paragraph">
              I’m experimenting with a variety of things. The colorful and unique style of Pop Amok
              was first present as a foreshadowed feeling. I practiced and studied for many years
              before I have found this expression in art. Although I am connected to artists of the
              past and present, I have developed my style autodidactically.
            </p>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.sacrificeAlienPop}
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
              <strong>{props.number}</strong> {props.company}
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

Issue26p17.propTypes = propTypes;
Issue26p17.defaultProps = defaultProps;

export default Issue26p17;
