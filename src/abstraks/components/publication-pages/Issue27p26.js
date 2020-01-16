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
  leftNoEscape: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  titleDescription2: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p25',
  next: '/Publication/Issue27p27',
  leftNoEscape:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/john_guthrie/leftNoEscape.jpg',
  titleDescription1: 'No Escape, 2014, 30” x 22”” acrylic on paper',
  titleDescription2: 'Clockwork, 2013, 30” x 22”” acrylic on paper',
  pageNumber: 50,
  company: 'Abstraks',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p26 = props => (
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
              relies on extreme consciousness: his ability to plan thoroughly, master space and
              seamlessly integrate each piece. From a few feet away, the work looks digital. The
              acrylic paint seems to fade away and melt into printer ink. I kept waiting for Guthrie
              to tell me that he prints his images on an Epson. Naturally, it’s all him. You’d have
              to use a microscope to tell the difference between his hand and a machine’s.
            </p>

            <p className="page_paragraph">
              There’s something quaint about how two shapes collide. Your mind can draw narratives
              from an off-kilter X, layers floating midair, or the tip of a parallelogram. Each one
              seems to be a message, waiting to be decoded by some soothsayer. A simple idea becomes
              a profound one, if your imagination can take it there. Guthrie would’ve fared well as
              a graphic designer. Marketing departments would relish in his deft logos. You can
              imagine a green energy company using Cold Sweat to launch its new line of solar
              panels. Shift could sell millions of high-speed tablets for a tech startup. It’s the
              cleanliness that I’m referring to. So sparse and selective that it must be trying to
              sell me something; if not a product, then what?
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.leftNoEscape}
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

Issue27p26.propTypes = propTypes;
Issue27p26.defaultProps = defaultProps;

export default Issue27p26;
