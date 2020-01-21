import React from 'react';
import RouterContent from './containers/RouterContent';
import { Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <RouterContent />
  </Router>
);

export default App;
