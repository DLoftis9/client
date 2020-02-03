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
  southOfTheBorder: PropTypes.string.isRequired,
  artistsURLLink: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p42',
  next: '/Publication/Issue26p44',
  titleDescription: 'South of the Border - Mixed Media - 2015',
  southOfTheBorder:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/raul_gonzalez/gonzalez-south_of_the_border-mixed_media-2015.jpg',
  artistsURLLink: 'http://www.raulthethird.com/',
  artistsURLText: 'www.raulthethird.com',
  company: 'Abstraks',
  pageNumber: 85,
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p43 = props => (
  <div className="issue-26">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.southOfTheBorder}
                className="artist-work__image image"
                alt={props.titleDescription}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              good clip. We’re hoping to do one a year. It’s really exciting.” Raul will continue to
              balance his illustrating with his art making. “I always have pockets of time in
              between drafts getting approved.”
            </p>

            <p className="page_paragraph">
              In addition to his upcoming exhibitions in New Jersey and North Carolina, Gonzalez
              will also be showcasing work closer to home.
            </p>

            <p className="page_paragraph">
              The original art from Low Riders in Space is currently on view at the New England
              School of Art & Design at Suffolk University and Phillips Academy in Andover. Later in
              March, Raul will also be opening a solo exhibition at Babson College called “The El
              Paso Kid.” It will be a series of 101 self-portraits based on 101 Samurai prints by
              19th century Japanese printmaker Utagawa Kuniyoshi.
            </p>

            <p className="page_paragraph">
              Like much of his other work, it will explore life on the border with symbols and humor
              that make up so much of Raul the Third’s art, such as the burrocorn—a donkey with a
              stalk of corn growing out of its head. “It an homage to my grandfather and father.
              They were like beasts of burden, picking fruit in the fields.” It’s another symbol,
              another
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              work, and another love letter to El Paso, to Mexico, to history, to comics, to human
              rights and immigrants, friends, family, and art.
            </p>

            <p className="page_paragraph">
              For more information on Raul Gonzalez, visit his website
              <a
                className="page_credits__anchor anchor"
                href={props.artistsURLLink}
                rel="noopener noreferrer"
              >
                {props.artistsURLText}
              </a>
              . You can also pick up copies of his new and awesome book, Low Riders in Space, online
              or (even better!) at local bookstores, including Porter Square Books in Cambridge and
              Brookline Booksmith in Coolidge Corner.
            </p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6 page_column--right">
            <p className="titleDescription titleDescription__right">{props.titleDescription}</p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6 page_column--right">
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

Issue26p43.propTypes = propTypes;
Issue26p43.defaultProps = defaultProps;

export default Issue26p43;
