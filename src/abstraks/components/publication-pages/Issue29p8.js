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
  aTomorrowKing: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue29p7',
  next: '/Publication/Issue29p9',
  aTomorrowKing:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/chanimation_brothers/mC_3ATomorrowKing_AcrylicsAndCardstock_2015.jpg',
  titleDescription1: 'A Tomorrow King - Acrylics And Cardstock, 2015',
  company: 'Abstraks',
  pageNumber: 14,

  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p8 = props => (
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
              creatures encased in plastic cubes. Straight from your favorite video games, Andrew’s
              paper Zombots, Tomorrow Kings, and Iron Pandas are the ultimate anime souvenirs.
              Professionally built from scratch, these figures look as if they were mass-produced
              with entire warehouses devoted to making a profit. But instead they’re individually
              made with care and love. It’s the most sincere kind of fan fiction, meticulously
              recreating your favorite characters and sharing them with the world.
            </p>

            <p className="page_paragraph">
              The Chan brothers come from a medical family. Their father works in pharmaceuticals
              and now so does Matt. After seven years of medical training, Matt finally got a job
              working as a pharmacist at a veterinary clinic. Compiling prescriptions doesn’t give
              him the same kind of satisfaction as his art making but he’s forced to earn a living.
              He hopes for a different path for his younger brother Andrew, who plans to enroll at
              MassArt in the fall. Both brothers have a calling for the creative and would jump at
              the chance to turn their hobby into a career. But such an opportunity doesn’t seem so
              far away.
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.aTomorrowKing}
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

Issue29p8.propTypes = propTypes;
Issue29p8.defaultProps = defaultProps;

export default Issue29p8;
