import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SlidingMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={'sliding-menu animated ' + this.props.slideClass}>
        <button className="sliding-menu_button" type="button" onClick={this.props.onClick}>
          <i class="close-icon fa fa-close" aria-hidden="true"></i>
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
    this.setState({ toggleMenu: !this.state.toggleMenu });
  }

  render() {
    let slideClass;
    this.state.toggleMenu ? (slideClass = 'slideInRight slide-menu') : (slideClass = 'slideInLeft');

    return (
      <div className="menu-slide-in">
        <button className="button menu-slide_button" type="button" onClick={this.handleClick}>
          <span className="open">
            <i class="open-icon fa fa-bars" aria-hidden="true"></i>
          </span>
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
