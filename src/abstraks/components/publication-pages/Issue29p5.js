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
  aLonelyWarriorStormTrooper: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue29p4',
  next: '/Publication/Issue29p6',
  aLonelyWarriorStormTrooper:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/chanimation_brothers/aC_3ALonelyWarriorStormTrooper_Cardstock_2015.jpg',
  titleDescription1: 'A Lonely Warrior Storm Trooper - Cardstock, 2015',
  company: 'Abstraks',
  pageNumber: 8,

  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p5 = props => (
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
              Superheroes are everywhere. Hollywood can’t go two months without shoving another
              spectacular 3D showdown in the public’s face. Television is no better. The Internet
              seems to have been designed for the comic book aficionados who delve so thoroughly
              into the past lives of our favorite caped crusaders. Justice, valor, and some crime
              fighting action have become staples of popular culture. For those of us on the outside
              looking in, you might be wondering where this fad came from and when is it going to
              disappear? The answer is never. Superheroes are as timeless as rock ‘n’ roll. Their
              brightly colored masks and complicated personal histories are a right of passage,
              beckoning us to reach higher.
            </p>

            <p className="page_paragraph">
              Like so many of us, Matt Chan and his brother Andrew grew up on the stuff. They fell
              in love with do-gooders, creatures from other worlds, the misfits that turned their
              troubled past into a bright, high-flying future.
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              What’s not to love? Such transformations are what dreams are made of. They extend
              beyond boys’ fantasies, gender stereotypes, international borders, and a person’s age.
              For the Chan brothers, it was a way into a world radically different than their own.
            </p>

            <p className="page_paragraph">
              Matt and Andrew have been quite busy over the past few years, creating a library of
              homemade 3-D paper action figures. Their work has become a brand, Chanimation, with a
              sizable online following. There are dozens upon dozens of them; Iron Men,
              stormtroopers, cube-shaped warriors, Mario Bros, Gokus and Batmen. The entire
              collection is an anime lover’s dream come true, a superhero club to take over the
              entire universe. It’s amazing what you can do with foam, card stock and some glue.
              Every figure is made up of anywhere from a 100 to 200 different layers, crisp cutouts
              perfectly interconnected to create the faces of childhood.
            </p>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.aLonelyWarriorStormTrooper}
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
        modalTitle={props.modalTitle}
        modalContent={props.modalContent()}
        next={props.next}
      />
    </div>
  </div>
);

Issue29p5.propTypes = propTypes;
Issue29p5.defaultProps = defaultProps;

export default Issue29p5;
