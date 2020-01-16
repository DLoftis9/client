import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import Logo from '../../Logo';

const propTypes = {
  projectLogo: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectLogoAlt: PropTypes.string.isRequired,

  work1: PropTypes.string.isRequired,
  workURL1: PropTypes.string.isRequired,
  workAlt1: PropTypes.string.isRequired,

  work2: PropTypes.string.isRequired,
  workURL2: PropTypes.string.isRequired,
  workAlt2: PropTypes.string.isRequired,

  work3: PropTypes.string.isRequired,
  workURL3: PropTypes.string.isRequired,
  workAlt3: PropTypes.string.isRequired,

  footerComponent: PropTypes.string.isRequired,
};

const defaultProps = {
  projectLogo: 'https://d1mp0mx7eid2ww.cloudfront.net/work/abstraks/logo_brand--green.svg',
  projectDescription:
    'Abstraks is an online art publication that works to spotlight and profile artists as well as produce online technology to help artists grow professionally and socially. 100 Beans redesigned and developed a new look and fresh branding for Abstraks. We also built a new platform for access to their publication library, and a better all-around user experience.',
  projectName: 'Abstraks',
  projectLogoAlt: 'Project Logo',

  work1: 'https://d1mp0mx7eid2ww.cloudfront.net/work/abstraks/desktop__abstraks--1.jpg',
  workURL1: 'https://abstraks.com/',
  workAlt1: 'Abstraks desktop screenshot 1',

  work2: 'https://d1mp0mx7eid2ww.cloudfront.net/work/abstraks/desktop__abstraks--2.jpg',
  workURL2: 'https://abstraks.com/Publication/Issue29p3',
  workAlt2: 'Abstraks desktop screenshot 2',

  work3: 'https://d1mp0mx7eid2ww.cloudfront.net/work/abstraks/iphone__abstraks--1.jpg',
  workURL3: 'https://abstraks.com/Publication/issue29p1',
  workAlt3: 'Abstraks mobile screenshot 1',

  footerComponent: 'footer',
};

const logo = <Logo />;

const AbstraksContent = props => (
  <main className="abstraks">
    <header className="header">
      <Header logo={logo} />
    </header>

    <div className="work work__abstraks">
      {/* intro items */}

      <a href={props.workURL1} className="work__content work__intro">
        <img src={props.projectLogo} className="image" alt={props.projectLogoAlt} />
      </a>

      <div className="work__content work__intro work__intro--description">
        <h2 className="title">{props.projectName}</h2>
        <p className="paragraph">{props.projectDescription}</p>
      </div>

      {/* intro items END */}
      <ScrollAnimation animateIn="fadeIn">
        <div className="work__container container">
          <div className="work__issueRow row">
            <a
              href={props.workURL1}
              className="work__content work__content--image work__content-image--1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={props.work1} className="image" alt={props.workAlt1} />
            </a>

            <a
              href={props.workURL2}
              className="work__content work__content--image work__content-image--2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={props.work2} className="image" alt={props.workAlt2} />
            </a>

            <a
              href={props.workURL3}
              className="work__content work__content--image work__content-image--3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={props.work3} className="image" alt={props.workAlt3} />
            </a>
          </div>
        </div>
      </ScrollAnimation>
    </div>

    <div className={props.footerComponent}>
      <Footer />
    </div>
  </main>
);

AbstraksContent.propTypes = propTypes;
AbstraksContent.defaultProps = defaultProps;

export default AbstraksContent;
