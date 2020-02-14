import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MobileMenu from '../../../base/scripts/MobileMenu';
import Toggle from '../../../base/scripts/Toggle';
import LogoWhite from '../LogoWhite';

export default class HeaderSocial extends React.PureComponent {
  static propTypes = {
    divClass: PropTypes.string.isRequired,
    buttonClass: PropTypes.string.isRequired,
    buttonIcon: PropTypes.string.isRequired,
    menuTitle: PropTypes.string.isRequired,
    menuContent: PropTypes.object,
    menuContentThird: PropTypes.object,
    menuNav: PropTypes.object,
    componentName: PropTypes.string,
  };

  static defaultProps = {
    divClass: 'navbar__mobileMenu',
    buttonClass: 'navbar__mobileMenuIcon',
    buttonIcon: 'fa fa-bars',
    menuTitle: 'Stay Connected!',
    componentName: 'header-social',
  };

  render() {
    const { context, divClass, buttonClass, buttonIcon, menuTitle, componentName } = this.props;

    // The value of authUser is either an object holding the
    // authenticated user's name and username values, or null.
    // In the return statement we'll conditionally render the
    // header nav content based on the value of authUser
    // (the authenticatedUser state).
    const authUser = context.authenticatedUser;
    return (
      <div className={componentName}>
        <div className={componentName + ` container header__container header__menu`}>
          <LogoWhite />

          <div className="navbar__container--mobile">
            <MobileMenu
              divClass={divClass}
              buttonClass={buttonClass}
              buttonIcon={buttonIcon}
              menuTitle={menuTitle}
            />
          </div>
          {/* <Toggle openContent={}/> */}
          <nav className={componentName + `-nav`}>
            {authUser ? (
              // If authUser evaluates to a truthy value (there is an authenticated
              // user in state), the Header class renders a <span> element containing
              // a "Welcome" message that displays the user name. Render the user's
              // name with {authUser.name}
              <React.Fragment>
                <div className="avatar">
                  <div className="avatar-image">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </div>
                </div>

                <Toggle
                  openContent={
                    <>
                      <span className="triangle-top"></span>
                      <div className="menu">
                        <div className="avatar-name">
                          <h2 className="user-name">{authUser.name}</h2>
                        </div>

                        <Link className="log-out" to="/signout">
                          Sign Out
                        </Link>
                      </div>
                    </>
                  }
                />
              </React.Fragment>
            ) : (
              // If authUser is falsy (the authenticatedUser state is null, for example),
              // the Header class renders the default navigation, displaying the "Sign Up"
              // and "Sign In" links
              <React.Fragment>
                <Link className="signup" to="/signup">
                  Sign Up
                </Link>
                <Link className="signin" to="/signin">
                  Sign In
                </Link>
              </React.Fragment>
            )}
          </nav>
        </div>
      </div>
    );
  }
}
