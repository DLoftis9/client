import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue27Modal from '../../containers/publication-issue/Issue27Modal';

const issue27Modal = <Issue27Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  holeInTheWall: PropTypes.string.isRequired,
  titleDescription: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  linkURL1: PropTypes.string.isRequired,
  linkText1: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p21',
  next: '/Publication/Issue27p23',
  holeInTheWall:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/sweeTree/holeInTheWall.jpg',
  titleDescription: 'Hole In The Wall',
  company: 'Abstraks',
  pageNumber: 43,
  linkURL1: 'https://www.facebook.com/SweeTree-Ink-128746410499727/',
  linkText1: 'Sweetree',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p22 = props => (
  <div className="issue-27">
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
                src={props.holeInTheWall}
                className="artist-work__image image"
                alt={props.titleDescription}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              mesmerizing universe of art for art’s sake; it’s something so pure.In a world where
              commercial is king and the galleries are sale focused, SweeTree gives artists the
              opportunity to showcase the art that actually matters, the art with a real message,
              art that will change the world. The art that is created simply because humans must
              make art. “I don’t want to make or sell art just for rich people, I want to make art
              for all people.”
            </p>

            <p className="page_paragraph">
              I’ve often walked into SweeTree Ink shows and immediately have seen styles and ideas
              I’ve never seen before. Outsider art. Bizarre art. “Is that art?” art. Works that
              can’t help but make you go “whoa.” Featuring artists such as Adam O’Day, KDONZ, Peter
              Cosmos, Merk Those, Sean Walker, and so many more artists from different walks of
              life, SweeTree exhibits a hugely dynamic array of artists. There’s space for any style
              of art on the walls of SweeTree. “I try to show artists that have never shown before,
              coach them along, and then show their work with accomplished artists from the city. I
              want to be artist-friendly, and encouraging.” The only requirement on the work
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              displayed is it must be unapologetic and bold. “Good music and good art can change
              your life. It changed mine. Art sets you free.”
            </p>

            <p className="page_paragraph">
              The current collection showing is based on a strange Russian short story about a
              misplaced sniffer called ‘The Nose’ written by Nikolai Gogol. The show is curated by
              Chuck McNally, an accomplished Museum School grad, who’s been the guest curator at
              SweeTree for 3 shows now.
            </p>

            <p className="page_paragraph">
              Visit{' '}
              <a className="anchor" href={props.linkURL1} target="_blank" rel="noopener noreferrer">
                {props.linkText1}
              </a>{' '}
              for more information.
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

Issue27p22.propTypes = propTypes;
Issue27p22.defaultProps = defaultProps;

export default Issue27p22;
