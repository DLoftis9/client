import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  radioErrorMessage: PropTypes.string,
};

const RadioInput = props => {
  let formControl = 'form-control';

  if (props.touched && !props.valid) {
    formControl = 'form-control control-error';
  }

  return (
    <div className="form-group form-group--radio">
      {props.options.map(option => (
        <div className="form-group" key={option.value}>
          <label>{option.displayValue}</label>
          <input
            type="radio"
            name={props.name}
            value={option.value}
            onChange={props.onChange}
            className={formControl}
          />
          {/* <span className={formControl}>{props.radioErrorMessage}</span> */}
        </div>
      ))}
    </div>
  );
};

RadioInput.propTypes = propTypes;

export default RadioInput;
