import React from 'react';
import PropTypes from 'prop-types';

const SubjectInputForm = props => (
  <form className="subject-input-form" onSubmit={props.newGuestSubmitHandler}>
    <input
      className="input"
      type="text"
      onChange={props.handleNameInput}
      value={props.pendingSubject}
      placeholder="Invite Someone"
    />
    <button className="button" type="submit" name="submit" value="submit">
      <p className="button_text">Add</p>
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>
  </form>
);

SubjectInputForm.propTypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  pendingSubject: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired,
};

const SubjectInputSubmit = props => (
  <div className="subject-input-submit">
    <h1 className="subject-input-submit_header">Skills</h1>
    <p className=" paragraph subject-input-submit_paragraph">Add a skill</p>
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
};

export default SubjectInputSubmit;
