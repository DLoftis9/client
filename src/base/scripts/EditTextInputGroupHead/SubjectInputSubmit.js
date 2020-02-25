import React from 'react';
import PropTypes from 'prop-types';

const SubjectInputForm = props => (
  <form className="subject-input-form" onSubmit={props.newSubjectSubmitHandler}>
    <input
      className="input"
      type="text"
      onChange={props.handleNameInput}
      value={props.pendingSubject}
      placeholder="Start typing..."
    />
    <button className="button" type="submit" name="submit" value="submit">
      <p className="button_text">Add</p>
      <i className="edit-icon fa fa-plus" aria-hidden="true"></i>
    </button>
  </form>
);

SubjectInputForm.propTypes = {
  newSubjectSubmitHandler: PropTypes.func.isRequired,
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
      newSubjectSubmitHandler={props.newSubjectSubmitHandler}
      pendingSubject={props.pendingSubject}
      handleNameInput={props.handleNameInput}
    />
  </div>
);

SubjectInputSubmit.propTypes = {
  newSubjectSubmitHandler: PropTypes.func.isRequired,
  pendingSubject: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired,
};

export default SubjectInputSubmit;
