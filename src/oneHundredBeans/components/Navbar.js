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
          activeClassName: 'is-active',
          pageName: 'Home',
        },
        {
          id: 2,
          path: '/about',
          activeClassName: 'is-active',
          pageName: 'About',
        },
        {
          id: 3,
          path: '/work',
          activeClassName: 'is-active',
          pageName: 'Work',
        },
        {
          id: 4,
          path: '/contact',
          activeClassName: 'is-active',
          pageName: 'Contact',
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
                activeClassName={options.activeClassName}
                pageName={options.pageName}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
