import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// const propTypes = {

// };

// const defaultProps = {

// };

const EditInputMessage = ({ messageClass, message }) => {
  return (
    <article className={`message ${messageClass}`}>
      <div className="error">{message}</div>
    </article>
  );
};

// EditInputMessage.propTypes = propTypes;
// EditInputMessage.defaultProps = defaultProps;

export default EditInputMessage;
