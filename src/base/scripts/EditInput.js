import React from 'react';
import PropTypes from 'prop-types';

import EditInputName from './EditInputName';

const EditInput = props => (
  <li>
    <label className="label">Subject</label>
    <EditInputName isEditing={props.isEditing} handleNameEdits={e => props.setName(e.target.value)}>
      {props.name}
    </EditInputName>

    <button onClick={props.handeToggleEditing}>{props.isEditing ? 'save' : 'edit'}</button>
    <button onClick={props.handleRemove}>remove</button>
  </li>
);

EditInput.propTypes = {
  name: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handeToggleEditing: PropTypes.func.isRequired,
  // setName: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default EditInput;
