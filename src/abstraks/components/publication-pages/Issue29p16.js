import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue29Modal from '../../containers/publication-issue/Issue29Modal';

const issue29Modal = <Issue29Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  cityLights: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue29p15',
  next: '/Publication/Issue29p17',
  cityLights:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/emilie_beadle/eb_city_lights_oil_on_canvas_2015.jpg',
  titleDescription1: 'City lights - oil on canvas, 2015',
  company: 'Abstraks',
  pageNumber: 30,

  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p16 = props => (
  <div className="issue-29">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <p className="page_paragraph">
              scathing critique of contemporary society. No one is immune from the delights of
              social media. In fact, aspiring artists are nearly required to have their own image
              feeds on Facebook or Instagram. It’s the only way to survive. Beadle doesn’t shy away
              from the benefits of uploading digital images online. She full on embraces it by
              incorporating the changing landscape of the art making process into her work. Beadle
              hopes to create a peaceful medium between the world we live in and all the things we
              no longer see.
            </p>

            <p className="page_paragraph">
              By reconstructing these scenes from memory, Beadle gives herself the freedom to go it
              alone. The actual depiction of what she’s painting doesn’t matter so much as the
              feeling she has while doing it. These are happy paintings, grown out of love for the
              act of painting itself. Beadle makes it clear that she’s not too concerned with the
              meaning behind her paintings. They’re not designed for analytical discussions about
              contemporary art or technology’s role in society. Her work is less insistent, and more
              laid back. You can talk about them if you like, but there’s not much to say
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.cityLights}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">{props.titleDescription1}</p>

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

Issue29p16.propTypes = propTypes;
Issue29p16.defaultProps = defaultProps;

export default Issue29p16;
