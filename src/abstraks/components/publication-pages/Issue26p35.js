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
  tar01: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p34',
  next: '/Publication/Issue26p36',
  titleDescription: 'Taner Tumkaya',
  tar01: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/taner_tumkaya/tar01.jpg',
  company: 'Abstraks',
  pageNumber: 69,
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p35 = props => (
  <div className="issue-26">
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
                src={props.tar01}
                className="artist-work__image image"
                alt={props.titleDescription}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              During their journey, Taner and his friends display their colorful personalities,
              reflect on the intention of the piece, and confess their secrets to the camera. One
              member admits, “He (Taner) thinks everything is going fine.” To which another member
              chuckles and responds, “But actually it’s not.” Walking, hydrating, and more walking,
              the footage would become tedious if not for the quick cuts, effectively passing the
              eight days in nearly twelve minutes. Another member remarks during a moment of
              exhaustion, “I am just bored.” However, the group seems to be infused with a divine
              sense of meaning and purpose. “I am not the medium,” stands out as a memorable motif.
            </p>

            <p className="page_paragraph">
              At last the group reaches the museum just as the opening ceremony gets underway. The
              museum’s exhibition “Collective Creativity” invited groups to make collective
              projects. With its mountainous white pillars, the museum becomes a grand symbol of
              mankind’s ode to itself, undying history and artistic excellence. Taner and his
              friends pitch their tent in the open square in front of the museum’s epic entrance.
              Playful discussion ensues about what to
            </p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6 page_column--right">
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

Issue26p35.propTypes = propTypes;
Issue26p35.defaultProps = defaultProps;

export default Issue26p35;
