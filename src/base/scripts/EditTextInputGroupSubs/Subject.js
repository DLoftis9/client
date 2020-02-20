import React from 'react';
import PropTypes from 'prop-types';

import SubjectName from './SubjectName';

const Subject = props => (
  <li>
    <SubjectName isEditing={props.isEditing} handleNameEdits={e => props.setName(e.target.value)}>
      {props.name}
    </SubjectName>
    <button onClick={props.handeToggleEditing}>{props.isEditing ? 'save' : 'edit'}</button>
    <button onClick={props.handleRemove}>remove</button>
  </li>
);

Subject.propTypes = {
  name: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handeToggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Subject;
