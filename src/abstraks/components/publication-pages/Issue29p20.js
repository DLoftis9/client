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
  frontRollingIn: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue29p19',
  next: '/Publication/Issue29p21',
  frontRollingIn:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/regina_valluzzi/front_rolling_in-Valluzzi-in-Rockport.jpg',
  titleDescription1: 'Front rolling in',
  company: 'Abstraks',
  pageNumber: 38,

  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p20 = props => (
  <div className="issue-29">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="page_intro__row row">
          <PublicationHome />
          <div className="page_column-3">
            <h3 className="page_intro__header">
              Art vs. Science: Painting with Dr. Regina Valluzzi
            </h3>
          </div>
        </div>

        <div className="issue-page__row row">
          <div className="page_column-3">
            <p className="page_paragraph">
              The brain is said to have two halves: one logical, mathematical, and calculated. The
              other; emotional, instinctual, artistic. They are not, necessarily, at odds.
            </p>

            <p className="page_paragraph">
              For Dr. Regina Valluzzi, working in Polymer Science and Engineering not only informed
              her love of art, it influenced her very way of working: “Say I was trying to measure
              the crystal structure of something (which I do many times). First, you grow a crystal,
              and then you put it in a refractometer, and then you compare that to the model. You
              take that data you interpreted from the model, get a set of details, and use those to
              form a picture. There are standard models for how you abstract data…but with those is
              a tacit knowledge that you already know what you’re looking at. It’s about taking
              ideas out of the science box and putting them in the art box. Although some of that
              ease of communication of the science behind them is lost, non-scientists can now
              understand it. “
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.frontRollingIn}
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

Issue29p20.propTypes = propTypes;
Issue29p20.defaultProps = defaultProps;

export default Issue29p20;
