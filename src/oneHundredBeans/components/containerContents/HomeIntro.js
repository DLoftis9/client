import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

const propTypes = {
  componentName: PropTypes.string.isRequired,
  introIcon: PropTypes.string.isRequired,
};

const defaultProps = {
  componentName: 'home-intro',
  introIcon: 'https://s3-us-west-1.amazonaws.com/100beans.com/assets/images/intro.svg',
};

const HomeIntro = props => (
  <div className={props.componentName}>
    <ScrollAnimation animateIn="fadeIn">
      <div className={props.componentName + `__container container`}>
        <div className={props.componentName + `__issueRow row`}>
          <div className="home-intro__content">
            <div className={props.componentName + `__icon`}>
              <img src={props.introIcon} className="image" alt="Intro icon" />
            </div>

            <h3 className="home-intro__header">
              <span className="callout">100 Beans</span> is the studio that’ll help you with the
              necessary services you need.
            </h3>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  </div>
);

HomeIntro.propTypes = propTypes;
HomeIntro.defaultProps = defaultProps;

export default HomeIntro;
