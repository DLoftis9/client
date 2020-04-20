import React, { Component } from 'react';
import Data from './Data';

const Context = React.createContext();

// A higher-order component (HOC) that shares functionality across
// the components of the app. This allows reusability for component logic
// and state. "Context" is used in React when data needs to
// be accessible by many components at different nesting levels.

// Context is primarily used when some data needs to be accessible by many
// components at different nesting levels. Context lets you pass data
// through the component tree without having to pass props down manually at
// every level.

// When using the Context API, the Provider is what provides the
// data that needs to be consumed by other components of the application.

// The Provider class in the file Context.js is a "higher-order component"
// that returns a Provider component which provides the application state and
// any actions or event handlers that need to be shared between components,
// via a required value prop.
export class Provider extends Component {
  // If authenticatedUser is null (there is no authenticated user), for SocialHeader
  // display the default header. Otherwise, display the user name in
  // the header in a "Welcome" message alongside a "Sign Out" link.
  state = {
    // Set the initial state of the Provider class to the value stored in the
    // 'authenticatedUser' cookie or null. Retrieve the value of the cookie
    // using Cookies.getJSON(), which takes the cookie name ('authenticatedUser')
    // as a parameter
  };

  constructor() {
    super();
    this.data = new Data();
  }

  render() {
    const value = {
      data: this.data,
    };

    // value represents an object containing the context to be shared
    // throughout the component tree.
    return <Context.Provider value={value}>{this.props.children}</Context.Provider>;
  }
}

export const Consumer = Context.Consumer;

/**
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

// withContext is a higher-order component that wraps a provided component in
// a <Context.Consumer> component. withContext automatically subscribes
// (or connects) the component passed to it to all actions and context changes:
export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>{context => <Component {...props} context={context} />}</Context.Consumer>
    );
  };
}
