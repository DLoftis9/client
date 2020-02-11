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
                to={{
                  pathname: '/signin',
                  state: { from: props.location },
                }}
              />
            )
          }
        />
      )}
    </Consumer>
  );
};
