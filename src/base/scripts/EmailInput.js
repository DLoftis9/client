import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  emailErrorMessage: PropTypes.string,
};

const EmailInput = props => {
  let formControl = 'form-control';

  if (props.touched && !props.valid) {
    formControl = 'form-control control-error';
  }

  return (
    <div className="form-group form-group--email">
      <input type="email" name="email" className={formControl} {...props} />
      {/* <span className={formControl}>{props.emailErrorMessage}</span> */}
    </div>
  );
};

EmailInput.propTypes = propTypes;

export default EmailInput;
