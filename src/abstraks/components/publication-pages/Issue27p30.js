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
  bound: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  linkURL: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p29',
  next: '/Publication/Issue27p31',
  bound: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/john_guthrie/bound.jpg',
  titleDescription1: 'No Reason',
  linkURL: 'http://www.johnkguthrie.com/',
  linkText: 'www.johnguthrie.com',
  company: 'Abstraks',
  pageNumber: 59,
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p30 = props => (
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
                src={props.bound}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              of each image. The symmetry hints at the shape of a figure. Seer gives eyes to a face.
              Bound displays a lady’s corset or an S & M dress. Guthrie invites everyone to take his
              test. Interpretations often reveal more about the person than the artwork itself.
            </p>

            <p className="page_paragraph">
              Towards the end of my visit, Guthrie takes a moment to reflect on his work. Like a
              handyman with tools on his belt, he takes pride in his craft. Caught between several
              schools of thought, the work powerfully plays with the lessons of art history. The
              rational forms of Minimalism merge with the illusions of Op Art and the colors
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              of Abstract Expressionism. However, Guthrie creates a body of work entirely his own.
              Every shape responds directly to the limits of the canvas. The viewer immediately
              draws a physical relationship between the space and its contents. The foreground and
              background are at once connected and split apart. Like any great artist, Guthrie
              suggests subtle meanings and universal truths, but asks the viewer to do the
              uncovering.
            </p>

            <p className="page_paragraph">
              To see more of John Guthrie’s work, jump over to his website{' '}
              <a className="anchor" href={props.linkURL} target="_blank" rel="noopener noreferrer">
                {props.linkText}
              </a>
              .
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

Issue27p30.propTypes = propTypes;
Issue27p30.defaultProps = defaultProps;

export default Issue27p30;
