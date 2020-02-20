import React from 'react';
import PropTypes from 'prop-types';

import SubjectList from './SubjectList';

const EditTextInputGroupMain = props => (
  <div className="main">
    <SubjectList
      subjects={props.subjects}
      toggleConfirmation={props.toggleConfirmation}
      toggleEditing={props.toggleEditing}
      setName={props.setName}
      removeSubject={props.removeSubject}
      // pendingGuest={props.pendingGuest}
    />
  </div>
);

EditTextInputGroupMain.propTypes = {
  subjects: PropTypes.array.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  removeSubject: PropTypes.func.isRequired,
  // pendingGuest: PropTypes.string.isRequired,
};

export default EditTextInputGroupMain;
