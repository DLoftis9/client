import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  componentName: PropTypes.string,
};

const defaultProps = {
  componentName: 'edit',
};

const EditProfile = props => (
  <div className={props.componentName}>
    <div className="edit">
      <i className="fa fa-pencil" aria-hidden="true"></i>
      <p className="icon-text">Edit</p>
    </div>
  </div>
);

EditProfile.propTypes = propTypes;
EditProfile.defaultProps = defaultProps;

export default EditProfile;
