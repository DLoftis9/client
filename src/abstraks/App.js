import React, { Component } from 'react';
import RouterContent from './containers/RouterContent';
import { BrowserRouter as Router } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <RouterContent />
      </Router>
    );
  }
}
