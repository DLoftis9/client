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
  leftStudyForHotwax: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  titleDescription2: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p24',
  next: '/Publication/Issue27p26',
  leftStudyForHotwax:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/john_guthrie/leftStudyForHotwax.jpg',
  titleDescription1: 'Study for Hotwax, 2014, 14” x 11” acrylic, pencil on paper',
  titleDescription2: 'Aspect, 2014, 30” x 22” acrylic, pencil on paper',
  pageNumber: 48,
  company: 'Abstraks',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p25 = props => (
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
              had to be precise, just so,” Guthrie remarks. He admits he looks back on this time of
              his life with disappointment, preferring he’d made art instead. By 28, he hit the
              refresh button and abruptly changed careers. He made his way to the East Coast to
              attend MassArt for painting.
            </p>

            <p className="page_paragraph">
              A career in aerospace engineering, no doubt, did Guthrie some good. It’s easy to see
              that his training still comes in handy. Opening one of many drawers, he flips through
              several notebooks filled with sketches and works on paper. Test subjects for the
              master plan. Small measurements outline the frame, breaking down the space like a
              grid. Each line, shape and color must fit within these strict parameters. Colors come
              in threes with each shade an equal note from the last. On to larger sheets and works
              on canvas, Guthrie nurtures his image from platform to platform. As the ideas get
              stretched, Guthrie’s hand gets subtler. The lines are seamless. The brushwork is
              indeterminable.
            </p>

            <p className="page_paragraph">
              Guthrie wields painter’s tape like a pro. Every mark must be executed with expert
              precision. His process
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.leftStudyForHotwax}
                className="artist-work__image image"
                alt={props.titleDescription1}
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

Issue27p25.propTypes = propTypes;
Issue27p25.defaultProps = defaultProps;

export default Issue27p25;
