import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue27Modal from '../../containers/publication-issue/Issue27Modal';

const issue27Modal = <Issue27Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  submissionsAddress: PropTypes.string.isRequired,
  contactAddress: PropTypes.string.isRequired,
  abstraks: PropTypes.string.isRequired,

  staffTitle1: PropTypes.string.isRequired,
  staffTitle2: PropTypes.string.isRequired,
  staffTitle3: PropTypes.string.isRequired,
  staffTitle4: PropTypes.string.isRequired,

  staffName1: PropTypes.string.isRequired,
  staffName2: PropTypes.string.isRequired,
  staffName3: PropTypes.string.isRequired,
  staffName4: PropTypes.string.isRequired,
  staffName5: PropTypes.string.isRequired,

  artistsURLLink1: PropTypes.string.isRequired,
  artistsURLLink2: PropTypes.string.isRequired,
  artistsURLLink3: PropTypes.string.isRequired,
  artistsURLLink4: PropTypes.string.isRequired,
  artistsURLLink5: PropTypes.string.isRequired,

  artistsURLName1: PropTypes.string.isRequired,
  artistsURLName2: PropTypes.string.isRequired,
  artistsURLName3: PropTypes.string.isRequired,
  artistsURLName4: PropTypes.string.isRequired,
  artistsURLName5: PropTypes.string.isRequired,

  tableOfContentTitle: PropTypes.string.isRequired,
  submissions: PropTypes.string.isRequired,
  advertising: PropTypes.string.isRequired,
  socialMedia: PropTypes.string.isRequired,
  artists: PropTypes.string.isRequired,
  issue27_1: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/issue27p1',
  next: '/Publication/Issue27p3',
  submissionsAddress: 'mailto:info@abstraks.com',
  contactAddress: 'mailto:info@abstraks.com',
  abstraks: 'Abstraks',

  staffTitle1: 'Editor In Chief:',
  staffTitle2: 'Associate Editor:',
  staffTitle3: 'Writers:',
  staffTitle4: 'User Interface Designer/Developer:',

  staffName1: 'Ian Tartasky',
  staffName2: 'Claudia Puccio',
  staffName3: 'Steven Briggs',
  staffName4: 'Marita Spooner',
  staffName5: 'Darius Loftis',

  artistsURLLink1: '/Publication/Issue27p4',
  artistsURLLink2: '/Publication/Issue27p11',
  artistsURLLink3: '/Publication/Issue27p19',
  artistsURLLink4: '/Publication/Issue27p23',
  artistsURLLink5: '/Publication/Issue27p31',

  artistsURLName1: 'Jacob Leidolf',
  artistsURLName2: 'Anne Johnstone',
  artistsURLName3: 'Sweet Tree',
  artistsURLName4: 'John Guthrie',
  artistsURLName5: 'Artists To Watch',

  tableOfContentTitle: 'Table of Contents: Issue 27',
  submissions: 'Submissions',
  advertising: 'Advertising:',
  socialMedia: 'Social Media:',
  artists: 'Artists',
  issue27_1: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/issue27_1.jpg',

  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p2 = props => (
  <div className="issue-page issue-27">
    <div className="header">
      <Header />
    </div>
    <article className="issue-page__container container">
      <div className="issue-page__row row">
        <PublicationHome />
        <div className="credits">
          <h4 className="credits__header">{props.staffTitle1}</h4>
          <span className="credits__paragraph">{props.staffName1}</span>

          <h4 className="credits__header">{props.staffTitle2}</h4>
          <span className="credits__paragraph">{props.staffName2}</span>

          <h4 className="credits__header">{props.staffTitle3}</h4>
          <span className="credits__paragraph">{props.staffName3}</span>
          <span className="credits__paragraph">{props.staffName1}</span>
          <span className="credits__paragraph">{props.staffName4}</span>

          <h4 className="credits__header">{props.staffTitle4}</h4>
          <span className="credits__paragraph">{props.staffName5}</span>

          <h4 className="credits__header">{props.submissions}</h4>
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
              Submissions@{props.abstraks}.com
            </a>{' '}
            for consideration. Please attach samples of any past writing or photography.
            <br />
          </p>
        </div>

        <div className="credits">
          <p className="credits__paragraph">
            To be considered as a featured artist in {props.abstraks} we ask that you send an email
            to{' '}
            <a
              className="credits__anchor anchor"
              href={props.contactAddress}
              target="_blank"
              rel="noopener noreferrer"
            >
              Submissions@{props.abstraks}.com
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
              contact@{props.abstraks}.com
            </a>{' '}
            and we’ll respond back at our earliest convenience
          </strong>

          <h4 className="credits__header">{props.advertising}</h4>
          <div className="credits__paragraph">
            Interested in advertising in {props.abstraks}? Send an email to Contact@{props.abstraks}
            .com www.{props.abstraks}.com
          </div>

          <h4 className="credits__header">{props.socialMedia}</h4>
          <span className="credits__paragraph">
            <a
              className="credits__anchor anchor"
              href="https://www.facebook.com/pages/{props.abstraks}/163119513734216?ref=aymt_homepage_panel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook.com/{props.abstraks}
            </a>
          </span>
          <span className="credits__paragraph">
            <a
              className="credits__anchor anchor"
              href="https://twitter.com/AbstraksMag"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter: @{props.abstraks}mag
            </a>
          </span>
          <span className="credits__paragraph">
            <a
              className="credits__anchor anchor"
              href="https://abstraksmag.tumblr.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tumblr: {props.abstraks}mag.tumblr.com
            </a>
          </span>
          <span className="credits__paragraph">
            <a
              className="credits__anchor anchor"
              href="https://instagram.com/abstraksmag/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram: @{props.abstraks}mag
            </a>
          </span>
        </div>

        <div className="credits">
          <h4 className="credits__header table-of-contents">{props.tableOfContentTitle}</h4>

          <h4 className="credits__header">{props.artists}</h4>
          <span className="credits__paragraph">
            <NavLink className="credits__anchor anchor" to={props.artistsURLLink1}>
              {props.artistsURLName1}
            </NavLink>
          </span>
          <span className="credits__paragraph">
            <NavLink className="credits__anchor anchor" to={props.artistsURLLink2}>
              {props.artistsURLName2}
            </NavLink>
          </span>
          <span className="credits__paragraph">
            <NavLink className="credits__anchor anchor" to={props.artistsURLLink3}>
              {props.artistsURLName3}
            </NavLink>
          </span>
          <span className="credits__paragraph">
            <NavLink className="credits__anchor anchor" to={props.artistsURLLink4}>
              {props.artistsURLName4}
            </NavLink>
          </span>
          <span className="credits__paragraph">
            <NavLink className="credits__anchor anchor" to={props.artistsURLLink5}>
              {props.artistsURLName5}
            </NavLink>
          </span>
        </div>

        <div className="credits">
          <div className="credits__image">
            <img src={props.issue27_1} className="issue-page__image image" alt="Issue 27 Cover" />
          </div>
        </div>
      </div>

      <div className="issue-page__row row">
        <div className="credits__rights col-sm-6">
          <p className="rights_reserved titleDescription">
            Unless otherwise mentioned, artists and other parties featured in {props.abstraks}{' '}
            retain copyright to their work. Every effort has been made to contact copyright owners
            or their representatives. {props.abstraks} will take pleasure in correcting any mistakes
            mentioned in our future issue. {props.abstraks} LLC. All Rights Reserved
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

Issue27p2.propTypes = propTypes;
Issue27p2.defaultProps = defaultProps;

export default Issue27p2;
