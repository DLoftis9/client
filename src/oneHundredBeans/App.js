import React from 'react';
import RouterContainer from './containers/RouterContainer';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from '../base/scripts/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouterContainer />
    </BrowserRouter>
  );
}

export default App;
