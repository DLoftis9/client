import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MobileMenu from '../../base/scripts/MobileMenu';
import Logo from '../components/Logo';
import Social from '../components/Social';
import Navbar from '../components/Navbar';

export default class Header extends Component {
  static propTypes = {
    divClass: PropTypes.string.isRequired,
    buttonClass: PropTypes.string.isRequired,
    buttonIcon: PropTypes.string.isRequired,
    menuTitle: PropTypes.string.isRequired,
    menuContent: PropTypes.object,
    menuContentThird: PropTypes.object,
    menuNav: PropTypes.object,
  };

  static defaultProps = {
    divClass: 'navbar__mobileMenu',
    buttonClass: 'navbar__mobileMenuIcon',
    buttonIcon: 'fa fa-bars',
    menuTitle: 'Stay Connected!',
  };

  render() {
    const { divClass, buttonClass, buttonIcon, menuTitle } = this.props;

    const getSocial = <Social />;
    const getNavbar = <Navbar />;

    return (
      <div className="container header__container header__menu">
        <Logo />
        <div className="navbar__container--desktop">
          <Social />
        </div>

        <div className="navbar__container--mobile">
          <MobileMenu
            divClass={divClass}
            buttonClass={buttonClass}
            buttonIcon={buttonIcon}
            menuTitle={menuTitle}
            menuContent={getSocial}
            menuNav={getNavbar}
          />
        </div>
      </div>
    );
  }
}
