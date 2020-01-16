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
  death: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p5',
  next: '/Publication/Issue28p7',
  death:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/michelle_dugan/md_DEATH__A__Tribute__To__Durer_Etching_2015.jpg',
  titleDescription1: 'Death - Etching, 2015',
  pageNumber: 10,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p6 = props => (
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
              But can anyone love these slithering beasts? Michelle seems apt for the job. She dug
              them out of history, medieval folklore, and gave them a new life. Knowing that someone
              cares about these creatures gives you a pause. Maybe she sees something that other
              people don’t. They’re probably just like anyone else. They have needs. Being alone is
              probably one of them. After a few eerie glares, you start to get the feeling that
              these images don’t want you here. These guys could do some real damage, if given the
              opportunity. Look in their eyes and it’s a blazing hatred that rejects you. They’re
              not here to gain your favor and neither is Michelle. She should be starting a new
              movement, the name of which doesn’t really matter. Just fuck off and die. Placing
              Michelle as an artist is tricky. Well nurtured and refined, her technical skill
              radiates placidity, while her subject matter gives you the finger. It’s refreshing to
              see work that isn’t clamoring for your love and attention. Fierce and archaic, these
              portraits of evil resist notions of merit and beauty, free instead to burrow out a
              following in the devil’s basement. That mix of tradition and revulsion is what brings
              the work out of
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.death}
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

Issue28p6.propTypes = propTypes;
Issue28p6.defaultProps = defaultProps;

export default Issue28p6;
