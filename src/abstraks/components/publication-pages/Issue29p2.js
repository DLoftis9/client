import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';

import Issue29Modal from '../../containers/publication-issue/Issue29Modal';

const issue29Modal = <Issue29Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  submissionsAddress: PropTypes.string.isRequired,
  contactAddress: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,

  staffTitle1: PropTypes.string.isRequired,
  staffTitle2: PropTypes.string.isRequired,
  staffTitle3: PropTypes.string.isRequired,
  staffTitle4: PropTypes.string.isRequired,

  staffName1: PropTypes.string.isRequired,
  staffName2: PropTypes.string.isRequired,
  staffName3: PropTypes.string.isRequired,
  staffName4: PropTypes.string.isRequired,
  staffName5: PropTypes.string.isRequired,
  staffName6: PropTypes.string.isRequired,

  artistsURLLink1: PropTypes.string.isRequired,
  artistsURLLink2: PropTypes.string.isRequired,
  artistsURLLink3: PropTypes.string.isRequired,
  artistsURLLink4: PropTypes.string.isRequired,

  artistsURLName1: PropTypes.string.isRequired,
  artistsURLName2: PropTypes.string.isRequired,
  artistsURLName3: PropTypes.string.isRequired,
  artistsURLName4: PropTypes.string.isRequired,

  tableOfContentTitle: PropTypes.string.isRequired,
  submissions: PropTypes.string.isRequired,
  advertising: PropTypes.string.isRequired,
  socialMedia: PropTypes.string.isRequired,
  artists: PropTypes.string.isRequired,
  issue29_tbc: PropTypes.string.isRequired,

  modalContent: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
};

const defaultProps = {
  prev: '/Publication/issue29p1',
  next: '/Publication/Issue29p3',
  submissionsAddress: 'mailto:info@abstraks.com',
  contactAddress: 'mailto:info@abstraks.com',
  company: 'Abstraks',

  staffTitle1: 'Editor In Chief:',
  staffTitle2: 'Associate Editor:',
  staffTitle3: 'Writers:',
  staffTitle4: 'User Interface Designer/Developer:',

  staffName1: 'Ian Tartasky',
  staffName2: 'Claudia Puccio',
  staffName3: 'Steven Briggs',
  staffName4: 'Pete Cosmos',
  staffName5: 'Darius Loftis',
  staffName6: 'Kendra Long',

  artistsURLLink1: '/Publication/Issue27p3',
  artistsURLLink2: '/Publication/Issue29p4',
  artistsURLLink3: '/Publication/Issue29p12',
  artistsURLLink4: '/Publication/Issue29p19',

  artistsURLName1: 'Letter From The Editor',
  artistsURLName2: 'Chanimation Brothers',
  artistsURLName3: 'Emilie Beadle',
  artistsURLName4: 'Regina Valluzzi',

  tableOfContentTitle: 'Table of Contents: Issue 29',
  submissions: 'Submissions',
  advertising: 'Advertising:',
  socialMedia: 'Social Media:',
  artists: 'Artists',
  issue29_tbc: 'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/issue29_tbc.jpg',

  modalTitle: 'Issue 29 Contents',
  modalContent: function() {
    return issue29Modal;
  },
};

const Issue29p2 = props => (
  <div className="issue-page issue-29">
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
              {props.submissions}@{props.company}.com
            </a>{' '}
            for consideration. Please attach samples of any past writing or photography.
          </p>

          <p className="credits__paragraph">
            To be considered as a featured artist in {props.company} we ask that you send an email
            to{' '}
            <a
              className="credits__anchor anchor"
              href={props.contactAddress}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.submissions}@{props.company}.com
            </a>{' '}
            with attachments of your work, or a link to your work. While we appreciate all{' '}
            {props.submissions}, we cannot respond to all of them. We will review every submission
            and will contact you if you are selected.
          </p>
        </div>

        <div className="credits">
          <h4 className="credits__header">{props.staffTitle3}</h4>
          <span className="credits__paragraph">{props.staffName3}</span>

          <span className="credits__paragraph">{props.staffName4}</span>

          <span className="credits__paragraph">{props.staffName6}</span>

          <span className="credits__paragraph">{props.staffName1}</span>

          <h4 className="credits__header">{props.staffTitle4}</h4>
          <span className="credits__paragraph">{props.staffName5}</span>

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

          <h4 className="credits__header">{props.advertising}</h4>
          <div className="credits__paragraph">
            Interested in advertising in {props.company}? Send an email to Contact@{props.company}
            .com www.{props.company}.com
          </div>

          <h4 className="credits__header">{props.socialMedia}</h4>
          <span className="credits__paragraph">
            <a
              className="credits__anchor anchor"
              href="https://www.facebook.com/pages/{props.company}/163119513734216?ref=aymt_homepage_panel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook.com/{props.company}
            </a>
          </span>
          <span className="credits__paragraph">
            <a
              className="credits__anchor anchor"
              href="https://twitter.com/AbstraksMag"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter: @{props.company}mag
            </a>
          </span>
          <span className="credits__paragraph">
            <a
              className="credits__anchor anchor"
              href="https://abstraksmag.tumblr.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tumblr: {props.company}mag.tumblr.com
            </a>
          </span>
          <span className="credits__paragraph">
            <a
              className="credits__anchor anchor"
              href="https://instagram.com/abstraksmag/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram: @{props.company}mag
            </a>
          </span>
        </div>

        <div className="credits">
          <h4 className="credits__header table-of-contents">{props.tableOfContentTitle}</h4>

          <span className="credits__paragraph">
            <NavLink className="credits__anchor anchor" to={props.artistsURLLink1}>
              {props.artistsURLName1}
            </NavLink>
          </span>

          <h4 className="credits__header">{props.artists}</h4>
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
              {props.artistsURLName3}
            </NavLink>
          </span>
        </div>

        <div className="credits">
          <div className="credits__image">
            <img
              src={props.issue29_tbc}
              className="issue-page__image image"
              alt={props.tableOfContentTitle}
            />
          </div>
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
    </article>

    <PageNav
      prev={props.prev}
      modalTitle={props.modalTitle}
      modalContent={props.modalContent()}
      next={props.next}
    />
  </div>
);

Issue29p2.propTypes = propTypes;
Issue29p2.defaultProps = defaultProps;

export default Issue29p2;
