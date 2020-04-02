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
    // Set the initial state of the Provider class to the value stored in the
    // 'authenticatedUser' cookie or null. Retrieve the value of the cookie
    // using Cookies.getJSON(), which takes the cookie name ('authenticatedUser')
    // as a parameter
    authenticatedUser: Cookies.getJSON('authenticatedUser') || null,
    isToggleOn: true, // ref LikeWidget
    inputList: [
      {
        type: 'INPUT',
        text: '',
        labelName: 'Location',
        labelNameEditing: 'Editing Location',
      },
      {
        type: 'INPUT',
        text: 'email@test.com',
        labelName: 'Email',
        labelNameEditing: 'Editing Email',
      },
      {
        type: 'INPUT',
        text: 'www.test.com',
        labelName: 'Website',
        labelNameEditing: 'Editing Website',
      },
    ], // ref EditTextInputSingle
    editing: false, // ref EditTextInputSingleSubject
    text: '', // ref EditTextInputSingleSubject
    showError: false, // ref EditTextInputSingleSubject
  };

  constructor() {
    super();
    this.data = new Data();
  }

  render() {
    const { authenticatedUser, isToggleOn, inputList, editing, text, showError } = this.state;

    const value = {
      authenticatedUser,
      isToggleOn,
      inputList,
      editing,
      text,
      showError,
      data: this.data,
      actions: {
        updateEmail: this.updateEmail,
        signIn: this.signIn,
        signOut: this.signOut,
        handleLikeClick: this.handleLikeClick,
      },
    };

    // value represents an object containing the context to be shared
    // throughout the component tree.
    return <Context.Provider value={value}>{this.props.children}</Context.Provider>;
  }

  // EditTextInputSingle component logic
  handleSaveSubject = async email => {
    const userEmail = await this.data.editUserEmail(email);
    const { text } = this.state;

    if (text !== '') {
      this.setState(() => {
        return {
          editing: false,
          text,
        };
      });
    } else {
      this.setState({ showError: true });
    }
  };

  handleUpdateText = e => {
    e.preventDefault();
    const { value } = e.target;
    this.setState(() => {
      return { text: value };
    });
    this.setState(() => {
      return { showError: false };
    });
  };
  // EditTextInputSingle component logic end

  handleLikeClick = () => {
    this.setState(prevState => {
      return {
        isToggleOn: !prevState.isToggleOn,
      };
    });
  };

  updateEmail = async (email) => {
    const userEmail = await this.data.editUserEmail(email);

    if (userEmail !== null) {
      this.setState(() => {
        return {
          authenticatedUser: userEmail,
        };
      });
    }

    return userEmail;
  };

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

      // A cookie is a file managed by the web browser that can save
      // information from a website.

      // A cookie that stores the authenticated user data (user and username).
      // first argument passed to Cookies.set() specifies the name of the cookie to set.
      // The second argument specifies the value to store in the cookie.

      // The method Cookies.getJSON(), which reads a cookie and parses its
      // stringified value to JSON (according to JSON.parse).
      // When the app loads (or reloads), the authenticatedUser state will either be
      // the user object stored in the cookie or null. If there is a user in state
      // (a cookie exists), the authenticatedUser data persists, which means that the
      // PrivateRoute and Header components continue to render the user data and
      // Authenticated component. If the value in state is null (which is also set
      // on sign out), the user will not be able to access the private routes and
      // data until they sign in.

      Cookies.set('authenticatedUser', JSON.stringify(user), { expires: 10 });
    }
    return user;
  };

  // This removes the name and username properties from state – the user is no longer
  // authenticated and cannot view the private components. Like the signIn function,
  // it's passed the signOut function as an action to <Context.Provider> to
  // make it available to all components connected to context changes.
  signOut = () => {
    this.setState({ authenticatedUser: null });
    // Cookies.remove() method, which deletes a cookie created by Cookies.set()
    // Passing Cookies.remove() the name of the cookie to delete ('authenticatedUser')
    Cookies.remove('authenticatedUser');
  };
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
