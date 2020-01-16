import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MobileMenuAnimated from '../../base/scripts/MobileMenuAnimated';
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
  };

  static defaultProps = {
    divClass: 'navbar__mobileMenu',
    buttonClass: 'navbar__mobileMenuIcon',
    buttonIcon: 'fa fa-bars',
    menuTitle: 'Stay Connected!',
  };

  render() {
    const { divClass, buttonClass, buttonIcon, menuTitle } = this.props;

    const getNavbar = <Navbar />;

    return (
      <div className="container header__container header__menu">
        {this.props.logo}
        <div className="navbar__container--desktop">
          <Navbar />
        </div>

        <div className="navbar__container--mobile">
          <MobileMenuAnimated
            divClass={divClass}
            buttonClass={buttonClass}
            buttonIcon={buttonIcon}
            menuTitle={menuTitle}
            menuNav={getNavbar}
          />
        </div>
      </div>
    );
  }
}
