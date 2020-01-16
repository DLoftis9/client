import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  textAreaErrorMessage: PropTypes.string,
};

const TextArea = props => {
  let formControl = 'form-control';

  if (props.touched && !props.valid) {
    formControl = 'form-control control-error';
  }

  return (
    <div className="form-group form-group--textArea">
      <textarea {...props} className={formControl} />
      {/* <span className={formControl}>{props.textAreaErrorMessage}</span> */}
    </div>
  );
};

TextArea.propTypes = propTypes;

export default TextArea;
