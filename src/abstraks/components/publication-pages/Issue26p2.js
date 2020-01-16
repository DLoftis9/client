import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue26Modal from '../../containers/publication-issue/Issue26Modal';

const issue26Modal = <Issue26Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  submissionsAddress: PropTypes.string.isRequired,
  contactAddress: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  issue26_1: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/issue26p1',
  next: '/Publication/Issue26p3',
  submissionsAddress: 'mailto:info@abstraks.com',
  contactAddress: 'mailto:info@abstraks.com',
  company: 'Abstraks',
  issue26_1: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/issue26_1.jpg',

  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p2 = props => (
  <div className="issue-page issue-26">
    <div className="header">
      <Header />
    </div>
    <main className="issue-page__container container">
      <div className="issue-page__row row">
        <PublicationHome />
        <div className="credits">
          <h4 className="credits__header">Editor In Chief:</h4>
          <span className="credits__paragraph">Darius Loftis</span>

          <h4 className="credits__header">Associate Editor:</h4>
          <span className="credits__paragraph">Claudia Puccio</span>

          <h4 className="credits__header">Writers:</h4>
          <span className="credits__paragraph">Steven Briggs</span>
          <span className="credits__paragraph">Tim McCool</span>
          <span className="credits__paragraph">Ian Sanity</span>
          <span className="credits__paragraph">Marita Spooner</span>

          <h4 className="credits__header">User Interface Designer/Developer:</h4>
          <span className="credits__paragraph">Darius Loftis</span>

          <h4 className="credits__header">Submissions</h4>
          <p className="credits__paragraph">
            If you would like to be a contributing writer or photographer – to conduct an interview,
            write an article, or cover an event – and you believe it fits our criteria, please email
            us at{' '}
            <a
              className="credits__anchor anchor"
              href={props.submissionsAddress}
              target="_blank"
              rel="noopener noreferrer"
            >
              Submissions@{props.company}.com
            </a>{' '}
            for consideration. Please attach samples of any past writing or photography.
            <br />
          </p>
        </div>

        <div className="credits">
          <p className="credits__paragraph">
            To be considered as a featured artist in {props.company} we ask that you send an email
            to{' '}
            <a
              className="credits__anchor anchor"
              href={props.contactAddress}
              target="_blank"
              rel="noopener noreferrer"
            >
              Submissions@{props.company}.com
            </a>{' '}
            with attachments of your work, or a link to your work. While we appreciate all
            submissions, we cannot respond to all of them. We will review every submission and will
            contact you if you are selected.
          </p>

          <strong className="credits__paragraph">
            For general inquiries please email{' '}
            <a
              className="credits__anchor anchor"
              href={props.contactAddress}
              target="_blank"
              rel="noopener noreferrer"
            >
              contact@{props.company}.com
            </a>{' '}
            and we’ll respond back at our earliest convenience
          </strong>

          <h4 className="credits__header">Advertising:</h4>
          <div className="credits__paragraph">
            Interested in advertising in {props.company}? Send an email to Contact@{props.company}
            .com www.{props.company}.com
          </div>

          <h4 className="credits__header">Social Media:</h4>
          <nav className="credits__paragraph">
            <a
              className="credits__anchor anchor"
              href="https://www.facebook.com/pages/{props.company}/163119513734216?ref=aymt_homepage_panel"
              rel="noopener noreferrer"
              target="_blank"
            >
              Facebook.com/{props.company}
            </a>
          </nav>
          <nav className="credits__paragraph">
            <a
              className="credits__anchor anchor"
              href="https://twitter.com/AbstraksMag"
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter: @{props.company}mag
            </a>
          </nav>
          <nav className="credits__paragraph">
            <a
              className="credits__anchor anchor"
              href="https://abstraksmag.tumblr.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Tumblr: {props.company}mag.tumblr.com
            </a>
          </nav>
          <nav className="credits__paragraph">
            <a
              className="credits__anchor anchor"
              href="https://instagram.com/abstraksmag/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram: @{props.company}mag
            </a>
          </nav>
        </div>

        <div className="credits">
          <h4 className="credits__header table-of-contents">Table of Contents: Issue 26</h4>

          <h4 className="credits__header">Artists</h4>
          <nav className="credits__paragraph">
            <NavLink className="credits__anchor anchor" to="/Publication/Issue26p3">
              Owen Linders
            </NavLink>
          </nav>
          <nav className="credits__paragraph">
            <NavLink className="credits__anchor anchor" to="/Publication/issue26p11">
              Richard Heckert
            </NavLink>
          </nav>
          <nav className="credits__paragraph">
            <NavLink className="credits__anchor anchor" to="/Publication/issue26p19">
              Rick Berry
            </NavLink>
          </nav>
          <nav className="credits__paragraph">
            <NavLink className="credits__anchor anchor" to="/Publication/issue26p29">
              Taner Tumkaya
            </NavLink>
          </nav>
          <nav className="credits__paragraph">
            <NavLink className="credits__anchor anchor" to="/Publication/issue26p39">
              Raul Gonzalez III
            </NavLink>
          </nav>
        </div>

        <div className="credits">
          <aside className="credits__image">
            <img src={props.issue26_1} className="issue-page__image image" alt="Issue 26 Cover" />
          </aside>
        </div>
      </div>

      <div className="issue-page__row row">
        <div className="credits__rights col-sm-6">
          <p className="rights_reserved titleDescription">
            Unless otherwise mentioned, artists and other parties featured in {props.company} retain
            copyright to their work. Every effort has been made to contact copyright owners or their
            representatives. {props.company} will take pleasure in correcting any mistakes mentioned
            in our future issue. {props.company} LLC. All Rights Reserved
          </p>
        </div>
      </div>
    </main>

    <PageNav
      prev={props.prev}
      next={props.next}
      modalTitle={props.modalTitle}
      modalContent={props.modalContent()}
    />
  </div>
);

Issue26p2.propTypes = propTypes;
Issue26p2.defaultProps = defaultProps;

export default Issue26p2;
