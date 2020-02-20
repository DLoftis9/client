import React from 'react';

const EditInputMessage = ({ messageClass, message }) => {
  return (
    <article className={`message ${messageClass}`}>
      <div className="error">{message}</div>
    </article>
  );
};

export default EditInputMessage;
