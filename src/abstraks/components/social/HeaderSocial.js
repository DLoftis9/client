import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Toggle from '../../../base/scripts/Toggle';
import LogoWhite from '../LogoWhite';
import LoggedOutLinks from './LoggedOutLinks';

// implement dropdown menu https://codepen.io/taylorharwood/pen/EggrOO
export default class HeaderSocial extends React.PureComponent {
  static propTypes = {
    componentName: PropTypes.string,
    openContent: PropTypes.object,

    authUser: PropTypes.object,
    authUserName: PropTypes.object,

    headerContent: PropTypes.array,
  };

  static defaultProps = {
    componentName: 'header-social',
  };

  render() {
    const { context, componentName } = this.props;

    // The value of authUser is either an object holding the
    // authenticated user's name and username values, or null.
    // In the return statement we'll conditionally render the
    // header nav content based on the value of authUser
    // (the authenticatedUser state).
    const authUser = context.authenticatedUser;
    return (
      <div className={componentName}>
        <div className={componentName + `_container header__container header__menu`}>
          <LogoWhite />

          <div className="navbar__container">
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
                        <ul className="menu">
                          <li className="avatar-name">
                            <h2 className="user-name">{authUser.name}</h2>
                          </li>
                          <li className="listItem edit-profile_listItem">
                            <Link className="anchor edit-profile_anchor" to="/profile">
                              Profile
                            </Link>
                          </li>
                          <li className="listItem discover_listItem">
                            <Link className="anchor discover_anchor" to="/discover">
                              Discover
                            </Link>
                          </li>

                          <li className="listItem settings_listItem">
                            <Link className="anchor settings_anchor" to="/settings">
                              Settings
                            </Link>
                          </li>

                          <li className="listItem privacy-policy_listItem">
                            <Link className="anchor privacy-policy_anchor" to="/privacy-policy">
                              Privacy Policy
                            </Link>
                          </li>
                          <li className="listItem terms-of-use_listItem">
                            <Link className="anchor terms-of-use_anchor" to="/terms-of-use">
                              Terms Of Use
                            </Link>
                          </li>
                          <li className="listItem log-out_listItem">
                            <Link className="anchor log-out_anchor" to="/signout">
                              Sign Out
                            </Link>
                          </li>
                        </ul>
                      </>
                    }
                  />
                </React.Fragment>
              ) : (
                // If authUser is falsy (the authenticatedUser state is null, for example),
                // the Header class renders the default navigation, displaying the "Sign Up"
                // and "Sign In" links
                <LoggedOutLinks />
              )}
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
