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
  doug: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  titleDescription2: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p12',
  next: '/Publication/Issue28p14',
  doug:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/merk_those/mT_Doug-Board_Digital_2016.jpg',
  titleDescription1: 'Doug - Board, Digital, 2016',
  titleDescription2: 'Bubble, Mixed Media, 18" x 17", 2013',
  pageNumber: 24,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p13 = props => (
  <div className="issue-28">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="page_intro__row row">
          <PublicationHome />
          <div className="page_column-6">
            <h3 className="page_intro__header">
              “If you ever saw “Merk Those” shaking up paint cans or mixing paints and starting to
              work, you might think he seems like your typical, traditional graffiti artist, but the
              technique, the execution, and the subject matter would have you stuck waiting to see
              what Merk eventually unveiled. Laterally, his early dabbling and move to share his
              pallet with a digital format to stay, not only with the times but ahead of them, and
              to stay fresh while maintaining a certain unique personalization and motif within his
              work makes Merk anything but typical.”
            </h3>
          </div>
        </div>

        <div className="issue-page__row row">
          <div className="page_column-3">
            <p className="page_paragraph">
              With roots in graffiti, what made you want to make art as more of a profession and
              less of just a passion?
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              When I was a teen just getting into graffiti I read an article about wombat, who I
              already looked up to from walking the tracks. It talked about his art studio and an
              upcoming show he was promoting at some gallery, I don’t know like 1991 or something. I
              never realized there was anything past painting secret graff spots. From that day, I
              knew one day I wanted to be the artist in the article people were discovering. So I
              guess before I could control a can I was thinking beyond being a writer. His work also
              taught me there was so much more than writing your name; his stuff was insane to me.
              His alien characters, like the ones from the
            </p>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.doug}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">{props.titleDescription1}</p>
            <p className="titleDescription">{props.titleDescription2}</p>

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

Issue28p13.propTypes = propTypes;
Issue28p13.defaultProps = defaultProps;

export default Issue28p13;
