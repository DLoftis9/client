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
  marioEvolution: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue29p9',
  next: '/Publication/Issue29p11',
  marioEvolution:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/chanimation_brothers/mC_MarioEvolution_Cardstock_2013.jpg',
  titleDescription1: 'Mario Evolution - Cardstock, 2013',
  company: 'Abstraks',
  pageNumber: 19,

  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p10 = props => (
  <div className="issue-29">
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
                src={props.marioEvolution}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">Matt’s opinion, success still seems a long way off.</p>

            <p className="page_paragraph">
              It was their love of comic books, anime and all things awesome that spawned their
              desire to launch a brand of their own. Matt describes how they never had enough money
              growing up to afford the action figures in toy stores, so they decided to build their
              own. It’s the kind of love that’s affected millions of comic book fans around the
              world, a deep fascination for the misfit heroes, outcasts, and the courageous willing
              to risk it all to save the innocent. The allure of the superhero is rooted in one of
              the oldest stories on earth, the exiled finding strength in what makes them different.
              It’s the type of story that’s attracted millions to Christianity. A god like figure
              emerges among the people to help save humanity. Just like the artwork from
              Chanimation, superheroes are here to stay, giving us hope and light as we search for a
              better tomorrow.
            </p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6 page_column--right">
            <p className="titleDescription titleDescription__right">{props.titleDescription1}</p>

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

Issue29p10.propTypes = propTypes;
Issue29p10.defaultProps = defaultProps;

export default Issue29p10;
