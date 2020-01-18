import React from 'react';
import RouterContent from './containers/RouterContent';
import { BrowserRouter as Router } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const App = () => (
  <Router history={history}>
    <RouterContent />
  </Router>
);

export default App;
