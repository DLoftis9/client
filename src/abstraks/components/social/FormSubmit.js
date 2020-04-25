import React from 'react';

// A function that renders the
// "Submit" button of a form, as well as handling it's functionality,
// via the functions handleSubmit. Props are passed
// to this component – from a parent component like UserSignUp – to
// provide it the data it needs.
export default props => {
  const { submit, submitButtonText, elements } = props;

  function handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  return (
    <div className="form">
      <form className="form-element" onSubmit={handleSubmit}>
        <div className="form-element_inputs">{elements()}</div>
        <button className="button button-primary submit" type="submit">
          {submitButtonText}
        </button>
      </form>
    </div>
  );
};
