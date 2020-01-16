import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue28Modal from '../../containers/publication-issue/Issue28Modal';

import Issue28ArtistsWatch from '../../containers/publication-issue/Issue28ArtistsWatch';

const issue28Modal = <Issue28Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  introNumber: PropTypes.number.isRequired,
  artistsFirstName: PropTypes.string.isRequired,
  artistsLastName: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p35',
  next: '/Publication/Issue28p37',
  introNumber: 70,
  artistsFirstName: 'Artist',
  artistsLastName: 'To Watch',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p36 = props => (
  <div className="issue-28">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <Issue28ArtistsWatch />
        </div>
        <div className="intro-box intro-box--artistsWatch">
          <p className="intro-number intro-number--artistsWatch">{props.introNumber}</p>
          <h1 className="intro__first-name first-name">{props.artistsFirstName}</h1>
          <h1 className="intro__first-name last-name">{props.artistsLastName}</h1>
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

Issue28p36.propTypes = propTypes;
Issue28p36.defaultProps = defaultProps;

export default Issue28p36;
