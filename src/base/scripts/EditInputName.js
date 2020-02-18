import React from 'react';
import PropTypes from 'prop-types';

const EditInputName = props => {
  if (props.isEditing) {
    return <input type="text" value={props.children} onChange={props.handleNameEdits} />;
  }

  return <span>{props.children}</span>;
};

EditInputName.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleNameEdits: PropTypes.func.isRequired,
};

export default EditInputName;
