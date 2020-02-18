import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  componentName: PropTypes.string,
  isEditing: PropTypes.bool.isRequired,
};

const defaultProps = {
  componentName: 'edit-input-name',
};

const EditInputName = props => {
  if (props.isEditing) {
    return (
      <input
        className={props.componentName}
        type="text"
        value={props.children}
        onChange={props.handleNameEdits}
      />
    );
  }

  return <span className="edit-input-name_span">{props.children}</span>;
};

EditInputName.propTypes = propTypes;
EditInputName.defaultProps = defaultProps;

export default EditInputName;
