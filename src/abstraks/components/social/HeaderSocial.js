import React from 'react';
import { Link } from 'react-router-dom';

export default class HeaderSocial extends React.PureComponent {
  render() {
    const { context } = this.props;

    // The value of authUser is either an object holding the
    // authenticated user's name and username values, or null.
    // In the return statement we'll conditionally render the
    // header nav content based on the value of authUser
    // (the authenticatedUser state).
    const authUser = context.authenticatedUser;
    return (
      <div className="header-social">
        <div className="bounds">
          <h1 className="header--logo">MyAuth</h1>
          <nav>
            {authUser ? (
              // If authUser evaluates to a truthy value (there is an authenticated
              // user in state), the Header class renders a <span> element containing
              // a "Welcome" message that displays the user name. Render the user's
              // name with {authUser.name}
              <React.Fragment>
                <span>Welcome, {authUser.name}!</span>
                <Link to="/signout">Sign Out</Link>
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
