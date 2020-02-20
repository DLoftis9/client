import React from 'react';
import PropTypes from 'prop-types';

import GuestList from './GuestList';

const EditTextInputGroupMain = props => (
  <div className="main">
    <GuestList
      guests={props.guests}
      toggleConfirmation={props.toggleConfirmation}
      toggleEditing={props.toggleEditing}
      setName={props.setName}
      isFiltered={props.isFiltered}
      removeGuest={props.removeGuest}
      pendingGuest={props.pendingGuest}
    />
  </div>
);

EditTextInputGroupMain.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  removeGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
};

export default EditTextInputGroupMain;
