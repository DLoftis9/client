import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  componentName: PropTypes.string,
};

const defaultProps = {
  componentName: 'edit-input',
};

const EditInput = props => <li className={props.componentName}></li>;

EditInput.propTypes = propTypes;
EditInput.defaultProps = defaultProps;

export default EditInput;
