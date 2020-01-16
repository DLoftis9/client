import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  passwordErrorMessage: PropTypes.string,
};

const PasswordInput = props => {
  let formControl = 'form-control';

  if (props.touched && !props.valid) {
    formControl = 'form-control control-error';
  }

  return (
    <div className="form-group form-group--password">
      <input type="password" className={formControl} {...props} />
      {/* <span className={formControl}>{props.passwordErrorMessage}</span> */}
    </div>
  );
};

PasswordInput.propTypes = propTypes;

export default PasswordInput;
