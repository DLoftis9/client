import React from 'react';
import PropTypes from 'prop-types';

const GuestName = props => {
  if (props.isEditing) {
    return (
      <input
        className="guest-name_input"
        type="text"
        value={props.children}
        onChange={props.handleNameEdits}
      />
    );
  }

  return <span className="guest-name_span">{props.children}</span>;
};

GuestName.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleNameEdits: PropTypes.func.isRequired,
};

export default GuestName;
