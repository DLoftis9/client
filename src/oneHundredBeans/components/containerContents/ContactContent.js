import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  componentName: PropTypes.string.isRequired,

  email: PropTypes.string.isRequired,
  emailText: PropTypes.string.isRequired,
};

const defaultProps = {
  componentName: 'contact',

  email: 'mailto:hello@100beans.com',
  emailText: 'hello@100beans.com',
};

const ContactContent = props => (
  <main className={props.componentName}>
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
  </main>
);

ContactContent.propTypes = propTypes;
ContactContent.defaultProps = defaultProps;

export default ContactContent;
