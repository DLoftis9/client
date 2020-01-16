import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  selectErrorMessage: PropTypes.string,
};

const SelectOption = props => {
  let formControl = 'form-control';

  if (props.touched && !props.valid) {
    formControl = 'form-control control-error';
  }

  return (
    <div className="form-group form-group--select">
      <select
        className={formControl}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      >
        {props.options.map(option => (
          <option value={option.value}>{option.displayValue}</option>
        ))}
      </select>
      {/* <span className={formControl}>{props.selectErrorMessage}</span> */}
    </div>
  );
};

SelectOption.propTypes = propTypes;

export default SelectOption;
