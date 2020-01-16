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
  kittyTitties: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p21',
  next: '/Publication/Issue28p23',
  kittyTitties:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/camilla_derrico/cdE_Kitty-Titties_2015.jpg',
  titleDescription1: 'Kitty-Titties, 2015',
  pageNumber: 41,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p22 = props => (
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
              in communicating emotion through their movement and body language. They are expressive
              creatures.
            </p>

            <p className="page_paragraph">
              “A few years after that I went to Capilano University and got my degree in
              Illustration and design. I would say it was helpful, but when it came to developing my
              own style, that is something that I learned on my own. I started painting with Holbein
              DUO oil paints after college and found my love of painting through a lot of medium
              experimentation. Art School taught me a lot but it didn’t cater specifically to my own
              unique style so that is something that I had to teach myself.
            </p>

            <p className="page_paragraph">
              “I would definitely say I was creative from a young age. As soon as I could hold a
              crayon, I was drawing all over everything. I think my creative streak began when Mamma
              sat me down in front of the ‘babysitter’ (some people call it the tv). I was hooked to
              all the colorful and imaginative 80’s cartoons my tiny eyes could watch. It definitely
              explains why I love neon pink so much.”
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.kittyTitties}
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

Issue28p22.propTypes = propTypes;
Issue28p22.defaultProps = defaultProps;

export default Issue28p22;
