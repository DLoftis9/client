import React from 'react';
import PropTypes from 'prop-types';

import Subject from './Subject';

const SubjectList = props => (
  <ul>
    {props.subjects.map((guest, index) => (
      <Subject
        key={index}
        name={guest.name}
        isConfirmed={guest.isConfirmed}
        isEditing={guest.isEditing}
        handeToggleEditing={() => props.toggleEditing(guest.id)}
        setName={text => props.setName(text, guest.id)}
        handleRemove={() => props.removeSubject(guest.id)}
      />
    ))}
  </ul>
);

SubjectList.propTypes = {
  subjects: PropTypes.array.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  removeSubject: PropTypes.func.isRequired,
};

export default SubjectList;
