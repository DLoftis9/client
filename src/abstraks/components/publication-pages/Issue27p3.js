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
  letterFromTheEditor: PropTypes.string.isRequired,
  submissionsAddress: PropTypes.string.isRequired,
  contactAddress: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/issue27p2',
  next: '/Publication/Issue27p4',
  letterFromTheEditor:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/john_guthrie/letterFromTheEditor__27.jpg',
  submissionsAddress: 'mailto:submissions@abstraks.com',
  contactAddress: 'mailto:contact@abstraks.com',
  company: 'Abstraks',
  pageNumber: 5,
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p3 = props => (
  <div className="issue-page issue-27">
    <div className="header">
      <Header />
    </div>
    <article className="issue-page__container container">
      <div className="issue-page__row row">
        <PublicationHome />
        <div className="page_column-6">
          <img
            src={props.letterFromTheEditor}
            className="issue-page__image image"
            alt="Letter From The Editor 27 Cover"
          />
        </div>

        <h4 className="credits__header table-of-contents page_column-6">Letter From The Editor</h4>

        <div className="page_column-3">
          <h4 className="credits__header credits__header--quote">
            “They always say time changes things, but you actually have to change them yourself.”
          </h4>

          <p className="className=" page_paragraph>
            -Andy Warhol
          </p>

          <p className="className=" page_paragraph>
            Hello readers!
          </p>

          <p className="className=" page_paragraph>
            Welcome, welcome, welcome to your new and improved {props.company}. It’s been a while
            and we’ve missed you. We’re sure you’ve missed us, right?
          </p>

          <p className="className=" page_paragraph>
            You’ll notice, during our break from the publication, we’ve had a bit of a makeover. New
            publication layout. New features. Updates to the website. New Editor In Chief (that’s
            me). We’ve also added video capabilities! This issue is the first step in our{' '}
            {props.company} overhaul. We’re makin’ changes!
          </p>

          <p className="className=" page_paragraph>
            We plan on launching an online {props.company} store with merch and prints from all of
            the amazing artists that we feature. The blog will also not be left behind in the
            overhaul, because we know that’s what you guys want. Did we mention a mobile app a
            little further down the road too?
          </p>
        </div>

        <div className="page_column-3">
          <p className="className=" page_paragraph>
            We aim to only improve from here on out. So get ready and get excited for a quarterly
            publication and several blog posts a week. What’s that, you haven’t subscribed yet?
            Nonsense.
          </p>

          <p className="className=" page_paragraph>
            Why are we attempting so many lofty goals? What’s with all the cool new stuff? Have we
            gone art loco?!? Short answer: Yes!
          </p>

          <p className="className=" page_paragraph>
            We are incredibly passionate about art. Creation is what separates man from beast. Our
            imagination is the single greatest capacity we posses, whether it be divine or
            evolutionary. Without art... Well, I don’t even want to finish that sentence. We have
            the opportunity to share each other’s beautiful creations with the world, and dammit,
            nothing is going to stop us from doing that.
          </p>

          <p className="className=" page_paragraph>
            -Ian S. Tartasky
          </p>
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

Issue27p3.propTypes = propTypes;
Issue27p3.defaultProps = defaultProps;

export default Issue27p3;
