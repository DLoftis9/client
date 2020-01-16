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
  a1: PropTypes.string.isRequired,

  artistsURLTitle1: PropTypes.string.isRequired,
  artistsURLTitle2: PropTypes.string.isRequired,
  artistsURLTitle3: PropTypes.string.isRequired,
  artistsURLTitle4: PropTypes.string.isRequired,

  artistsURLLink1: PropTypes.string.isRequired,
  artistsURLLink2: PropTypes.string.isRequired,
  artistsURLLink3: PropTypes.string.isRequired,
  artistsURLLink4: PropTypes.string.isRequired,

  artistsURLText1: PropTypes.string.isRequired,
  artistsURLText2: PropTypes.string.isRequired,
  artistsURLText3: PropTypes.string.isRequired,
  artistsURLText4: PropTypes.string.isRequired,

  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p37',
  next: '/Publication/Issue26p39',
  titleDescription: 'Taner Tumkaya',
  a1: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/taner_tumkaya/a1.jpg',

  artistsURLTitle1: 'Photographer: Taner Tumkaya -',
  artistsURLTitle2: 'Stylist: Alithea Kundanis -',
  artistsURLTitle3: 'MUA&Hair: Gina Banic - ',
  artistsURLTitle4: 'Model Kine Aaurum - ',

  artistsURLLink1: 'https://www.tarfilms.com',
  artistsURLLink2: 'http://alithea.virb.com/',
  artistsURLLink3: 'http://www.ginabanic.com/',
  artistsURLLink4: 'http://www.modelmanagement.com/model/kine-marie-elvira-aarum/',

  artistsURLText1: 'www.tarfilms.com',
  artistsURLText2: 'alithea.virb.com/',
  artistsURLText3: 'www.ginabanic.com/',
  artistsURLText4: 'modelmanagement.com',

  company: 'Abstraks',
  pageNumber: 75,

  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p38 = props => (
  <div className="issue-26">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.a1}
                className="artist-work__image image"
                alt={props.titleDescription}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              devolving into mere static. Perhaps that’s the point. A generous interpreter might see
              the video as an elaborate mirror of contemporary society, pulsing screens and
              elaborate style that fall on deaf ears and blind eyes. But maybe there’s just not that
              much there.
            </p>

            <p className="page_paragraph">
              As an artist, Taner seems to favor the extreme, exuding an all-over effect on the
              viewer. By far, it’s his more humble projects that carry the most weight. The
              simplification and minimalist approach to his earlier work greets the audience like a
              breath of fresh air. Behind the camera, you can feel the bravado and ambition of a
              young conflicted artist desperate to make his mark on the world. However consciously
              or unconsciously, in the most recent stage of his career, some of his personal voice
              seems to have gotten lost along the way. With ample creative voices and professional
              tools at his disposal, perhaps Taner chews his bite more than necessary. That
              relatable sense of doubt is no longer an option.
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              <h4>Credits:</h4>

              <span>
                {props.artistsURLTitle1}
                <a
                  className="page_credits__anchor anchor"
                  href={props.artistsURLLink1}
                  target="_top"
                  rel="noopener noreferrer"
                >
                  {props.artistsURLText1}
                </a>
              </span>

              <span>
                {props.artistsURLTitle2}
                <a
                  className="page_credits__anchor anchor"
                  href={props.artistsURLLink2}
                  target="_top"
                  rel="noopener noreferrer"
                >
                  {props.artistsURLText2}
                </a>
              </span>

              <span>
                {props.artistsURLTitle3}
                <a
                  className="page_credits__anchor anchor"
                  href={props.artistsURLLink3}
                  target="_top"
                  rel="noopener noreferrer"
                >
                  {props.artistsURLText3}
                </a>
              </span>

              <span>
                {props.artistsURLTitle4}
                <a
                  className="page_credits__anchor anchor"
                  href={props.artistsURLLink4}
                  target="_top"
                  rel="noopener noreferrer"
                >
                  {props.artistsURLText4}
                </a>
              </span>
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

Issue26p38.propTypes = propTypes;
Issue26p38.defaultProps = defaultProps;

export default Issue26p38;
