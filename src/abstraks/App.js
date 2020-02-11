import React from 'react';
import RouterContent from './containers/RouterContent';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import ScrollToTop from '../base/scripts/ScrollToTop';

export const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    {/* <ScrollToTop allows pages to be rendered at 
    the _top when a link is activated */}
    <ScrollToTop />
    <RouterContent />
  </Router>
);

export default App;
