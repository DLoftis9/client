import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MobileMenuAnimated from '../../base/scripts/MobileMenuAnimated';
import ScrollToNavbar from './ScrollToNavbar';
import Navbar from './Navbar';

export default class Header extends Component {
  static propTypes = {
    divClass: PropTypes.string.isRequired,
    buttonClass: PropTypes.string.isRequired,
    buttonIcon: PropTypes.string.isRequired,
    menuTitle: PropTypes.string.isRequired,
    menuContent: PropTypes.object,
    menuNav: PropTypes.object,
    logo: PropTypes.object,
    refMethodOne: PropTypes.func,
    refMethodTwo: PropTypes.func,
    refMethodThree: PropTypes.func,
  };

  static defaultProps = {
    divClass: 'navbar__mobileMenu',
    buttonClass: 'navbar__mobileMenuIcon',
    buttonIcon: 'fa fa-bars',
    menuTitle: 'Stay Connected!',
  };

  render() {
    const {
      divClass,
      buttonClass,
      buttonIcon,
      menuTitle,
      refMethodOne,
      refMethodTwo,
      refMethodThree,
    } = this.props;

    const getMobileNavbar = <Navbar />;

    return (
      <div className="container header__container header__menu">
        {this.props.logo}
        <div className="navbar__container--desktop">
          <ScrollToNavbar
            refMethodOne={refMethodOne}
            refMethodTwo={refMethodTwo}
            refMethodThree={refMethodThree}
          />
        </div>

        <div className="navbar__container--mobile">
          <MobileMenuAnimated
            divClass={divClass}
            buttonClass={buttonClass}
            buttonIcon={buttonIcon}
            menuTitle={menuTitle}
            menuNav={getMobileNavbar}
          />
        </div>
      </div>
    );
  }
}
