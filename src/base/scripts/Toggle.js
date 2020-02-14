import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  static propTypes = {
    componentName: PropTypes.string.isRequired,
    openContent: PropTypes.object.isRequired,
  };

  static defaultProps = {
    componentName: 'toggle',
  };

  render() {
    const { componentName, openContent } = this.props;
    return (
      <span className={componentName} onClick={this.handleClick}>
        {this.state.isToggleOn ? (
          <div className="closed">
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
        ) : (
          <div className="open">
            <i className="fa fa-chevron-up" aria-hidden="true">
              {openContent}
            </i>
          </div>
        )}
      </span>
    );
  }
}
