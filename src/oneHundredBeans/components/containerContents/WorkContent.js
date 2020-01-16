import React from 'react';
import PropTypes from 'prop-types';
// import ScrollAnimation from 'react-animate-on-scroll';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WorkPieces from '../../components/WorkPieces';

import Logo from '../Logo';

export default class Work extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      workPieces: [
        {
          id: 1,
          title: 'Abstraks',
          url: '/portfolio/abstraks',
          coverImage: 'https://d1mp0mx7eid2ww.cloudfront.net/work/abstraks/logo--green.svg',
        },
      ],
    };
  }

  static propTypes = {
    footerComponent: PropTypes.string.isRequired,
  };

  static defaultProps = {
    footerComponent: 'footer',
  };

  render() {
    const logo = <Logo />;

    const { footerComponent } = this.props;

    return (
      <main id="work" className="work">
        <header className="header">
          <Header logo={logo} />
        </header>

        {/* <ScrollAnimation animateIn="fadeIn"> */}
        <div className="work__container container">
          <div className="work__row row">
            <div className="work__content">
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
        </div>
        {/* </ScrollAnimation> */}

        <div className={footerComponent}>
          <Footer />
        </div>
      </main>
    );
  }
}
