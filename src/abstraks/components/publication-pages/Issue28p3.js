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
  issue28_lfte: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/issue28p2',
  next: '/Publication/Issue28p4',
  issue28_lfte: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/issue28_lfte.jpg',
  company: 'Abstraks',
  pageNumber: 5,
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p3 = props => (
  <div className="issue-page issue-28">
    <div className="header">
      <Header />
    </div>
    <article className="issue-page__container container">
      <div className="issue-page__row row">
        <PublicationHome />
        <div className="page_column-6">
          <img
            src={props.issue28_lfte}
            className="issue-page__image image"
            alt="Letter From The Editor 28 Cover"
          />
        </div>

        <h4 className="credits__header table-of-contents page_column-6">Letter From The Editor</h4>

        <div className="page_column-3">
          <h4 className="credits__header credits__header--quote">
            “Real painters understand with a brush in their hand.”
          </h4>

          <p className="page_paragraph">-Berthe Morisot</p>

          <p className="page_paragraph">Hi,</p>

          <p className="page_paragraph">
            Putting together this issue made me a bit giddy, as it contains a few of my favorite
            local artists and one of my all time inspirations that we yanked over from the west
            coast.
          </p>

          <p className="page_paragraph">
            The one major common thread that ties Michelle Dugan, Allison Bamcat, Merk Those, and
            Camilla d’Errico together is control. Be it spray can, paintbrush, paint marker, tattoo
            gun, or pen; these four all handle their weapons with supreme skill, as if the tools had
            always been in their hands. Each item a window into consciousness, into total
            understanding.
          </p>
        </div>

        <div className="page_column-3">
          <p className="page_paragraph">
            Perhaps wielding these instruments is a way to examine the world both inside and outside
            of the mind. Mentally or physically, there’s definitely no sloppy work going on here.
            Perhaps it’s love. Perhaps it’s a coping mechanism. Perhaps it’s an addiction. Whatever
            the reason they use their materials, they are masters of control, and we praise them in
            this issue.
          </p>

          <p className="page_paragraph">-Ian S. Tartasky</p>
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
);

Issue28p3.propTypes = propTypes;
Issue28p3.defaultProps = defaultProps;

export default Issue28p3;
