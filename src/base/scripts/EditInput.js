import React from 'react';
import PropTypes from 'prop-types';

import EditInputName from './EditInputName';

const propTypes = {
  componentName: PropTypes.string,
};

const defaultProps = {
  componentName: 'edit-input',
};

const EditInput = props => {
  return (
    <li className={props.componentName}>
      <EditInputName isEditing={props.isEditing} />
      <button onClick={props.handleToggleEditing}>edit</button>
      <button>remove</button>
    </li>
  );
};

EditInput.propTypes = propTypes;
EditInput.defaultProps = defaultProps;

export default EditInput;
