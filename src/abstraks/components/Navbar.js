import React from 'react';

import NavbarLink from './NavbarLink';

export default class Navbar extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      navbarLinks: [
        {
          id: 1,
          path: '/',
          navbarButton: 'navbar__button navbar__button--home',
          containerName: 'Home',
          navbarButtonIcon: 'navbar__button__icon navbar__button__icon--home',
          iconClass: 'fa fa-home',
        },
        {
          id: 2,
          path: '/contact',
          navbarButton: 'navbar__button navbar__button--contact',
          containerName: 'Contact',
          navbarButtonIcon: 'navbar__button__icon navbar__button__icon--contact',
          iconClass: 'fa fa-envelope',
        },
        {
          id: 3,
          path: '/about',
          navbarButton: 'navbar__button navbar__button--about',
          containerName: 'About',
          navbarButtonIcon: 'navbar__button__icon navbar__button__icon--about',
          iconClass: 'fa fa-info-circle',
        },
        {
          id: 4,
          path: '/termsOfUse',
          navbarButton: 'navbar__button navbar__button--termsOfUse',
          containerName: 'Terms Of Use',
          navbarButtonIcon: 'navbar__button__icon navbar__button__icon--termsOfUse',
          iconClass: 'fa fa-balance-scale',
        },
      ],
    };
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar__container">
          {this.state.navbarLinks.map(options => {
            return (
              <NavbarLink
                key={options.id}
                path={options.path}
                navbarButton={options.navbarButton}
                containerName={options.containerName}
                navbarButtonIcon={options.navbarButtonIcon}
                iconClass={options.iconClass}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
