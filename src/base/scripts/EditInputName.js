import React from 'react';
import PropTypes from 'prop-types';

const EditInputName = props => {
  if (props.isEditing) {
    return (
      <input
        className="edit-input-name_input input"
        type="text"
        value={props.children}
        onChange={props.handleNameEdits}
      />
    );
  }

  return <p className="paragraph edit-input-name_paragraph">{props.children}</p>;
};

EditInputName.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleNameEdits: PropTypes.func.isRequired,
};

export default EditInputName;
