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
      setName={props.setName}
      isFiltered={props.isFiltered}
      removeGuest={props.removeGuest}
      pendingGuest={props.pendingGuest}
    />
  </div>
);

EditInputElement.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  guests: PropTypes.array.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  removeGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
};

export default EditInputElement;
