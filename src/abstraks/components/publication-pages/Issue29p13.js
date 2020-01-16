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
  blueAbstract: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue29p12',
  next: '/Publication/Issue29p14',
  blueAbstract:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/emilie_beadle/eb_blue_abstract_oil_on_canvas_2015.jpg',
  titleDescription1: 'Blue abstract - oil on canvas, 2015',
  company: 'Abstraks',
  pageNumber: 24,

  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p13 = props => (
  <div className="issue-29">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="page_intro__row row">
          <PublicationHome />
          <div className="page_column-6">
            <h3 className="page_intro__header">What the Quiet Can Do</h3>
          </div>
        </div>

        <div className="issue-page__row row">
          <div className="page_column-3">
            <p className="page_paragraph">
              Emilie Beadle describes painting as a way of retreating from the outside world. It’s
              nearly impossible to go a day without screens, acerbic news headlines, and pixelated
              images of your best friend’s afternoon cocktail. Too much of anything will kill you,
              including posts on Instagram and endless news feeds. Beadle gives us the opportunity
              to step back and shut down. You don’t have to “Like” anything. There’s no comments
              section. In fact, just keep your opinions to yourself.
            </p>

            <p className="page_paragraph">
              Unlike so many of her peers, Beadle doesn’t seem to agonize over her paintings. She’s
              found a place of joy and personal contentment. She’s not painting for anyone other
              than herself; free to muse over the enchanted forests of her childhood home in
              Michigan or the lights on Detroit’s edge. Living in Michigan is a great asset for a
              painter like Beadle. She doesn’t have to worry about the whining critiques of art
              know-it-alls and hipster gallery owners. It’s easy to imagine her paintings hanging in
              a seaside gallery on the coast of Lake Michigan next to the perennial lighthouses and
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              sloping dunes. Much like the birch trees themselves, the work stews in silence,
              waiting for someone to stop and smell the roses.
            </p>

            <p className="page_paragraph">
              Beadle focuses on tunnels of trees, sunflowers, cityscapes and abstract shapes. Every
              painting uses a grid to make sense of the space. Metallic or ghost white squares
              rigidly divide the canvas with specks of light in the center. Beadle remains loyal to
              the palate knife, refusing to use anything with bristles or hair. Paint gets slapped,
              stuck, or smeared across the frame. Every mark is visible to the eye. Colors swipe
              into one another with unpredictable results. Lines butt heads and overlap, competing
              for the viewer’s attention.
            </p>

            <p className="page_paragraph">
              There’s an orderly free flow to the work as if the paintings were competing against
              themselves. Nature is not bound by rigid lines or finite geometrical shapes. The birch
              trees crisscross and bend at their will, while the rest of the space remains confined
              and gridlocked to a tee. Beadle doesn’t use photographs to create her nature
            </p>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.blueAbstract}
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

Issue29p13.propTypes = propTypes;
Issue29p13.defaultProps = defaultProps;

export default Issue29p13;
