import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Footer from '../components/Footer';

const propTypes = {
  contactAddress: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

const defaultProps = {
  contactAddress: 'mailto:info@abstraks.com',
  company: 'Abstraks',
};

const ContactContent = props => (
  <div className="contact">
    <div className="header">
      <Header />
    </div>

    <div className="container contact__container">
      <h2 className="container__title">Contact</h2>
      <div className="row contact__row">
        <div className="contact__content">
          <p className="contact__paragraph">
            For general inquiries please email,{' '}
            <a
              className="contact__anchor anchor"
              href={props.contactAddress}
              target="_blank"
              rel="noopener noreferrer"
            >
              Info@{props.company}
            </a>{' '}
            and we’ll respond back at our earliest convenience. Thank you.
          </p>

          <nav className="contact__paragraph">
            <p className="social__icon social__icon--facebook--contact">
              <i className="fa fa-facebook-square" aria-hidden="true" />
            </p>{' '}
            Facebook:
            <a
              className="contact__anchor anchor"
              href="https://www.facebook.com/pages/{props.company}/163119513734216?ref=aymt_homepage_panel"
              rel="noopener noreferrer"
              target="_blank"
            >
              Facebook.com/{props.company}
            </a>
          </nav>

          <nav className="contact__paragraph">
            <p className="social__icon social__icon--instagram--contact">
              <i className="fa fa-instagram" aria-hidden="true" />
            </p>{' '}
            Instagram:
            <a
              className="contact__anchor anchor"
              href="https://instagram.com/abstraksmag/"
              rel="noopener noreferrer"
              target="_blank"
            >
              @{props.company}mag
            </a>
          </nav>

          <nav className="contact__paragraph">
            <p className="social__icon social__icon--twitter--contact">
              <i className="fa fa-twitter-square" aria-hidden="true" />
            </p>{' '}
            Twitter:
            <a
              className="contact__anchor anchor"
              href="https://twitter.com/AbstraksMag"
              rel="noopener noreferrer"
              target="_blank"
            >
              @{props.company}mag
            </a>
          </nav>

          <nav className="contact__paragraph">
            <p className="social__icon social__icon--tumblr--contact">
              <i className="fa fa-tumblr-square" aria-hidden="true" />
            </p>{' '}
            Tumblr:
            <a
              className="contact__anchor anchor"
              href="https://abstraksmag.tumblr.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              {props.company}mag.tumblr.com
            </a>
          </nav>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

ContactContent.propTypes = propTypes;
ContactContent.defaultProps = defaultProps;

export default ContactContent;
