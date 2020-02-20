import React from 'react';
import PropTypes from 'prop-types';

import SubjectList from './SubjectList';

const propTypes = {
  subjects: PropTypes.array.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  removeSubject: PropTypes.func.isRequired,
  pendingSubject: PropTypes.string.isRequired,
  componentName: PropTypes.string,
};

const defaultProps = {
  componentName: 'edit-text-input-group-main',
};

const EditTextInputGroupMain = props => (
  <div className={props.componentName}>
    <SubjectList
      subjects={props.subjects}
      toggleConfirmation={props.toggleConfirmation}
      toggleEditing={props.toggleEditing}
      setName={props.setName}
      removeSubject={props.removeSubject}
      pendingSubject={props.pendingSubject}
    />
  </div>
);

EditTextInputGroupMain.propTypes = propTypes;
EditTextInputGroupMain.defaultProps = defaultProps;

export default EditTextInputGroupMain;
