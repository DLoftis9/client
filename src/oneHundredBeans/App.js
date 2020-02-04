import React, { Component } from 'react';
import Router from './containers/Router';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()}/>
      </BrowserRouter>
    );
  }
}
