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
  pageNumber: PropTypes.number.isRequired,
  abstraks: PropTypes.string.isRequired,
  paintItRed3: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p3',
  next: '/Publication/Issue26p5',
  titleDescription: 'Paint it red 3 - Mixed Media on Paper - 2011',
  pageNumber: 6,
  abstraks: 'Abstraks',
  paintItRed3:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/owen_linders/ol_paint_it_red_3_mixed+media_on_paper_2011.jpg',

  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p4 = props => (
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
              Drawing, painting, sculpture, printmaking, performance art, and even stand up comedy;
              if it’s creative then Owen Linders will dabble. He always has “6 or 7 irons in the
              fire,” and on top of it all he’s a “data entry enthusiast.” Which I am sure was a
              sarcastic remark about the day job he uses to fund his artistic endeavors. If Owen’s
              list of achievements came in the form of a scroll (which wouldn’t surprise me) it
              would hit the floor and bounce with a bang when he unrolled it. Parchment heavy with
              the weight of organized events, group shows, wacky waving inflatable arm flailing tube
              man costumes, solo shows, commissions, post-it beards, great jokes, general
              awesomeness, Netflix binges, swimming trophies (I’ve seen them!), and buckets of
              gained knowledge.
            </p>

            <p className="page_paragraph">
              I have known Owen for many years, but how much I really know about him is
              astonishingly little, I’m finding out. I’m giddy to dive deeper into the
              neuvo-rennaissance brain of which I’ve really only seen the surface. Is there a modern
              day Da Vinci? I don’t know but Owen is the person I know to get closest to the mark.
              Though I’m not sure if the
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.paintItRed3}
                className="artist-work__image image"
                alt={props.titleDescription}
              />
            </div>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">{props.titleDescription}</p>
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

Issue26p4.propTypes = propTypes;
Issue26p4.defaultProps = defaultProps;

export default Issue26p4;
