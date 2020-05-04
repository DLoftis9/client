import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { signout, isAuthenticated } from '../../../base/social/utils/auth';
import Toggle from '../../../base/scripts/Toggle';
import LogoWhite from '../LogoWhite';
import LoggedOutLinks from './LoggedOutLinks';

class HeaderSocial extends React.PureComponent {
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
    const {
      // context,
      componentName,
      history,
    } = this.props;
    const isActive = (history, path) => {
      if (history.location.pathname === path) return { color: '#ff9900' };
      else return { color: '#ff0000' };
    };

    // The value of authUser is either an object holding the
    // authenticated user's name and username values, or null.
    // In the return statement we'll conditionally render the
    // header nav content based on the value of authUser
    // (the authenticatedUser state).

    // const authUser = context.authenticatedUser;

    return (
      <div className={componentName}>
        <div className={componentName + `_container header__container header__menu`}>
          <LogoWhite />

          <div className="navbar__container">
            <nav className={componentName + `-nav`}>
              {isAuthenticated() ? (
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
                            <Link to={`/user/${isAuthenticated().user._id}`}>
                              <h2 className="user-name">{isAuthenticated().user.name}</h2>
                            </Link>
                          </li>
                          <li className="listItem edit-profile_listItem">
                            <Link
                              className="anchor edit-profile_anchor"
                              style={isActive(history, '/profile')}
                              to={`/user/${isAuthenticated().user._id}`}
                            >
                              Profile
                            </Link>
                          </li>
                          <li className="listItem discover_listItem">
                            <Link
                              className="anchor discover_anchor"
                              style={isActive(history, '/find-users')}
                              to="/find-users"
                            >
                              Discover
                            </Link>
                          </li>

                          <li className="listItem settings_listItem">
                            <Link
                              className="anchor settings_anchor"
                              style={isActive(history, '/settings')}
                              to="/settings"
                            >
                              Settings
                            </Link>
                          </li>

                          <li className="listItem privacy-policy_listItem">
                            <Link
                              className="anchor privacy-policy_anchor"
                              style={isActive(history, '/privacy-policy')}
                              to="/privacy-policy"
                            >
                              Privacy Policy
                            </Link>
                          </li>
                          <li className="listItem terms-of-use_listItem">
                            <Link
                              className="anchor terms-of-use_anchor"
                              style={isActive(history, '/terms-of-use')}
                              to="/terms-of-use"
                            >
                              Terms Of Use
                            </Link>
                          </li>
                          <li className="listItem log-out_listItem">
                            <button
                              className="anchor log-out_anchor"
                              onClick={() => signout(() => history.push('/signin'))}
                            >
                              Sign Out
                            </button>
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

export default withRouter(HeaderSocial);
