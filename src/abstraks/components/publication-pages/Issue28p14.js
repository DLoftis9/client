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
  gloveBitter: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p13',
  next: '/Publication/Issue28p15',
  gloveBitter:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/merk_those/mT_Glove-Biter_Digital_2015.jpg',
  titleDescription1: 'Glove-Bitter, Digital, 2015',
  pageNumber: 26,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p14 = props => (
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
              Sigourney Weaver movies straight wrapped it up to me. This past year I made history in
              spray painting live at the MFA which had never been done before. It was a huge honor
              and meant so much to me and the graffiti world on the whole. I am very proud to have
              been able to represent our often-overlooked art form on such a huge scale.
            </p>

            <p className="page_paragraph">
              Your technique has a unique twist within a traditional graffiti style; a recurring
              theme in your work includes illuminated, candid poses and portraits of women in,
              otherwise somewhat unflattering, contexts. Where do you get the inspiration for your
              pieces and how the figure is going to be formatted?
            </p>

            <p className="page_paragraph">
              Unlike most guys I didn’t learn from writing with others, just drew what I liked my
              whole life. I was always the kid in class who drew my friends around fourth grade, had
              these graff mags and wanted me to do characters like the ones in them. Years later I
              realized I got that early push so people was my thing to draw. Now the difference
              between hip hop dudes and sexy ladies is huge, it took me years to be able
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.gloveBitter}
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

Issue28p14.propTypes = propTypes;
Issue28p14.defaultProps = defaultProps;

export default Issue28p14;
