import React from 'react';
import PropTypes from 'prop-types';

const SlidingMenu = props => (
  <div className={'sliding-menu animated ' + props.slideClass}>
    <button className="sliding-menu_button" type="button" onClick={props.onClick}>
      <i className="close-icon fa fa-close" aria-hidden="true"></i>
    </button>
    {props.children}
  </div>
);

SlidingMenu.propTypes = {
  slideClass: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
};

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
            <i className="open-icon fa fa-bars" aria-hidden="true"></i>
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
