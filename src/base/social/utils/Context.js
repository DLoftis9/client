import React, { Component } from 'react';
import Cookies from 'js-cookie';
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
    authenticatedUser: Cookies.getJSON('authenticatedUser') || null,
  };

  constructor() {
    super();
    this.data = new Data();
  }

  render() {
    const { authenticatedUser } = this.state;
    const value = {
      authenticatedUser,
      data: this.data,
      actions: {
        signIn: this.signIn,
        signOut: this.signOut,
      },
    };

    // value represents an object containing the context to be shared
    // throughout the component tree.
    return <Context.Provider value={value}>{this.props.children}</Context.Provider>;
  }

  // The signIn function is an asynchronous function that takes a username
  // and password as arguments. signIn uses those credentials to call the
  // getUser() method in Data.js, which makes a GET request to the protected
  // /users route on the server and returns the user data.
  signIn = async (username, password) => {
    const user = await this.data.getUser(username, password);
    if (user !== null) {
      this.setState(() => {
        return {
          authenticatedUser: user,
        };
      });
      // const cookieOptions = {
      //   // 1 day
      //   expires: 1,
      // };

      // A cookie is a file managed by the web browser that can save
      // information from a website.
      // A cookie that stores the authenticated user data (user and username).
      // first argument passed to Cookies.set() specifies the name of the cookie to set.
      // The second argument specifies the value to store in the cookie.
      // Cookies.set('authenticatedUser', JSON.stringify(user), { expires: 5 });
    }
    return user;
  };

  // This removes the name and username properties from state – the user is no longer
  // authenticated and cannot view the private components. Like the signIn function,
  // it's passed the signOut function as an action to <Context.Provider> to
  // make it available to all components connected to context changes.
  signOut = () => {
    this.setState({ authenticatedUser: null });
    Cookies.remove('authenticatedUser');
  };
}

export const Consumer = Context.Consumer;

/**
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

// withContext is a higher-order componen that wraps a provided component in
// a <Context.Consumer> component. withContext automatically subscribes
// (or connects) the component passed to it to all actions and context changes:
export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>{context => <Component {...props} context={context} />}</Context.Consumer>
    );
  };
}
