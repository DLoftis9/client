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
  children: PropTypes.object.isRequired,
};

export default class MenuSlideIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    bodyContent: PropTypes.object.isRequired,
    componentName: PropTypes.string,
    extraClassName: PropTypes.string,
  };

  static defaultProps = {
    componentName: 'menu-slide-in',
  };

  handleClick() {
    this.setState({ toggleMenu: !this.state.toggleMenu });
  }

  render() {
    const { bodyContent, componentName, extraClassName } = this.props;
    let slideClass;
    this.state.toggleMenu ? (slideClass = 'slideInRight slide-menu') : (slideClass = 'slideInLeft');

    return (
      <div className={extraClassName + ` ` + componentName}>
        <button className="button menu-slide_button" type="button" onClick={this.handleClick}>
          <span className="open">
            <i className="open-icon fa fa-bars" aria-hidden="true"></i>
          </span>
        </button>
        <SlidingMenu slideClass={slideClass} onClick={this.handleClick}>
          {bodyContent}
        </SlidingMenu>
      </div>
    );
  }
}
