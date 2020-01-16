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
  canyons: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p29',
  next: '/Publication/Issue28p31',
  canyons:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/allison_bamcat/ab_Canyons_GouacheDigital_2014.jpg',
  titleDescription1: 'Canyons, Gouache, Digital, 2014',
  pageNumber: 58,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p30 = props => (
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
              And in 2015, she started a line of handmade soft goods like tote bags and pencil cases
              featuring her signature bright, bold illustrations and prints. Because she wasn’t busy
              enough yet.
            </p>

            <p className="page_paragraph">
              “I think from the time I started working on textile graphics, I was always kind of
              wondering where I could combine the skills I was learning with my job as a textile
              artist with the skills I already had as a painter and illustrator. Product design was
              always something I wanted to do, but I was never really sure where to infuse graphics
              into that. I could make my own prints and my own ideas. I’ve always loved sewing—I got
              a craigslist sewing machine in college and I just really became interested in
              construction; what makes something feel valuable and also knowing that a lot of people
              can’t afford a $600 painting, but they can afford a $50 bag that’s been hand crafted
              and loved.
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.canyons}
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

Issue28p30.propTypes = propTypes;
Issue28p30.defaultProps = defaultProps;

export default Issue28p30;
