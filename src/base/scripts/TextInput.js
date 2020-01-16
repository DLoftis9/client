import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  textInputErrorMessage: PropTypes.string,
};

const TextInput = props => {
  let formControl = 'form-control';

  if (props.touched && !props.valid) {
    formControl = 'form-control control-error';
  }

  return (
    <div className="form-group form-group--textInput">
      <input type="text" className={formControl} {...props} />
      {/* <span className={formControl}>{props.textInputErrorMessage}</span> */}
    </div>
  );
};

TextInput.propTypes = propTypes;

export default TextInput;
