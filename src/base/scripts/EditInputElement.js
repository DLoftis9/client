import React from 'react';
import PropTypes from 'prop-types';

// import ConfirmedFilter from "./ConfirmedFilter";
import EditInputList from './EditInputList';
// import Counter from "./Counter";

const EditInputElement = props => (
  <div className="main">
    <EditInputList
      guests={props.guests}
      toggleEditing={props.toggleEditing}
      // setName={props.setName}
      removeGuest={props.removeGuest}
    />
  </div>
);

EditInputElement.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  // setName: PropTypes.func.isRequired,
  removeGuest: PropTypes.func.isRequired,
};

export default EditInputElement;
