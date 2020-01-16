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
  marionette: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p21',
  next: '/Publication/Issue26p23',
  titleDescription: 'Marionette - Oil',
  marionette:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/rick_berry/rb_marionette_oil_13.jpg',
  pageNumber: 42,
  company: 'Abstraks',
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p22 = props => (
  <div className="issue-26">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <p className="page_paragraph">
              freely, exploring strange and unrecognizable forms. Berry would go on to create the
              first digitally painted book cover in 1984 for William Gibson’s Neuromancer. As
              brought to life by Berry, the work explores a dark futuristic reality in which a
              computer hacker takes on the ultimate hacking challenge for an unknown employer. The
              book went on to inspire a slew of modern science fiction stories throughout literature
              and cinema.
            </p>
            <p className="page_paragraph">
              However as the years pressed on, Berry became increasingly dissatisfied with the
              pressures of commercial illustration. The business changed before his eyes as art
              directors started to demand routine, stock images that they believed would make the
              most profit. Suddenly, Berry’s once valued freethinking skills became an anomaly in a
              rapidly changing industry of precision and formulary. Feeling trapped, Berry opted out
              of his regular paycheck and discovered his own way.
            </p>
            <p className="page_paragraph">
              Berry soon became friends with author Neil Gaiman known for his comic book series The
              Sandman and various other works of literature. The two collaborated
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.marionette}
                className="artist-work__image image"
                alt={props.titleDescription}
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

Issue26p22.propTypes = propTypes;
Issue26p22.defaultProps = defaultProps;

export default Issue26p22;
