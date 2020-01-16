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
  titleDescription: PropTypes.string.isRequired,
  pe03: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p35',
  next: '/Publication/Issue26p37',
  titleDescription: 'Taner Tumkaya',
  pe03: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/taner_tumkaya/pe03.jpg',
  pageNumber: 70,
  company: 'Abstraks',
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p36 = props => (
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
              write on the banners. “Fuck Boy” becomes a popular slogan. Taner fiddles with a
              megaphone to send a terrible screeching sound through the air. As pedestrians casually
              pass by, the group announces their list of commands: “go and give them trouble,” “give
              a shit,” “don’t trust us,” and “work for us.” As the orchestrator of the group, Taner
              and his personal ambition seems strangely absent. Perhaps carrying the camera himself,
              he falls silent as if his quest fills him with unending doubt.
            </p>

            <p className="page_paragraph">
              In one of the most memorable sequences, the only female member of the group walks
              through the museum exhibition with strips of tape labeled, “It doesn’t work.” She
              attaches them to the wall text of pieces she doesn’t like and leaves the ones she does
              undisturbed. Later she confesses to the camera, “It’s getting funny. There’s no more
              importance if it’s good or not.” The group seems to waver from complete seriousness to
              utter absurdity, which might be the necessary ingredients for making any great piece
              of art. The piece becomes equal parts powerful and playful, offering a range of
              opinions on the creative process, artistic merit, and personal ethics.
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              In the years that followed, Taner consciously shifts away from his notably more “high
              art “ aesthetic in favor of more mainstream tastes. He moved to the U.S. hoping to
              apply his unique artistic sensibilities to the world of cinema. Dramatic and
              universal, the language of cinema enticed Taner with countless new opportunities to
              express his ideas visually. The academic tropes of his earlier work slowly recede into
              the background as Taner shifts to a new breed of work with his own production company.
              Using his extensive resources and entrepreneurial skills, his digital projects come
              alive with lightening fast images and piercing sounds.
            </p>

            <p className="page_paragraph">
              One of his newest works, “Postmodern Empires” (2014) plays like a mind-numbing maze of
              light and noise. Impressive production techniques juxtapose images at a rapid pace. A
              bedazzled woman innocently gazes as the brightly colored walls close in around her.
              The video turns into the ultimate challenge for an avant-garde stylist and an overly
              eager projectionist. With all of its shimmering glitter and experimental beats,
              “Postmodern Empires” seems to signify nothing, ultimately
            </p>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.pe03}
                className="artist-work__image image"
                alt={props.titleDescription}
              />
            </div>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
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

Issue26p36.propTypes = propTypes;
Issue26p36.defaultProps = defaultProps;

export default Issue26p36;
