import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SlidingMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={'sliding-menu animated ' + this.props.slideClass}>
        <button type="button" onClick={this.props.onClick}>
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
        {this.props.children}
      </div>
    );
  }
}

export default class MenuSlideIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.toggleMenu);
    this.setState({ toggleMenu: !this.state.toggleMenu });
  }

  render() {
    let slideClass;
    this.state.toggleMenu ? (slideClass = 'slideInLeft slide-menu') : (slideClass = 'slideInRight');

    return (
      <div className="menu-slide-in">
        <button className="button" type="button" onClick={this.handleClick}>
          <span className="open">Hamburger</span>
        </button>
        <SlidingMenu slideClass={slideClass} onClick={this.handleClick}>
          <span className="glyphicon glyphicon-home">Home</span>
          <span className="glyphicon glyphicon-cloud-download">Cloud</span>
          <span className="glyphicon glyphicon-trash">Trash</span>
          <span className="glyphicon glyphicon-upload">Upload</span>
        </SlidingMenu>
      </div>
    );
  }
}
