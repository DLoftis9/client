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
  knight: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p7',
  next: '/Publication/Issue28p9',
  knight:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/michelle_dugan/md_KNIGHT__A__Tribute__To__Durer_Etching_2015.jpg',
  titleDescription1: 'Knight - Etching, 2015',
  pageNumber: 14,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p8 = props => (
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
              ideology as an all too convenient “get out of jail free card.” Agents of the devil
              would creep into your home, suspend your sense of good will, and force you to commit
              unspeakable crimes. How’s that for a legal defense? Michelle notes some commonalities
              between the judicial regressions of the past and today’s religious rhetoric. She sites
              the hypocritical attitude among many Americans as fodder for social irresponsibility.
              Environmentalists that don’t recycle and good Christians that condemn homosexuals sit
              atop her hit list. She’d rather have our societal demons out in the open, not
              disguised behind highbrow causes and holy crusades.
            </p>

            <p className="page_paragraph">
              From an outsider’s point of view, these demons have no part in today’s war of ideals.
              They have no appetite for the annals of law and politics. They’re content plotting
              their schemes from a distance. It’s humanity’s drive for redemption that pulls them
              into the game. Michelle is happy to hold up the mirror of society, revealing the
              crimes of our past. It’s not just demons we use as scapegoats; anything will do.
              Whatever faults we find in ourselves, we’re quick to peddle off
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.knight}
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

Issue28p8.propTypes = propTypes;
Issue28p8.defaultProps = defaultProps;

export default Issue28p8;
