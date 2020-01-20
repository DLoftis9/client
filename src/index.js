import React from 'react';
import ReactDOM from 'react-dom';

import './abstraks/App.scss';
import App from './abstraks/App';
import * as serviceWorker from './serviceWorker';

import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';
import createStore from './base/social/store';
import setAuthToken from './base/social/setAuthToken';
import { logoutUser, setCurrentUser } from './base/social//actions/authActions';

const store = createStore();

// Code snippet from Krunal
// https://appdividend.com/2018/07/18/react-redux-node-mongodb-jwt-authentication/#React_Redux_Node_MongoDB_JWT_Authentication
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwtDecode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('abstraks__app'),
);

// ReactDOM.render(<App />, document.getElementById('abstraks__app'));

serviceWorker.unregister();
