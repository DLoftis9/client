import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

import HomeMidContent from './HomeMidContent';

import ScrollToHeader from '../../components/ScrollToHeader';
import Footer from '../../components/Footer';
import WorkPieces from '../../components/WorkPieces';
import HomeIntro from './HomeIntro';
import AboutContent from './AboutContent';

import LogoWhite from '../LogoWhite';
export default class HomeContent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      workPieces: [
        {
          id: 1,
          title: 'Abstraks',
          url: '/portfolio/abstraks',
          coverImage: 'https://d1mp0mx7eid2ww.cloudfront.net/assets/images/abstraks-work-intro.jpg',
        },
      ],
    };

    this.scrollToNode = this.scrollToNode.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  static propTypes = {
    aboutComponent: PropTypes.string.isRequired,
    footerComponent: PropTypes.string.isRequired,

    date: PropTypes.objectOf(PropTypes.func).isRequired,
  };

  static defaultProps = {
    aboutComponent: 'about',

    footerComponent: 'footer',
    date: new Date(),
  };

  scrollToNode(node) {
    node.scrollIntoView({ behavior: 'smooth' });
  }

  formatDate(date) {
    return date.getFullYear();
  }

  render() {
    const logoWhite = <LogoWhite />;

    const { aboutComponent, footerComponent } = this.props;

    return (
      <main className="home">
        <div className="home__hero">
          <section className="section section__hero">
            <header className="header">
              <ScrollToHeader
                logo={logoWhite}
                refMethodOne={() => this.scrollToNode(this.refMethodOne)}
                refMethodTwo={() => this.scrollToNode(this.refMethodTwo)}
                refMethodThree={() => this.scrollToNode(this.refMethodThree)}
              />
            </header>
            <div className="hero__container container">
              <div className="hero__row row">
                <h1 className="section__header hero__header">
                  We build products, assist companies to expand, plus provide visual and engaging
                  experiences.
                </h1>
                <div className="hero__down">
                  <i
                    onClick={() => this.scrollToNode(this.introSectionScroll)}
                    className="fa fa-chevron-down"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="intro-section" ref={node => (this.introSectionScroll = node)}>
          <HomeIntro />
        </div>

        <HomeMidContent />

        <div className={aboutComponent} ref={node => (this.refMethodOne = node)}>
          <ScrollAnimation animateIn="fadeIn">
            <AboutContent />
          </ScrollAnimation>
        </div>

        <div className="home-work" ref={node => (this.refMethodTwo = node)}>
          <ScrollAnimation animateIn="fadeIn">
            <div className="home-work__container container">
              <div className="home-work__row row">
                <div className="section__header">
                  <Link to="/work" className="anchor anchor__section" target="_top">
                    <h2 className="work__header">Work</h2>
                  </Link>
                </div>

                {this.state.workPieces.map(options => {
                  return (
                    <WorkPieces
                      key={options.id}
                      title={options.title}
                      url={options.url}
                      coverImage={options.coverImage}
                    />
                  );
                })}
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <div className={footerComponent} ref={node => (this.refMethodThree = node)}>
          <ScrollAnimation animateIn="fadeIn">
            <Footer />
          </ScrollAnimation>
        </div>
      </main>
    );
  }
}
