import React from 'react';
import PropTypes from 'prop-types';

const SubjectInputForm = props => (
  <form className="subject-input-form" onSubmit={props.newGuestSubmitHandler}>
    <input
      className="input"
      type="text"
      onChange={props.handleNameInput}
      value={props.pendingSubject}
      placeholder="Start typing..."
    />
    <button className="button" type="submit" name="submit" value="submit">
      <p className="button_text">Add</p>
      <i className="fa fa-plus" aria-hidden="true"></i>
    </button>
  </form>
);

SubjectInputForm.propTypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  pendingSubject: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired,
};

/*
 ****
 ****
 ****
 */

const SubjectInputSubmit = props => (
  <div className="subject-input-submit">
    <SubjectInputForm
      newGuestSubmitHandler={props.newGuestSubmitHandler}
      pendingSubject={props.pendingSubject}
      handleNameInput={props.handleNameInput}
    />
  </div>
);

SubjectInputSubmit.propTypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  pendingSubject: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired,
  subjectHeader: PropTypes.string.isRequired,
  subjectParagraph: PropTypes.string.isRequired,
};

export default SubjectInputSubmit;
