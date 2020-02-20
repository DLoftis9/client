import React from 'react';
import PropTypes from 'prop-types';

import SubjectInputForm from './SubjectInputForm';

const SubjectInputSubmit = props => (
  <div>
    <h1>Skills</h1>
    <p>Add a skill</p>
    <SubjectInputForm
      newGuestSubmitHandler={props.newGuestSubmitHandler}
      pendingGuest={props.pendingGuest}
      handleNameInput={props.handleNameInput}
    />
  </div>
);

SubjectInputSubmit.propTypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired,
};

export default SubjectInputSubmit;
