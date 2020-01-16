import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PublicationHome from '../PublicationHome';
import PageNav from '../PageNav';
import Issue26Modal from '../../containers/publication-issue/Issue26Modal';

const issue26Modal = <Issue26Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  titleDescription2: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  abstraks: PropTypes.string.isRequired,
  flotsamAndLagan2: PropTypes.string.isRequired,
  flotsamAndLagan1: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p6',
  next: '/Publication/Issue26p8',
  titleDescription1: 'Flotsam and Lagan 2 - Mixed Media Sculpture - 2014',
  titleDescription2: 'Flotsam and Lagan 1 - Mixed Media Sculpture - 2014',
  pageNumber: 12,
  abstraks: 'Abstraks',
  flotsamAndLagan2:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/owen_linders/ol_flotsam_and_lagan_2_mixed_media_sculpture_2014.jpg',
  flotsamAndLagan1:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/owen_linders/ol_flotsam_and_lagan_1_mixed_media_sculpture_2014.jpg',

  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p7 = props => (
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
              immediately started doing weird stuff with them,” he continues. “One day my mom was
              going to take a nap, which she truly earned because I’m sure I was an exhausting
              little shit, I had made this wall of soldiers and I kind of trapped her in her room.
              Scared the hell out of her. She pointed to that as the moment I started to do art or
              that I might be one of those creepy Omen kids. One or the other.” I’m glad it’s not
              the latter.
            </p>

            <p className="page_paragraph">
              “Ever since I was a kid I was always doodling, drawing. I was convinced until fifth
              grade that I was going to make a Claymation video, but I always just got hung up on
              the sculptures. It was just so much more fun to be constantly lying to myself. Like:
              Yeah! This is how you make an animated film. I’m going to just keep making clay
              monsters and I’ll let the director figure it out. I had no conception of the project.
              I think it was called ‘Beware of Chocolate Pudding.’” An ambitious first consciously
              artistic project that he describes with his hands firmly planted on his table.
              “Hollywood has yet to call. Ha.” Owen’s laugh fills his studio, dampened only slightly
              by vast array of art and supplies everywhere. His
            </p>
          </div>

          <div className="page_column-4">
            <div className="artist-work">
              <img
                src={props.flotsamAndLagan2}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-4">
            <div className="artist-work">
              <img
                src={props.flotsamAndLagan1}
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

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">
              <strong>{props.pageNumber}</strong> {props.abstraks}
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

Issue26p7.propTypes = propTypes;
Issue26p7.defaultProps = defaultProps;

export default Issue26p7;
