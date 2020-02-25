import React from 'react';
import PropTypes from 'prop-types';

const SubjectName = props => {
  if (props.isEditing) {
    return (
      <textarea
        className="input subject-name"
        type="text"
        value={props.children}
        onChange={props.handleNameEdits}
      />
    );
  }

  return <span className="subject-name_children">{props.children}</span>;
};

SubjectName.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleNameEdits: PropTypes.func.isRequired,
};

/*
 ****
 ****
 ****
 */

const Subject = props => (
  <li className="listItem subject">
    <SubjectName isEditing={props.isEditing} handleNameEdits={e => props.setName(e.target.value)}>
      {props.name}
    </SubjectName>
    <button className="button subject-button_edit" onClick={props.handleToggleEditing}>
      {props.isEditing ? (
        <div className="save">
          <span className="save_text">save</span>
          <i className="edit-icon fa fa-check" aria-hidden="true"></i>
        </div>
      ) : (
        <div className="edit">
          <span className="edit_text">edit</span>
          <i className="edit-icon fa fa-pencil-square-o" aria-hidden="true"></i>
        </div>
      )}
    </button>
    <button className="button subject-button_remove" onClick={props.handleRemove}>
      <p className="remove_text">remove</p>
      <i className="edit-icon fa fa-trash" aria-hidden="true"></i>
    </button>
  </li>
);

Subject.propTypes = {
  name: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

/*
 ****
 ****
 ****
 */

const SubjectList = props => (
  <ul className="subject-list">
    {props.subjects.map((subject, index) => (
      <Subject
        key={index}
        name={subject.name}
        isConfirmed={subject.isConfirmed}
        isEditing={subject.isEditing}
        handleToggleEditing={() => props.toggleEditing(subject.id)}
        setName={text => props.setName(text, subject.id)}
        handleRemove={() => props.removeSubject(subject.id)}
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
