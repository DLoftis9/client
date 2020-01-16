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
  pugilist: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p25',
  next: '/Publication/Issue26p27',
  titleDescription: 'Pugilist - Oil',
  pugilist:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/rick_berry/rb_pugilist_oil_14.jpg',
  company: 'Abstraks',
  pageNumber: 51,
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p26 = props => (
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
                src={props.pugilist}
                className="artist-work__image image"
                alt={props.titleDescription}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              make room for ambiguity. Removing pieces of a limb or disembodying a head transports
              the subject to a new realm. Loose strokes of paint and manipulated forms create
              tension and a feeling of unease. Berry seeks synergy in his vision as he wavers
              between consciously building an image up and unconsciously breaking it down. Without
              one or the other, you loose your comparative standards. “I trick myself out of known
              territory,” Berry states. Our consciousness never seems to be in the present, instead
              looking ahead or behind to find the answer. While our unconscious state allows us to
              react instinctively, tuning in to the object in front of us as if the image is
              creating itself.
            </p>
            <p className="page_paragraph">
              Looking over a group of finished paintings, the viewer can see traces of a familiar
              figure with the rest buried or broken underneath layers of paint. Some appear almost
              god-like with angelic faces and bulging limbs. Certain aspects call to mind the
              Baroque paintings or the 17th Century, specifically Caravaggio’s dark depictions of
              pain and suffering. The surrealist elements beg for a second viewing. Blurred out
              faces and hypnotic forms suggest
            </p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6 page_column--right">
            <p className="titleDescription titleDescription__right">{props.titleDescription}</p>
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

Issue26p26.propTypes = propTypes;
Issue26p26.defaultProps = defaultProps;

export default Issue26p26;
