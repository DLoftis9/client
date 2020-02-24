import React from 'react';

const EditTextInputSingleMessage = ({ messageClass, header, message }) => {
  return (
    <article className={`message ${messageClass}`}>
      <div className="message-header">{header}</div>
      <div className="message-body">{message}</div>
    </article>
  );
};

export default EditTextInputSingleMessage;
