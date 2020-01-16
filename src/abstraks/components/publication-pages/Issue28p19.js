import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue28Modal from '../../containers/publication-issue/Issue28Modal';

const issue28Modal = <Issue28Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  beyondTheRainbow: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p18',
  next: '/Publication/Issue28p20',
  beyondTheRainbow:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/camilla_derrico/cdE_Beyond-The-Rainbow_2012.jpg',
  titleDescription1: 'Beyond The Rainbow, 2012',
  pageNumber: 36,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p19 = props => (
  <div className="issue-28">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <p className="page_paragraph">
              A few years ago I was visiting a pop-up Zero Friends apparel shop in NYC. I was
              originally there searching for some clothing featuring nasty, wrinkly, surreal, scary,
              or super gross mutated creatures, but it wasn’t just Alex Pardee’s mad-science
              experiments that were staring back at me from the racks. Nor was it the masked
              stylized characters of Sam Flores. Nor was it the noisy, gritty work of Nate Van Dyke
              or the dark, creepy canvases of Dave Correia. It also didn’t look like any other style
              coming from the west coast school of my favorite lowbrow artists. Looking back at me
              was something just as hauntingly intriguing, however really was a contrast to the
              other artists whose work was selling on the tees and hoodies around the shop.
              Something cleaner. Something lighter. Something really, really good.
            </p>

            <p className="page_paragraph">
              The image of a beautifully crafted female robot, with wispy, long green hair, cables
              connected to her hair, and a black crow sitting upon her head, starring back at me.
              She was painted with these serene and peaceful colors. The line work went from thick
              and shadowy to virtually dissolving into nothingness in all the
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.beyondTheRainbow}
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

Issue28p19.propTypes = propTypes;
Issue28p19.defaultProps = defaultProps;

export default Issue28p19;
