import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  componentName: PropTypes.string,

  dribbleHref: PropTypes.string,
  dribbleText: PropTypes.string,
  dribbbleIcon: PropTypes.string,

  instagramHref: PropTypes.string,
  instagramText: PropTypes.string,
  instagramicon: PropTypes.string,
};

const defaultProps = {
  componentName: 'social',

  dribbleHref: 'https://dribbble.com/100-beans',
  dribbleText: 'Dribbble',
  dribbbleIcon: 'fa fa-dribbble',

  instagramHref: 'https://www.instagram.com/100beansstudio/',
  instagramText: 'Instagram',
  instagramIcon: 'fa fa-instagram',
};

const SocialContent = props => (
  <main className={props.componentName}>
    <div className={props.componentName + `__content`}>
      <p className="links">Social</p>

      <div className={props.componentName + `__content--dribbble`}>
        <a className="anchor" href={props.dribbleHref}>
          <i className={props.dribbbleIcon} />
          {props.dribbleText}
        </a>
      </div>

      <div className={props.componentName + `__content--instagram`}>
        <a className="anchor" href={props.instagramHref}>
          <i className={props.instagramIcon} />
          {props.instagramText}
        </a>
      </div>
    </div>
  </main>
);

SocialContent.propTypes = propTypes;
SocialContent.defaultProps = defaultProps;

export default SocialContent;
