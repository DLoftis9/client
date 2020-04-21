import React from 'react';

// A function that renders any validation errors sent from the API,
// via the <ErrorDisplay> function component. Props are passed
// to this component – from a parent component like UserSignUp – to
// provide it the data it needs.
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

export default ErrorsDisplay;
