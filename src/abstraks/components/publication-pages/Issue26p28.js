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
  toAbsentFriends: PropTypes.string.isRequired,
  artistsURL1: PropTypes.string.isRequired,
  artistsURL2: PropTypes.string.isRequired,
  artistsURL3: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p27',
  next: '/Publication/Issue26p29',
  titleDescription: 'To Absent Friends - Oil',
  toAbsentFriends:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/rick_berry/rb_to_absent_friends_oil_10.jpg',
  artistsURL1: 'https://www.facebook.com/rickberrystudio?_rdr',
  artistsURL2: 'http://blog.rickberrystudio.com/',
  artistsURL3: 'http://rickberrystudio.com/',
  artistsURLText1: 'facebook.com/rickberrystudio',
  artistsURLText2: 'blog.rickberrystudio.com (tumblr)',
  artistsURLText3: 'rickberrystudio.com',
  company: 'Abstraks',
  pageNumber: 55,
  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p28 = props => (
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
                src={props.toAbsentFriends}
                className="artist-work__image image"
                alt={props.titleDescription}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              stripping away the perfect qualities in his work. He wants little to do with
              recreating the great annals of historical painting. Yet for the works where the figure
              remains for the most part intact, the viewer can instantly recall a historical
              counterpart. Ultimately, the more the viewer can recognize the figure, the less
              interesting the work becomes. Traditional romanticism tends to overshadow the arcane
              complexity in his art. In every case, Berry’s best pieces are those that drift more
              towards the unconscious than the conscious.
            </p>
            <p className="page_paragraph">
              View Berry’s work in upcoming exhibitions in Boston at Liquid Art House this spring
              and in New York, at Jonathan LeVine Gallery, this summer.
            </p>
            <p className="page_paragraph">
              <a
                className="page_credits__anchor anchor"
                href={props.artistsURL1}
                target="_top"
                rel="noopener noreferrer"
              >
                {props.artistsURLText1}
              </a>

              <a
                className="page_credits__anchor anchor"
                href={props.artistsURL2}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.artistsURLText2}
              </a>

              <a
                className="page_credits__anchor anchor"
                href={props.artistsURL3}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.artistsURLText3}
              </a>
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

Issue26p28.propTypes = propTypes;
Issue26p28.defaultProps = defaultProps;

export default Issue26p28;
