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
  illustrationForTheDial: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p6',
  next: '/Publication/Issue27p8',
  illustrationForTheDial:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/jacob_leidolf/illustration-for-the-dial.jpg',
  titleDescription1: 'Jacob Leidolf - Illustration For The Dial',
  pageNumber: 12,
  company: 'Abstraks',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p7 = props => (
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
              own connections. Over the course of several events we have printed thousands of
              stickers, which have been sent around the country and distributed at rallies and
              vigils [for victims of police brutality].
            </p>

            <h3 className="page_paragraph__author">
              What are some of your other most recent projects? I saw some stories you wrote and
              illustrated on your website…
            </h3>

            <p className="page_paragraph">
              I’ve always enjoyed writing and recently decided to have some fun with short
              stories—not sure where it is all going. I like fiction because you can talk about
              people and the world and how it works without being stuck in our reality. If we’re
              going to talk about xenophobia or militarism, why not do it in the future, in space,
              with cool technology and aliens?
            </p>

            <p className="page_paragraph">
              The illustrations for each are simple open and closing scenes - something to anchor
              the reader in and out. I love using illustration in narrative. I have many unfinished
              graphic novel projects but two pictures and a story is a little easier to finish solo,
              so I’ve been letting some of them loose.
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.illustrationForTheDial}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
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

Issue27p7.propTypes = propTypes;
Issue27p7.defaultProps = defaultProps;

export default Issue27p7;
