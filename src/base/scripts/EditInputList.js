import React from 'react';
import PropTypes from 'prop-types';

import EditInput from './EditInput';

const EditInputList = props => (
  <ul>
    {props.inputs.map((input, index) => (
      <EditInput
        key={index}
        name={input.name}
        isEditing={input.isEditing}
        handeToggleEditing={() => props.toggleEditing(input.id)}
        // setName={text => props.setName(text, guest.id)}
        handleRemove={() => props.removeInput(input.id)}
      />
    ))}
  </ul>
);

EditInputList.propTypes = {
  inputs: PropTypes.array.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  //   setName: PropTypes.func.isRequired,
  removeInput: PropTypes.func.isRequired,
};

export default EditInputList;
