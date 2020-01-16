import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import SocialContent from './SocialContent';
import InfoContent from './InfoContent';

import Logo from '../Logo';

const propTypes = {
  componentName: PropTypes.string.isRequired,
  date: PropTypes.objectOf(PropTypes.func).isRequired,

  email: PropTypes.string.isRequired,
  emailText: PropTypes.string.isRequired,
};

const defaultProps = {
  componentName: 'contact-page contact',

  email: 'mailto:hello@100beans.com',
  emailText: 'hello@100beans.com',

  date: new Date(),
};

function formatDate(date) {
  return date.getFullYear();
}

const logo = <Logo />;

const ContactPage = props => (
  <main className={props.componentName}>
    <header className="header">
      <Header logo={logo} />
    </header>

    <div className={props.componentName + `__container container`}>
      <div className={props.componentName + `__row row`}>
        <div className={props.componentName + `__content`}>
          <div className={props.componentName + `__content--title`}>
            <h3 className="title">Say hello</h3>
            <h3 className="title">& tell us how</h3>
            <h3 className="title">we can help you!</h3>
          </div>

          <div className={props.componentName + `__content--email`}>
            <a className="paragraph" href={props.email}>
              {props.emailText}
            </a>
          </div>
        </div>

        <div className={props.componentName + `__content`}>
          <SocialContent />
          <InfoContent />
        </div>

        <div className={props.componentName + `__credits`}>
          <p className={props.componentName + `__paragraph paragraph`}>
            &copy; {formatDate(props.date)} 100 Beans. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </main>
);

ContactPage.propTypes = propTypes;
ContactPage.defaultProps = defaultProps;

export default ContactPage;
