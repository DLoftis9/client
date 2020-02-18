import React from 'react';
import PropTypes from 'prop-types';

import EditInput from './EditInput';
// import PendingGuest from './PendingGuest';

const EditInputList = props => (
  <ul>
    {props.guests.map((guest, index) => (
      <EditInput
        key={index}
        name={guest.name}
        isEditing={guest.isEditing}
        handeToggleEditing={() => props.toggleEditing(guest.id)}
        setName={text => props.setName(text, guest.id)}
        handleRemove={() => props.removeGuest(guest.id)}
      />
    ))}
  </ul>
);

EditInputList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  removeGuest: PropTypes.func.isRequired,
};

export default EditInputList;
