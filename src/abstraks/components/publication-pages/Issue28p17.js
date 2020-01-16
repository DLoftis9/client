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
  steez: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,

  artistsURL1: PropTypes.string.isRequired,
  artistsURL2: PropTypes.string.isRequired,
  artistsURL3: PropTypes.string.isRequired,

  artistsText1: PropTypes.string.isRequired,
  artistsText2: PropTypes.string.isRequired,
  artistsText3: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p16',
  next: '/Publication/Issue28p18',
  steez:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/merk_those/mT_Steez-Piece_Digital_2015.jpg',
  titleDescription1: 'Steez, Piece, Digital, 2015',
  company: 'Abstraks',
  pageNumber: 33,

  artistsURL1: 'http://www.merkthose.com/',
  artistsURL2: 'https://www.youtube.com/watch?v=PgIZlkZr22w',
  artistsURL3: 'https://www.youtube.com/watch?v=PY0IHs1fagY',

  artistsText1: 'Merk-Those.com',
  artistsText2: 'Speed Paint MerkThose vol. 2',
  artistsText3: "Dougie's deck speed painting",

  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p17 = props => (
  <div className="issue-28">
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
                src={props.steez}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              forward to today, I am creating all kinds of crazy shit without limits. The tech
              finally caught up but I was preparing the entire time. But always keeping to my own
              style...style always trumps.
            </p>

            <p className="page_paragraph">
              What’s in the works currently? Ambitions for the near future?
            </p>

            <p className="page_paragraph">
              Ambitions for the future is simply travel and go huge! I already have a tripped locked
              for Aruba this year where I’m gonna paint like crazy and I’m looking into the festival
              circuit; I believe my work is ready. As for things in the works, I’m releasing my
              second art book this year and planning a show to go with it. As a staple I’m always
              putting my work out on many fronts. My main focus as of late are thru t-shirts,
              watches and skate decks. Those are some of my favorite things and I’ve been
              customizing my own since childhood, just now I get to spread them across the globe.
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              I don’t like to say I’m lucky, it’s been my life’s driving force but as you know luck
              plays a huge part in it. Just under hard work, sacrifice, and confidence to overcome
              failures and rejection.
            </p>

            <p className="page_paragraph">
              <a
                className="anchor"
                href={props.artistsURL1}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.artistsText1}
              </a>
            </p>

            <p className="page_paragraph">
              <a
                className="anchor"
                href={props.artistsURL2}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.artistsText2}
              </a>
            </p>

            <p className="page_paragraph">
              <a
                className="anchor"
                href={props.artistsURL3}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.artistsText3}
              </a>
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

Issue28p17.propTypes = propTypes;
Issue28p17.defaultProps = defaultProps;

export default Issue28p17;
