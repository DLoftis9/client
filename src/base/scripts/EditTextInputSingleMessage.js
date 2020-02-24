import React from 'react';

const EditTextInputSingleMessage = ({ messageClass, message }) => {
  return (
    <article className={`message ${messageClass}`}>
      <div className="message-body">{message}</div>
    </article>
  );
};

export default EditTextInputSingleMessage;
