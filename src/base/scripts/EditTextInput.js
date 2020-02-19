import React from 'react';
import PropTypes from 'prop-types';

export default class EditTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      value: 'Hello React',
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  static propTypes = {
    componentName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    componentName: 'toggle',
  };

  render() {
    const { componentName } = this.props;
    return (
      <span className={componentName} onClick={this.handleClick}>
        {this.state.isToggleOn ? (
          <div className="no-edit">
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
            <p className="input-value">
              The value of the input is: <span className="highlight">{this.state.value}</span>
            </p>
          </div>
        ) : (
          <div className="edit">
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
            <label className="label">Enter text here</label>
            <input
              className="input is-medium"
              type="text"
              id="input"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
        )}
      </span>
    );
  }
}
