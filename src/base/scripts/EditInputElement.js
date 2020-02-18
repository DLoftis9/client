import React from 'react';
import PropTypes from 'prop-types';

import EditInputList from './EditInputList';

const propTypes = {
  inputs: PropTypes.array.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  // setName: PropTypes.func.isRequired,
  removeInput: PropTypes.func.isRequired,
};

const EditInputElement = props => (
  <div className="edit-input-element">
    <EditInputList
      inputs={props.inputs}
      toggleEditing={props.toggleEditing}
      // setName={props.setName}
      removeInput={props.removeInput}
    />
  </div>
);

EditInputElement.propTypes = propTypes;

export default EditInputElement;
