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
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  doodle1: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p8',
  next: '/Publication/Issue26p10',
  titleDescription1: 'Doodle 1 - Mixed Media on Paper - 2013',
  company: 'Abstraks',
  pageNumber: 17,
  doodle1:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/owen_linders/ol_doodle_1_mixed_media_on_paper_0213.jpg',

  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p9 = props => (
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
                src={props.doodle1}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              me going was Mike Shick inviting me to the Allston Art Shares. I just immediately met
              people who were better than me, who were more disciplined, who were better painters.
              To be around people who are truly talented makes you want to get back to it.”
            </p>

            <p className="page_paragraph">
              “You see their stuff and say ‘I want to get there!’” This is definitely something that
              anyone can relate to. Inspiration or competition, whatever it is, it’s unbelievably
              important for an artist to grow and evolve. It’s no wonder Owen masters many mediums.
              He’s driven to, naturally.
            </p>

            <p className="page_paragraph">
              As we talk, Owen stands at his sturdy, flat partner, surrounded by his creations and
              facing many projects he’s left unfinished. On one wall he has a small battalion of
              sculptures that look like small organic robots ready for battle. In front of another
              wall stands a lamp shaded with a cloud made from small blocks of painted wood and
              wire. Colorful little spires of stacked doodles and paintings reach high off their
              land. He has a full table of framed paintings all standing at attention. Directly in
              front of Owen, a linoleum block eagerly awaits its{' '}
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              next carvings and yearns for its first encounter with ink. I wouldn’t be surprised to
              find little clay creatures peeking out of their dark corners, ready to play their part
              in Owen’s next stop motion comedy blockbuster.
            </p>

            <p className="page_paragraph">
              “I think almost every one of these art projects starts out as a distraction from
              another, or is an answer to a project. He describes his sculptures; “Each one of those
              definitely starts as different objects. For the most part, there will be a scrap of
              paint or a piece of wood that I’ve drawn on, perhaps weeks in advance. It was very
              rare that when I was working on them that I did a thing for each one that was made at
              the time. For the most part I had already done the work. I just had to go through the
              ridiculous task of putting them together.”
            </p>

            <p className="page_paragraph">
              Owen describes his process differently for every project. “This particular linoleum
              block is super personal. There’s a lot in it about depression and anxiety.” But the
              next piece helps Owen find the balance to the last. “Then I’ll do one with arrows! The
              idea that the two of them work in tandem to make{' '}
            </p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6 page_column--right">
            <p className="titleDescription titleDescription__right">{props.titleDescription1}</p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6 page_column--right">
            <div className="titleDescription titleDescription__right">
              <p>
                {props.company} <strong>{props.pageNumber}</strong>
              </p>
            </div>
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

Issue26p9.propTypes = propTypes;
Issue26p9.defaultProps = defaultProps;

export default Issue26p9;
