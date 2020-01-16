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
  sleazy: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p15',
  next: '/Publication/Issue28p17',
  sleazy:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/merk_those/mT_Sleazy-Hello_2015.jpg',
  titleDescription1: 'Sleazy , Hello, 2015',
  company: 'Abstraks',
  pageNumber: 31,
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p16 = props => (
  <div className="issue-28">
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
                src={props.sleazy}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              seconds nowadays so yeah the graff business is booming.
            </p>

            <p className="page_paragraph">
              What made you gear more of your efforts towards using a digital platform for your
              work? How has that changed anything about how you do your work?
            </p>

            <p className="page_paragraph">
              I am from Cambridge and was lucky enough to have my work noticed by some of the
              brilliant minds at MIT. I was invited to check out a new program about to get going
              which became the computer clubhouse, I showed up with my black book. These wizards
              took a rewired security camera and photographed my sketches into Photoshop 2.0 around
              1993. They showed me how to color them and correct lines; this was before PS even had
              layers mind you. They told me one day people will be painting like Picasso on
              computers and I was like yeah, I will. My decades of practice and curiosity gifted me
              with an incredible amount of freedom and independence artistically. I was
              mass-producing my own full color stickers etc. decades before other guys without any
              outsourcing or spending countless hours hand drawing each. Fast-forward
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

Issue28p16.propTypes = propTypes;
Issue28p16.defaultProps = defaultProps;

export default Issue28p16;
