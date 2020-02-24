import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EditTextInputGroupMain from './EditTextInputGroupSubs/EditTextInputGroupMain';
import SubjectInputSubmit from './EditTextInputGroupHead/SubjectInputSubmit';

export default class EditTextInputGroup extends Component {
  state = {
    subjects: [
      {
        name: 'Bio',
        isEditing: false,
      },
    ],
    pendingSubject: '',
  };

  lastSubjectId = 0;

  static propTypes = {
    containerName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    containerName: 'edit-text-input-group',
  };

  newSubjectId = () => {
    const id = this.lastSubjectId;
    this.lastSubjectId += 1;
    return id;
  };

  toggleSubjectProperty = (property, id) =>
    this.setState({
      subjects: this.state.subjects.map(guest => {
        if (id === guest.id) {
          return {
            ...guest,
            [property]: !guest[property],
          };
        }
        return guest;
      }),
    });

  removeSubject = id =>
    this.setState({
      subjects: this.state.subjects.filter(guest => id !== guest.id),
    });

  toggleEditing = id => this.toggleSubjectProperty('isEditing', id);

  setName = (name, id) =>
    this.setState({
      subjects: this.state.subjects.map(guest => {
        if (id === guest.id) {
          return {
            ...guest,
            name,
          };
        }
        return guest;
      }),
    });

  handleNameInput = e => this.setState({ pendingSubject: e.target.value });

  newSubjectSubmitHandler = e => {
    e.preventDefault();
    const id = this.newSubjectId();
    this.setState({
      subjects: [
        {
          name: this.state.pendingSubject,
          isConfirmed: false,
          isEditing: false,
          id,
        },
        ...this.state.subjects,
      ],
      pendingSubject: '',
    });
  };

  render() {
    const { containerName, title } = this.props;

    return (
      <div className={containerName}>
        <h3 className="title">{title}</h3>
        <SubjectInputSubmit
          newSubjectSubmitHandler={this.newSubjectSubmitHandler}
          pendingSubject={this.state.pendingSubject}
          handleNameInput={this.handleNameInput}
        />
        <EditTextInputGroupMain
          subjects={this.state.subjects}
          toggleEditing={this.toggleEditing}
          setName={this.setName}
          removeSubject={this.removeSubject}
          pendingSubject={this.state.pendingSubject}
        />
      </div>
    );
  }
}
