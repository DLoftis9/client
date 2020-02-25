import React from 'react';

// Form used for UserSignUp and UserSignIn containers

// A function that renders any validation errors sent from the API,
// via the <ErrorsDisplay> function component. It also renders the
// "Submit" button of a form, as well as handling it's functionality,
// via the functions handleSubmit. Props are passed
// to this component – from a parent component like UserSignUp – to
// provide it the data it needs.

export default props => {
  const { errors, submit, submitButtonText, elements } = props;

  function handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  return (
    <div className="form">
      <form className="form-element" onSubmit={handleSubmit}>
        <div className="form-element_inputs">{elements()}</div>
        <ErrorsDisplay errors={errors} />
        <button className="button button-primary submit" type="submit">
          {submitButtonText}
        </button>
      </form>
    </div>
  );
};

function ErrorsDisplay({ errors }) {
  let errorsDisplay = null;

  if (errors.length) {
    errorsDisplay = (
      <div className="error form-error">
        <ul className="unordered-list">
          {errors.map((error, i) => (
            <li className="listItem" key={i}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return errorsDisplay;
}
