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
  sayGoodbye: PropTypes.string.isRequired,
  titleDescription: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  linkURL1: PropTypes.string.isRequired,
  linkURL2: PropTypes.string.isRequired,
  linkText1: PropTypes.string.isRequired,
  linkTitle2: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p17',
  next: '/Publication/Issue27p19',
  sayGoodbye:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/anne_johnstone/say-Goodbye%2C-Mixed-Media%2C-41x26--2014.jpg',
  titleDescription: 'Say Goodbye, Mixed Media, 2014, 41” x 26”',
  company: 'Abstraks',
  pageNumber: 35,
  linkURL1: 'http://www.annejohnstone.com/',
  linkURL2: 'https://www.youtube.com/embed/yQ9lbt3KujI',
  linkText1: 'www.annejohnstone.com',
  linkTitle2: 'Anne Johnstone video feature',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p18 = props => (
  <div className="issue-27">
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
                src={props.sayGoodbye}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              It can be overwhelming at times. To see them in a group is to feel the full weight of
              their combined powers. While some left me unresponsive, others incited endless
              curiosity. What were these magical kingdoms, this unconscious place? I couldn’t help
              wanting to know all that I could about the artist. There must be so much more
              underneath the layers she shared. How wonderful it would be to borrow her dreams. I
              wanted to read about the characters that she had created. It’s thrilling to marvel at
              such faraway worlds where anything is possible. There was a longing to escape this
              mortal prison in search of more fantastic realms. If only it were real. I share her
              alien qualities. Maybe we all want to be living on another planet where the spirit
              moves, the gods are kind, and everything is out in the open. No more reasons to hide.
              Too bad it’s just a dream.
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              Anne Johnstone lives and works in Somerville, MA. Be sure to click on the artist video
              to hear Anne in her own words and at work in her studio.
            </p>
            <p className="page_paragraph">
              Jump over to Anne’s website{' '}
              <a className="anchor" href={props.linkURL1} target="_blank" rel="noopener noreferrer">
                {props.linkText1}
              </a>{' '}
              for more images.
            </p>
            <p className="page_paragraph">
              <iframe
                className="embed-responsive"
                src={props.linkURL2}
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title={props.linkTitle2}
              />
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

Issue27p18.propTypes = propTypes;
Issue27p18.defaultProps = defaultProps;

export default Issue27p18;
