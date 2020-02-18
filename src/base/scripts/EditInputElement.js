import React from 'react';
import PropTypes from 'prop-types';

import EditInputList from './EditInputList';

const EditInputElement = props => (
  <div className="main">
    <EditInputList
      inputs={props.inputs}
      toggleEditing={props.toggleEditing}
      // setName={props.setName}
      removeInput={props.removeInput}
    />
  </div>
);

EditInputElement.propTypes = {
  inputs: PropTypes.array.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  // setName: PropTypes.func.isRequired,
  removeInput: PropTypes.func.isRequired,
};

export default EditInputElement;
