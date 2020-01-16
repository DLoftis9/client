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
  afterbirth: PropTypes.string.isRequired,
  titleDescription: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p13',
  next: '/Publication/Issue27p15',
  afterbirth:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/anne_johnstone/afterbirth%2C-Mixed-Media-22x20--2012.jpg',
  titleDescription: 'Afterbirth, Mixed Media, 2012, 22" x 20"',
  pageNumber: 26,
  company: 'Abstraks',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p14 = props => (
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
              Eyes pop out like weeds in the grass. Faces lie buried underneath layers of Pepsi
              12-packs, corn on the cob, and packaged deli meats. $2.99 for a bag of oranges is a
              pretty good deal. This week’s savings work like pixels in a frame, collectively
              building to make one cohesive image. The bold colors of consumer shopping mesh fluidly
              with the painter’s palate. She talks about the seen and the unseen as an integral part
              of the collage process. Once she’s made something, she wants to cover it up and bury
              it, only to dig it up again moments later. Her layers shift like memories. Fragments
              appear unexpectedly, one on top of another, fighting for your attention, stymied by
              the rest.
            </p>

            <p className="page_paragraph">
              The artist works shrouded in mystery. She has many tools at her disposal. The medley
              of collage, acrylic and wax allows for an enticing range of possibilities. She’s
              amassed a body of work that exhibits a full spectrum of different styles, genres, and
              languages. You can see Cubist portraits next to a bit of street art busyness. Cartoon
              figures wink at African inspired faces, Native American totem
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.afterbirth}
                className="artist-work__image image"
                alt={props.titleDescription1}
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

Issue27p14.propTypes = propTypes;
Issue27p14.defaultProps = defaultProps;

export default Issue27p14;
