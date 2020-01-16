import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue27Modal from '../../containers/publication-issue/Issue27Modal';

const issue27Modal = <Issue27Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string,
  stickers: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageLink1: PropTypes.string.isRequired,
  pageLinkText1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p7',
  next: '/Publication/Issue27p9',
  stickers: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/jacob_leidolf/stickers.jpg',
  titleDescription1: 'Jacob Leidolf - Stickers',
  pageLink1: 'http://www.jacobleidolf.com/spacecadets/',
  pageLinkText1: 'game/website',
  pageNumber: 14,
  company: 'Abstraks',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p8 = props => (
  <div className="issue-27">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <p className="page_paragraph">
              I also just finished a little{' '}
              <a
                href={props.pageLink1}
                className="anchor"
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.pageLinkText1}
              </a>{' '}
              (not even really fair to call it a game), where you can take your favorite sci-fi
              vessel cockpit and drive through a few different JavaScript star/warp fields or
              through your favorite YouTube video. It’s a pretty silly project but it was a lot of
              fun and taught me new stuff about coding…
            </p>

            <h3 className="page_paragraph__author">
              You also make a lot of album covers. What kind of music do you listen to? Does music
              influence your work?
            </h3>

            <p className="page_paragraph">
              I do. I have a lot of friends who make music and a lot of connections to the music
              world, in particular hip-hop, so cover art is one of the first ways I started to get
              my chops in design.
            </p>

            <p className="page_paragraph">
              I love music, all kinds, hip-hop, rock, jazz, blues, instrumental…good music is
              essential to my work process. For me, as a kid and a music fan, the cover art was
              always a big part of the experience—the packaging, the booklet, the presentation. As a
              designer and an artist, it’s really fun and satisfying to be able to create those
              kinds of
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">experiences, especially for my friends.</p>

            <h3 className="page_paragraph__author">
              You studied graphic design at BU. What drew you to design?
            </h3>

            <p className="page_paragraph">
              Originally I was going to do art education, but I realized that the job market for
              full-time art teachers in public high schools was one that had a somewhat precarious
              future (my own high school, Fenway didn’t have an art program when I attended and many
              schools in Boston and elsewhere do not). Ironically I have taught a sophomore art
              elective at my old high school every year since getting my BFA... I picked GD as a way
              to keep my options open…I loved combining my creative work with our activism, and
              design was one of the ways I was able to contribute something unique and valuable to
              the work we were doing.
            </p>

            <h3 className="page_paragraph__author">What was BU like? Did you like it?</h3>

            <p className="page_paragraph">
              In many ways BU was a blessing. I was granted a full scholarship and attended a great
              undergrad BFA program and met a lot of great folks. I focused on design and also
            </p>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.stickers}
                className="artist-work__image image"
                alt={props.titleDescription1}
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

Issue27p8.propTypes = propTypes;
Issue27p8.defaultProps = defaultProps;

export default Issue27p8;
