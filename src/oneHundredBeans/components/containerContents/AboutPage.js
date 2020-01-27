import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Logo from '../Logo';

const propTypes = {
  componentName: PropTypes.string.isRequired,
  aboutIcon: PropTypes.string.isRequired,
  footerComponent: PropTypes.string.isRequired,
};

const defaultProps = {
  componentName: 'about-page about',
  aboutIcon: 'https://d1mp0mx7eid2ww.cloudfront.net/assets/images/about.svg',
  footerComponent: 'footer',
};

const logo = <Logo />;

const AboutContent = props => (
  <div className={props.componentName}>
    <header className="header">
      <Header logo={logo} />
    </header>

    <div className={props.componentName + `__container container`}>
      <div className={props.componentName + `__row row`}>
        <div className={props.componentName + `__icon`}>
          <img src={props.aboutIcon} className="image" alt="Intro icon" />
        </div>

        <div className={props.componentName + `__content`}>
          <h3 className="title">So about us...</h3>

          <p className="paragraph">
            At 100 Beans our passion is to create. Our studio provides an array of business services
            ranging from software development and user interface design to advertising, branding,
            identity & print design.
          </p>

          <p className="paragraph">
            We stay up to date on new technologies and trends, and we are always looking for ways to
            grow and evolve our knowledge base and skill sets. 100 Beans looks forward to helping
            you with your needs, however big or small, or even just an opportunity to say hello and
            connect!
          </p>
        </div>
      </div>
    </div>
    <div className={props.footerComponent}>
      <Footer />
    </div>
  </div>
);

AboutContent.propTypes = propTypes;
AboutContent.defaultProps = defaultProps;

export default AboutContent;
