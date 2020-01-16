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
  titleDescription1: PropTypes.string.isRequired,
  artistsURL: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  garibaldiAndTheRedShirt: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p9',
  next: '/Publication/Issue26p11',
  titleDescription1: 'Garibaldi and the Red Shirt - Mixed Media and Collage - 2014',
  artistsURL: 'https://owenlinders.wordpress.com/',
  company: 'Abstraks',
  pageNumber: 19,
  garibaldiAndTheRedShirt:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/owen_linders/ol_garibaldi_and_the_red_shirt_mixed_media_and_+collage_2014.jpg',

  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p10 = props => (
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
                src={props.garibaldiAndTheRedShirt}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              it so that I’m not crazy all the time. It’s almost like they each exercise a different
              skill set. I’m surrounded by all these colorful little paintings and each one is like
              a color study. I was doing these on a larger scale and I never really enjoyed them as
              much. What will happen if I tear them up and get back into them with some sand paper
              and some effort.”
            </p>

            <p className="page_paragraph">
              It’s very often refreshing to find an artist who doesn’t just follow a formula. It’s
              clear that Linders creates to create; he’s a scientist for art. With the dynamic and
              ever-growing skills in Owen’s toolbox there’s no doubt that his future screams of big
              creative things. I for one am looking forward to a full gallery show of installation
              work, with all my fingers crossed. Keep your eyes on the future path of this artist
              because he is already an inspirational and super-talented, artsy dude. To take a peak
              into the unreal, but very real, creative world of Owen Linders check out his blog at:{' '}
              <a className="page_anchor anchor" href={props.artistsURL}>
                owenlinders.wordpress.com
              </a>
            </p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6 page_column--right">
            <p className="titleDescription titleDescription__right">{props.titleDescription1}</p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6 page_column--right">
            <div className="titleDescription titleDescription__right">
              <p>
                {props.company} <strong>{props.pageNumber}</strong>
              </p>
            </div>
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

Issue26p10.propTypes = propTypes;
Issue26p10.defaultProps = defaultProps;

export default Issue26p10;
