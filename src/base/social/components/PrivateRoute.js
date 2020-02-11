import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from '../utils/Context';

// The function first destructures and renames the component
// prop in its parameters. It also collects any props that
// get passed to it in a ...rest variable
export default ({ component: Component, ...rest }) => {
  return (
    // The <Consumer> component subscribes PrivateRoute
    // to all the actions and data provided by Context.js

    // Anything rendered within <Consumer> is connected to
    // context changes, which means that <Route> has access
    // to the authenticatedUser state (via context.authenticatedUser).
    // The value of context.authenticatedUser is either an object
    // holding the authenticated user's name and username, or null.
    <Consumer>
      {context => (
        // A <Route> component is rendered inside the consumer
        // and any specified props (like path) are passed to
        // it via ...rest
        <Route
          {...rest}
          // render prop, check whether or not the user is authenticated
          // (there is an authenticated user in state)
          render={props =>
            context.authenticatedUser ? (
              <Component {...props} />
            ) : (
              // The <Redirect> component instructs the router to redirect
              // from one route to another. The value passed to its to prop
              // specifies the URL to redirect to – in this case /signin
              <Redirect
                // The object contains information about the path to redirect to
                // (if not authenticated), and the route the user was trying to
                // access before being redirected.
                to={{
                  pathname: '/signin',
                  // The state property holds information about the user's current
                  // location (i.e., the current browser URL). That way, if
                  // authentication is successful, the router can redirect the user
                  // back to the original location (from: props.location).
                  state: { from: props.location },
                  // Usage Example, the app also has the private route /settings.
                  // A user who isn’t authenticated tries to access /settings and
                  // is redirected to the "Sign In" page. The user submits the sign
                  // in form, and instead of redirecting to /settings (the page they
                  // want to access) they redirect to /authenticated. A better
                  // experience would be to redirect the user back to the page they
                  // were trying to access once they're authenticated.
                }}
              />
            )
          }
        />
      )}
    </Consumer>
  );
};
