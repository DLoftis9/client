import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue27Modal from '../../containers/publication-issue/Issue27Modal';

const issue27Modal = <Issue27Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  figure: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p4',
  next: '/Publication/Issue27p6',
  figure: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/jacob_leidolf/figure.jpg',
  titleDescription1: 'Jacob Leidolf - Figure',
  pageNumber: 8,
  company: 'Abstraks',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p5 = props => (
  <div className="issue-27">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="page_intro__row row">
          <PublicationHome />
          <div className="page_column-6">
            <h3 className="page_intro__header">
              Jacob Leidolf, born and raised in Boston’s Jamaica Plain, is an artist and graphic
              designer inspired by the urban landscape—the landscape where he feels most at home.
              From illustrations to woodprints to postage stamps, his work confronts the city’s most
              troubling social issues. Police brutality, income inequality, and gentrification are
              topics that come up in his art again and again. This month, {props.company} hears from
              the Dorchester-based Leidolf.
            </h3>
          </div>
        </div>

        <div className="issue-page__row row">
          <div className="page_column-3">
            <h3 className="page_paragraph__author">
              You’re from Boston. What was it like growing up here?
            </h3>

            <p className="page_paragraph">
              Growing up in JP in the ninties was great—I lived in a very interesting and beautiful
              place with a lot of great people. I was lucky enough that my parents got their house
              before the neighborhood became so much more…gentrified, which was bizarre and sad to
              watch first hand. It’s wild that, in one generation, it’s no longer a neighborhood
              [where] you can buy a house and start a family in, unless you are very well off, which
              is disappointing, but also endemic in many parts of Boston.
            </p>

            <p className="page_paragraph">
              My parents raised me in a very diverse and conscientious community that made me
              passionate about justice and equity.
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              Cities like Boston have an incredible amount of history—disparity, division, [and]
              segregation concentrated in a small area. Problems like racism, street violence, lack
              of access, police brutality, mass incarceration, underinvestment, gentrification and
              the inequitable distribution of resources and city services have all shaped the way I
              see my community and the world. Ultimately a lot of the work I make speaks to that
              reality.
            </p>

            <h3 className="page_paragraph__author">What influences you most as an artist?</h3>

            <p className="page_paragraph">
              As an artist I am most influenced by the world around me… everything, from the bus I
              ride to the events I attend to the vacations I take. Making art is one of the ways
            </p>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.figure}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
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

Issue27p5.propTypes = propTypes;
Issue27p5.defaultProps = defaultProps;

export default Issue27p5;
